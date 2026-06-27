import { benefits } from '@/data/benefits'

import { BenefitCard } from './BenefitCard'

export const BenefitsGrid = () => (
  <section style={{ padding: '90px clamp(20px, 8.4vw, 162px)' }}>
    <div className="mb-[60px]">
      <h2
        className="font-semibold text-heading mb-4"
        style={{ fontSize: 'clamp(34px, 3.4vw, 48px)' }}
      >
        Benefits
      </h2>
      <p className="text-body text-[18px] leading-[1.55]">What working with me looks like.</p>
    </div>

    <div className="flex flex-col gap-[30px]">
      {/* Row 1 — 2 cards */}
      <div
        className="grid gap-[30px]"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
      >
        {benefits.slice(0, 2).map((b) => (
          <BenefitCard key={b.title} benefit={b} />
        ))}
      </div>

      {/* Row 2 — 3 cards */}
      <div
        className="grid gap-[30px]"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
      >
        {benefits.slice(2).map((b) => (
          <BenefitCard key={b.title} benefit={b} />
        ))}
      </div>
    </div>
  </section>
)
