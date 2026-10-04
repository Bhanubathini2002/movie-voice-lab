import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { industries } from "../data/movies";
import { art } from "../data/art";
import Artwork from "../components/Artwork";
import { IndustryCard, CharacterCard } from "../components/Cards";
import { Reveal, Item, ease } from "../components/Motion";
import { ArrowIcon, PlayIcon } from "../components/Icons";

const totalMovies = industries.reduce((n, i) => n + i.movies.length, 0);
const totalCharacters = industries.reduce((n, i) => n + i.movies.reduce((m, mv) => m + mv.characters.length, 0), 0);

// A curated row for the home page: first character of a few standout films.
const featured = [
  ["tollywood", "arjun-reddy", "arjun"],
  ["hollywood", "the-dark-knight", "joker"],
  ["bollywood", "sholay", "gabbar"],
  ["tollywood", "pushpa", "pushpa-raj"],
  ["hollywood", "iron-man", "tony-stark"],
  ["bollywood", "3-idiots", "rancho"],
  ["tollywood", "baahubali", "kattappa"],
  ["hollywood", "the-godfather", "vito"],
  ["bollywood", "gully-boy", "murad"],
  ["tollywood", "rrr", "bheem"],
]
  .map(([i, m, c]) => {
    const industry = industries.find((x) => x.id === i);
    const movie = industry?.movies.find((x) => x.id === m);
    const character = movie?.characters.find((x) => x.id === c);
    return industry && movie && character ? { industry, movie, character } : null;
  })
  .filter(Boolean);

const heroPosters = ["rrr", "the-dark-knight", "sholay", "arjun-reddy", "inception"];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <Artwork src={art.hero} alt="" label="M" className="hero__bg" eager />
        <div className="hero__shade" />
        <div className="container hero__inner">
          <motion.div
            className="hero__copy"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
          >
            <Item as="span" className="eyebrow eyebrow--light">
              Voice agents × Cinema
            </Item>
            <Item as="h1" className="display">
              Call the characters
              <br />
              you grew up with.
            </Item>
            <Item as="p" className="hero__lede">
              Tollywood, Bollywood and Hollywood icons, each backed by a live voice agent. Dial in, ask anything, and
              hear them answer in character.
            </Item>
            <Item className="hero__actions">
              <a href="#cinemas" className="btn btn--primary btn--lg">
                <PlayIcon />
                Start exploring
              </a>
              <a href="#how-it-works" className="btn btn--ghost btn--lg">
                How it works
                <ArrowIcon />
              </a>
            </Item>
            <Item className="hero__stats">
              <div>
                <strong>{industries.length}</strong>
                <span>industries</span>
              </div>
              <div>
                <strong>{totalMovies}</strong>
                <span>films</span>
              </div>
              <div>
                <strong>{totalCharacters}</strong>
                <span>characters</span>
              </div>
              <div>
                <strong>1</strong>
                <span>tap to talk</span>
              </div>
            </Item>
          </motion.div>

          <div className="hero__fan" aria-hidden="true">
            {heroPosters.map((id, i) => (
              <motion.div
                key={id}
                className="hero__fan-card"
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: (i - 2) * 7 }}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.8, ease }}
                style={{ "--i": i }}
              >
                <Artwork src={art.poster(id)} alt="" label={id} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section" id="cinemas">
        <div className="container">
          <Reveal className="section__head">
            <Item as="span" className="eyebrow">
              Choose your cinema
            </Item>
            <Item as="h2" className="title">
              Three industries. One phone line.
            </Item>
          </Reveal>
          <Reveal className="industry-grid">
            {industries.map((ind) => (
              <Item key={ind.id}>
                <IndustryCard industry={ind} />
              </Item>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section section--tight">
        <div className="container section__head section__head--row">
          <div>
            <span className="eyebrow">Most called</span>
            <h2 className="title">Characters people keep ringing</h2>
          </div>
          <Link to="/tollywood" className="link-arrow">
            Browse all <ArrowIcon />
          </Link>
        </div>
        <Reveal className="rail" amount={0.05}>
          <div className="container rail__track">
            {featured.map(({ industry, movie, character }) => (
              <Item key={character.id} className="rail__item">
                <CharacterCard industry={industry} movie={movie} character={character} showMovie />
              </Item>
            ))}
          </div>
        </Reveal>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how-it-works">
        <div className="container">
          <Reveal className="section__head">
            <Item as="span" className="eyebrow">
              How it works
            </Item>
            <Item as="h2" className="title">
              From poster to phone call in three taps.
            </Item>
          </Reveal>
          <Reveal className="steps">
            {[
              ["01", "Pick a film", "Browse by industry. Every film has the characters that made it unforgettable."],
              ["02", "Open a character", "Read who they are, how they talk, and the number they pick up on."],
              ["03", "Connect and talk", "One tap starts a live voice session. Interrupt, argue, ask for advice. They answer in character."],
            ].map(([n, h, p]) => (
              <Item key={n} className="step">
                <span className="step__num">{n}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </Item>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
