import type { LinkComponentProps, LinkProps } from '@tanstack/react-router'
import type { ReactNode } from 'react'

/** Props shared by the router-backed link components (`Link`, `TextLink`). */
export interface RouterLinkProps extends Omit<LinkComponentProps, 'to' | 'className'> {
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

/** Hands a CMS-supplied path to the router, which resolves it via the catch-all route. */
export const toRouterPath = (to: string) => to as LinkProps['to']
