import type { BuilderContent } from '@builder.io/sdk'
import { SITE_CONFIG, toAbsoluteUrl } from '@/config/site'

interface BuildPageHeadArgs {
  pageContent: BuilderContent | null
  urlPath: string
}

/** Metadata fields read from a Builder.io `page` model's custom data. */
interface PageMetaFields {
  title?: string
  description?: string
  ogImage?: string
}

const buildImageMeta = (imageUrl: string, isCustom: boolean) => {
  const image = { property: 'og:image', content: imageUrl }

  if (isCustom) return [image]

  return [
    image,
    { property: 'og:image:width', content: String(SITE_CONFIG.ogImage.width) },
    { property: 'og:image:height', content: String(SITE_CONFIG.ogImage.height) },
    { property: 'og:image:alt', content: SITE_CONFIG.ogImage.alt },
  ]
}

/**
 * Derives a TanStack Router `head` object (meta tags + canonical link) from a
 * Builder.io page's data, falling back to site-wide defaults. Mirrors the
 * title/description/OpenGraph/robots metadata used across the site.
 */
export const buildPageHead = ({ pageContent, urlPath }: BuildPageHeadArgs) => {
  const data = (pageContent?.data ?? {}) as PageMetaFields

  const title = data.title ?? SITE_CONFIG.title
  const description = data.description ?? SITE_CONFIG.description
  const pageUrl = toAbsoluteUrl(urlPath)
  const imageUrl = toAbsoluteUrl(data.ogImage ?? SITE_CONFIG.ogImage.url)

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'robots', content: SITE_CONFIG.robots },
      { name: 'googlebot', content: SITE_CONFIG.googleBot },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: pageUrl },
      { property: 'og:site_name', content: SITE_CONFIG.name },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: SITE_CONFIG.locale },
      ...buildImageMeta(imageUrl, Boolean(data.ogImage)),
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
    ],
    links: [{ rel: 'canonical', href: pageUrl }],
  }
}
