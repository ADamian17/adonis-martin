import clsx from 'clsx'
import type { ElementType, ReactNode } from 'react'

type Tone = 'warm' | 'cream' | 'ivory' | 'alt' | 'light' | 'purple'

type Props = {
  children: ReactNode
  tone?: Tone
  padding?: number | string
  className?: string
  as?: ElementType
}

const toneClasses: Record<Tone, string> = {
  warm: 'bg-card-warm',
  cream: 'bg-card-cream',
  ivory: 'bg-card-ivory',
  alt: 'bg-card-alt',
  light: 'bg-card-light',
  purple: 'bg-purple-fill',
}

/** Rounded surface container; tone maps to the @theme card color tokens in main.css. */
export const Card = ({
  children,
  tone = 'warm',
  padding = 50,
  className = '',
  as: Tag = 'div',
}: Props) => (
  <Tag className={clsx('rounded-xl', toneClasses[tone], className)} style={{ padding }}>
    {children}
  </Tag>
)
