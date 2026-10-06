#!/usr/bin/env node
/**
 * Creates (or refreshes) an ElevenLabs conversational agent for a character
 * and writes the resulting agent ID into src/data/agents.js.
 *
 * Usage:
 *   node scripts/create-agent.mjs agent/arjun-reddy.json            # design voice + create agent
 *   node scripts/create-agent.mjs agent/arjun-reddy.json --preview  # only generate voice previews to listen to
 *   ARJUN_VOICE_PICK=2 node scripts/create-agent.mjs agent/arjun-reddy.json   # choose preview #2 (0-based)
 *   ELEVENLABS_VOICE_ID=xxxx node scripts/create-agent.mjs agent/arjun-reddy.json  # skip design, use this voice
 *
 * Needs ELEVENLABS_API_KEY in .env (not VITE_ prefixed, so it never reaches the browser).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const API = "https://api.elevenlabs.io";

// ---------- tiny .env loader (no dependency) ----------
for (const file of [".env", ".env.local"]) {
  const p = path.join(root, file);
  if (!fs.existsSync(p)) continue;
  for (const line of fs.readFileSync(p, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!m || line.trim().startsWith("#")) continue;
    let v = m[2];
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    if (!(m[1] in process.env)) process.env[m[1]] = v;
  }
}

const apiKey = process.env.ELEVENLABS_API_KEY;
if (!apiKey) {
  console.error("Missing ELEVENLABS_API_KEY. Add it to .env (see .env.example).");
  process.exit(1);
}

const configPath = process.argv[2];
const previewOnly = process.argv.includes("--preview");
if (!configPath) {
  console.error("Usage: node scripts/create-agent.mjs agent/<character>.json [--preview]");
  process.exit(1);
}

const cfg = JSON.parse(fs.readFileSync(path.resolve(root, configPath), "utf8"));
const promptPath = path.resolve(root, path.dirname(configPath), cfg.promptFile);
const systemPrompt = fs.readFileSync(promptPath, "utf8").trim();

const headers = { "xi-api-key": apiKey, "Content-Type": "application/json" };

async function call(method, url, body) {
  const res = await fetch(API + url, { method, headers, body: body ? JSON.stringify(body) : undefined });
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    json = { raw: text };
  }
  if (!res.ok) {
    throw new Error(`${method} ${url} -> ${res.status}\n${JSON.stringify(json, null, 2)}`);
  }
  return json;
}

// ---------- 1. Voice ----------
async function resolveVoiceId() {
  if (process.env.ELEVENLABS_VOICE_ID) {
    console.log(`Using existing voice ${process.env.ELEVENLABS_VOICE_ID}`);
    return process.env.ELEVENLABS_VOICE_ID;
  }
  if (cfg.voiceId) {
    console.log(`Using voice from config ${cfg.voiceId}`);
    return cfg.voiceId;
  }

  console.log("Designing voice from description…");
  const design = await call("POST", "/v1/text-to-voice/design", {
    voice_description: cfg.voice.description,
    text: cfg.voice.previewText,
    model_id: cfg.voice.model || "eleven_multilingual_ttv_v2",
    guidance_scale: cfg.voice.guidanceScale ?? 5,
    loudness: cfg.voice.loudness ?? 0.5,
    ...(cfg.voice.seed != null ? { seed: cfg.voice.seed } : {}),
  });

  const previewDir = path.resolve(root, "agent", "previews");
  fs.mkdirSync(previewDir, { recursive: true });
  design.previews.forEach((p, i) => {
    const ext = (p.media_type || "audio/mpeg").includes("wav") ? "wav" : "mp3";
    const file = path.join(previewDir, `${cfg.slug}-${i}.${ext}`);
    fs.writeFileSync(file, Buffer.from(p.audio_base_64, "base64"));
    console.log(`  preview ${i}: ${path.relative(root, file)}  (${Math.round(p.duration_secs)}s)  id=${p.generated_voice_id}`);
  });

  if (previewOnly) {
    console.log("\nListen to the previews above, then rerun with ARJUN_VOICE_PICK=<index> (default 0).");
    process.exit(0);
  }

  const pick = Number(process.env[`${cfg.slug.toUpperCase().replace(/-/g, "_")}_VOICE_PICK`] ?? process.env.VOICE_PICK ?? 0);
  const chosen = design.previews[pick] || design.previews[0];
  console.log(`Saving preview ${pick} as voice "${cfg.voice.name}"…`);
  const saved = await call("POST", "/v1/text-to-voice", {
    voice_name: cfg.voice.name,
    voice_description: cfg.voice.description,
    generated_voice_id: chosen.generated_voice_id,
    labels: cfg.voice.labels || {},
  });
  console.log(`  voice_id = ${saved.voice_id}`);
  return saved.voice_id;
}

// ---------- 2. Agent ----------
async function createAgent(voiceId) {
  console.log(`Creating agent "${cfg.agent.name}"…`);
  const body = {
    name: cfg.agent.name,
    conversation_config: {
      agent: {
        first_message: cfg.agent.firstMessage,
        language: cfg.agent.language || "en",
        prompt: {
          prompt: systemPrompt,
          llm: cfg.agent.llm || "gpt-4o",
          temperature: cfg.agent.temperature ?? 0.7,
        },
        ...(cfg.dynamicVariables
          ? { dynamic_variables: { dynamic_variable_placeholders: cfg.dynamicVariables } }
          : {}),
      },
      tts: {
        model_id: cfg.agent.ttsModel || "eleven_flash_v2_5",
        voice_id: voiceId,
        stability: cfg.agent.stability ?? 0.4,
        similarity_boost: cfg.agent.similarity ?? 0.8,
        speed: cfg.agent.speed ?? 1.0,
      },
      turn: { turn_timeout: cfg.agent.turnTimeout ?? 8 },
    },
    platform_settings: {
      auth: { enable_auth: false }, // public agent so the browser can connect with just the agent ID
    },
  };
  const res = await call("POST", "/v1/convai/agents/create", body);
  console.log(`  agent_id = ${res.agent_id}`);
  return res.agent_id;
}

// ---------- 3. Wire into the site ----------
function writeAgentId(agentId) {
  const file = path.join(root, "src", "data", "agents.js");
  let src = fs.readFileSync(file, "utf8");
  if (cfg.exportName) {
    // Shared agent: update `export const <exportName> = "...";`
    const re = new RegExp(`^export const ${cfg.exportName} = .*$`, "m");
    const line = `export const ${cfg.exportName} = "${agentId}";`;
    src = re.test(src) ? src.replace(re, line) : src + `\n${line}\n`;
    fs.writeFileSync(file, src);
    console.log(`  wrote ${cfg.exportName} into src/data/agents.js`);
    return;
  }
  const key = cfg.routeKey;
  const line = `  "${key}": "${agentId}",`;
  const re = new RegExp(`^\s*"${key.replace(/[.*+?^${}()|[\]\/]/g, "\$&")}":.*$`, "m");
  if (re.test(src)) {
    src = src.replace(re, line);
  } else {
    src = src.replace(/export const agentIds = \{\n/, `export const agentIds = {\n${line}\n`);
  }
  fs.writeFileSync(file, src);
  console.log(`  wrote ${key} into src/data/agents.js`);
}

const voiceId = await resolveVoiceId();
const agentId = await createAgent(voiceId);
writeAgentId(agentId);
fs.writeFileSync(
  path.resolve(root, "agent", `${cfg.slug}.out.json`),
  JSON.stringify({ voiceId, agentId, createdAt: new Date().toISOString() }, null, 2)
);
console.log(`\nDone. Open http://localhost:5173/${cfg.routeKey} and press Connect.`);
console.log(`Dashboard: https://elevenlabs.io/app/agents/${agentId}`);
