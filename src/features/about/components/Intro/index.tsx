import { Builder } from '@builder.io/react'

import { BUILDER_IO_MODELS } from '@/services/builderIO/models'

const DEFAULT_BADGE = 'About Me'
const DEFAULT_HEADLINE = "I'm Adonis D. Martin"
const DEFAULT_BIO =
  'A skilled frontend engineer with a passion for creating visually stunning and user-friendly websites. With a keen eye for detail and a commitment to excellence, I specialize in crafting online experiences that leave a lasting impression. From concept to launch, I collaborate closely with clients to bring their visions to life and ensure their digital presence stands out from the crowd.'
const DEFAULT_IMAGE = '/images/hero-bg.jpg'

interface IntroProps {
  badge: string
  headline: string
  bio: string
  image: string
}

export const Intro = ({
  badge = DEFAULT_BADGE,
  headline = DEFAULT_HEADLINE,
  bio = DEFAULT_BIO,
  image = DEFAULT_IMAGE,
}: IntroProps) => (
  <section
    className="flex flex-wrap items-center"
    style={{
      gap: 'clamp(40px, 4vw, 80px)',
      padding: '80px clamp(20px, 8.4vw, 162px) 60px',
      maxWidth: '1920px',
      marginInline: 'auto',
    }}
  >
    {/* Faceted graphic */}
    <div
      className="relative overflow-hidden rounded-[20px]"
      style={{
        flex: '1 1 460px',
        minWidth: '300px',
        height: 'clamp(420px, 40vw, 596px)',
        background: `
          url('/images/hero-grid.png') top left / 64px 128px repeat,
          linear-gradient(220deg, rgba(104,26,255,0.85) -32%, rgba(104,26,255,0) 52%),
          url('${image}') center / cover no-repeat,
          var(--color-dark)
        `,
      }}
    >
      <img
        src="/images/abstract-1.svg"
        alt=""
        aria-hidden="true"
        className="absolute w-[260px]"
        style={{ top: '-18px', left: '-50px' }}
      />
      <img
        src="/images/abstract-2.svg"
        alt=""
        aria-hidden="true"
        className="absolute w-[260px] rotate-180"
        style={{ bottom: '-18px', right: '-50px' }}
      />
    </div>

    {/* Text column */}
    <div className="flex flex-col gap-[60px]" style={{ flex: '1 1 520px', minWidth: '320px' }}>
      <div className="flex flex-col gap-5">
        <div className="self-start px-[18px] py-[14px] rounded-lg font-medium text-[18px] text-accent bg-card-ivory">
          {badge}
        </div>

        <h1
          className="m-0 font-semibold text-heading leading-[1.16]"
          style={{ fontSize: 'clamp(40px, 3.4vw, 58px)' }}
        >
          {headline}
        </h1>

        <p className="m-0 font-normal text-[18px] leading-[1.5] text-body">{bio}</p>
      </div>
    </div>
  </section>
)

export const registerIntro = () => {
  Builder.registerComponent(Intro, {
    name: 'Intro',
    inputs: [
      { name: 'badge', type: 'text', defaultValue: DEFAULT_BADGE },
      { name: 'headline', type: 'text', defaultValue: DEFAULT_HEADLINE },
      { name: 'bio', type: 'longText', defaultValue: DEFAULT_BIO },
      {
        name: 'image',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg', 'webp'],
        defaultValue: DEFAULT_IMAGE,
      },
    ],
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
