export const BUILDER_IO_MODELS = {
  PAGE: 'page',
  HERO: 'hero',
} as const

export type BuilderIOModel = (typeof BUILDER_IO_MODELS)[keyof typeof BUILDER_IO_MODELS]
