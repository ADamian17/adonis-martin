/**
 * Shared background stack for the dark hero panels: grid texture over the purple
 * wash, over the faceted photo, over the base colour. Keeping it in one place is
 * what makes the home and about heroes read as the same treatment.
 */
export const heroBackdrop = `
  url('/images/hero-grid.png') top left / 64px 128px repeat,
  linear-gradient(220deg, rgba(104,26,255,0.85) -32%, rgba(104,26,255,0) 52%),
  url('/images/hero-bg.jpg') center / cover no-repeat,
  var(--color-dark)
`
