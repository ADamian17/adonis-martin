import clsx from 'clsx'
import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
}

/**
 * Page section shell: constrains content to the site width with the standard
 * gutters and vertical rhythm. Used by every page section except the hero.
 */
export const Section = ({ children, id, className }: SectionProps) => (
  <section
    id={id}
    className={clsx('mx-auto max-w-[1596px] py-22.5 px-[clamp(20px,8.4vw,162px)]', className)}
  >
    {children}
  </section>
)
