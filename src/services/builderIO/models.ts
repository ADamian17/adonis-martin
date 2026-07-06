export const BUILDER_IO_MODELS = {
  PAGE: 'page',
  HERO: 'hero',
  EXPERIENCE_ITEM: 'experience-item',
  PROJECT: 'project',
  SKILL_ITEM: 'skill-item',
  BENEFIT_ITEM: 'benefit-item',
  TESTIMONIAL_ITEM: 'testimonial-item',
  FAQ_ITEM: 'faq-item',
  SITE_SETTINGS: 'site-settings',
} as const

export type BuilderIOModel = (typeof BUILDER_IO_MODELS)[keyof typeof BUILDER_IO_MODELS]
