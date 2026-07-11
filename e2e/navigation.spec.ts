import { expect, test } from '@playwright/test'

/**
 * Routing tests.
 *
 * The site uses a catch-all TanStack Router route that renders Builder pages, so
 * every path below is a real page. The second test also proves that internal
 * links navigate *client-side* (no full page reload) — which is exactly what the
 * `ui/Link` → TanStack Router change was meant to guarantee.
 */

const routes = ['/about-me', '/portfolio', '/contact-me']

test.describe('Site navigation', () => {
  for (const path of routes) {
    test(`renders ${path}`, async ({ page }) => {
      const response = await page.goto(path)

      // `goto` returns the main navigation response — assert it was not a 4xx/5xx.
      expect(response?.status() ?? 0).toBeLessThan(400)
      // Every page should surface at least one heading once content hydrates.
      await expect(page.getByRole('heading').first()).toBeVisible()
      // The URL path should match what we asked for (no unexpected redirect).
      expect(new URL(page.url()).pathname).toBe(path)
    })
  }

  test('navigates between pages client-side, without a full reload', async ({ page }) => {
    await page.goto('/')

    // Tag the live document. A client-side SPA navigation keeps the same document,
    // so this marker survives; a full browser reload would wipe it. This is a
    // reliable, framework-agnostic way to assert "this was client-side routing".
    await page.evaluate(() => {
      ;(window as unknown as { __noReload: boolean }).__noReload = true
    })

    // Target the header nav by its accessible name (aria-label="Primary").
    const headerNav = page.getByRole('navigation', { name: 'Primary' })
    await headerNav.getByRole('link', { name: /about me/i }).click()

    await expect(page).toHaveURL(/\/about-me/)
    const survived = await page.evaluate(
      () => (window as unknown as { __noReload?: boolean }).__noReload,
    )
    expect(survived).toBe(true)
  })
})
