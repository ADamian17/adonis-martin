export type FaqItem = {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Do you work remotely with distributed teams?',
    answer:
      "Absolutely. I've collaborated with teams across time zones using async communication, code review, and modern project tooling. I integrate smoothly into your existing workflow, whether that's GitHub, Jira, Slack, or anything else.",
  },
  {
    question: 'How long does a typical frontend project take?',
    answer:
      "It depends on scope and complexity. A focused feature or landing page can take 1–2 weeks, while a full app or design-system build runs several weeks. After an initial scoping call I'll provide a clear, milestone-based timeline.",
  },
  {
    question: 'What does your frontend tech stack look like?',
    answer:
      'My core stack is React, TypeScript, and modern tooling (Vite, Next.js, Tailwind, Vitest/Playwright). I adapt to your existing stack and bring best practices for testing, accessibility, and performance to whatever you\'re already using.',
  },
  {
    question: "Can you improve my site's performance and accessibility?",
    answer:
      'Definitely. I audit and optimize Core Web Vitals, bundle size, and rendering, and bring interfaces up to WCAG accessibility standards — so your product is fast, inclusive, and ranks well.',
  },
  {
    question: 'Can you integrate APIs and third-party services?',
    answer:
      'Yes. From REST and GraphQL APIs to auth, payments, analytics, and CMS platforms, I integrate the services your product relies on cleanly, with proper error handling and types end to end.',
  },
]
