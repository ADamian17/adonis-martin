import clsx from 'clsx'
import type { ReactNode } from 'react'
import { Button as AriaButton, type ButtonProps as AriaButtonProps } from 'react-aria-components'
import { ctaClassName } from '@/ui/ctaClassName'

type Props = {
  children: ReactNode
  icon?: ReactNode
  isLoading?: boolean
  className?: string
} & Omit<AriaButtonProps, 'children' | 'className'>

const Spinner = () => (
  <svg
    aria-hidden="true"
    className="animate-spin"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
)

/** Accent CTA button built on react-aria's Button, for correct press/hover/focus/disabled state. */
export const Button = ({
  icon,
  children,
  isLoading = false,
  isDisabled,
  className = '',
  ...rest
}: Props) => (
  <AriaButton
    isDisabled={isDisabled || isLoading}
    className={clsx(
      ctaClassName,
      'transition-colors data-[hovered]:bg-accent/90 data-[pressed]:bg-accent/80 data-[focus-visible]:outline-2 data-[focus-visible]:outline-accent data-[focus-visible]:outline-offset-2 data-[disabled]:opacity-50',
      className,
    )}
    {...rest}
  >
    {children}
    {isLoading ? <Spinner /> : icon}
  </AriaButton>
)
