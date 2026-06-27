import { ExternalLink } from 'lucide-react'

import type { Project } from '@/data/projects'

type Props = { project: Project }

export const ProjectCard = ({ project }: Props) => (
  <article className="bg-card-alt rounded-xl p-[40px] flex flex-col gap-6">
    <h3 className="font-semibold text-[20px] text-[#333]">{project.title}</h3>

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
        className="absolute bottom-[14px] right-[14px] flex items-center justify-center rounded-lg bg-card-alt w-11 h-11"
        style={{ boxShadow: 'inset 0 0 0 1px #ebe7e0' }}
        aria-label={`Open ${project.title}`}
      >
        <ExternalLink size={18} className="text-[#333]" />
      </a>
    </div>

    {/* Thumbnails */}
    <div className="grid grid-cols-4 gap-4">
      {project.thumbnails.map((thumb, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: thumbnails are positional slots with no stable id
        <div key={i} className="rounded-lg bg-neutral overflow-hidden" style={{ aspectRatio: '1' }}>
          {thumb && <img src={thumb} alt="" className="w-full h-full object-cover" />}
        </div>
      ))}
    </div>
  </article>
)
