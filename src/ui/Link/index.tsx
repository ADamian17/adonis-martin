import clsx from 'clsx'
import type { ReactNode } from 'react'
import { Link as AriaLink, type LinkProps as AriaLinkProps } from 'react-aria-components'
import { ctaClassName } from '@/ui/ctaClassName'

type Props = {
  children: ReactNode
  icon?: ReactNode
  className?: string
} & Omit<AriaLinkProps, 'children' | 'className'>

/**
 * Accent CTA link for same-page anchors and external URLs, built on react-aria's Link.
 * For internal app routes use TanStack Router's Link with `ctaClassName` directly —
 * react-aria's Link has no client-side routing of its own.
 */
export const Link = ({ icon, children, className = '', ...rest }: Props) => (
  <AriaLink
    className={clsx(
      ctaClassName,
      'transition-colors data-[hovered]:bg-accent/90 data-[pressed]:bg-accent/80 data-[focus-visible]:outline-2 data-[focus-visible]:outline-accent data-[focus-visible]:outline-offset-2',
      className,
    )}
    {...rest}
  >
    {children}
    {icon}
  </AriaLink>
)
