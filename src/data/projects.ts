export type Project = {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  image: string
  url: string
  thumbnails: string[]
}

export const projects: Project[] = [
  {
    id: 'analytics-dashboard',
    title: 'Realtime Analytics Dashboard',
    description:
      'A live analytics suite with sub-second filtering and streaming charts. Cut initial load by 45% with code-splitting and a leaner data layer.',
    category: 'Dashboards',
    tags: ['React', 'TypeScript', 'D3'],
    image: '',
    url: '#',
    thumbnails: ['', '', '', ''],
  },
  {
    id: 'design-system',
    title: 'Component Library & Design System',
    description:
      'A fully-documented, accessible component library covering 60+ components with interactive Storybook docs and automated visual regression testing.',
    category: 'Design Systems',
    tags: ['Storybook', 'Tailwind', 'a11y'],
    image: '',
    url: '#',
    thumbnails: ['', '', '', ''],
  },
  {
    id: 'ecommerce-storefront',
    title: 'E-Commerce Storefront Rebuild',
    description:
      'Migrated a legacy Shopify theme to a headless Next.js storefront, reducing Time-to-Interactive by 60% and boosting conversion by 22%.',
    category: 'E-Commerce',
    tags: ['Next.js', 'Shopify', 'GraphQL'],
    image: '',
    url: '#',
    thumbnails: ['', '', '', ''],
  },
  {
    id: 'saas-onboarding',
    title: 'SaaS Onboarding Flow',
    description:
      'Multi-step onboarding wizard with progress persistence, inline validation, and adaptive branching based on user role selection.',
    category: 'Dashboards',
    tags: ['React', 'Zod', 'TanStack Query'],
    image: '',
    url: '#',
    thumbnails: ['', '', '', ''],
  },
  {
    id: 'marketing-cms',
    title: 'Marketing Site & Headless CMS',
    description:
      'High-performance marketing site backed by Builder.io with visual editing, ISR page rendering, and a consistent 98/100 Lighthouse score.',
    category: 'Marketing',
    tags: ['Next.js', 'Builder.io', 'ISR'],
    image: '',
    url: '#',
    thumbnails: ['', '', '', ''],
  },
  {
    id: 'booking-platform',
    title: 'Booking & Scheduling Platform',
    description:
      'Integrated calendar booking platform with Google Calendar sync, time-zone awareness, and real-time seat availability via WebSockets.',
    category: 'E-Commerce',
    tags: ['React', 'FullCalendar', 'WebSockets'],
    image: '',
    url: '#',
    thumbnails: ['', '', '', ''],
  },
]
