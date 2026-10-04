import { Link, useParams } from "react-router-dom";
import { findIndustry, findMovie } from "../data/movies";
import { art } from "../data/art";
import Artwork from "../components/Artwork";
import { CharacterCard, PosterCard } from "../components/Cards";
import { Reveal, Item } from "../components/Motion";
import NotFound from "./NotFound";

export default function Movie() {
  const { industryId, movieId } = useParams();
  const industry = findIndustry(industryId);
  const movie = findMovie(industryId, movieId);
  if (!industry || !movie) return <NotFound />;

  const more = industry.movies.filter((m) => m.id !== movie.id).slice(0, 3);

  return (
    <>
      <section className="backdrop" style={{ "--accent": industry.accent }}>
        <Artwork src={art.poster(movie.id)} alt="" label={movie.title} className="backdrop__bg" eager />
        <div className="backdrop__shade" />
        <div className="container backdrop__inner">
          <div className="backdrop__poster">
            <Artwork src={art.poster(movie.id)} alt={`${movie.title} poster`} label={movie.title} eager />
          </div>
          <div className="backdrop__copy">
            <nav className="crumbs">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to={`/${industry.id}`}>{industry.name}</Link>
              <span>/</span>
              <span>{movie.title}</span>
            </nav>
            <h1 className="display">{movie.title}</h1>
            <div className="chips">
              <span className="chip chip--accent">{movie.year}</span>
              <span className="chip">{industry.name}</span>
              {movie.genres?.map((g) => (
                <span key={g} className="chip">
                  {g}
                </span>
              ))}
            </div>
            <p className="backdrop__lede">{movie.blurb}</p>
            <a href="#cast" className="btn btn--primary">
              Meet the characters
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="cast">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">Characters</span>
            <h2 className="title">Who do you want to call?</h2>
          </div>
          <Reveal className="char-grid" amount={0.05}>
            {movie.characters.map((c) => (
              <Item key={c.id}>
                <CharacterCard industry={industry} movie={movie} character={c} />
              </Item>
            ))}
          </Reveal>
        </div>
      </section>

      {more.length > 0 && (
        <section className="section section--tight">
          <div className="container">
            <div className="section__head section__head--row">
              <div>
                <span className="eyebrow">More from {industry.name}</span>
                <h2 className="title title--sm">Keep watching</h2>
              </div>
              <Link to={`/${industry.id}`} className="link-arrow">
                All {industry.name} films
              </Link>
            </div>
            <Reveal className="poster-grid poster-grid--compact" amount={0.05}>
              {more.map((m) => (
                <Item key={m.id}>
                  <PosterCard industry={industry} movie={m} />
                </Item>
              ))}
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
