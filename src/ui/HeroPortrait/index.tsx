interface HeroPortraitProps {
  src: string
  alt: string
}

/**
 * Optional cut-out portrait that stands on the floor of a hero panel, above the
 * textured backdrop. Render it only when a portrait has actually been set.
 */
export const HeroPortrait = ({ src, alt }: HeroPortraitProps) => (
  <div className="absolute inset-x-[14%] top-[5%] bottom-0 z-1 flex items-end justify-center">
    <img src={src} alt={alt} className="block h-auto max-h-full w-full object-contain" />
  </div>
)
