import { Moon, Sun } from 'lucide-react'
import { Button as AriaButton } from 'react-aria-components'

import { toggleTheme } from '@/utils/theme'

/**
 * Light/dark switch for the navbar.
 *
 * Both icons are always rendered and swapped by the `dark:` variant rather than
 * by state, so the correct one is painted on the very first frame even though
 * the page is prerendered and the theme is only known in the browser.
 */
export const ThemeToggle = () => (
  <AriaButton
    onPress={toggleTheme}
    aria-label="Toggle dark mode"
    className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-lg text-heading transition-colors data-[hovered]:bg-card-ivory data-[focus-visible]:outline-2 data-[focus-visible]:outline-accent data-[focus-visible]:outline-offset-2"
  >
    <Moon size={19} strokeWidth={2} className="dark:hidden" aria-hidden="true" />
    <Sun size={19} strokeWidth={2} className="hidden dark:block" aria-hidden="true" />
  </AriaButton>
)
