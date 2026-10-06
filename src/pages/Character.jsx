import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { findIndustry, findMovie, findCharacter } from "../data/movies";
import { resolveAgentId } from "../data/agents";
import { noticeVariables, permissionNotice } from "../data/rights";
import { art } from "../data/art";
import Artwork from "../components/Artwork";
import Monogram from "../components/Monogram";
import VoiceCall from "../components/VoiceCall";
import { CharacterCard } from "../components/Cards";
import { Reveal, Item, ease } from "../components/Motion";
import { PhoneIcon } from "../components/Icons";
import NotFound from "./NotFound";

export default function Character() {
  const { industryId, movieId, characterId } = useParams();
  const industry = findIndustry(industryId);
  const movie = findMovie(industryId, movieId);
  const character = findCharacter(industryId, movieId, characterId);
  if (!industry || !movie || !character) return <NotFound />;

  const agentId = resolveAgentId(industryId, movieId, characterId);
  const dynamicVariables = noticeVariables(movie, character);
  const disclaimer = character.disclaimer || permissionNotice(movie, character);
  const telHref = `tel:${character.phone.replace(/[^\d+]/g, "")}`;
  const others = movie.characters.filter((c) => c.id !== character.id);

  return (
    <>
      <section className="profile" style={{ "--accent": industry.accent }}>
        <Artwork src={art.poster(movie.id)} alt="" label={movie.title} className="profile__bg" eager />
        <div className="profile__shade" />

        <div className="container profile__inner">
          <motion.div
            className="profile__portrait"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <Monogram name={character.name} className="profile__monogram" />
            <span className="profile__badge">{movie.title}</span>
          </motion.div>

          <motion.div
            className="profile__copy"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
          >
            <Item as="nav" className="crumbs">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to={`/${industry.id}`}>{industry.name}</Link>
              <span>/</span>
              <Link to={`/${industry.id}/${movie.id}`}>{movie.title}</Link>
            </Item>
            <Item as="span" className="eyebrow">
              {character.role}
            </Item>
            <Item as="h1" className="display">
              {character.name}
            </Item>
            <Item as="p" className="profile__desc">
              {character.description}
            </Item>

            <Item className="profile__phone">
              <span className="profile__phone-label">
                <PhoneIcon width={14} height={14} /> Direct line
              </span>
              <a href={telHref} className="profile__number">
                {character.phone}
              </a>
            </Item>

            <Item>
              <VoiceCall
                key={agentId || "none"}
                character={character}
                agentId={agentId}
                accent={industry.accent}
                dynamicVariables={dynamicVariables}
              />
            </Item>

            <Item as="p" className="profile__disclaimer">
              <strong>Permission pending.</strong> {disclaimer}
            </Item>
          </motion.div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="section section--tight">
          <div className="container">
            <div className="section__head section__head--row">
              <div>
                <span className="eyebrow">Also in {movie.title}</span>
                <h2 className="title title--sm">Someone else to call</h2>
              </div>
              <Link to={`/${industry.id}/${movie.id}`} className="link-arrow">
                Back to the film
              </Link>
            </div>
            <Reveal className="char-grid" amount={0.05}>
              {others.map((c) => (
                <Item key={c.id}>
                  <CharacterCard industry={industry} movie={movie} character={c} />
                </Item>
              ))}
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
