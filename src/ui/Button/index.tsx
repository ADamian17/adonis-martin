import clsx from 'clsx'
import type { ReactNode } from 'react'
import { Button as AriaButton, type ButtonProps as AriaButtonProps } from 'react-aria-components'
import { ctaClassName } from '@/ui/ctaClassName'

type Props = {
  children: ReactNode
  icon?: ReactNode
  className?: string
} & Omit<AriaButtonProps, 'children' | 'className'>

/** Accent CTA button built on react-aria's Button, for correct press/hover/focus/disabled state. */
export const Button = ({ icon, children, className = '', ...rest }: Props) => (
  <AriaButton
    className={clsx(
      ctaClassName,
      'transition-colors data-[hovered]:bg-accent/90 data-[pressed]:bg-accent/80 data-[focus-visible]:outline-2 data-[focus-visible]:outline-accent data-[focus-visible]:outline-offset-2 data-[disabled]:opacity-50',
      className,
    )}
    {...rest}
  >
    {children}
    {icon}
  </AriaButton>
)
