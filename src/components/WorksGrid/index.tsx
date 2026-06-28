import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { projects } from '@/data/projects'

import { ProjectCard } from './ProjectCard'

export const WorksGrid = () => (
  <section id="portfolio" style={{ padding: '90px clamp(20px, 8.4vw, 162px)' }}>
    <div className="mb-[60px]">
      <h2
        className="font-semibold text-heading mb-4"
        style={{ fontSize: 'clamp(34px, 3.4vw, 48px)' }}
      >
        My Works
      </h2>
      <p className="text-body text-[18px] leading-[1.55]">
        A selection of products I've designed, built, and shipped on the frontend.
      </p>
    </div>

    <div
      className="grid gap-[30px]"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
    >
      {projects.slice(0, 3).map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>

    <div className="flex justify-center mt-[50px]">
      <Link
        to="/portfolio"
        className="inline-flex items-center gap-2 bg-accent text-card-cream font-medium rounded-lg px-6 py-[18px] hover:bg-accent/90 transition-colors"
      >
        View All Projects
        <ArrowRight size={18} />
      </Link>
    </div>
  </section>
)
