# Movie Voice Lab

Browse Tollywood, Kollywood, Bollywood and Hollywood films, open a character, and call them through an
ElevenLabs voice agent. Built with React, Vite, React Router, Framer Motion and `@elevenlabs/react`.

## Permission first

No character is voiced until the people who own it say yes. Every film in `src/data/movies.js` lists its
`director` (and `studio` where relevant) and every character lists the `actor` who played the part. Until
they give permission:

- the character page shows a **Permission pending** note naming those people, and
- the Connect button reaches one shared **permission-notice agent** that only says, in the caller's ear,
  that the director, studio and actor have not yet given permission to clone that character, and then
  politely refuses to roleplay.

The shared agent is created once with:

```bash
npm run agent:notice
```

It writes `noticeAgentId` into `src/data/agents.js`. The site passes `character_name`, `movie_title` and
`rights_holders` to it as ElevenLabs dynamic variables at call start, so one agent covers every character.
Arjun Reddy keeps his own agent (below), which carries the same notice for Sandeep Reddy Vanga and
Vijay Deverakonda.

The Kollywood section lists eight Tamil films from actor Rajaji's filmography (Ko, Moodar Koodam, Sathuran,
Engitta Modhathey, Kolanji, Koorman, Tik Tok, Once Upon a Time in Madras). Each one names the director,
production house and cast who would need to approve a voice before it goes live.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Arjun Reddy: one command to create his agent

Arjun has a complete persona in `agent/arjun-reddy.prompt.md` and settings in `agent/arjun-reddy.json`.

1. Get an API key from https://elevenlabs.io/app/settings/api-keys and put it in `.env`:

   ```
   ELEVENLABS_API_KEY=sk_...
   ```

2. Create the agent and wire the ID into the site:

   ```bash
   npm run agent:arjun
   ```

   The script creates a public conversational agent with the persona prompt, using the voice in
   `agent/arjun-reddy.json` (`voiceId`), and writes the agent ID into `src/data/agents.js`.
   Restart `npm run dev` if it was running, open Arjun's page, and press Connect.

3. Voice options. Three Voice Library voices were added to the account; sample clips of Arjun's
   line in each are in `agent/previews/`:

   | Key | Voice | Character |
   |-----|-------|-----------|
   | A (default) | Abhi - Authentic Telugu Male | Genuine Telugu accent |
   | B | Vikram S - Deep, Gripping & Calm | Young, deep, quietly menacing |
   | C | Viraj - Deep, Resonant and Lyrical | Young, deep, smoother |

   To switch, change `voiceId` in `agent/arjun-reddy.json` (IDs are under `voiceOptions`) and
   rerun `npm run agent:arjun`, or edit the voice in the ElevenLabs dashboard.

   On a paid plan, remove `voiceId` and the script will instead design a custom voice from the
   text description with `npm run agent:arjun:preview` and `ARJUN_REDDY_VOICE_PICK=<n> npm run agent:arjun`.

The voice is a designed voice, not a clone of the actor. ElevenLabs does not allow cloning a real
person without their consent, and this project does not attempt it.

## Connect other characters to ElevenLabs agents

1. Go to https://elevenlabs.io/app/agents and create an agent for a character.
   Put the character's personality in the system prompt and pick a matching voice.
2. In the agent's **Security** tab enable public access (or see "Private agents" below).
3. Copy the **Agent ID** (starts with `agent_`).
4. Paste it into `src/data/agents.js`. The key is the character page's URL path:

   ```js
   export const agentIds = {
     "tollywood/arjun-reddy/arjun": "agent_xxxxxxxx",
   };
   ```

5. Optional: set `VITE_ELEVENLABS_DEFAULT_AGENT_ID` in `.env` as a fallback for every character
   that has no entry yet. Restart `npm run dev` after editing `.env`.

Once an ID is set, the character page shows a **Connect** button. The browser asks for microphone
permission, opens a WebRTC voice session, shows a live audio visualizer and call timer, and prints
the transcript under the button.

## Artwork

All images live in `public/art`:

- `posters/<movie-id>.webp` for films (2:3)
- `banners/<industry-id>.webp` and `banners/hero.webp` for wide backgrounds

Characters deliberately use a letter monogram tile instead of a portrait. Drop in your own poster
or banner images with the same names to replace any of them. If a file is missing, the UI renders
a tinted monogram tile instead of a broken image.

## Phone numbers

Each character has a display phone number in `src/data/movies.js`. Those are placeholders. If you
attach a Twilio number to an ElevenLabs agent, replace the placeholder and the "Direct line" link
will dial it.

## Private agents

If an agent is not public, the browser needs a short-lived credential from a server you control.
Add a tiny backend endpoint that calls the ElevenLabs API with your API key to fetch a conversation
token, then pass `conversationToken` to `ConversationProvider` instead of `agentId`. See
https://elevenlabs.io/docs/agents-platform/libraries/react for the token flow.

## Project layout

- `src/data/movies.js` – industries, films, characters, phone numbers, descriptions
- `src/data/agents.js` – character → ElevenLabs agent ID map, plus the shared `noticeAgentId`
- `src/data/rights.js` – who has to give permission for each character, and the notice text built from it
- `src/data/art.js` – artwork path helpers
- `src/components/` – Nav, Footer, Layout (page transitions), Cards, Artwork, VoiceCall, Icons, Motion
- `src/pages/` – Home, Industry, Movie, Character, NotFound
- `src/index.css` – design tokens, typography, components, responsive rules
