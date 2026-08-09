const grid = "url('/images/hero-grid.png') top left / 64px 128px repeat"
const photo = "url('/images/hero-bg.jpg') center / cover no-repeat"

/**
 * The purple wash that fades across a hero panel. The home hero layers it inside
 * the backdrop, under the portrait; the about intro paints it as a separate
 * overlay so it tints the portrait too.
 */
export const heroWash =
  'linear-gradient(220deg, rgba(104,26,255,0.85) -32%, rgba(104,26,255,0) 52%)'

/**
 * Shared background stack for the dark hero panels: grid texture over the purple
 * wash, over the faceted photo, over the base colour. Keeping it in one place is
 * what makes the home and about heroes read as the same treatment.
 */
export const heroBackdrop = `${grid}, ${heroWash}, ${photo}, var(--color-dark)`

/** The same stack with the wash left out, for panels that overlay it themselves. */
export const heroBackdropUnwashed = `${grid}, ${photo}, var(--color-dark)`
