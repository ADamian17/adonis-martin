import { Builder } from '@builder.io/react'

import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { Section } from '@/ui/Section'
import { SectionHeading } from '@/ui/SectionHeading'
import type { StackCategory, TechItemsType } from './tech-types'

interface TechStackProps {
  headline: string
  subheadline: string
  techItems: TechItemsType
}

export const TechStack = ({ headline, subheadline, techItems = [] }: TechStackProps) => {
  const stack: StackCategory[] = techItems.map((item) => {
    const data = item.techItem?.value?.data

    return {
      category: data?.category ?? '',
      items: data?.items?.map((entry) => entry.item) ?? [],
    }
  })

  return (
    <Section py="py-17.5">
      <SectionHeading align="center" title={headline} description={subheadline} />

      <div className="grid gap-7.5 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {stack.map((cat) => (
          <div
            key={cat.category}
            className="rounded-xl bg-card-warm flex flex-col gap-4.5 p-10"
          >
            <h3 className="m-0 font-semibold text-[20px] text-heading">{cat.category}</h3>
            <div className="flex flex-wrap gap-2.5">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="py-2.5 px-4 rounded-lg bg-white font-medium text-[15px] text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export const registerTechStack = () => {
  Builder.registerComponent(TechStack, {
    name: 'TechStack',
    inputs: [
      {
        name: 'headline',
        type: 'text',
        defaultValue: 'Tools I Work With',
      },
      {
        name: 'subheadline',
        type: 'text',
        defaultValue: 'A focused, modern toolkit for building reliable frontends',
      },
      {
        name: 'techItems',
        type: 'list',
        subFields: [{ name: 'techItem', type: 'reference', model: BUILDER_IO_MODELS.TECH_ITEM }],
      },
    ],
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
