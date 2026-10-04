// Map each character to an ElevenLabs Conversational AI agent ID.
// Key format: "<industryId>/<movieId>/<characterId>"  (same as the URL path).
// Create agents at https://elevenlabs.io/app/agents, copy the Agent ID, paste here.
// Any character without an entry falls back to VITE_ELEVENLABS_DEFAULT_AGENT_ID from .env.

export const agentIds = {
  "tollywood/arjun-reddy/arjun": "agent_3601m44ghv0vffct34jyyr85kkye",
  // "tollywood/baahubali/amarendra": "agent_xxxxxxxxxxxxxxxxxxxxxxxx",
  // "hollywood/the-dark-knight/joker": "agent_xxxxxxxxxxxxxxxxxxxxxxxx",
};

export function resolveAgentId(industryId, movieId, characterId) {
  const key = `${industryId}/${movieId}/${characterId}`;
  return agentIds[key] || import.meta.env.VITE_ELEVENLABS_DEFAULT_AGENT_ID || null;
}
