import { Link as RouterLink } from '@tanstack/react-router'
import clsx from 'clsx'
import { type RouterLinkProps, toRouterPath } from '@/ui/routerLinkProps'

/**
 * Inline accent text link — the quiet counterpart to `Link`, which is a filled
 * CTA button. Used for in-card affordances such as "View Project".
 */
export const TextLink = ({ icon, children, className, to, ...rest }: RouterLinkProps) => (
  <RouterLink
    to={toRouterPath(to)}
    className={clsx(
      'inline-flex items-center gap-2 font-medium text-accent no-underline transition-colors hover:text-accent-mid focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2',
      className,
    )}
    {...rest}
  >
    {children}
    {icon}
  </RouterLink>
)
