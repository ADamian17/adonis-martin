import { ExternalLink } from 'lucide-react'

import type { Project } from '@/features/portfolio/components/ProjectGrid/project-types'

type Props = { project: Project }

export const ProjectCard = ({ project }: Props) => (
  <article className="bg-card-alt rounded-xl p-10 flex flex-col gap-6">
    <h3 className="font-semibold text-[20px] text-muted">{project.title}</h3>

    {/* Main image */}
    <div
      className="relative rounded-xl overflow-hidden bg-neutral"
      style={{ aspectRatio: '16/10' }}
    >
      {project.image && (
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      )}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3.5 right-3.5 flex items-center justify-center rounded-lg bg-card-alt w-11 h-11"
        style={{ boxShadow: 'inset 0 0 0 1px var(--color-border-alt)' }}
        aria-label={`Open ${project.title}`}
      >
        <ExternalLink size={18} className="text-muted" />
      </a>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="py-1.75 px-3 rounded-md bg-white font-medium text-[13px] text-body"
        >
          {tag}
        </span>
      ))}
    </div>
  </article>
)
