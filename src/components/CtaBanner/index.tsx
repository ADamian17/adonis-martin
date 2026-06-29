import { Builder } from '@builder.io/react'
import { Link } from '@tanstack/react-router'

import { BUILDER_IO_MODELS } from '@/services/builderIO/models'

type CtaButton = {
  label?: string
  url?: string
  target?: '_self' | '_blank'
  ariaLabel?: string
}

type Props = {
  title: string
  description: string
  ctaButton?: CtaButton
}

export const CtaBanner = ({ title, description, ctaButton }: Props) => (
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
      {ctaButton?.url && (
        <Link
          to={ctaButton.url}
          target={ctaButton.target}
          aria-label={ctaButton.ariaLabel}
          className="no-underline px-7 py-[18px] rounded-lg bg-accent text-card-cream font-medium text-[18px] whitespace-nowrap hover:bg-accent/90 transition-colors"
        >
          {ctaButton.label}
        </Link>
      )}
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
      {
        name: 'ctaButton',
        type: 'object',
        subFields: [
          { name: 'label', type: 'text', defaultValue: '' },
          { name: 'url', type: 'url', defaultValue: '' },
          { name: 'target', type: 'text', enum: ['_self', '_blank'], defaultValue: '_self' },
          { name: 'ariaLabel', type: 'text', defaultValue: '' },
        ],
      },
    ],
  })
}
