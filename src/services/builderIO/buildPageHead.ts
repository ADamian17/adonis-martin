import type { BuilderContent } from '@builder.io/sdk'
import { SITE_SEO, toAbsoluteUrl } from '@/config/site-seo'

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
    { property: 'og:image:width', content: String(SITE_SEO.ogImage.width) },
    { property: 'og:image:height', content: String(SITE_SEO.ogImage.height) },
    { property: 'og:image:alt', content: SITE_SEO.ogImage.alt },
  ]
}

/**
 * Derives a TanStack Router `head` object (meta tags + canonical link) from a
 * Builder.io page's data, falling back to site-wide SEO defaults. Mirrors the
 * title/description/OpenGraph/robots metadata used across the site.
 */
export const buildPageHead = ({ pageContent, urlPath }: BuildPageHeadArgs) => {
  const data = (pageContent?.data ?? {}) as PageMetaFields

  const title = data.title ?? SITE_SEO.title
  const description = data.description ?? SITE_SEO.description
  const pageUrl = toAbsoluteUrl(urlPath)
  const imageUrl = toAbsoluteUrl(data.ogImage ?? SITE_SEO.ogImage.url)

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'robots', content: SITE_SEO.robots },
      { name: 'googlebot', content: SITE_SEO.googleBot },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: pageUrl },
      { property: 'og:site_name', content: SITE_SEO.name },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: SITE_SEO.locale },
      ...buildImageMeta(imageUrl, Boolean(data.ogImage)),
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
    ],
    links: [{ rel: 'canonical', href: pageUrl }],
  }
}
