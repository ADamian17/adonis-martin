import { Builder } from '@builder.io/react'
import type { ReactNode } from 'react'

import { BUILDER_IO_MODELS } from '@/services/builderIO/models'

type Props = {
  title: string
  description: string
  children: ReactNode
}

export const CtaBanner = ({ title, description, children }: Props) => (
  <section style={{ padding: '30px clamp(20px, 8.4vw, 162px) 90px' }}>
    <div
      className="flex flex-wrap items-center justify-between gap-[30px] rounded-xl bg-purple-fill border border-purple-border"
      style={{ padding: '60px' }}
    >
      <div className="flex flex-col gap-3" style={{ maxWidth: '60ch' }}>
        <h3
          className="m-0 font-semibold text-heading"
          style={{ fontSize: 'clamp(26px, 2.6vw, 34px)' }}
        >
          {title}
        </h3>
        <p className="m-0 font-normal text-[17px] leading-[1.6] text-body">{description}</p>
      </div>
      {children}
    </div>
  </section>
)

export const registerCtaBanner = () => {
  Builder.registerComponent(CtaBanner, {
    name: 'CtaBanner',
    models: [BUILDER_IO_MODELS.PAGE],
    inputs: [
      { name: 'title', type: 'text', defaultValue: '' },
      { name: 'description', type: 'text', defaultValue: '' },
    ],
  })
}
