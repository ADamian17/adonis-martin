import { Builder } from '@builder.io/react'
import { Star } from 'lucide-react'
import { faqItems } from '@/data/faq'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { Accordion } from '@/ui/Accordion'
import { Card } from '@/ui/Card'
import { GradientIconBox } from '@/ui/GradientIconBox'
import { Link } from '@/ui/Link'
import { SectionHeading } from '@/ui/SectionHeading'

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
    <Link href="#contact" className="self-start px-6 py-[18px]">
      Contact Me
    </Link>
  </Card>
)

export const FaqAccordion = () => (
  <section style={{ padding: '90px clamp(20px, 8.4vw, 162px)' }}>
    <SectionHeading
      title="Frequently Asked Questions"
      description="Here are answers to some common questions."
    />

    <div
      className="grid gap-[30px] items-start"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
    >
      <Accordion items={faqItems} />

      <CtaCard />
    </div>
  </section>
)

export const registerFaqAccordion = () => {
  Builder.registerComponent(FaqAccordion, {
    name: 'FaqAccordion',
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
