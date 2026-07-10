import clsx from 'clsx'
import type { ReactNode } from 'react'

type Shape = 'square' | 'circle'

type Props = {
  children: ReactNode
  size?: number
  shape?: Shape
}

const shapeClasses: Record<Shape, string> = {
  square: 'rounded-lg',
  circle: 'rounded-full',
}

/** Purple gradient icon box with inset glow; size controls the box in px. */
export const GradientIconBox = ({ children, size = 64, shape = 'square' }: Props) => (
  <div
    className={clsx('flex items-center justify-center', shapeClasses[shape])}
    style={{
      width: size,
      height: size,
      background: 'linear-gradient(135deg, var(--color-accent-mid), var(--color-accent))',
      boxShadow: 'inset 0 0 14px 4px rgba(255,255,255,0.45)',
    }}
  >
    {children}
  </div>
)
