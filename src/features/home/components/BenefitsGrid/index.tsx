import { Builder } from '@builder.io/react'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { SectionHeading } from '@/ui/SectionHeading'
import { BenefitCard } from './BenefitCard'
import type { Benefit, BenefitItemsType } from './benefit-types'

interface BenefitsGridProps {
  headline: string
  subheadline: string
  benefitItems: BenefitItemsType
}

export const BenefitsGrid = ({ headline, subheadline, benefitItems = [] }: BenefitsGridProps) => {
  const benefits: Benefit[] = benefitItems.map((item) => {
    const data = item.benefit?.value?.data

    return {
      title: data?.title ?? '',
      description: data?.description ?? '',
    }
  })

  return (
    <section style={{ padding: '90px clamp(20px, 8.4vw, 162px)' }}>
      <SectionHeading title={headline} description={subheadline} />

      <div className="flex flex-col gap-[30px]">
        {/* Row 1 — 2 cards */}
        <div
          className="grid gap-[30px]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
        >
          {benefits.slice(0, 2).map((benefit) => (
            <BenefitCard key={benefit.title} benefit={benefit} />
          ))}
        </div>

        {/* Row 2 — remaining cards */}
        <div
          className="grid gap-[30px]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          {benefits.slice(2).map((benefit) => (
            <BenefitCard key={benefit.title} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  )
}

export const registerBenefitsGrid = () => {
  Builder.registerComponent(BenefitsGrid, {
    name: 'BenefitsGrid',
    inputs: [
      {
        name: 'headline',
        type: 'text',
        defaultValue: 'Benefits',
      },
      {
        name: 'subheadline',
        type: 'text',
        defaultValue: 'What working with me looks like.',
      },
      {
        name: 'benefitItems',
        type: 'list',
        subFields: [{ name: 'benefit', type: 'reference', model: BUILDER_IO_MODELS.BENEFIT_ITEM }],
      },
    ],
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
