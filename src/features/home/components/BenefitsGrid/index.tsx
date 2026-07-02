import { Builder } from '@builder.io/react'
import { benefits } from '@/data/benefits'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { SectionHeading } from '@/ui/SectionHeading'
import { BenefitCard } from './BenefitCard'

export const BenefitsGrid = () => (
  <section style={{ padding: '90px clamp(20px, 8.4vw, 162px)' }}>
    <SectionHeading title="Benefits" description="What working with me looks like." />

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

export const registerBenefitsGrid = () => {
  Builder.registerComponent(BenefitsGrid, {
    name: 'BenefitsGrid',
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
