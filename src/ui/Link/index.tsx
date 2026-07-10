import { Link as RouterLink } from '@tanstack/react-router'
import clsx from 'clsx'
import type { ReactNode } from 'react'
import { ctaClassName } from '@/ui/ctaClassName'

type Props = {
  to: string
  children: ReactNode
  icon?: ReactNode
  className?: string
  target?: '_self' | '_blank'
  'aria-label'?: string
}

/**
 * Accent CTA link built on TanStack Router's Link so internal navigation stays
 * client-side. Pass `to` for the destination and an optional trailing `icon`.
 */
export const Link = ({ icon, children, className, ...rest }: Props) => (
  <RouterLink
    className={clsx(
      ctaClassName,
      'transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2',
      className,
    )}
    {...rest}
  >
    {children}
    {icon}
  </RouterLink>
)
