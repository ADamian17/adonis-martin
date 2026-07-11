import { expect, test } from '@playwright/test'

/**
 * Contact form tests.
 *
 * Demonstrates two patterns you will reuse constantly:
 *   1. Asserting client-side validation feedback.
 *   2. Intercepting a network request (`page.route`) so a test never hits a real
 *      third-party endpoint (here, the FormKeep submission URL).
 */
test.describe('Contact form', () => {
  test('shows validation errors when submitted empty', async ({ page }) => {
    await page.goto('/contact-me')

    // Locate the submit button by its accessible name (case-insensitive regex).
    await page.getByRole('button', { name: /send message/i }).click()

    // The required-field validators should surface inline messages.
    await expect(page.getByText('Please enter your name.')).toBeVisible()
    await expect(page.getByText('Please add a short message.')).toBeVisible()
  })

  test('submits successfully and shows the thank-you state', async ({ page }) => {
    // Intercept the FormKeep POST *before* navigating, so the real submission
    // never leaves the machine. We fulfil it with a fake 200 response.
    await page.route(/formkeep\.com/, (route) =>
      route.fulfill({ status: 200, contentType: 'application/json', body: '{}' }),
    )

    await page.goto('/contact-me')

    // `getByLabel` matches the field via its <label> — the asterisk is part of
    // the visible label text ("Name*", "Email*", "Message*").
    await page.getByLabel('Name*').fill('Ada Lovelace')
    await page.getByLabel('Email*').fill('ada@example.com')
    await page.getByLabel('Message*').fill('Hello — I have a project in mind.')

    await page.getByRole('button', { name: /send message/i }).click()

    // On success the form is replaced by a personalised confirmation heading.
    await expect(page.getByRole('heading', { name: /thanks, ada/i })).toBeVisible()
  })
})
