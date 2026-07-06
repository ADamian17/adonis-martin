import { Builder } from '@builder.io/react'
import type { ReactElement } from 'react'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { Card } from '@/ui/Card'
import { GradientIconBox } from '@/ui/GradientIconBox'
import { SectionHeading } from '@/ui/SectionHeading'
import type { ValueIcon, ValueItem, ValueItemsType } from './value-types'

const iconMap: Record<ValueIcon, ReactElement> = {
  target: (
    <svg
      aria-hidden="true"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  ),
  zap: (
    <svg
      aria-hidden="true"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
    </svg>
  ),
  message: (
    <svg
      aria-hidden="true"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
}

interface ValuesProps {
  headline: string
  subheadline: string
  valueItems: ValueItemsType
}

export const Values = ({ headline, subheadline, valueItems = [] }: ValuesProps) => {
  const values: ValueItem[] = valueItems.map((item) => {
    const data = item.valueItem?.value?.data

    return {
      title: data?.title ?? '',
      description: data?.description ?? '',
      icon: data?.icon ?? 'target',
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
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
      >
        {values.map((item) => (
          <Card key={item.title} className="flex flex-col gap-5">
            <GradientIconBox>{iconMap[item.icon]}</GradientIconBox>
            <h3 className="m-0 font-semibold text-[22px] text-heading">{item.title}</h3>
            <p className="m-0 font-normal text-[16px] leading-[1.6] text-body">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  )
}

export const registerValues = () => {
  Builder.registerComponent(Values, {
    name: 'Values',
    inputs: [
      {
        name: 'headline',
        type: 'text',
        defaultValue: 'How I Work',
      },
      {
        name: 'subheadline',
        type: 'text',
        defaultValue: 'The principles behind everything I ship',
      },
      {
        name: 'valueItems',
        type: 'list',
        subFields: [{ name: 'valueItem', type: 'reference', model: BUILDER_IO_MODELS.VALUE_ITEM }],
      },
    ],
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
