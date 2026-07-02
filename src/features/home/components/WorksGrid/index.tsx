import { Builder } from '@builder.io/react'
import { Link } from '@tanstack/react-router'
import clsx from 'clsx'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/data/projects'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { ctaClassName } from '@/ui/ctaClassName'
import { SectionHeading } from '@/ui/SectionHeading'
import { ProjectCard } from './ProjectCard'

export const WorksGrid = () => (
  <section id="portfolio" style={{ padding: '90px clamp(20px, 8.4vw, 162px)' }}>
    <SectionHeading
      title="My Works"
      description="A selection of products I've designed, built, and shipped on the frontend."
    />

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
        to={'/portfolio' as string}
        className={clsx(ctaClassName, 'transition-colors hover:bg-accent/90 px-6 py-[18px]')}
      >
        View All Projects
        <ArrowRight size={18} />
      </Link>
    </div>
  </section>
)

export const registerWorksGrid = () => {
  Builder.registerComponent(WorksGrid, {
    name: 'WorksGrid',
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
