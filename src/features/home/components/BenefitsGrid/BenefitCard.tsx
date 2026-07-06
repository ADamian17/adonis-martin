import type { Benefit } from './benefit-types'

type Props = { benefit: Benefit }

export const BenefitCard = ({ benefit }: Props) => (
  <article className="bg-card-light rounded-xl p-12.5">
    <h3 className="font-semibold text-[24px] text-heading mb-4">{benefit.title}</h3>
    <p className="text-body text-[16px] leading-[1.6]">{benefit.description}</p>
  </article>
)
