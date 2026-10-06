// Every film and character carries the people who would have to approve a voice or character
// clone: the director, the studio where relevant, and the actor who played the part.
// Until they do, the call plays a notice instead of a roleplay.

export function rightsHolders(movie, character) {
  const parts = [];
  if (movie.director) parts.push(`director ${movie.director}`);
  if (movie.studio) parts.push(movie.studio);
  if (character.actor) parts.push(character.estate ? `the estate of ${character.actor}` : `actor ${character.actor}`);
  if (parts.length === 0) return "The rights holders";
  const text = parts.length === 1 ? parts[0] : `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function permissionNotice(movie, character) {
  const first = character.name.split(" ")[0];
  return (
    `${rightsHolders(movie, character)} have not yet given permission to clone the voice or the character of ` +
    `${character.name}. On this call you will only hear that notice; ${first} does not answer questions. ` +
    `Unofficial prototype, stock ElevenLabs voice, no clone of the actor.`
  );
}

/** Dynamic variables handed to the shared notice agent at call start. */
export function noticeVariables(movie, character) {
  return {
    character_name: character.name,
    movie_title: movie.title,
    rights_holders: rightsHolders(movie, character),
  };
}
