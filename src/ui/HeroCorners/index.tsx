import clsx from 'clsx'
import type { CSSProperties } from 'react'

interface HeroCornersProps {
  /** Responsive width of each ornament, e.g. "clamp(150px, 26vw, 300px)". */
  width: string
  /** Stacking level, for panels that layer other content over the background. */
  zIndex?: number
}

/**
 * The pair of faceted notches that bite into the top-left and bottom-right of a
 * hero panel. The shapes are painted as CSS masks rather than images so they
 * always match the page background exactly.
 */
const cornerClassName = 'pointer-events-none absolute aspect-[388/349] bg-beige'

const maskStyle = (shape: string): CSSProperties => ({
  maskImage: `url('${shape}')`,
  maskPosition: 'top left',
  maskRepeat: 'no-repeat',
  maskSize: 'contain',
  WebkitMaskImage: `url('${shape}')`,
  WebkitMaskPosition: 'top left',
  WebkitMaskRepeat: 'no-repeat',
  WebkitMaskSize: 'contain',
})

export const HeroCorners = ({ width, zIndex }: HeroCornersProps) => (
  <>
    <div
      aria-hidden="true"
      className={clsx(cornerClassName, '-left-px -top-px')}
      style={{ width, zIndex, ...maskStyle('/images/abstract-1.svg') }}
    />
    <div
      aria-hidden="true"
      className={clsx(cornerClassName, '-bottom-px -right-px rotate-180')}
      style={{ width, zIndex, ...maskStyle('/images/abstract-2.svg') }}
    />
  </>
)
