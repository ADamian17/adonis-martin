import { Builder } from '@builder.io/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { SectionHeading } from '@/ui/SectionHeading'
import { TestimonialCard } from './TestimonialCard'

export const Testimonials = () => (
  <section style={{ padding: '90px clamp(20px, 8.4vw, 162px)' }}>
    <SectionHeading
      title="What My Clients Say About Me"
      description="Here's what some of my satisfied clients have to say about my work."
    />

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
      {testimonials.map((t) => (
        <TestimonialCard key={t.name} testimonial={t} />
      ))}
    </div>
  </section>
)

export const registerTestimonials = () => {
  Builder.registerComponent(Testimonials, {
    name: 'Testimonials',
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
