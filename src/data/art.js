// All artwork lives in /public/art. Missing files fall back to a styled monogram (see <Artwork />).
export const art = {
  poster: (movieId) => `/art/posters/${movieId}.webp`,
  banner: (industryId) => `/art/banners/${industryId}.webp`,
  hero: "/art/banners/hero.webp",
};
