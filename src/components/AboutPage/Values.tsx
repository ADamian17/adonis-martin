import type { ReactElement } from 'react'

import type { ValueIcon } from '@/data/values'
import { values } from '@/data/values'

const iconMap: Record<ValueIcon, ReactElement> = {
  target: (
    <svg
      aria-hidden="true"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  ),
  zap: (
    <svg
      aria-hidden="true"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
    </svg>
  ),
  message: (
    <svg
      aria-hidden="true"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
}

const iconBoxStyle = {
  background: 'linear-gradient(135deg,#9a5cff,#681aff)',
  boxShadow: 'inset 0 0 14px 4px rgba(255,255,255,0.45)',
}

export const Values = () => (
  <section
    style={{ padding: '70px clamp(20px, 8.4vw, 162px)', maxWidth: '1920px', marginInline: 'auto' }}
  >
    <div className="text-center mx-auto mb-[60px]" style={{ maxWidth: '640px' }}>
      <h2
        className="m-0 mb-1.5 font-semibold text-heading"
        style={{ fontSize: 'clamp(34px, 3.4vw, 48px)' }}
      >
        How I Work
      </h2>
      <p className="m-0 font-normal text-[18px] text-body">
        The principles behind everything I ship
      </p>
    </div>

    <div
      className="grid gap-[30px]"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
    >
      {values.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-5 rounded-xl bg-card-warm"
          style={{ padding: '50px' }}
        >
          <div
            className="w-16 h-16 flex items-center justify-center rounded-lg"
            style={iconBoxStyle}
          >
            {iconMap[item.icon]}
          </div>
          <h3 className="m-0 font-semibold text-[22px] text-heading">{item.title}</h3>
          <p className="m-0 font-normal text-[16px] leading-[1.6] text-body">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
)
