import { Link } from "react-router-dom";
import Artwork from "./Artwork";
import Monogram from "./Monogram";
import { art } from "../data/art";
import { ArrowIcon, PhoneIcon } from "./Icons";

export function IndustryCard({ industry }) {
  const posters = industry.movies.slice(0, 4);
  return (
    <Link to={`/${industry.id}`} className="industry-card" style={{ "--accent": industry.accent }}>
      <Artwork src={art.banner(industry.id)} alt="" label={industry.name} className="industry-card__bg" />
      <div className="industry-card__shade" />
      <div className="industry-card__body">
        <span className="eyebrow">{industry.movies.length} films</span>
        <h3>{industry.name}</h3>
        <p>{industry.tagline}</p>
        <div className="industry-card__strip">
          {posters.map((m) => (
            <Artwork key={m.id} src={art.poster(m.id)} alt="" label={m.title} className="industry-card__thumb" />
          ))}
        </div>
      </div>
      <span className="industry-card__arrow">
        <ArrowIcon />
      </span>
    </Link>
  );
}

export function PosterCard({ industry, movie }) {
  return (
    <Link to={`/${industry.id}/${movie.id}`} className="poster-card" style={{ "--accent": industry.accent }}>
      <div className="poster-card__frame">
        <Artwork src={art.poster(movie.id)} alt={`${movie.title} poster`} label={movie.title} className="poster-card__img" />
        <div className="poster-card__shade" />
        <div className="poster-card__meta">
          <span className="poster-card__year">{movie.year}</span>
          <h3>{movie.title}</h3>
          <span className="poster-card__count">{movie.characters.length} characters</span>
        </div>
      </div>
    </Link>
  );
}

export function CharacterCard({ industry, movie, character, showMovie = false }) {
  return (
    <Link
      to={`/${industry.id}/${movie.id}/${character.id}`}
      className="char-card"
      style={{ "--accent": industry.accent }}
    >
      <div className="char-card__frame">
        <Monogram name={character.name} className="char-card__img" />
        <div className="char-card__shade" />
        <span className="char-card__call">
          <PhoneIcon width={14} height={14} />
          Call
        </span>
        <div className="char-card__meta">
          {showMovie && <span className="char-card__movie">{movie.title}</span>}
          <h3>{character.name}</h3>
          <p>{character.role}</p>
        </div>
      </div>
    </Link>
  );
}
