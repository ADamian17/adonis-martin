import { format } from 'date-fns'
import type { ExperienceItemsType } from './experience-types'

interface ExperienceProps {
  headline: string
  copy: string
  experienceItems: ExperienceItemsType
}

export const Experience = ({ headline, copy, experienceItems }: ExperienceProps) => {
  const experience = experienceItems.map((item) => ({
    id: item.experienceItem?.id,
    ...item.experienceItem?.value?.data,
  }))

  return (
    <section
      style={{
        padding: '70px clamp(20px, 8.4vw, 162px)',
        maxWidth: '1920px',
        marginInline: 'auto',
      }}
    >
      <div className="text-center mx-auto mb-15" style={{ maxWidth: '640px' }}>
        <h2
          className="m-0 mb-1.5 font-semibold text-heading"
          style={{ fontSize: 'clamp(34px, 3.4vw, 48px)' }}
        >
          {headline}
        </h2>
        <p className="m-0 font-normal text-[18px] text-body">{copy}</p>
      </div>

      <div className="flex flex-col gap-5 mx-auto" style={{ maxWidth: '880px' }}>
        {experience.map((item) => (
          <div
            key={item.id}
            className="flex gap-7 rounded-xl bg-card-warm"
            style={{ padding: '36px 40px' }}
          >
            {/* Gradient accent bar */}
            <div
              className="flex-none w-1.5 rounded-full"
              style={{ background: 'linear-gradient(180deg,#9a5cff,#681aff)' }}
            />

            {/* Content */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <h3 className="m-0 font-semibold text-[22px] text-heading">{item.title}</h3>
                <div className="flex flex-wrap items-baseline gap-2.5">
                  <span className="font-medium text-[16px] text-accent">{item.company}</span>
                  <span className="font-normal text-[15px] text-faint">{item.employmentType}</span>
                </div>
                <span className="font-normal text-[15px] text-faint">
                  {format(new Date(item.startDate), 'MMM yyyy')} - {item?.endDate ? format(new Date(item.endDate), 'MMM yyyy') : 'Present'}
                </span>
              </div>
              <p className="m-0 font-normal text-[16px] leading-[1.6] text-body">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
