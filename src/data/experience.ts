export type ExperienceItem = {
  id: string
  title: string
  company: string
  period: string
  description: string
}

export const experience: ExperienceItem[] = [
  {
    id: 'northwind',
    title: 'Senior Frontend Engineer',
    company: 'Northwind Labs',
    period: '2022 — Present',
    description:
      'Led frontend architecture for a SaaS analytics platform serving 50k+ users. Drove a 40% improvement in Lighthouse scores through code-splitting and strategic rendering optimisations.',
  },
  {
    id: 'vela',
    title: 'Frontend Engineer',
    company: 'Vela Commerce',
    period: '2019 — 2022',
    description:
      'Built and maintained a headless e-commerce storefront used by 120+ merchants, scaling from zero to $4M GMV. Owned the design system with 60+ accessible components.',
  },
  {
    id: 'bright',
    title: 'UI Engineer',
    company: 'Bright Studio',
    period: '2017 — 2019',
    description:
      'Designed and developed marketing sites and campaign landing pages for brand clients. Introduced a reusable Storybook component library, cutting delivery time by 30%.',
  },
]
