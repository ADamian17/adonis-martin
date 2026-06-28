import { BenefitsGrid } from '@/components/BenefitsGrid'
import { FaqAccordion } from '@/components/FaqAccordion'
import { Hero } from '@/components/Hero'
import { SkillsGrid } from '@/components/SkillsGrid'
import { Testimonials } from '@/components/Testimonials'
import { WorksGrid } from '@/components/WorksGrid'

export const HomePage = () => (
  <>
    <Hero />
    <SkillsGrid />
    <BenefitsGrid />
    <WorksGrid />
    <Testimonials />
    <FaqAccordion />
  </>
)
