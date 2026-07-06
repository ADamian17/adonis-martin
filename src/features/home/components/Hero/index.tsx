import { Builder } from '@builder.io/react'
import { ArrowRight } from 'lucide-react'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { Link } from '@/ui/Link'
import { SectionBadge } from '@/ui/SectionBadge'

type CtaButton = {
  label?: string
  url?: string
  target?: '_self' | '_blank'
  ariaLabel?: string
}

type Props = {
  greeting: string
  headline: string
  subheading: string
  ctaButton?: CtaButton
}

export const HomeHero = ({ greeting, headline, subheading, ctaButton }: Props) => (
  <section id="home" className="flex flex-wrap" style={{ minHeight: '880px' }}>
    {/* Left column */}
    <div
      className="flex flex-col justify-center gap-12.5"
      style={{
        flex: '1 1 560px',
        minWidth: '340px',
        padding: '60px clamp(20px, 8.4vw, 162px)',
      }}
    >
      <SectionBadge align="start" size="lg">
        {greeting}
      </SectionBadge>

      <div className="flex flex-col gap-5">
        <h1
          className="font-semibold text-heading leading-[1.18]"
          style={{ fontSize: 'clamp(40px, 4vw, 58px)', maxWidth: '12ch' }}
        >
          {headline}
        </h1>
        <p className="text-body text-[18px] leading-[1.55]" style={{ maxWidth: '46ch' }}>
          {subheading}
        </p>
      </div>

      {ctaButton?.url && (
        <div>
          <Link
            href={ctaButton.url}
            target={ctaButton.target}
            aria-label={ctaButton.ariaLabel}
            icon={<ArrowRight size={18} />}
            className="px-7 py-4.5 text-[16px]"
          >
            {ctaButton.label}
          </Link>
        </div>
      )}
    </div>

    {/* Right column — dark decorative panel */}
    <div
      className="relative overflow-hidden"
      style={{
        flex: '1 1 480px',
        minWidth: '320px',
        minHeight: '480px',
        borderRadius: '0 0 0 30px',
        background: `
          url('/hero-grid.png') top left / 64px 128px repeat,
          linear-gradient(220deg, rgba(104,26,255,0.85) -32%, rgba(104,26,255,0) 52%),
          url('/hero-bg.jpg') center / cover no-repeat,
          var(--color-dark)
        `,
      }}
    >
      <img
        src="/abstract-1.svg"
        alt=""
        aria-hidden="true"
        className="absolute w-75"
        style={{ top: '-20px', left: '-60px' }}
      />
      <img
        src="/abstract-2.svg"
        alt=""
        aria-hidden="true"
        className="absolute w-75 rotate-180"
        style={{ bottom: '0', right: '-60px' }}
      />
    </div>
  </section>
)

export const registerHomeHero = () => {
  Builder.registerComponent(HomeHero, {
    name: 'HomeHero',
    noWrap: true,
    models: [BUILDER_IO_MODELS.PAGE],
    inputs: [
      { name: 'greeting', type: 'text', defaultValue: 'Hello There 🤗' },
      { name: 'headline', type: 'text', defaultValue: 'Adonis D. Martin Welcomes You!' },
      {
        name: 'subheading',
        type: 'longText',
        defaultValue:
          "I'm a frontend-focused software engineer who builds fast, accessible, and maintainable web interfaces. Explore my work to see how I turn complex problems into clean, reliable user experiences.",
      },
      {
        name: 'ctaButton',
        type: 'object',
        defaultValue: { label: 'View Portfolio', url: '#portfolio', target: '_self' },
        subFields: [
          { name: 'label', type: 'text', defaultValue: 'View Portfolio' },
          { name: 'url', type: 'url', defaultValue: '#portfolio' },
          { name: 'target', type: 'text', enum: ['_self', '_blank'], defaultValue: '_self' },
          { name: 'ariaLabel', type: 'text', defaultValue: '' },
        ],
      },
    ],
  })
}
