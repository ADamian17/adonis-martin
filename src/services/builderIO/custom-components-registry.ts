import { Builder } from '@builder.io/react'

import { registerCtaBanner } from '@/components/CtaBanner'
import { registerPageHeader } from '@/components/PageHeader'

import { registerExperience } from '@/features/about/components/Experience'
import { registerIntro } from '@/features/about/components/Intro'
import { registerTechStack } from '@/features/about/components/TechStack'
import { registerValues } from '@/features/about/components/Values'

import { registerContactGrid } from '@/features/contact/components/ContactGrid'

import { registerBenefitsGrid } from '@/features/home/components/BenefitsGrid'
import { registerFaqAccordion } from '@/features/home/components/FaqAccordion'
import { registerHomeHero } from '@/features/home/components/Hero'
import { registerSkillsGrid } from '@/features/home/components/SkillsGrid'
import { registerTestimonials } from '@/features/home/components/Testimonials'
import { registerWorksGrid } from '@/features/home/components/WorksGrid'

import { registerProjectGrid } from '@/features/portfolio/components/ProjectGrid'

/* Custom components */
registerSkillsGrid()
registerBenefitsGrid()
registerWorksGrid()
registerTestimonials()
registerFaqAccordion()
registerHomeHero()

/* About page */
registerIntro()
registerExperience()
registerTechStack()
registerValues()

/* Contact page */
registerContactGrid()

/* Portfolio page */
registerProjectGrid()

/* Shared sections */
registerCtaBanner()
registerPageHeader()

/* Insert menu groups */
Builder.register('insertMenu', {
  name: 'Home components',
  items: [{ name: 'HomeHero', item: { component: { name: 'HomeHero' } } }],
})

Builder.register('insertMenu', {
  name: 'About Page components',
  items: [
    { name: 'Intro', item: { component: { name: 'Intro' } } },
    { name: 'Experience', item: { component: { name: 'Experience' } } },
    { name: 'TechStack', item: { component: { name: 'TechStack' } } },
    { name: 'Values', item: { component: { name: 'Values' } } },
  ],
})

Builder.register('insertMenu', {
  name: 'Contact Page components',
  items: [{ name: 'ContactGrid', item: { component: { name: 'ContactGrid' } } }],
})

Builder.register('insertMenu', {
  name: 'Portfolio Page components',
  items: [{ name: 'ProjectGrid', item: { component: { name: 'ProjectGrid' } } }],
})

Builder.register('insertMenu', {
  name: 'Shared Sections',
  items: [
    { name: 'SkillsGrid', item: { component: { name: 'SkillsGrid' } } },
    { name: 'BenefitsGrid', item: { component: { name: 'BenefitsGrid' } } },
    { name: 'WorksGrid', item: { component: { name: 'WorksGrid' } } },
    { name: 'Testimonials', item: { component: { name: 'Testimonials' } } },
    { name: 'FaqAccordion', item: { component: { name: 'FaqAccordion' } } },
    { name: 'CtaBanner', item: { component: { name: 'CtaBanner' } } },
    { name: 'PageHeader', item: { component: { name: 'PageHeader' } } },
  ],
})
