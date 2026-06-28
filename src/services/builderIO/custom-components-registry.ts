import { Builder } from '@builder.io/react'

import { registerExperience } from '@/components/AboutPage/Experience'
import { registerIntro } from '@/components/AboutPage/Intro'
import { registerStats } from '@/components/AboutPage/Stats'
import { registerTechStack } from '@/components/AboutPage/TechStack'
import { registerValues } from '@/components/AboutPage/Values'
import { registerBenefitsGrid } from '@/components/BenefitsGrid'
import { registerContactForm } from '@/components/ContactPage/ContactForm'
import { registerContactInfo } from '@/components/ContactPage/ContactInfo'
import { registerCtaBanner } from '@/components/CtaBanner'
import { registerFaqAccordion } from '@/components/FaqAccordion'
import { registerHomeHero } from '@/components/Hero'
import { registerPageHeader } from '@/components/PageHeader'
import { registerFilterBar } from '@/components/PortfolioPage/FilterBar'
import { registerPortfolioCard } from '@/components/PortfolioPage/PortfolioCard'
import { registerSkillsGrid } from '@/components/SkillsGrid'
import { registerTestimonials } from '@/components/Testimonials'
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
registerContactForm()
registerContactInfo()

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
  items: [
    { name: 'ContactForm', item: { component: { name: 'ContactForm' } } },
    { name: 'ContactInfo', item: { component: { name: 'ContactInfo' } } },
  ],
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
