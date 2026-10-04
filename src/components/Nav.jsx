import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { industries } from "../data/movies";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <Link to="/" className="brand" aria-label="Movie Voice Lab home">
          <span className="brand__mark" />
          <span className="brand__text">
            Movie<em>Voice</em>Lab
          </span>
        </Link>

        <nav className="nav__links" aria-label="Industries">
          {industries.map((ind) => (
            <NavLink key={ind.id} to={`/${ind.id}`} className="nav__link" style={{ "--accent": ind.accent }}>
              {ind.name}
            </NavLink>
          ))}
        </nav>

        <a href="/#how-it-works" className="nav__cta">
          How it works
        </a>
      </div>
    </header>
  );
}
