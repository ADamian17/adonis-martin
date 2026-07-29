import clsx from 'clsx'
import type { ReactNode } from 'react'

type ArticleColumnProps = {
  /** The design centres each band at its own width: 820 header, 1080 cover, 760 body. */
  maxWidth: number
  className?: string
  children: ReactNode
}

/** Centred column with the article's gutters, shared by every band of the page. */
export const ArticleColumn = ({ maxWidth, className, children }: ArticleColumnProps) => (
  <div className={clsx('mx-auto px-[clamp(20px,6vw,40px)]', className)} style={{ maxWidth }}>
    {children}
  </div>
)
