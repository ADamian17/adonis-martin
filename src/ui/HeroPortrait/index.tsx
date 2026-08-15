interface HeroPortraitProps {
  src: string
  alt: string
}

/**
 * Optional cut-out portrait that stands on the floor of a hero panel, above the
 * textured backdrop. It fills the panel height, is desaturated to keep the purple
 * wash the only colour in the frame, and casts a soft shadow onto the backdrop.
 * Render it only when a portrait has actually been set.
 */
export const HeroPortrait = ({ src, alt }: HeroPortraitProps) => (
  <div className="absolute inset-x-[4%] inset-y-0 z-1 flex items-end justify-center">
    <img
      src={src}
      alt={alt}
      className="block h-full w-auto max-w-full object-contain object-bottom grayscale drop-shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
    />
  </div>
)
