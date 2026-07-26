import type { Page } from '@playwright/test'

/**
 * Navigates and waits until the page is actually interactive.
 *
 * The site is server-rendered, so markup arrives before React attaches its event
 * listeners. Anything clickable is therefore visible — and inert — for a window
 * after `goto` resolves. Playwright's actionability checks cannot see that: the
 * element is present, visible, and enabled, so the click lands and silently does
 * nothing.
 *
 * This did not exist while the site was a client-rendered SPA, where nothing was
 * painted until the bundle had run and hydration was implicit in seeing anything
 * at all.
 *
 * `networkidle` is the practical signal here: the client bundle and the Builder
 * content fetches have all settled by the time it fires, which is strictly after
 * hydration.
 */
export const gotoHydrated = async (page: Page, path: string) => {
  const response = await page.goto(path)

  await page.waitForLoadState('networkidle')

  return response
}
