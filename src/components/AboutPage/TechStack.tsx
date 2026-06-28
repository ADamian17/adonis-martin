import { stack } from '@/data/stack'

export const TechStack = () => (
  <section
    style={{ padding: '70px clamp(20px, 8.4vw, 162px)', maxWidth: '1920px', marginInline: 'auto' }}
  >
    <div className="text-center mx-auto mb-[60px]" style={{ maxWidth: '640px' }}>
      <h2
        className="m-0 mb-1.5 font-semibold text-heading"
        style={{ fontSize: 'clamp(34px, 3.4vw, 48px)' }}
      >
        Tools I Work With
      </h2>
      <p className="m-0 font-normal text-[18px] text-body">
        A focused, modern toolkit for building reliable frontends
      </p>
    </div>

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
                className="py-[10px] px-[16px] rounded-lg bg-white font-medium text-[15px] text-[#333]"
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
