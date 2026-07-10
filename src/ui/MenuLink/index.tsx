import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { isExternalUrl } from '@/utils/url'

type Props = {
  url: string
  target?: string
  ariaLabel?: string
  className?: string
  onClick?: () => void
  children: ReactNode
}

/**
 * Renders a navigation link: TanStack Router's `Link` for internal app routes (client-side
 * routing) and a plain anchor for external URLs, honouring the item's `target`.
 */
export const MenuLink = ({
  url,
  target = '_self',
  ariaLabel,
  className,
  onClick,
  children,
}: Props) =>
  isExternalUrl(url) ? (
    <a
      href={url}
      target={target}
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    <Link to={url} aria-label={ariaLabel} className={className} onClick={onClick}>
      {children}
    </Link>
  )
