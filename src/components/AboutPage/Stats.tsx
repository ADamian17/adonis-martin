import { Builder } from '@builder.io/react'

import { BUILDER_IO_MODELS } from '@/services/builderIO/models'

const stats = [
  { value: '55+', label: 'Projects Shipped' },
  { value: '20+', label: 'Happy Clients' },
  { value: '08+', label: 'Years of Experience' },
]

export const Stats = () => (
  <section
    style={{
      padding: '30px clamp(20px, 8.4vw, 162px) 70px',
      maxWidth: '1920px',
      marginInline: 'auto',
    }}
  >
    <div
      className="flex flex-wrap gap-[30px] bg-card-cream rounded-xl"
      style={{ padding: '36px 50px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}
    >
      {stats.map(({ value, label }) => (
        <div key={label} style={{ flex: '1 1 200px' }}>
          <div className="font-semibold text-[38px] text-heading">{value}</div>
          <div className="font-normal text-[16px] text-body mt-1">{label}</div>
        </div>
      ))}
    </div>
  </section>
)

export const registerStats = () => {
  Builder.registerComponent(Stats, {
    name: 'Stats',
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
