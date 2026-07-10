import { Builder } from '@builder.io/react'
import { Star } from 'lucide-react'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { Accordion } from '@/ui/Accordion'
import { Card } from '@/ui/Card'
import { GradientIconBox } from '@/ui/GradientIconBox'
import { Link } from '@/ui/Link'
import { SectionHeading } from '@/ui/SectionHeading'
import type { FaqItem, FaqItemsType } from './faq-types'

const CtaCard = () => (
  <Card tone="purple" className="flex flex-col gap-6 border border-purple-border">
    <GradientIconBox size={60}>
      <Star size={28} strokeWidth={1.6} className="text-white" />
    </GradientIconBox>
    <h3 className="font-semibold text-[24px] text-heading">Still have any Questions?</h3>
    <p className="text-body text-[16px] leading-[1.6]">
      Let's collaborate to build something exceptional. Contact me today to discuss your project and
      bring your digital vision to life.
    </p>
    <Link href="#contact" className="self-start px-6 py-4.5">
      Contact Me
    </Link>
  </Card>
)

interface FaqAccordionProps {
  headline: string
  subheadline: string
  faqItems: FaqItemsType
}

export const FaqAccordion = ({ headline, subheadline, faqItems = [] }: FaqAccordionProps) => {
  const items: FaqItem[] = faqItems.map((item) => {
    const data = item.faq?.value?.data

    return {
      question: data?.question ?? '',
      answer: data?.answer ?? '',
    }
  })

  return (
    <section className="max-w-[1596px] mx-auto" style={{ padding: '90px clamp(20px, 8.4vw, 162px)' }}>
      <SectionHeading align='center' title={headline} description={subheadline} />

      <div
        className="grid gap-7.5 items-start"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
      >
        <Accordion items={items} />

        <CtaCard />
      </div>
    </section>
  )
}

export const registerFaqAccordion = () => {
  Builder.registerComponent(FaqAccordion, {
    name: 'FaqAccordion',
    inputs: [
      {
        name: 'headline',
        type: 'text',
        defaultValue: 'Frequently Asked Questions',
      },
      {
        name: 'subheadline',
        type: 'text',
        defaultValue: 'Here are answers to some common questions.',
      },
      {
        name: 'faqItems',
        type: 'list',
        subFields: [{ name: 'faq', type: 'reference', model: BUILDER_IO_MODELS.FAQ_ITEM }],
      },
    ],
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
