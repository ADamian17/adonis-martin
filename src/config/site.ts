/**
 * Site-wide constants used to derive page metadata (title, description,
 * OpenGraph, canonical URLs). Acts as the equivalent of Next.js `metadataBase`.
 */
export const SITE_CONFIG = {
  url: 'https://adonismartin.com',
  name: 'Adonis D. Martin | Frontend Engineer',
  title: 'Adonis D. Martin | Frontend Engineer',
  description:
    'Adonis D. Martin is a frontend engineer and web developer specializing in building performant, accessible, and user-friendly web applications.',
  locale: 'en_US',
  robots: 'index, follow, nocache',
  googleBot:
    'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
  ogImage: {
    url: '/images/android-chrome-512x512.png',
    width: 512,
    height: 512,
    alt: 'Adonis D. Martin',
  },
} as const

/**
 * Resolves a relative path against the site's base URL. Absolute URLs
 * (e.g. Builder.io CDN images) are returned unchanged.
 */
export const toAbsoluteUrl = (path: string): string => {
  if (/^https?:\/\//.test(path)) return path

  return new URL(path, SITE_CONFIG.url).toString()
}
