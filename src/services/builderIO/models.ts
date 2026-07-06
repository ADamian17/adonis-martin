export const BUILDER_IO_MODELS = {
  PAGE: 'page',
  HERO: 'hero',
  EXPERIENCE_ITEM: 'experience-item',
  SITE_SETTINGS: 'site-settings',
} as const

export type BuilderIOModel = (typeof BUILDER_IO_MODELS)[keyof typeof BUILDER_IO_MODELS]
