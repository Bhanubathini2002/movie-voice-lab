import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/Icons";

export default function NotFound() {
  return (
    <section className="section section--center">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 className="display">That reel is missing.</h1>
        <p className="lede">The page you asked for isn't in our catalogue.</p>
        <Link to="/" className="btn btn--primary">
          Back to the lobby <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
