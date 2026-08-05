import type { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

/**
 * One labelled footer column: an uppercase eyebrow heading above whatever list the
 * column owns. The list container is supplied by the caller so each column can pick
 * its own element (`nav`, `address`, plain `div`).
 */
export const FooterColumn = ({ title, children }: Props) => (
  <div>
    <h2 className="mb-5.5 text-[13px] font-bold uppercase tracking-[0.14em] text-faint">{title}</h2>
    {children}
  </div>
)
