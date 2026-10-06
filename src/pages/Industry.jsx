import { Link, useParams } from "react-router-dom";
import { findIndustry, industries } from "../data/movies";
import { art } from "../data/art";
import Artwork from "../components/Artwork";
import { PosterCard } from "../components/Cards";
import { Reveal, Item } from "../components/Motion";
import NotFound from "./NotFound";

export default function Industry() {
  const { industryId } = useParams();
  const industry = findIndustry(industryId);
  if (!industry) return <NotFound />;

  const characterCount = industry.movies.reduce((n, m) => n + m.characters.length, 0);
  const others = industries.filter((i) => i.id !== industry.id);

  return (
    <>
      <section className="banner" style={{ "--accent": industry.accent }}>
        <Artwork src={art.banner(industry.id)} alt="" label={industry.name} className="banner__bg" eager />
        <div className="banner__shade" />
        <div className="container banner__inner">
          <nav className="crumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>{industry.name}</span>
          </nav>
          <h1 className="display">{industry.name}</h1>
          <p className="banner__lede">{industry.tagline}</p>
          <div className="banner__facts">
            <span>{industry.movies.length} films</span>
            <span>{characterCount} characters</span>
          </div>
          {industry.notice && <p className="banner__notice">{industry.notice}</p>}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head section__head--row">
            <div>
              <span className="eyebrow">Films</span>
              <h2 className="title">Pick a story</h2>
            </div>
            <div className="switcher">
              {others.map((o) => (
                <Link key={o.id} to={`/${o.id}`} style={{ "--accent": o.accent }}>
                  {o.name}
                </Link>
              ))}
            </div>
          </div>
          <Reveal className={`poster-grid ${industry.movies.length > 4 ? "poster-grid--many" : ""}`} amount={0.05}>
            {industry.movies.map((m) => (
              <Item key={m.id}>
                <PosterCard industry={industry} movie={m} />
              </Item>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
