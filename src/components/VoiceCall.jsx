import { useEffect, useRef, useState } from "react";
import { ConversationProvider, useConversation } from "@elevenlabs/react";
import { MicIcon, PhoneIcon, CloseIcon } from "./Icons";

export default function VoiceCall({ character, agentId, accent }) {
  if (!agentId) {
    return (
      <div className="call call--setup" style={{ "--accent": accent }}>
        <div className="call__status">
          <span className="dot" />
          Voice agent not linked yet
        </div>
        <button className="btn btn--primary btn--xl" disabled>
          <PhoneIcon />
          Connect with {character.name.split(" ")[0]}
        </button>
        <p className="call__hint">
          Create an ElevenLabs agent for <strong>{character.name}</strong>, then add its Agent ID to{" "}
          <code>src/data/agents.js</code> or set <code>VITE_ELEVENLABS_DEFAULT_AGENT_ID</code> in <code>.env</code>.
        </p>
      </div>
    );
  }

  return (
    <ConversationProvider agentId={agentId} connectionType="webrtc">
      <CallPanel character={character} accent={accent} />
    </ConversationProvider>
  );
}

function CallPanel({ character, accent }) {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const transcriptRef = useRef(null);

  const conversation = useConversation({
    onConnect: () => {
      setError(null);
      setSeconds(0);
    },
    onError: (message) => setError(message || "Connection error"),
    onMessage: ({ message, source, role }) => {
      const who = role === "user" || source === "user" ? "user" : "ai";
      if (message) setMessages((prev) => [...prev, { source: who, text: message }]);
    },
  });

  const { status, isSpeaking, startSession, endSession } = conversation;
  const connected = status === "connected";
  const connecting = status === "connecting";

  // call timer
  useEffect(() => {
    if (!connected) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [connected]);

  // keep transcript pinned to the latest line
  useEffect(() => {
    const el = transcriptRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  async function start() {
    setError(null);
    setMessages([]);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      setError("Microphone access is required. Allow the mic permission and try again.");
      return;
    }
    startSession();
  }

  const first = character.name.split(" ")[0];
  let statusText = "Ready when you are";
  if (connecting) statusText = "Dialing…";
  if (connected) statusText = isSpeaking ? `${first} is speaking` : "Listening to you";
  if (status === "error") statusText = "Call failed";

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className={`call ${connected ? "call--live" : ""}`} style={{ "--accent": accent }}>
      <div className="call__top">
        <div className="call__status">
          <span className={`dot dot--${status}`} />
          {statusText}
        </div>
        {connected && <span className="call__timer">{mm}:{ss}</span>}
      </div>

      {connected && <Visualizer conversation={conversation} isSpeaking={isSpeaking} />}

      {!connected ? (
        <button className="btn btn--primary btn--xl" onClick={start} disabled={connecting}>
          <PhoneIcon />
          {connecting ? "Connecting" : `Connect with ${first}`}
        </button>
      ) : (
        <button className="btn btn--danger btn--xl" onClick={() => endSession()}>
          <CloseIcon />
          End call
        </button>
      )}

      {error && <p className="call__error">{error}</p>}

      {!connected && !error && (
        <p className="call__hint">
          <MicIcon width={14} height={14} /> Uses your microphone. Speak naturally, interrupt whenever you like.
        </p>
      )}

      {messages.length > 0 && (
        <div className="transcript" ref={transcriptRef}>
          {messages.map((m, i) => (
            <div key={i} className={`bubble bubble--${m.source}`}>
              <span className="bubble__who">{m.source === "ai" ? first : "You"}</span>
              {m.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/** Live frequency bars driven by the agent's output (or your mic when the agent is quiet). */
function Visualizer({ conversation, isSpeaking }) {
  const canvasRef = useRef(null);
  const speakingRef = useRef(isSpeaking);
  speakingRef.current = isSpeaking;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const BARS = 36;
    let raf;

    const accent = getComputedStyle(canvas).getPropertyValue("--accent").trim() || "#e8b13a";

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      let data = null;
      try {
        data = speakingRef.current ? conversation.getOutputByteFrequencyData() : conversation.getInputByteFrequencyData();
      } catch {
        data = null;
      }

      ctx.clearRect(0, 0, w, h);
      const gap = 4;
      const bw = (w - gap * (BARS - 1)) / BARS;
      for (let i = 0; i < BARS; i++) {
        let v = 0;
        if (data && data.length) {
          const idx = Math.floor((i / BARS) * (data.length * 0.6));
          v = data[idx] / 255;
        }
        const bh = Math.max(3, v * h * 0.95);
        const x = i * (bw + gap);
        const y = (h - bh) / 2;
        ctx.fillStyle = speakingRef.current ? accent : "rgba(244,241,234,0.55)";
        ctx.beginPath();
        ctx.roundRect(x, y, bw, bh, bw / 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [conversation]);

  return <canvas ref={canvasRef} className="visualizer" aria-hidden="true" />;
}
