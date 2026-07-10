import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/SocialIcons'
import type { Testimonial } from './testimonial-types'

const stars = '★★★★★'

type Props = { testimonial: Testimonial }

export const TestimonialCard = ({ testimonial }: Props) => (
  <article className="bg-card-warm rounded-xl p-[40px] flex flex-col gap-5">
    <div className="flex items-start justify-between">
      <div>
        <p className="font-semibold text-[18px] text-heading">{testimonial.name}</p>
        <p className="text-faint text-[15px] mt-0.5">{testimonial.role}</p>
      </div>
      <div className="flex items-center gap-2.5">
        <LinkedinIcon size={20} className="text-accent" />
        <TwitterIcon size={20} className="text-accent" />
        <GithubIcon size={20} className="text-accent" />
      </div>
    </div>
    <p className="text-accent text-[18px] tracking-wide">{stars}</p>
    <p className="text-body text-[16px] leading-[1.6]">{testimonial.quote}</p>
  </article>
)
