import { Builder } from '@builder.io/react'

import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { SectionBadge } from '@/ui/SectionBadge'

type Props = {
  badge: string
  title: string
  description: string
}

export const PageHeader = ({ badge, title, description }: Props) => (
  <section
    className="text-center"
    style={{
      padding: '80px clamp(20px, 8.4vw, 162px) 30px',
      maxWidth: '1920px',
      marginInline: 'auto',
    }}
  >
    <div className="mb-6">
      <SectionBadge>{badge}</SectionBadge>
    </div>
    <h1
      className="m-0 mx-auto mb-4 font-semibold text-heading leading-[1.16]"
      style={{ fontSize: 'clamp(38px, 3.8vw, 54px)', maxWidth: '18ch' }}
    >
      {title}
    </h1>
    <p
      className="m-0 mx-auto font-normal text-[18px] leading-[1.6] text-body"
      style={{ maxWidth: '60ch' }}
    >
      {description}
    </p>
  </section>
)

export const registerPageHeader = () => {
  Builder.registerComponent(PageHeader, {
    name: 'PageHeader',
    models: [BUILDER_IO_MODELS.PAGE],
    inputs: [
      { name: 'badge', type: 'text', defaultValue: '' },
      { name: 'title', type: 'text', defaultValue: '' },
      { name: 'description', type: 'text', defaultValue: '' },
    ],
  })
}
