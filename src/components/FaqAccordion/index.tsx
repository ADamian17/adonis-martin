import { Builder } from '@builder.io/react'
import { Plus, Star, X } from 'lucide-react'
import {
  Button,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Heading,
} from 'react-aria-components'
import { faqItems } from '@/data/faq'

const CtaCard = () => (
  <div
    className="flex flex-col gap-6 rounded-xl p-[50px] border border-purple-border"
    style={{ background: '#f5f0ff' }}
  >
    <div
      className="flex items-center justify-center rounded-lg w-[60px] h-[60px]"
      style={{ background: 'linear-gradient(135deg, #9a5cff, #681aff)' }}
    >
      <Star size={28} strokeWidth={1.6} className="text-white" />
    </div>
    <h3 className="font-semibold text-[24px] text-heading">Still have any Questions?</h3>
    <p className="text-body text-[16px] leading-[1.6]">
      Let's collaborate to build something exceptional. Contact me today to discuss your project and
      bring your digital vision to life.
    </p>
    <a
      href="#contact"
      className="inline-flex self-start bg-accent text-card-cream font-medium rounded-lg px-6 py-[18px] hover:bg-accent/90 transition-colors"
    >
      Contact Me
    </a>
  </div>
)

export const FaqAccordion = () => (
  <section style={{ padding: '90px clamp(20px, 8.4vw, 162px)' }}>
    <div className="mb-[60px]">
      <h2
        className="font-semibold text-heading mb-4"
        style={{ fontSize: 'clamp(34px, 3.4vw, 48px)' }}
      >
        Frequently Asked Questions
      </h2>
      <p className="text-body text-[18px] leading-[1.55]">
        Here are answers to some common questions.
      </p>
    </div>

    <div
      className="grid gap-[30px] items-start"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
    >
      <DisclosureGroup defaultExpandedKeys={['0']} allowsMultipleExpanded={false}>
        <div className="flex flex-col gap-4">
          {faqItems.map((item, i) => (
            <Disclosure
              key={item.question}
              id={String(i)}
              className={({ isExpanded }) =>
                `rounded-xl border-b border-border-soft overflow-hidden ${isExpanded ? 'bg-purple-open' : ''}`
              }
            >
              {({ isExpanded }) => (
                <>
                  <Heading>
                    <Button
                      slot="trigger"
                      className="flex w-full items-center justify-between gap-4 px-6 py-[22px] text-left bg-transparent cursor-pointer"
                    >
                      <span className="font-medium text-[17px] text-heading">{item.question}</span>
                      {isExpanded ? (
                        <X size={20} className="shrink-0 text-accent" />
                      ) : (
                        <Plus size={20} className="shrink-0 text-[#333]" />
                      )}
                    </Button>
                  </Heading>
                  <DisclosurePanel className="px-6 pb-6 text-body text-[16px] leading-[1.6]">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </DisclosureGroup>

      <CtaCard />
    </div>
  </section>
)

export const registerFaqAccordion = () => {
  Builder.registerComponent(FaqAccordion, {
    name: 'FaqAccordion',
  })
}
