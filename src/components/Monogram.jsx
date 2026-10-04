/**
 * Letter tile used for every character. Deliberately no portraits:
 * a single bold initial on a tinted, lit surface.
 */
export default function Monogram({ name, className = "" }) {
  const letter = (name || "?").trim().charAt(0).toUpperCase();
  return (
    <div className={`monogram ${className}`} aria-hidden="true">
      <span className="monogram__glow" />
      <span className="monogram__ring" />
      <span className="monogram__letter">{letter}</span>
    </div>
  );
}
