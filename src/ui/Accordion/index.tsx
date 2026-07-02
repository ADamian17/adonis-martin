import clsx from 'clsx'
import { Plus, X } from 'lucide-react'
import {
  Button as AriaButton,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Heading,
} from 'react-aria-components'

type AccordionItem = { question: string; answer: string }

type Props = { items: AccordionItem[] }

const triggerClass =
  'flex w-full items-center justify-between gap-4 p-4 text-left bg-transparent cursor-pointer outline-none transition-colors data-[hovered]:bg-black/[0.03] data-[focus-visible]:outline-2 data-[focus-visible]:outline-accent data-[focus-visible]:outline-offset-[-2px]'

/** Single-expand FAQ accordion built on react-aria-components; owns hover/focus/press theming for the trigger. */
export const Accordion = ({ items }: Props) => (
  <DisclosureGroup defaultExpandedKeys={['0']} allowsMultipleExpanded={false}>
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <Disclosure
          key={item.question}
          id={String(i)}
          className={({ isExpanded }) =>
            clsx(
              'rounded-xl border-b border-border-soft overflow-hidden',
              isExpanded && 'bg-purple-open',
            )
          }
        >
          {({ isExpanded }) => (
            <>
              <Heading>
                <AriaButton slot="trigger" className={triggerClass}>
                  <span className="font-medium text-[17px] text-heading">{item.question}</span>
                  {isExpanded ? (
                    <X size={20} className="shrink-0 text-accent" />
                  ) : (
                    <Plus size={20} className="shrink-0 text-muted" />
                  )}
                </AriaButton>
              </Heading>
              <DisclosurePanel className="p-4 text-body text-[16px] leading-[1.6]">
                {item.answer}
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  </DisclosureGroup>
)
