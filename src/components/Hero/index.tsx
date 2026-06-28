import { Builder } from '@builder.io/react'
import { ArrowRight } from 'lucide-react'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'

export const HomeHero = () => (
  <section id="home" className="flex flex-wrap" style={{ minHeight: '880px' }}>
    {/* Left column */}
    <div
      className="flex flex-col justify-center gap-[50px]"
      style={{
        flex: '1 1 560px',
        minWidth: '340px',
        padding: '60px clamp(20px, 8.4vw, 162px)',
      }}
    >
      <span
        className="inline-flex self-start items-center rounded-[13px] bg-white px-[18px] py-[10px] font-medium text-heading text-[26px]"
        style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}
      >
        Hello There 🤗
      </span>

      <div className="flex flex-col gap-5">
        <h1
          className="font-semibold text-heading leading-[1.18]"
          style={{ fontSize: 'clamp(40px, 4vw, 58px)', maxWidth: '12ch' }}
        >
          Adonis D. Martin Welcomes You!
        </h1>
        <p className="text-body text-[18px] leading-[1.55]" style={{ maxWidth: '46ch' }}>
          I'm a frontend-focused software engineer who builds fast, accessible, and maintainable web
          interfaces. Explore my work to see how I turn complex problems into clean, reliable user
          experiences.
        </p>
      </div>

      <div>
        <a
          href="#portfolio"
          className="inline-flex items-center gap-2 bg-accent text-card-cream font-medium text-[16px] rounded-lg px-7 py-[18px] hover:bg-accent/90 transition-colors"
        >
          View Portfolio
          <ArrowRight size={18} />
        </a>
      </div>
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
          #131519
        `,
      }}
    >
      <img
        src="/abstract-1.svg"
        alt=""
        aria-hidden="true"
        className="absolute w-[300px]"
        style={{ top: '-20px', left: '-60px' }}
      />
      <img
        src="/abstract-2.svg"
        alt=""
        aria-hidden="true"
        className="absolute w-[300px] rotate-180"
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
  })
}
