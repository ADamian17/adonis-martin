import { Builder } from '@builder.io/react'

import type { Project } from '@/features/portfolio/components/ProjectGrid/project-types'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'

type Props = { project: Project }

export const PortfolioCard = ({ project }: Props) => (
  <article className="flex flex-col gap-5.5 rounded-xl bg-card-alt" style={{ padding: '30px' }}>
    {/* Image with overlaid category badge */}
    <div className="relative">
      <div
        className="block w-full rounded-xl overflow-hidden bg-neutral"
        style={{ aspectRatio: '16/10' }}
      >
        {project.image && (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        )}
      </div>
      <div
        className="absolute left-3.5 top-3.5 px-3.5 py-2 rounded-lg font-medium text-[14px] text-accent"
        style={{ background: 'rgba(238,235,229,0.92)', backdropFilter: 'blur(6px)' }}
      >
        {project.category}
      </div>
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

    <h3 className="m-0 font-semibold text-[21px] text-heading">{project.title}</h3>
    <p className="m-0 font-normal text-[16px] leading-[1.6] text-body">{project.description}</p>

    <a
      href={project.url}
      className="mt-auto no-underline inline-flex items-center gap-2 font-medium text-[16px] text-accent"
    >
      View Project
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17 17 7M9 7h8v8" />
      </svg>
    </a>
  </article>
)

export const registerPortfolioCard = () => {
  Builder.registerComponent(PortfolioCard, {
    name: 'PortfolioCard',
    models: [BUILDER_IO_MODELS.PAGE],
    inputs: [
      {
        name: 'project',
        type: 'object',
        defaultValue: {
          id: '',
          title: '',
          description: '',
          category: '',
          tags: [],
          image: '',
          url: '#',
          thumbnails: [],
        },
        subFields: [
          { name: 'title', type: 'text', defaultValue: '' },
          { name: 'description', type: 'longText', defaultValue: '' },
          { name: 'category', type: 'text', defaultValue: '' },
          {
            name: 'image',
            type: 'file',
            allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg', 'gif', 'webp'],
            defaultValue: '',
          },
          { name: 'url', type: 'text', defaultValue: '#' },
        ],
      },
    ],
  })
}
