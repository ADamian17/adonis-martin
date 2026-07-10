import { Builder } from '@builder.io/react'
import { useState } from 'react'
import { FilterBar, type FilterCategory } from '@/features/portfolio/components/FilterBar'
import { PortfolioCard } from '@/features/portfolio/components/PortfolioCard'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import type { Project, ProjectItemsType } from './project-types'

interface ProjectGridProps {
  projectItems: ProjectItemsType
}

export const ProjectGrid = ({ projectItems = [] }: ProjectGridProps) => {
  const [activeFilter, setActiveFilter] = useState('All')

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

  const categories: FilterCategory[] = ['All', ...new Set(projects.map((p) => p.category))]
    .filter(Boolean)
    .map((category) => ({ category }))

  const filtered =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      <section
        className="max-w-[1596px] mx-auto"
        style={{ padding: '20px clamp(20px, 8.4vw, 162px) 10px' }}
      >
        <FilterBar
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </section>

      <section
        className="max-w-[1596px] mx-auto"
        style={{ padding: '40px clamp(20px, 8.4vw, 162px) 70px' }}
      >
        <div
          className="grid gap-7.5"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}
        >
          {filtered.map((p) => (
            <PortfolioCard key={p.id} project={p} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center py-15 font-normal text-[18px] text-faint">
            No projects in this category yet.
          </p>
        )}
      </section>
    </>
  )
}

export const registerProjectGrid = () => {
  Builder.registerComponent(ProjectGrid, {
    name: 'ProjectGrid',
    inputs: [
      {
        name: 'projectItems',
        type: 'list',
        subFields: [{ name: 'project', type: 'reference', model: BUILDER_IO_MODELS.PROJECT }],
      },
    ],
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
