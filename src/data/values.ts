export type ValueIcon = 'target' | 'zap' | 'message'

export type ValueItem = {
  id: string
  title: string
  description: string
  icon: ValueIcon
}

export const values: ValueItem[] = [
  {
    id: 'accessibility',
    title: 'Accessibility First',
    description:
      'I build to WCAG 2.2 AA as a baseline — semantic HTML, ARIA patterns, keyboard navigation, and colour contrast baked in from the start, not bolted on at review.',
    icon: 'target',
  },
  {
    id: 'performance',
    title: 'Performance Obsessed',
    description:
      'Every millisecond counts. I profile before I optimise, so improvements are evidence-based — not guesswork — and measurable in real user metrics.',
    icon: 'zap',
  },
  {
    id: 'communication',
    title: 'Clear Communication',
    description:
      'I write readable PRs, leave useful comments, and flag trade-offs early. Good code ships faster when everyone on the team understands the why behind each decision.',
    icon: 'message',
  },
]
