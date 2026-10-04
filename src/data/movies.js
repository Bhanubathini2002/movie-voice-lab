// Catalog: industries -> movies -> characters.
// `phone` is a display number (attach a real Twilio number to the ElevenLabs agent later).
// `agentId` is resolved from src/data/agents.js so you can fill in ElevenLabs agent IDs in one place.

export const industries = [
  {
    id: "tollywood",
    name: "Tollywood",
    tagline: "Telugu cinema. Mass, emotion, and larger-than-life heroes.",
    accent: "#f2a900",
    movies: [
      {
        id: "arjun-reddy",
        title: "Arjun Reddy",
        year: 2017,
        genres: ["Romance", "Drama"],
        blurb: "A brilliant, short-tempered surgeon spirals after losing the love of his life.",
        characters: [
          {
            id: "arjun",
            name: "Arjun Reddy",
            role: "Surgeon, hot-headed romantic",
            phone: "+1 (555) 010-1001",
            description:
              "Top of his class, zero patience. Arjun speaks bluntly, swears when he's angry, and softens only when Preethi comes up. Ask him about medicine, anger, or heartbreak and brace for honesty.",
            disclaimer:
              "Director Sandeep Reddy Vanga and actor Vijay Deverakonda have not agreed to clone the voice or the character. On this call you will only hear that notice; Arjun does not answer questions. Unofficial prototype, stock ElevenLabs voice, no clone of the actor.",
          },
          {
            id: "preethi",
            name: "Preethi Shetty",
            role: "Medical student, Arjun's love",
            phone: "+1 (555) 010-1002",
            description:
              "Quiet on the outside, stubborn on the inside. Preethi is gentle but will not be pushed around, not even by Arjun.",
          },
          {
            id: "shiva",
            name: "Shiva",
            role: "Arjun's best friend",
            phone: "+1 (555) 010-1003",
            description:
              "The loyal friend who cleans up every mess. Shiva is warm, funny, and the only person who can tell Arjun the truth.",
          },
        ],
      },
      {
        id: "baahubali",
        title: "Baahubali",
        year: 2015,
        genres: ["Epic", "Action"],
        blurb: "An epic of two brothers, a throne, and a betrayal that echoes across generations.",
        characters: [
          {
            id: "amarendra",
            name: "Amarendra Baahubali",
            role: "Rightful king of Mahishmati",
            phone: "+1 (555) 010-2001",
            description:
              "Noble, fearless, and loved by the people. Amarendra speaks with calm authority and always puts his kingdom before himself.",
          },
          {
            id: "bhallaladeva",
            name: "Bhallaladeva",
            role: "Usurper king",
            phone: "+1 (555) 010-2002",
            description:
              "Ambitious and ruthless. Bhallaladeva is proud of his strength and bitter about living in his brother's shadow.",
          },
          {
            id: "kattappa",
            name: "Kattappa",
            role: "Royal slave and warrior",
            phone: "+1 (555) 010-2003",
            description:
              "Bound by oath to the throne. Kattappa carries the heaviest secret in Mahishmati and speaks with the weight of duty.",
          },
          {
            id: "devasena",
            name: "Devasena",
            role: "Princess of Kuntala",
            phone: "+1 (555) 010-2004",
            description:
              "A warrior princess who bows to no one. Devasena is sharp-tongued, principled, and unbreakable.",
          },
        ],
      },
      {
        id: "rrr",
        title: "RRR",
        year: 2022,
        genres: ["Action", "Period"],
        blurb: "Two revolutionaries, one friendship, and the fire of a nation's freedom.",
        characters: [
          {
            id: "bheem",
            name: "Komaram Bheem",
            role: "Gond tribal protector",
            phone: "+1 (555) 010-3001",
            description:
              "Gentle giant with a heart of gold. Bheem talks about his people, the forest, and the little girl he swore to bring home.",
          },
          {
            id: "raju",
            name: "Alluri Sitarama Raju",
            role: "Police officer with a hidden mission",
            phone: "+1 (555) 010-3002",
            description:
              "Disciplined, strategic, and burning with a secret purpose. Raju measures every word.",
          },
          {
            id: "sita",
            name: "Sita",
            role: "Raju's fiancée",
            phone: "+1 (555) 010-3003",
            description: "Patient and proud. Sita waits in the village and keeps Raju's promise alive.",
          },
        ],
      },
      {
        id: "pushpa",
        title: "Pushpa: The Rise",
        year: 2021,
        genres: ["Action", "Crime"],
        blurb: "A coolie rises through the red sandalwood smuggling syndicate. Thaggedhe le.",
        characters: [
          {
            id: "pushpa-raj",
            name: "Pushpa Raj",
            role: "Red sandalwood smuggler",
            phone: "+1 (555) 010-4001",
            description:
              "Never backs down. Pushpa talks with swagger, a shoulder shrug you can hear, and a chip on his shoulder about his name.",
          },
          {
            id: "srivalli",
            name: "Srivalli",
            role: "Pushpa's love",
            phone: "+1 (555) 010-4002",
            description: "Playful and brave. Srivalli teases Pushpa and sees the man behind the bravado.",
          },
          {
            id: "shekhawat",
            name: "Bhanwar Singh Shekhawat",
            role: "Police officer",
            phone: "+1 (555) 010-4003",
            description:
              "Cold, arrogant, and obsessed with respect. Shekhawat enjoys humiliating people, until he meets Pushpa.",
          },
        ],
      },
    ],
  },
  {
    id: "bollywood",
    name: "Bollywood",
    tagline: "Hindi cinema. Songs, drama, and stories that stay with you.",
    accent: "#e63946",
    movies: [
      {
        id: "3-idiots",
        title: "3 Idiots",
        year: 2009,
        genres: ["Comedy", "Drama"],
        blurb: "Three engineering students question a system that values grades over learning.",
        characters: [
          {
            id: "rancho",
            name: "Rancho",
            role: "Free-thinking genius",
            phone: "+1 (555) 020-1001",
            description:
              "Curious about everything, scared of nothing. Rancho answers questions with questions and reminds you: all is well.",
          },
          {
            id: "virus",
            name: "Viru Sahastrabuddhe (Virus)",
            role: "College director",
            phone: "+1 (555) 020-1002",
            description:
              "Strict, competitive, and proud of his record. Virus believes life is a race and he is the referee.",
          },
          {
            id: "farhan",
            name: "Farhan Qureshi",
            role: "Reluctant engineer, aspiring photographer",
            phone: "+1 (555) 020-1003",
            description:
              "Kind-hearted and torn between his father's dream and his own. Farhan loves wildlife photography.",
          },
        ],
      },
      {
        id: "dangal",
        title: "Dangal",
        year: 2016,
        genres: ["Sports", "Biopic"],
        blurb: "A former wrestler trains his daughters to become world-class champions.",
        characters: [
          {
            id: "mahavir",
            name: "Mahavir Singh Phogat",
            role: "Wrestling coach and father",
            phone: "+1 (555) 020-2001",
            description:
              "Stern, stubborn, and secretly proud. Mahavir speaks in short commands and expects discipline.",
          },
          {
            id: "geeta",
            name: "Geeta Phogat",
            role: "Wrestler, Commonwealth gold medalist",
            phone: "+1 (555) 020-2002",
            description:
              "Fierce on the mat, grateful off it. Geeta talks about training, doubt, and the day she beat her father.",
          },
          {
            id: "babita",
            name: "Babita Kumari",
            role: "Wrestler, Geeta's sister",
            phone: "+1 (555) 020-2003",
            description:
              "Loyal and grounded. Babita keeps the family together and never forgets where they started.",
          },
        ],
      },
      {
        id: "sholay",
        title: "Sholay",
        year: 1975,
        genres: ["Western", "Action"],
        blurb: "Two outlaws are hired to capture a bandit who terrorises a village.",
        characters: [
          {
            id: "gabbar",
            name: "Gabbar Singh",
            role: "Dacoit leader",
            phone: "+1 (555) 020-3001",
            description:
              "Menacing and theatrical. Gabbar asks how many men there were and laughs at the answer.",
          },
          {
            id: "jai",
            name: "Jai",
            role: "Outlaw with a coin",
            phone: "+1 (555) 020-3002",
            description: "Calm, dry-witted, and loyal. Jai says little and means all of it.",
          },
          {
            id: "veeru",
            name: "Veeru",
            role: "Outlaw, hopeless romantic",
            phone: "+1 (555) 020-3003",
            description: "Loud, funny, and dramatic. Veeru will climb a water tank to make a point.",
          },
        ],
      },
      {
        id: "gully-boy",
        title: "Gully Boy",
        year: 2019,
        genres: ["Music", "Drama"],
        blurb: "A street rapper from Dharavi fights for his voice. Apna time aayega.",
        characters: [
          {
            id: "murad",
            name: "Murad",
            role: "Street rapper",
            phone: "+1 (555) 020-4001",
            description:
              "Shy in person, fearless on the mic. Murad writes about his life and refuses to shrink.",
          },
          {
            id: "mc-sher",
            name: "MC Sher",
            role: "Rapper and mentor",
            phone: "+1 (555) 020-4002",
            description: "Confident, generous, and real. Sher pushes Murad to own his words.",
          },
          {
            id: "safeena",
            name: "Safeena",
            role: "Medical student, Murad's girlfriend",
            phone: "+1 (555) 020-4003",
            description:
              "Fiery and protective. Safeena says exactly what she thinks and fights for what's hers.",
          },
        ],
      },
    ],
  },
  {
    id: "hollywood",
    name: "Hollywood",
    tagline: "American cinema. Blockbusters, legends, and iconic lines.",
    accent: "#4cc9f0",
    movies: [
      {
        id: "the-dark-knight",
        title: "The Dark Knight",
        year: 2008,
        genres: ["Action", "Thriller"],
        blurb: "Batman faces the Joker, an agent of chaos who wants to watch Gotham burn.",
        characters: [
          {
            id: "batman",
            name: "Bruce Wayne / Batman",
            role: "Vigilante of Gotham",
            phone: "+1 (555) 030-1001",
            description:
              "Gravel-voiced and guarded. Batman speaks in short, intense sentences about justice and sacrifice.",
          },
          {
            id: "joker",
            name: "The Joker",
            role: "Agent of chaos",
            phone: "+1 (555) 030-1002",
            description: "Unpredictable and darkly funny. The Joker loves a good question and hates a plan.",
          },
          {
            id: "alfred",
            name: "Alfred Pennyworth",
            role: "Butler and confidant",
            phone: "+1 (555) 030-1003",
            description:
              "Dry British wit, boundless loyalty. Alfred offers tea, advice, and the occasional hard truth.",
          },
        ],
      },
      {
        id: "iron-man",
        title: "Iron Man",
        year: 2008,
        genres: ["Sci-Fi", "Action"],
        blurb: "A billionaire weapons maker builds a suit of armor and becomes a hero.",
        characters: [
          {
            id: "tony-stark",
            name: "Tony Stark",
            role: "Genius, billionaire, Iron Man",
            phone: "+1 (555) 030-2001",
            description:
              "Fast-talking, sarcastic, brilliant. Tony flirts, deflects, and secretly cares a lot.",
          },
          {
            id: "pepper",
            name: "Pepper Potts",
            role: "Stark Industries CEO",
            phone: "+1 (555) 030-2002",
            description: "Organized, sharp, and unflappable. Pepper runs the company and Tony's life.",
          },
          {
            id: "rhodey",
            name: "James Rhodes",
            role: "Air Force officer, War Machine",
            phone: "+1 (555) 030-2003",
            description: "Steady and principled. Rhodey is the friend who tells Tony no and means it.",
          },
        ],
      },
      {
        id: "inception",
        title: "Inception",
        year: 2010,
        genres: ["Sci-Fi", "Heist"],
        blurb: "A thief who steals secrets from dreams is offered a chance to plant one instead.",
        characters: [
          {
            id: "cobb",
            name: "Dom Cobb",
            role: "Extractor",
            phone: "+1 (555) 030-3001",
            description:
              "Haunted and precise. Cobb explains dream architecture like a professor and dodges questions about Mal.",
          },
          {
            id: "arthur",
            name: "Arthur",
            role: "Point man",
            phone: "+1 (555) 030-3002",
            description:
              "Meticulous and dry. Arthur plans everything and is mildly annoyed when things get creative.",
          },
          {
            id: "ariadne",
            name: "Ariadne",
            role: "Architect",
            phone: "+1 (555) 030-3003",
            description: "Curious and quick. Ariadne asks the questions everyone else is afraid to.",
          },
        ],
      },
      {
        id: "the-godfather",
        title: "The Godfather",
        year: 1972,
        genres: ["Crime", "Drama"],
        blurb: "The aging patriarch of a crime dynasty hands control to his reluctant son.",
        characters: [
          {
            id: "vito",
            name: "Vito Corleone",
            role: "The Godfather",
            phone: "+1 (555) 030-4001",
            description:
              "Soft-spoken and immensely powerful. Vito talks about family, respect, and offers you can't refuse.",
          },
          {
            id: "michael",
            name: "Michael Corleone",
            role: "The reluctant heir",
            phone: "+1 (555) 030-4002",
            description: "Cold, calculating, and controlled. Michael never raises his voice and never forgets.",
          },
          {
            id: "tom-hagen",
            name: "Tom Hagen",
            role: "Consigliere",
            phone: "+1 (555) 030-4003",
            description:
              "Measured and lawyerly. Tom advises calm, negotiates hard, and keeps the family out of trouble.",
          },
        ],
      },
    ],
  },
];

export function findIndustry(industryId) {
  return industries.find((i) => i.id === industryId);
}

export function findMovie(industryId, movieId) {
  return findIndustry(industryId)?.movies.find((m) => m.id === movieId);
}

export function findCharacter(industryId, movieId, characterId) {
  return findMovie(industryId, movieId)?.characters.find((c) => c.id === characterId);
}
