import clsx from 'clsx'
import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
  /** Vertical padding utility class(es); overrides the default 90px (e.g. "py-17.5" or "pt-20 pb-15"). */
  py?: string
}

/**
 * Page section shell: constrains content to the site width with the standard
 * gutters. Vertical rhythm defaults to 90px and can be overridden via `py`.
 * Used by every page section except the hero.
 */
export const Section = ({ children, id, className, py = 'py-22.5' }: SectionProps) => (
  <section id={id} className={clsx('mx-auto max-w-[1596px] px-[clamp(20px,8.4vw,162px)]', py, className)}>
    {children}
  </section>
)
