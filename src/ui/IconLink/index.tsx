import clsx from 'clsx'
import type { ReactNode } from 'react'
import { Link as AriaLink, type LinkProps as AriaLinkProps } from 'react-aria-components'

type Props = {
  children: ReactNode
  size?: number
  className?: string
} & Omit<AriaLinkProps, 'children' | 'className'>

/** Square accent icon link (social links etc), built on react-aria's Link. size controls the box in px. */
export const IconLink = ({ size = 44, children, className = '', ...rest }: Props) => (
  <AriaLink
    className={clsx(
      'flex items-center justify-center rounded-lg bg-accent text-white transition-colors data-[hovered]:bg-accent/90 data-[pressed]:bg-accent/80 data-[focus-visible]:outline-2 data-[focus-visible]:outline-accent data-[focus-visible]:outline-offset-2',
      className,
    )}
    style={{ width: size, height: size }}
    {...rest}
  >
    {children}
  </AriaLink>
)
