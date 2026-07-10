import { Builder } from '@builder.io/react'
import { Star } from 'lucide-react'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { Accordion } from '@/ui/Accordion'
import { Card } from '@/ui/Card'
import { GradientIconBox } from '@/ui/GradientIconBox'
import { Link } from '@/ui/Link'
import { Section } from '@/ui/Section'
import { SectionHeading } from '@/ui/SectionHeading'
import type { FaqItem, FaqItemsType } from './faq-types'

const CtaCard = ({ faqCta }: { faqCta: { title: string; description: string; ctaText: string; ctaLink: string } }) => (
  <Card tone="purple" className="flex flex-col gap-6 border border-purple-border">
    <GradientIconBox size={60}>
      <Star size={28} strokeWidth={1.6} className="text-white" />
    </GradientIconBox>
    <h3 className="font-semibold text-[24px] text-heading">{faqCta?.title}</h3>
    <p className="text-body text-[16px] leading-[1.6]">
      {faqCta?.description}
    </p>

    <Link to={faqCta?.ctaLink} className="self-start px-6 py-4.5">
      {faqCta?.ctaText}
    </Link>
  </Card>
)

interface FaqAccordionProps {
  headline: string
  subheadline: string
  faqItems: FaqItemsType
  faqCta: {
    title: string
    description: string
    ctaText: string
    ctaLink: string
  }
}

export const FaqAccordion = ({ headline, subheadline, faqItems = [], faqCta }: FaqAccordionProps) => {
  const items: FaqItem[] = faqItems.map((item) => {
    const data = item.faq?.value?.data

    return {
      question: data?.question ?? '',
      answer: data?.answer ?? '',
    }
  })

  return (
    <Section id="faqs">
      <SectionHeading align='center' title={headline} description={subheadline} />

      <div
        className="grid gap-7.5 items-start"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
      >
        <Accordion items={items} />

        <CtaCard faqCta={faqCta} />
      </div>
    </Section>
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
        name: 'faqCta',
        type: 'object',
        subFields: [
          {
            name: 'title',
            type: 'text',
            defaultValue: 'Still have any Questions?',
          },
          {
            name: 'description',
            type: 'text',
            defaultValue: "Let's collaborate to build something exceptional. Contact me today to discuss your project and bring your digital vision to life.",
          },
          {
            name: 'ctaText',
            type: 'text',
            defaultValue: 'Contact Me',
          },
          {
            name: 'ctaLink',
            type: 'text',
            defaultValue: '/contact-me',
          },
        ],
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
