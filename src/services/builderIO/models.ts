export const BUILDER_IO_MODELS = {
  PAGE: 'page',
  HERO: 'hero',
  EXPERIENCE_ITEM: 'experience-item',
} as const

export type BuilderIOModel = (typeof BUILDER_IO_MODELS)[keyof typeof BUILDER_IO_MODELS]
