import { Link } from '@tanstack/react-router'

import { Experience } from '@/components/Experience'
import { Intro } from '@/components/Intro'
import { Stats } from '@/components/Stats'
import { TechStack } from '@/components/TechStack'
import { Values } from '@/components/Values'
import { CtaBanner } from '@/components/CtaBanner'

export const AboutPage = () => (
  <>
    <Intro />
    <Stats />
    <Experience />
    <TechStack />
    <Values />
    <CtaBanner
      title="Have a project in mind?"
      description="I'm always happy to talk through ideas, scope, and timelines. Let's build something fast, accessible, and built to last."
    >
      <Link
        to="/contact"
        className="no-underline px-7 py-[18px] rounded-lg bg-accent text-card-cream font-medium text-[18px] whitespace-nowrap hover:bg-accent/90 transition-colors"
      >
        Contact Me
      </Link>
    </CtaBanner>
  </>
)
