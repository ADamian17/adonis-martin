import { Builder } from '@builder.io/react'

import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { HeroCorners } from '@/ui/HeroCorners'
import { HeroPortrait } from '@/ui/HeroPortrait'
import { heroBackdrop } from '@/ui/heroBackdrop'
import { Section } from '@/ui/Section'

interface IntroProps {
  badge: string
  headline: string
  bio: string
  portrait: string
  portraitAlt: string
}

export const Intro = ({ badge, headline, bio, portrait, portraitAlt }: IntroProps) => (
  <Section py="pt-20 pb-15" className="flex flex-wrap items-center gap-[clamp(40px,4vw,80px)]">
    {/* Faceted graphic: textured backdrop, then the portrait and notches over it */}
    <div
      className="relative overflow-hidden rounded-[20px]"
      style={{
        flex: '1 1 460px',
        minWidth: '300px',
        height: 'clamp(420px, 40vw, 596px)',
        background: heroBackdrop,
      }}
    >
      {portrait && <HeroPortrait src={portrait} alt={portraitAlt} />}

      <HeroCorners width="clamp(130px, 22vw, 200px)" zIndex={2} />
    </div>

    {/* Text column */}
    <div className="flex flex-col gap-15" style={{ flex: '1 1 520px', minWidth: '320px' }}>
      <div className="flex flex-col gap-5">
        <div className="self-start px-4.5 py-3.5 rounded-lg font-medium text-[18px] text-accent bg-card-ivory">
          {badge}
        </div>

        <h1
          className="m-0 font-semibold text-heading leading-[1.16]"
          style={{ fontSize: 'clamp(40px, 3.4vw, 58px)' }}
        >
          {headline}
        </h1>

        <p className="m-0 font-normal text-[18px] leading-normal text-body">{bio}</p>
      </div>
    </div>
  </Section>
)

export const registerIntro = () => {
  Builder.registerComponent(Intro, {
    name: 'Intro',
    inputs: [
      { name: 'badge', type: 'text' },
      { name: 'headline', type: 'text' },
      { name: 'bio', type: 'longText' },
      { name: 'portrait', type: 'file', allowedFileTypes: ['png', 'webp', 'svg'] },
      { name: 'portraitAlt', type: 'text' },
    ],
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
