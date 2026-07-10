import { Builder } from '@builder.io/react'
import { ArrowRight } from 'lucide-react'
import type {
  Project,
  ProjectItemsType,
} from '@/features/portfolio/components/ProjectGrid/project-types'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { Link } from '@/ui/Link'
import { Section } from '@/ui/Section'
import { SectionHeading } from '@/ui/SectionHeading'
import { ProjectCard } from './ProjectCard'

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
    <Section id="portfolio">
      <SectionHeading align="center" title={headline} description={subheadline} />

      <div className="grid gap-7.5 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="flex justify-center mt-12.5">
        <Link to={cta?.url} className="px-6 py-4.5" icon={<ArrowRight size={18} />}>
          {cta?.text}
        </Link>
      </div>
    </Section>
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
