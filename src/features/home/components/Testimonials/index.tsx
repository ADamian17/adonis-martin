import { Builder } from '@builder.io/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { SectionHeading } from '@/ui/SectionHeading'
import { TestimonialCard } from './TestimonialCard'
import type { Testimonial, TestimonialItemsType } from './testimonial-types'

interface TestimonialsProps {
  headline: string
  subheadline: string
  testimonialItems: TestimonialItemsType
}

export const Testimonials = ({
  headline,
  subheadline,
  testimonialItems = [],
}: TestimonialsProps) => {
  const testimonials: Testimonial[] = testimonialItems.map((item) => {
    const data = item.testimonial?.value?.data

    return {
      name: data?.name ?? '',
      role: data?.role ?? '',
      quote: data?.quote ?? '',
    }
  })

  return (
    <section className="max-w-[1596px] mx-auto" style={{ padding: '90px clamp(20px, 8.4vw, 162px)' }}>
      <SectionHeading title={headline} description={subheadline} />

      <div className="flex items-center justify-between mb-[30px]">
        <p className="font-medium text-[16px] text-body">37 Total Reviews</p>
        <div className="flex gap-3">
          {(
            [
              { Icon: ChevronLeft, label: 'Previous' },
              { Icon: ChevronRight, label: 'Next' },
            ] as const
          ).map(({ Icon, label }) => (
            <button
              key={label}
              type="button"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-border-pale hover:bg-card-warm transition-colors"
              aria-label={label}
            >
              <Icon size={18} className="text-muted" />
            </button>
          ))}
        </div>
      </div>

      <div
        className="grid gap-[30px]"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </section>
  )
}

export const registerTestimonials = () => {
  Builder.registerComponent(Testimonials, {
    name: 'Testimonials',
    inputs: [
      {
        name: 'headline',
        type: 'text',
        defaultValue: 'What My Clients Say About Me',
      },
      {
        name: 'subheadline',
        type: 'text',
        defaultValue: "Here's what some of my satisfied clients have to say about my work.",
      },
      {
        name: 'testimonialItems',
        type: 'list',
        subFields: [
          { name: 'testimonial', type: 'reference', model: BUILDER_IO_MODELS.TESTIMONIAL_ITEM },
        ],
      },
    ],
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
