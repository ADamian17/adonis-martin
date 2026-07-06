import { Builder } from '@builder.io/react'
import { Link } from '@tanstack/react-router'
import clsx from 'clsx'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { ctaClassName } from '@/ui/ctaClassName'
import { SectionHeading } from '@/ui/SectionHeading'
import { ProjectCard } from './ProjectCard'
import type { ProjectItemsType } from './works-types'

interface WorksGridProps {
  cta: {
    text: string
    url: string
  }
  headline: string
  subheadline: string
  projectItems: ProjectItemsType
}

export const WorksGrid = ({ cta, headline, subheadline, projectItems = [] }: WorksGridProps) => {
  const projects: Project[] = projectItems.map((item) => {
    const data = item.project?.value?.data

    return {
      id: item.project?.id ?? '',
      title: data?.title ?? '',
      description: data?.description ?? '',
      category: data?.category ?? '',
      url: data?.url ?? '#',
      image: data?.image ?? '',
      tags: data?.tags?.map((tag) => tag.tag) ?? [],
      thumbnails: data?.thumbnails?.map((thumbnail) => thumbnail.thumbnail) ?? [],
    }
  })

  return (
    <section id="portfolio" style={{ padding: '90px clamp(20px, 8.4vw, 162px)' }}>
      <SectionHeading title={headline} description={subheadline} />

      <div className="grid gap-7.5 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="flex justify-center mt-12.5">
        <Link
          to={cta?.url}
          className={clsx(ctaClassName, 'transition-colors hover:bg-accent/90 px-6 py-4.5')}
        >
          {cta?.text}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}

export const registerWorksGrid = () => {
  Builder.registerComponent(WorksGrid, {
    name: 'WorksGrid',
    inputs: [
      {
        name: 'headline',
        type: 'text',
        defaultValue: 'My Works',
      },
      {
        name: 'subheadline',
        type: 'text',
        defaultValue: "A selection of products I've designed, built, and shipped on the frontend.",
      },
      {
        name: 'cta',
        type: 'object',
        subFields: [
          { name: 'text', type: 'string', defaultValue: 'View All Projects' },
          { name: 'url', type: 'string', defaultValue: '/portfolio' },
        ],
      },
      {
        name: 'projectItems',
        type: 'list',
        subFields: [{ name: 'project', type: 'reference', model: BUILDER_IO_MODELS.PROJECT }],
      },
    ],
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
