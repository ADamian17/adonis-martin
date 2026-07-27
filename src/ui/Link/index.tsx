import { type LinkComponentProps, type LinkProps, Link as RouterLink } from '@tanstack/react-router'
import clsx from 'clsx'
import type { ReactNode } from 'react'
import { ctaClassName } from '@/ui/ctaClassName'

interface Props extends Omit<LinkComponentProps, 'to' | 'className'> {
  /**
   * Destination path. Widened to `string` because every link on this site comes
   * from Builder at runtime: the router registers a single catch-all `/$` route,
   * so `LinkProps['to']` would otherwise narrow to the literal `'/$'`.
   */
  to: string
  children: ReactNode
  icon?: ReactNode
  /** Narrowed to a plain string; the router also allows a function form we don't use. */
  className?: string
}

/**
 * Accent CTA link built on TanStack Router's Link so internal navigation stays
 * client-side. Pass `to` for the destination and an optional trailing `icon`.
 */
export const Link = ({ icon, children, className, to, ...rest }: Props) => (
  <RouterLink
    to={to as LinkProps['to']}
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
