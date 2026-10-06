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
        director: "Sandeep Reddy Vanga",
        genres: ["Romance", "Drama"],
        blurb: "A brilliant, short-tempered surgeon spirals after losing the love of his life.",
        characters: [
          {
            id: "arjun",
            name: "Arjun Reddy",
            actor: "Vijay Deverakonda",
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
            actor: "Shalini Pandey",
            role: "Medical student, Arjun's love",
            phone: "+1 (555) 010-1002",
            description:
              "Quiet on the outside, stubborn on the inside. Preethi is gentle but will not be pushed around, not even by Arjun.",
          },
          {
            id: "shiva",
            name: "Shiva",
            actor: "Rahul Ramakrishna",
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
        director: "S. S. Rajamouli",
        genres: ["Epic", "Action"],
        blurb: "An epic of two brothers, a throne, and a betrayal that echoes across generations.",
        characters: [
          {
            id: "amarendra",
            name: "Amarendra Baahubali",
            actor: "Prabhas",
            role: "Rightful king of Mahishmati",
            phone: "+1 (555) 010-2001",
            description:
              "Noble, fearless, and loved by the people. Amarendra speaks with calm authority and always puts his kingdom before himself.",
          },
          {
            id: "bhallaladeva",
            name: "Bhallaladeva",
            actor: "Rana Daggubati",
            role: "Usurper king",
            phone: "+1 (555) 010-2002",
            description:
              "Ambitious and ruthless. Bhallaladeva is proud of his strength and bitter about living in his brother's shadow.",
          },
          {
            id: "kattappa",
            name: "Kattappa",
            actor: "Sathyaraj",
            role: "Royal slave and warrior",
            phone: "+1 (555) 010-2003",
            description:
              "Bound by oath to the throne. Kattappa carries the heaviest secret in Mahishmati and speaks with the weight of duty.",
          },
          {
            id: "devasena",
            name: "Devasena",
            actor: "Anushka Shetty",
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
        director: "S. S. Rajamouli",
        genres: ["Action", "Period"],
        blurb: "Two revolutionaries, one friendship, and the fire of a nation's freedom.",
        characters: [
          {
            id: "bheem",
            name: "Komaram Bheem",
            actor: "N. T. Rama Rao Jr.",
            role: "Gond tribal protector",
            phone: "+1 (555) 010-3001",
            description:
              "Gentle giant with a heart of gold. Bheem talks about his people, the forest, and the little girl he swore to bring home.",
          },
          {
            id: "raju",
            name: "Alluri Sitarama Raju",
            actor: "Ram Charan",
            role: "Police officer with a hidden mission",
            phone: "+1 (555) 010-3002",
            description:
              "Disciplined, strategic, and burning with a secret purpose. Raju measures every word.",
          },
          {
            id: "sita",
            name: "Sita",
            actor: "Alia Bhatt",
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
        director: "Sukumar",
        genres: ["Action", "Crime"],
        blurb: "A coolie rises through the red sandalwood smuggling syndicate. Thaggedhe le.",
        characters: [
          {
            id: "pushpa-raj",
            name: "Pushpa Raj",
            actor: "Allu Arjun",
            role: "Red sandalwood smuggler",
            phone: "+1 (555) 010-4001",
            description:
              "Never backs down. Pushpa talks with swagger, a shoulder shrug you can hear, and a chip on his shoulder about his name.",
          },
          {
            id: "srivalli",
            name: "Srivalli",
            actor: "Rashmika Mandanna",
            role: "Pushpa's love",
            phone: "+1 (555) 010-4002",
            description: "Playful and brave. Srivalli teases Pushpa and sees the man behind the bravado.",
          },
          {
            id: "shekhawat",
            name: "Bhanwar Singh Shekhawat",
            actor: "Fahadh Faasil",
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
    id: "kollywood",
    name: "Kollywood",
    tagline: "Tamil cinema. Grit, heart, and stories from the streets of Madras.",
    accent: "#2ec4b6",
    notice:
      "Every film here is listed with the people who would have to approve a voice: the director, the production house and the actors. None of them have given permission yet, so each line plays a notice instead of a roleplay.",
    movies: [
      {
        id: "ko",
        title: "Ko",
        year: 2011,
        director: "K. V. Anand",
        studio: "RS Infotainment",
        genres: ["Political thriller", "Action"],
        blurb:
          "A photojournalist covering the state election discovers that a charismatic young candidate staged a bombing to win sympathy.",
        characters: [
          {
            id: "ashwin",
            name: "Ashwin Kumar",
            actor: "Jiiva",
            role: "Photojournalist, Dina Anjal",
            phone: "+1 (555) 040-1001",
            description:
              "Camera always ready, instincts always on. Ashwin chases the picture nobody else dares to take, and it leads him straight into a conspiracy.",
          },
          {
            id: "renu",
            name: "Renuka Narayanan",
            actor: "Karthika Nair",
            role: "Editor, Dina Anjal",
            phone: "+1 (555) 040-1002",
            description:
              "Sharp, principled and unimpressed by charm. Renu edits the stories, questions the sources, and keeps Ashwin honest.",
          },
          {
            id: "vasanthan",
            name: "Vasanthan Perumal",
            actor: "Ajmal Ameer",
            role: "Student leader turned candidate",
            phone: "+1 (555) 040-1003",
            description:
              "The fresh face of change, or so the posters say. Vasanthan speaks like a reformer and hides what it cost to get here.",
          },
          {
            id: "rajaj",
            name: "Dina Anjal Staffer",
            actor: "Rajaji",
            role: "Newsroom employee",
            phone: "+1 (555) 040-1004",
            description:
              "The newsroom runs on people like him. He knows which desk has the story, which phone is ringing, and who in the building is lying.",
          },
        ],
      },
      {
        id: "moodar-koodam",
        title: "Moodar Koodam",
        year: 2013,
        director: "Naveen",
        studio: "White Shadows Productions",
        genres: ["Black comedy", "Crime"],
        blurb:
          "Four broke men burgle a treacherous uncle's mansion, find the family at home, and end up holding them hostage.",
        characters: [
          {
            id: "white",
            name: "Vellaichami (White)",
            actor: "Rajaji",
            role: "One of the four thieves",
            phone: "+1 (555) 040-2001",
            description:
              "Broke, bitter and carrying a grudge against his own uncle. White supplies the motive, the floor plan, and most of the bad ideas.",
          },
          {
            id: "naveen",
            name: "Naveen",
            actor: "Naveen",
            role: "Thief and reluctant planner",
            phone: "+1 (555) 040-2002",
            description:
              "The one who thinks he is in charge. Naveen talks fast, plans faster, and watches every plan fall apart in real time.",
          },
          {
            id: "kapuli",
            name: "Karpagavalli (Kapuli)",
            actor: "Oviya",
            role: "Bhaktavatsalam's daughter, hostage",
            phone: "+1 (555) 040-2003",
            description:
              "Taken hostage in her own house and somehow the calmest person in it. Kapuli is quick, funny, and not afraid of four clueless thieves.",
          },
          {
            id: "bhaktavatsalam",
            name: "Bhaktavatsalam",
            actor: "Jayaprakash",
            role: "The uncle whose mansion is robbed",
            phone: "+1 (555) 040-2004",
            description:
              "Rich, slippery and proud of it. Bhaktavatsalam treats everyone as a deal to be won, including his own nephew.",
          },
        ],
      },
      {
        id: "sathuran",
        title: "Sathuran",
        year: 2015,
        director: "Rajeev Prasad",
        studio: "Kuberan Cinemas",
        genres: ["Action thriller", "Crime"],
        blurb:
          "An auto driver becomes the prime suspect in a string of murders carried out over 24 hours and must clear his name.",
        characters: [
          {
            id: "dheena",
            name: "Dheena",
            actor: "Rajaji",
            role: "Auto-rickshaw driver, accidental suspect",
            phone: "+1 (555) 040-3001",
            description:
              "An ordinary, likeable auto driver with a one-sided crush and a bad day. Dheena is funny until he is framed, then he gets resourceful fast.",
          },
          {
            id: "janani",
            name: "Janani",
            actor: "Varsha Bollamma",
            role: "The woman Dheena keeps chasing",
            phone: "+1 (555) 040-3002",
            description:
              "Patient up to a point. Janani has heard every line Dheena has, and she has a few of her own.",
          },
          {
            id: "kumar",
            name: "Kumar",
            actor: "Kaali Venkat",
            role: "Dheena's friend",
            phone: "+1 (555) 040-3003",
            description:
              "The friend who is always there, usually with a snack and a worse idea. Kumar jokes through the panic.",
          },
          {
            id: "pasupathi",
            name: "Inspector Pasupathi",
            actor: "Raju Easwaran",
            role: "Police inspector on the case",
            phone: "+1 (555) 040-3004",
            description:
              "Tired, methodical, and sure he has his man. Pasupathi follows the evidence, even when the evidence is wrong.",
          },
        ],
      },
      {
        id: "engitta-modhathey",
        title: "Engitta Modhathey",
        year: 2017,
        director: "Ramu Chellappa",
        studio: "Eros International",
        genres: ["Period drama", "Action"],
        blurb:
          "Tirunelveli, 1988. Two friends run rival Rajinikanth and Kamal Haasan fan clubs until local politicians turn their fandom into a war.",
        characters: [
          {
            id: "nallaperumal",
            name: "Nallaperumal",
            actor: "Rajaji",
            role: "Kamal Haasan fan-club leader",
            phone: "+1 (555) 040-4001",
            description:
              "The softer, romantic half of the friendship. Nallaperumal quotes Kamal films, falls in love easily, and finds out how far loyalty stretches.",
          },
          {
            id: "ravi",
            name: "Ravi",
            actor: "Natty",
            role: "Rajinikanth fan-club leader, cut-out artist",
            phone: "+1 (555) 040-4002",
            description:
              "Swagger first, questions later. Ravi paints the giant cut-outs, leads the first-day-first-show crowd, and never backs down from a dare.",
          },
          {
            id: "maragadham",
            name: "Maragadham",
            actor: "Sanchita Shetty",
            role: "Village belle, Rajini fan",
            phone: "+1 (555) 040-4003",
            description:
              "Loud about her favourite star and quiet about her feelings. Maragadham holds her own in a town full of fan boys.",
          },
          {
            id: "mandhramoorthy",
            name: "Mandhramoorthy",
            actor: "Radha Ravi",
            role: "Local politician",
            phone: "+1 (555) 040-4004",
            description:
              "Smiles for the crowd, schemes for the vote. Mandhramoorthy sees two fan clubs and thinks of one election.",
          },
        ],
      },
      {
        id: "kolanji",
        title: "Kolanji",
        year: 2019,
        director: "Dhanaram Saravanan",
        studio: "White Shadows Productions",
        genres: ["Comedy drama", "Family"],
        blurb:
          "A mischievous village boy, his strict father, and the easy-going uncle who is his refuge from both.",
        characters: [
          {
            id: "gemini",
            name: "Gemini",
            actor: "Rajaji",
            role: "Kolanji's uncle",
            phone: "+1 (555) 040-5001",
            description:
              "The fun uncle. Gemini covers for Kolanji, coaches him on his crush, and is the one grown-up the boy actually listens to.",
          },
          {
            id: "kolanji",
            name: "Kolanji",
            actor: "Kirubakaran",
            role: "Unruly village boy",
            phone: "+1 (555) 040-5002",
            description:
              "Into everything, scared of nothing except his father. Kolanji has a prank for every afternoon and an excuse for every evening.",
          },
          {
            id: "appasamy",
            name: "Appasamy",
            actor: "Samuthirakani",
            role: "Kolanji's strict father",
            phone: "+1 (555) 040-5003",
            description:
              "Hard words, harder rules. Appasamy believes discipline is love and takes a long time to say it any other way.",
          },
          {
            id: "poongoodi",
            name: "Poongoodi",
            actor: "Naina Sarwar",
            role: "Kolanji's cousin",
            phone: "+1 (555) 040-5004",
            description:
              "Two steps ahead of Kolanji and happy to let him think otherwise. Poongoodi is teasing, warm, and nobody's fool.",
          },
        ],
      },
      {
        id: "koorman",
        title: "Koorman",
        year: 2022,
        director: "Bryan B. George",
        studio: "MK Entertainment",
        genres: ["Psychological thriller", "Action"],
        blurb:
          "A traumatised ex-cop who reads minds is pulled out of thirteen years of seclusion to solve one more case.",
        characters: [
          {
            id: "dhana",
            name: "Dhana",
            actor: "Rajaji",
            role: "Dhanasekaran, ex-policeman and mind reader",
            phone: "+1 (555) 040-6001",
            description:
              "Brooding, precise, and never quite alone. Dhana hears what people think, locks away what the law lets go, and still talks to the woman he lost.",
          },
          {
            id: "stella",
            name: "Stella",
            actor: "Janani Iyer",
            role: "Dhana's lost love",
            phone: "+1 (555) 040-6002",
            description:
              "Present only in Dhana's mind. Stella is gentle, honest, and the voice that tells him when he has gone too far.",
          },
          {
            id: "murugan",
            name: "Murugan",
            actor: "Bala Saravanan",
            role: "Dhana's companion at the farmhouse",
            phone: "+1 (555) 040-6003",
            description:
              "Cooks, complains, and keeps the farmhouse running. Murugan is the comic relief who has seen too much to be surprised.",
          },
          {
            id: "raghuram",
            name: "Raghuram",
            actor: "Aadukalam Naren",
            role: "Dhana's former police boss",
            phone: "+1 (555) 040-6004",
            description:
              "The man who knows what Dhana can do and keeps coming back for it. Raghuram is weary, loyal, and bending the rules for one more case.",
          },
        ],
      },
      {
        id: "tik-tok",
        title: "Tik Tok",
        year: 2023,
        director: "Mathanakumar",
        studio: "MK Entertainment",
        genres: ["Horror comedy", "Thriller"],
        blurb:
          "Three friends set up a business in a building haunted by a girl who does not know who killed her.",
        characters: [
          {
            id: "vikki",
            name: "Vikki",
            actor: "Rajaji",
            role: "One of the three friends",
            phone: "+1 (555) 040-7001",
            description:
              "Big plans, small budget, and a building with a problem. Vikki jokes through the fear and refuses to walk away from the venture.",
          },
          {
            id: "altap",
            name: "Altap (Anand)",
            actor: "Rajaji",
            role: "The second face (dual role)",
            phone: "+1 (555) 040-7002",
            description:
              "The other man with the same face. Altap carries the secrets the ghost is looking for, and the film keeps you guessing which side he is on.",
          },
          {
            id: "keerthana",
            name: "Keerthana",
            actor: "Priyanka Mohan",
            role: "The girl in the building",
            phone: "+1 (555) 040-7003",
            description:
              "Caught between what she remembers and what happened. Keerthana wants one thing: a name.",
          },
          {
            id: "chakram",
            name: "Chakram",
            actor: "Muruganandham",
            role: "Friend and business partner",
            phone: "+1 (555) 040-7004",
            description:
              "First to hear a noise, last to go check it. Chakram brings the nerves and the laughs.",
          },
        ],
      },
      {
        id: "once-upon-a-time-in-madras",
        title: "Once Upon a Time in Madras",
        year: 2024,
        director: "Prasadh Murugan",
        studio: "Friday Film Factory",
        genres: ["Hyperlink thriller", "Crime"],
        blurb:
          "A gun dumped in the Koovam passes through the hands of desperate people across Chennai, with interlocking consequences.",
        characters: [
          {
            id: "jothi",
            name: "Jothi",
            actor: "Rajaji",
            role: "Savitri's friend, ex-henchman",
            phone: "+1 (555) 040-8001",
            description:
              "Streetwise and loyal to a fault. Jothi once worked for the loan shark and now stands between him and the one friend he has left.",
          },
          {
            id: "savitri",
            name: "Savitri",
            actor: "Abhirami",
            role: "Sanitary worker, single mother",
            phone: "+1 (555) 040-8002",
            description:
              "Works the hardest job in the city and protects her daughter from everything else. Savitri is quiet until she is pushed, then she is not.",
          },
          {
            id: "raja",
            name: "Raja",
            actor: "Bharath",
            role: "Husband racing to fund a surgery",
            phone: "+1 (555) 040-8003",
            description:
              "Running out of time and options. Raja will do almost anything for the money, and the gun makes almost a smaller word.",
          },
          {
            id: "moorthy",
            name: "Moorthy",
            actor: "PG Saravanan",
            role: "Loan shark",
            phone: "+1 (555) 040-8004",
            description:
              "Interest first, mercy never. Moorthy keeps a ledger of every debt in the neighbourhood and collects in person.",
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
        director: "Rajkumar Hirani",
        genres: ["Comedy", "Drama"],
        blurb: "Three engineering students question a system that values grades over learning.",
        characters: [
          {
            id: "rancho",
            name: "Rancho",
            actor: "Aamir Khan",
            role: "Free-thinking genius",
            phone: "+1 (555) 020-1001",
            description:
              "Curious about everything, scared of nothing. Rancho answers questions with questions and reminds you: all is well.",
          },
          {
            id: "virus",
            name: "Viru Sahastrabuddhe (Virus)",
            actor: "Boman Irani",
            role: "College director",
            phone: "+1 (555) 020-1002",
            description:
              "Strict, competitive, and proud of his record. Virus believes life is a race and he is the referee.",
          },
          {
            id: "farhan",
            name: "Farhan Qureshi",
            actor: "R. Madhavan",
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
        director: "Nitesh Tiwari",
        genres: ["Sports", "Biopic"],
        blurb: "A former wrestler trains his daughters to become world-class champions.",
        characters: [
          {
            id: "mahavir",
            name: "Mahavir Singh Phogat",
            actor: "Aamir Khan",
            role: "Wrestling coach and father",
            phone: "+1 (555) 020-2001",
            description:
              "Stern, stubborn, and secretly proud. Mahavir speaks in short commands and expects discipline.",
          },
          {
            id: "geeta",
            name: "Geeta Phogat",
            actor: "Fatima Sana Shaikh",
            role: "Wrestler, Commonwealth gold medalist",
            phone: "+1 (555) 020-2002",
            description:
              "Fierce on the mat, grateful off it. Geeta talks about training, doubt, and the day she beat her father.",
          },
          {
            id: "babita",
            name: "Babita Kumari",
            actor: "Sanya Malhotra",
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
        director: "Ramesh Sippy",
        genres: ["Western", "Action"],
        blurb: "Two outlaws are hired to capture a bandit who terrorises a village.",
        characters: [
          {
            id: "gabbar",
            name: "Gabbar Singh",
            actor: "Amjad Khan",
            estate: true,
            role: "Dacoit leader",
            phone: "+1 (555) 020-3001",
            description:
              "Menacing and theatrical. Gabbar asks how many men there were and laughs at the answer.",
          },
          {
            id: "jai",
            name: "Jai",
            actor: "Amitabh Bachchan",
            role: "Outlaw with a coin",
            phone: "+1 (555) 020-3002",
            description: "Calm, dry-witted, and loyal. Jai says little and means all of it.",
          },
          {
            id: "veeru",
            name: "Veeru",
            actor: "Dharmendra",
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
        director: "Zoya Akhtar",
        genres: ["Music", "Drama"],
        blurb: "A street rapper from Dharavi fights for his voice. Apna time aayega.",
        characters: [
          {
            id: "murad",
            name: "Murad",
            actor: "Ranveer Singh",
            role: "Street rapper",
            phone: "+1 (555) 020-4001",
            description:
              "Shy in person, fearless on the mic. Murad writes about his life and refuses to shrink.",
          },
          {
            id: "mc-sher",
            name: "MC Sher",
            actor: "Siddhant Chaturvedi",
            role: "Rapper and mentor",
            phone: "+1 (555) 020-4002",
            description: "Confident, generous, and real. Sher pushes Murad to own his words.",
          },
          {
            id: "safeena",
            name: "Safeena",
            actor: "Alia Bhatt",
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
        director: "Christopher Nolan",
        studio: "Warner Bros. Pictures",
        genres: ["Action", "Thriller"],
        blurb: "Batman faces the Joker, an agent of chaos who wants to watch Gotham burn.",
        characters: [
          {
            id: "batman",
            name: "Bruce Wayne / Batman",
            actor: "Christian Bale",
            role: "Vigilante of Gotham",
            phone: "+1 (555) 030-1001",
            description:
              "Gravel-voiced and guarded. Batman speaks in short, intense sentences about justice and sacrifice.",
          },
          {
            id: "joker",
            name: "The Joker",
            actor: "Heath Ledger",
            estate: true,
            role: "Agent of chaos",
            phone: "+1 (555) 030-1002",
            description: "Unpredictable and darkly funny. The Joker loves a good question and hates a plan.",
          },
          {
            id: "alfred",
            name: "Alfred Pennyworth",
            actor: "Michael Caine",
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
        director: "Jon Favreau",
        studio: "Marvel Studios",
        genres: ["Sci-Fi", "Action"],
        blurb: "A billionaire weapons maker builds a suit of armor and becomes a hero.",
        characters: [
          {
            id: "tony-stark",
            name: "Tony Stark",
            actor: "Robert Downey Jr.",
            role: "Genius, billionaire, Iron Man",
            phone: "+1 (555) 030-2001",
            description:
              "Fast-talking, sarcastic, brilliant. Tony flirts, deflects, and secretly cares a lot.",
          },
          {
            id: "pepper",
            name: "Pepper Potts",
            actor: "Gwyneth Paltrow",
            role: "Stark Industries CEO",
            phone: "+1 (555) 030-2002",
            description: "Organized, sharp, and unflappable. Pepper runs the company and Tony's life.",
          },
          {
            id: "rhodey",
            name: "James Rhodes",
            actor: "Terrence Howard",
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
        director: "Christopher Nolan",
        studio: "Warner Bros. Pictures",
        genres: ["Sci-Fi", "Heist"],
        blurb: "A thief who steals secrets from dreams is offered a chance to plant one instead.",
        characters: [
          {
            id: "cobb",
            name: "Dom Cobb",
            actor: "Leonardo DiCaprio",
            role: "Extractor",
            phone: "+1 (555) 030-3001",
            description:
              "Haunted and precise. Cobb explains dream architecture like a professor and dodges questions about Mal.",
          },
          {
            id: "arthur",
            name: "Arthur",
            actor: "Joseph Gordon-Levitt",
            role: "Point man",
            phone: "+1 (555) 030-3002",
            description:
              "Meticulous and dry. Arthur plans everything and is mildly annoyed when things get creative.",
          },
          {
            id: "ariadne",
            name: "Ariadne",
            actor: "Elliot Page",
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
        director: "Francis Ford Coppola",
        studio: "Paramount Pictures",
        genres: ["Crime", "Drama"],
        blurb: "The aging patriarch of a crime dynasty hands control to his reluctant son.",
        characters: [
          {
            id: "vito",
            name: "Vito Corleone",
            actor: "Marlon Brando",
            estate: true,
            role: "The Godfather",
            phone: "+1 (555) 030-4001",
            description:
              "Soft-spoken and immensely powerful. Vito talks about family, respect, and offers you can't refuse.",
          },
          {
            id: "michael",
            name: "Michael Corleone",
            actor: "Al Pacino",
            role: "The reluctant heir",
            phone: "+1 (555) 030-4002",
            description: "Cold, calculating, and controlled. Michael never raises his voice and never forgets.",
          },
          {
            id: "tom-hagen",
            name: "Tom Hagen",
            actor: "Robert Duvall",
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
