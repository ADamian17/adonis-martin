export type StackCategory = {
  id: string
  category: string
  items: string[]
}

export const stack: StackCategory[] = [
  {
    id: 'languages',
    category: 'Languages',
    items: ['TypeScript', 'JavaScript (ES2024)', 'HTML5', 'CSS3 / Sass'],
  },
  {
    id: 'frameworks',
    category: 'Frameworks',
    items: ['React', 'Next.js', 'Remix', 'Vue 3'],
  },
  {
    id: 'styling',
    category: 'Styling',
    items: ['Tailwind CSS', 'CSS Modules', 'styled-components', 'Framer Motion'],
  },
  {
    id: 'tooling',
    category: 'Tooling & Testing',
    items: ['Vite', 'Vitest', 'Playwright', 'Storybook', 'GitHub Actions'],
  },
]
