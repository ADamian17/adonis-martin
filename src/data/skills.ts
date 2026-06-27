export type Skill = {
  title: string
  description: string
  icon: string
}

export const skills: Skill[] = [
  {
    title: 'JavaScript & TypeScript',
    description:
      'Deep command of modern ES2023+, TypeScript, and the language fundamentals that keep large codebases safe, typed, and maintainable.',
    icon: 'code',
  },
  {
    title: 'React & Component Architecture',
    description:
      'Building scalable, reusable component systems with React and modern state management for complex, data-driven UIs.',
    icon: 'layout-grid',
  },
  {
    title: 'Performance & Web Vitals',
    description:
      'Optimizing load times, rendering, and Core Web Vitals so interfaces stay fast and responsive at any scale.',
    icon: 'activity',
  },
  {
    title: 'Responsive & Accessible UI',
    description:
      'Crafting layouts that adapt seamlessly across devices and meet WCAG accessibility standards for every user.',
    icon: 'monitor-smartphone',
  },
  {
    title: 'Testing & CI/CD',
    description:
      'Unit, integration, and end-to-end testing wired into automated pipelines for confident, continuous delivery.',
    icon: 'check-square',
  },
  {
    title: 'APIs & Developer Tooling',
    description:
      'Integrating REST and GraphQL APIs and building design systems and tooling that speed up the whole team.',
    icon: 'terminal',
  },
]
