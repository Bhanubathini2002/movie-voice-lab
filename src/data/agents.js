// Map each character to an ElevenLabs Conversational AI agent ID.
// Key format: "<industryId>/<movieId>/<characterId>"  (same as the URL path).
// Create agents at https://elevenlabs.io/app/agents, copy the Agent ID, paste here.
//
// Any character without an entry falls back to the shared permission-notice agent below
// (created with `npm run agent:notice`). That agent never roleplays: it only tells the caller
// that the director, studio and actor have not yet given permission, using the character's
// name and rights holders passed in as dynamic variables at call start.

export const agentIds = {
  "tollywood/arjun-reddy/arjun": "agent_3601m44ghv0vffct34jyyr85kkye",
  // "tollywood/baahubali/amarendra": "agent_xxxxxxxxxxxxxxxxxxxxxxxx",
  // "hollywood/the-dark-knight/joker": "agent_xxxxxxxxxxxxxxxxxxxxxxxx",
};

export const noticeAgentId = "agent_2701m47bsnrdf34b2cqp6p4wd46z";

export function resolveAgentId(industryId, movieId, characterId) {
  const key = `${industryId}/${movieId}/${characterId}`;
  return agentIds[key] || import.meta.env.VITE_ELEVENLABS_DEFAULT_AGENT_ID || noticeAgentId || null;
}

/** True when the character has no agent of its own and will reach the shared notice line. */
export function usesNoticeAgent(industryId, movieId, characterId) {
  return resolveAgentId(industryId, movieId, characterId) === noticeAgentId;
}
