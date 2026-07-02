import { Builder } from '@builder.io/react'

import { stack } from '@/data/stack'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { SectionHeading } from '@/ui/SectionHeading'

export const TechStack = () => (
  <section
    style={{ padding: '70px clamp(20px, 8.4vw, 162px)', maxWidth: '1920px', marginInline: 'auto' }}
  >
    <SectionHeading
      align="center"
      title="Tools I Work With"
      description="A focused, modern toolkit for building reliable frontends"
    />

    <div
      className="grid gap-[30px]"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
    >
      {stack.map((cat) => (
        <div
          key={cat.id}
          className="rounded-xl bg-card-warm flex flex-col gap-[18px]"
          style={{ padding: '40px' }}
        >
          <h3 className="m-0 font-semibold text-[20px] text-heading">{cat.category}</h3>
          <div className="flex flex-wrap gap-[10px]">
            {cat.items.map((item) => (
              <span
                key={item}
                className="py-[10px] px-[16px] rounded-lg bg-white font-medium text-[15px] text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)

export const registerTechStack = () => {
  Builder.registerComponent(TechStack, {
    name: 'TechStack',
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
