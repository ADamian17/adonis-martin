export type Theme = 'light' | 'dark'

/** localStorage key holding the visitor's choice: a `Theme`, or absent for `auto`. */
export const THEME_STORAGE_KEY = 'theme'

/**
 * Runs before the page is painted so the resolved theme is already on <html> by
 * the time anything renders and the palette never flashes.
 *
 * Defaults to `auto`, following the OS preference until the visitor picks a side.
 * Stringified into an inline script, so it must stay dependency-free.
 */
export const THEME_INIT_SCRIPT = `(function() {
  try {
    const theme = localStorage.getItem('${THEME_STORAGE_KEY}') || 'auto';
    const resolved = theme === 'auto'
      ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : theme;
    document.documentElement.classList.add(resolved);
  } catch (e) {
    document.documentElement.classList.add('light');
  }
})();`

/**
 * Flips the theme on <html> and persists the choice, which also opts the visitor
 * out of `auto` from here on.
 *
 * Deliberately DOM-first rather than React state: the toggle's icons are styled
 * by the `dark:` variant, so nothing re-renders and there is no server/client
 * mismatch to reconcile on hydration.
 */
export const toggleTheme = () => {
  const root = document.documentElement
  const next: Theme = root.classList.contains('dark') ? 'light' : 'dark'

  root.classList.remove('light', 'dark')
  root.classList.add(next)

  try {
    localStorage.setItem(THEME_STORAGE_KEY, next)
  } catch {
    // Private browsing can reject writes; the theme still applies for this page view.
  }
}
