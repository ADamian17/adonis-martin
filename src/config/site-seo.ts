/**
 * Site-wide SEO defaults used to derive page metadata (title, description,
 * OpenGraph, canonical URLs). Acts as the equivalent of Next.js `metadataBase`.
 * Per-page values come from the Builder `page` model and override these.
 */
export const SITE_SEO = {
  url: 'https://adonismartin.com',
  name: 'Adonis D. Martin | Software Engineer',
  title: 'Adonis D. Martin | Software Engineer',
  description:
    'Adonis D. Martin is a software engineer and web developer specializing in building performant, accessible, and user-friendly web applications.',
  locale: 'en_US',
  robots: 'index, follow, nocache',
  googleBot: 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
  ogImage: {
    url: '/images/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Adonis D. Martin — Software Engineer',
  },
} as const

/**
 * Resolves a relative path against the site's base URL. Absolute URLs
 * (e.g. Builder.io CDN images) are returned unchanged.
 */
export const toAbsoluteUrl = (path: string): string => {
  if (/^https?:\/\//.test(path)) return path

  return new URL(path, SITE_SEO.url).toString()
}
