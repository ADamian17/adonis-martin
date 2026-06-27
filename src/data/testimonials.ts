export type Testimonial = {
  name: string
  role: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Thompson',
    role: 'Product Manager',
    quote:
      'Working with Adonis was a pleasure from start to finish. He delivered a polished, accessible UI ahead of schedule and flagged performance issues we didn\'t even know we had. Would hire again without hesitation.',
  },
  {
    name: 'Emily Roberts',
    role: 'Startup Founder',
    quote:
      'Adonis took our rough Figma designs and turned them into a blazing-fast storefront. His attention to detail, clean code, and proactive communication made the whole process smooth and stress-free.',
  },
  {
    name: 'Laura Adams',
    role: 'Engineering Lead',
    quote:
      'Adonis integrated seamlessly into our team. His TypeScript discipline and test coverage meant we could ship his components with confidence. He\'s the kind of engineer who makes everyone around him faster.',
  },
]
