import { Link } from "react-router-dom";
import { industries } from "../data/movies";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="brand__text">
            Movie<em>Voice</em>Lab
          </span>
          <p>Pick a film. Pick a character. Have the conversation you always wanted to.</p>
        </div>
        <div className="footer__cols">
          <div>
            <h4>Cinema</h4>
            {industries.map((i) => (
              <Link key={i.id} to={`/${i.id}`}>
                {i.name}
              </Link>
            ))}
          </div>
          <div>
            <h4>Powered by</h4>
            <a href="https://elevenlabs.io/agents" target="_blank" rel="noreferrer">
              ElevenLabs Agents
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              React + Vite
            </a>
          </div>
        </div>
      </div>
      <div className="container footer__legal">
        A fan-made experiment. Character voices are AI agents and are not affiliated with any studio or actor.
      </div>
    </footer>
  );
}
