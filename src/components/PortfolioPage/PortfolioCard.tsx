import type { Project } from '@/data/projects'

type Props = { project: Project }

export const PortfolioCard = ({ project }: Props) => (
  <article
    className="flex flex-col gap-[22px] rounded-xl bg-card-alt"
    style={{ padding: '30px' }}
  >
    {/* Image with overlaid category badge */}
    <div className="relative">
      <div className="block w-full rounded-xl overflow-hidden bg-neutral" style={{ aspectRatio: '16/10' }}>
        {project.image && (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        )}
      </div>
      <div
        className="absolute left-[14px] top-[14px] px-[14px] py-[8px] rounded-lg font-medium text-[14px] text-accent"
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
          className="py-[7px] px-[12px] rounded-md bg-white font-medium text-[13px] text-body"
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
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#681aff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17 17 7M9 7h8v8" />
      </svg>
    </a>
  </article>
)
