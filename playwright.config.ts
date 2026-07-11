import { defineConfig, devices } from '@playwright/test'

/**
 * Playwright end-to-end test configuration.
 *
 * Tests live in ./e2e and run against the real Vite dev server, which Playwright
 * starts automatically (see `webServer`). Because the site's content is fetched
 * from Builder.io at runtime, these tests exercise the app exactly as a visitor
 * would — routing, rendering, and real CMS content included.
 *
 * @see https://playwright.dev/docs/test-configuration
 */

const PORT = 5173
const baseURL = `http://localhost:${PORT}`

export default defineConfig({
  testDir: './e2e',
  // Fail the build if a `test.only` is committed by mistake.
  forbidOnly: !!process.env.CI,
  // One local retry absorbs cold-start flakes: on the first run, parallel workers
  // all trigger cold Builder.io content fetches at once and a page can be slow to
  // hydrate. CI gets more retries for the same reason.
  retries: process.env.CI ? 2 : 1,
  // Opt into fully parallel test files for speed.
  fullyParallel: true,
  reporter: 'html',

  use: {
    baseURL,
    // Capture a trace on the first retry so failures are debuggable after the fact
    // (open with `npx playwright show-trace`).
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    // Content is fetched from Builder.io at runtime, so give actions/navigations
    // headroom for a cold CMS response before failing.
    actionTimeout: 15_000,
    navigationTimeout: 20_000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Start the dev server before tests and reuse it locally between runs.
  webServer: {
    command: `npm run dev -- --port ${PORT} --strictPort`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})
