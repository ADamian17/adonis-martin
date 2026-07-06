import clsx from 'clsx'

type Align = 'left' | 'center'

type Props = {
  title: string
  description: string
  align?: Align
}

const alignClasses: Record<Align, string> = {
  left: '',
  center: 'text-center mx-auto',
}

/** Centered or left-aligned heading + subtext block used atop grid sections. */
export const SectionHeading = ({ title, description, align = 'left' }: Props) => (
  <div
    className={clsx('mb-15', alignClasses[align])}
    style={align === 'center' ? { maxWidth: 650 } : undefined}
  >
    <h2
      className="font-semibold text-heading mb-4"
      style={{ fontSize: 'clamp(34px, 3.4vw, 48px)' }}
    >
      {title}
    </h2>
    <p className="text-body text-[18px] leading-[1.55]">{description}</p>
  </div>
)
