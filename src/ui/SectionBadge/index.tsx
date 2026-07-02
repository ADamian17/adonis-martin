import clsx from 'clsx'
import type { ReactNode } from 'react'

type Align = 'center' | 'start'
type Size = 'sm' | 'lg'

type Props = {
  children: ReactNode
  align?: Align
  size?: Size
}

const alignClasses: Record<Align, string> = {
  center: 'inline-block',
  start: 'inline-flex self-start items-center',
}

const sizeClasses: Record<Size, string> = {
  sm: 'text-[18px] text-accent',
  lg: 'text-[26px] text-heading',
}

/** White pill badge (radius/shadow shared here so re-theming it is a one-file change). */
export const SectionBadge = ({ children, align = 'center', size = 'sm' }: Props) => (
  <span
    className={clsx(
      alignClasses[align],
      'rounded-[13px] bg-white px-[18px] py-[10px] font-medium',
      sizeClasses[size],
    )}
    style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}
  >
    {children}
  </span>
)
