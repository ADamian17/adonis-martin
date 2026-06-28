import { Builder } from '@builder.io/react'

import { registerBenefitsGrid } from '@/components/BenefitsGrid'
import { registerContactGrid } from '@/components/ContactGrid'
import { registerCtaBanner } from '@/components/CtaBanner'
import { registerExperience } from '@/components/Experience'
import { registerFaqAccordion } from '@/components/FaqAccordion'
import { registerFilterBar } from '@/components/FilterBar'
import { registerHomeHero } from '@/components/Hero'
import { registerIntro } from '@/components/Intro'
import { registerPageHeader } from '@/components/PageHeader'
import { registerPortfolioCard } from '@/components/PortfolioCard'
import { registerSkillsGrid } from '@/components/SkillsGrid'
import { registerStats } from '@/components/Stats'
import { registerTechStack } from '@/components/TechStack'
import { registerTestimonials } from '@/components/Testimonials'
import { registerValues } from '@/components/Values'
import { registerWorksGrid } from '@/components/WorksGrid'

/* Custom components */
registerSkillsGrid()
registerBenefitsGrid()
registerWorksGrid()
registerTestimonials()
registerFaqAccordion()
registerHomeHero()

/* About page */
registerIntro()
registerStats()
registerExperience()
registerTechStack()
registerValues()

/* Contact page */
registerContactGrid()

/* Portfolio page */
registerFilterBar()
registerPortfolioCard()

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
    { name: 'Stats', item: { component: { name: 'Stats' } } },
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
  items: [
    { name: 'FilterBar', item: { component: { name: 'FilterBar' } } },
    { name: 'PortfolioCard', item: { component: { name: 'PortfolioCard' } } },
  ],
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
