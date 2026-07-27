import { Link as RouterLink } from '@tanstack/react-router'
import clsx from 'clsx'
import { ctaClassName } from '@/ui/ctaClassName'
import { type RouterLinkProps, toRouterPath } from '@/ui/routerLinkProps'

/**
 * Accent CTA link built on TanStack Router's Link so internal navigation stays
 * client-side. Pass `to` for the destination and an optional trailing `icon`.
 * For a plain inline link without the button fill, use `TextLink`.
 */
export const Link = ({ icon, children, className, to, ...rest }: RouterLinkProps) => (
  <RouterLink
    to={toRouterPath(to)}
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
