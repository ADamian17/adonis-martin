export type Testimonial = {
  name: string
  role: string
  quote: string
}

export interface TestimonialItemType {
  id: string
  value: {
    data: Testimonial
  }
}

export type TestimonialItemsType = Record<'testimonial', TestimonialItemType>[]
