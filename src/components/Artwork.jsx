import { useState } from "react";

/**
 * Image with a designed fallback. If the file is missing, renders a monogram tile
 * tinted with the industry accent so the layout never breaks.
 */
export default function Artwork({ src, alt, label, className = "", eager = false }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (failed) {
    return (
      <div className={`artwork artwork--fallback ${className}`} aria-label={alt}>
        <span>{(label || alt || "?").trim().charAt(0).toUpperCase()}</span>
      </div>
    );
  }

  return (
    <img
      key={src}
      className={`artwork ${loaded ? "is-loaded" : ""} ${className}`}
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
    />
  );
}
