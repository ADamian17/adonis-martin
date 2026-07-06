import { Builder } from '@builder.io/react'

import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
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
    <section
      style={{
        padding: '70px clamp(20px, 8.4vw, 162px)',
        maxWidth: '1920px',
        marginInline: 'auto',
      }}
    >
      <SectionHeading align="center" title={headline} description={subheadline} />

      <div
        className="grid gap-[30px]"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
      >
        {stack.map((cat) => (
          <div
            key={cat.category}
            className="rounded-xl bg-card-warm flex flex-col gap-[18px]"
            style={{ padding: '40px' }}
          >
            <h3 className="m-0 font-semibold text-[20px] text-heading">{cat.category}</h3>
            <div className="flex flex-wrap gap-[10px]">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="py-[10px] px-[16px] rounded-lg bg-white font-medium text-[15px] text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
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
