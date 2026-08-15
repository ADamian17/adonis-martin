interface HeroPortraitProps {
  src: string
  alt: string
  /**
   * Horizontal inset from the panel edges, e.g. "4%". Defaults to flush, which
   * is what the home hero uses; the about intro insets its portrait slightly.
   * The portrait is width-bound at these sizes, so the inset costs height too.
   */
  insetX?: string
}

/**
 * Optional cut-out portrait that stands on the floor of a hero panel, above the
 * textured backdrop. It fills the panel height, is desaturated to keep the purple
 * wash the only colour in the frame, and casts a soft shadow onto the backdrop.
 * Render it only when a portrait has actually been set.
 */
export const HeroPortrait = ({ src, alt, insetX = '0' }: HeroPortraitProps) => (
  <div
    className="absolute inset-y-0 z-1 flex items-end justify-center"
    style={{ left: insetX, right: insetX }}
  >
    <img
      src={src}
      alt={alt}
      className="block h-full w-auto max-w-full object-cover object-bottom grayscale drop-shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
    />
  </div>
)
