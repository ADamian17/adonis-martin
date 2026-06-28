import { Builder } from '@builder.io/react'
import { Link } from '@tanstack/react-router'

import { BUILDER_IO_MODELS } from '@/services/builderIO/models'

export const Intro = () => (
  <section
    className="flex flex-wrap items-center gap-[60px]"
    style={{
      padding: '80px clamp(20px, 8.4vw, 162px) 40px',
      maxWidth: '1920px',
      marginInline: 'auto',
    }}
  >
    {/* Text column */}
    <div className="flex flex-col gap-7" style={{ flex: '1 1 520px', minWidth: '320px' }}>
      <div
        className="self-start px-[18px] py-[10px] rounded-[13px] bg-white font-medium text-[18px] text-accent"
        style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}
      >
        About Me
      </div>

      <h1
        className="m-0 font-semibold text-heading leading-[1.16]"
        style={{ fontSize: 'clamp(38px, 3.8vw, 54px)', maxWidth: '16ch' }}
      >
        I engineer interfaces people love to use.
      </h1>

      <p
        className="m-0 font-normal text-[18px] leading-[1.6] text-body"
        style={{ maxWidth: '54ch' }}
      >
        I&apos;m Adonis — a frontend-focused software engineer with 8+ years turning complex
        problems into fast, accessible, maintainable web interfaces. I care deeply about the craft:
        clean architecture, real performance budgets, and details that make a product feel
        effortless.
      </p>
      <p
        className="m-0 font-normal text-[18px] leading-[1.6] text-body"
        style={{ maxWidth: '54ch' }}
      >
        I work best embedded with product and design teams, shipping iteratively and leaving
        codebases healthier than I found them. When I&apos;m not building, I&apos;m writing about
        the frontend craft and mentoring engineers leveling up.
      </p>

      <div className="flex items-center flex-wrap gap-4 mt-2">
        <Link
          to="/contact"
          className="no-underline px-7 py-[18px] rounded-lg bg-accent text-card-cream font-medium text-[18px] hover:bg-accent/90 transition-colors"
        >
          Let&apos;s Work Together
        </Link>
        <Link
          to="/portfolio"
          className="flex items-center gap-2 font-medium text-[18px] text-[#333] hover:text-heading transition-colors"
        >
          See My Work <span className="text-[20px]">→</span>
        </Link>
      </div>
    </div>

    {/* Photo column */}
    <div className="flex justify-center" style={{ flex: '1 1 380px', minWidth: '300px' }}>
      <div className="relative w-full" style={{ maxWidth: '440px' }}>
        {/* Decorative gradient */}
        <div
          className="absolute z-0"
          style={{
            inset: '-18px -18px auto auto',
            width: '160px',
            height: '160px',
            borderRadius: '0 0 0 30px',
            background: 'linear-gradient(220deg,#681aff,#9a5cff)',
            opacity: 0.16,
          }}
        />
        {/* Photo placeholder */}
        <div
          className="relative z-[1] w-full rounded-2xl bg-card-alt border-2 border-dashed border-border-soft flex items-center justify-center text-border font-medium text-[15px]"
          style={{ aspectRatio: '4/5' }}
        >
          Portrait photo
        </div>
      </div>
    </div>
  </section>
)

export const registerIntro = () => {
  Builder.registerComponent(Intro, {
    name: 'Intro',
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
