import { expect, test } from '@playwright/test'

/**
 * Home page smoke tests.
 *
 * These assert on *structure and roles* (headings, navigation, links) rather
 * than exact marketing copy, so they stay green even when the Builder.io content
 * is edited. That is the key habit for content-driven sites: test the shape of
 * the page, not the words.
 */
test.describe('Home page', () => {
  // `page` is a fresh browser tab, isolated per test. `baseURL` (from the config)
  // means `goto('/')` resolves to http://localhost:5173/.
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('loads with a document title and a single H1', async ({ page }) => {
    // The <title> is set per-page from Builder SEO data — assert it is non-empty.
    await expect(page).toHaveTitle(/.+/)

    // The hero renders exactly one top-level heading. Prefer role-based locators
    // (`getByRole`) over CSS selectors: they mirror what assistive tech sees.
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('shows the primary navigation with at least one link', async ({ page }) => {
    // Two <nav> landmarks exist (header + footer); each has an aria-label, so we
    // can target the header unambiguously by its accessible name.
    const headerNav = page.getByRole('navigation', { name: 'Primary' })
    await expect(headerNav).toBeVisible()
    // `count()` returns immediately, so guard it with an explicit expectation.
    expect(await headerNav.getByRole('link').count()).toBeGreaterThan(0)
  })

  test('hero has a visible call-to-action link', async ({ page }) => {
    // Scope the search to the hero section so we do not accidentally match a
    // navbar or footer link.
    const heroCta = page.locator('#home').getByRole('link').first()
    await expect(heroCta).toBeVisible()
  })
})
