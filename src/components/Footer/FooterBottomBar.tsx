import { ArrowUp } from 'lucide-react'
import { Button as AriaButton } from 'react-aria-components'

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

/** Closing rule of the footer: copyright line and a back-to-top control. */
export const FooterBottomBar = () => (
  <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-7 text-[15px] text-faint">
    <span>© {new Date().getFullYear()} Adonis D. Martin. All rights reserved.</span>

    <AriaButton
      onPress={scrollToTop}
      className="flex cursor-pointer items-center gap-2 font-medium text-faint transition-colors data-[hovered]:text-accent data-[focus-visible]:outline-2 data-[focus-visible]:outline-accent data-[focus-visible]:outline-offset-2"
    >
      Back to top
      <ArrowUp size={15} />
    </AriaButton>
  </div>
)
