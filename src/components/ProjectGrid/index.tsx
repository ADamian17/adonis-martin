import { Builder } from '@builder.io/react'
import { useState } from 'react'

import { FilterBar } from '@/components/FilterBar'
import { PortfolioCard } from '@/components/PortfolioCard'
import { projects } from '@/data/projects'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'

export const ProjectGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      <section
        style={{
          padding: '20px clamp(20px, 8.4vw, 162px) 10px',
          maxWidth: '1920px',
          marginInline: 'auto',
        }}
      >
        <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </section>

      <section
        style={{
          padding: '40px clamp(20px, 8.4vw, 162px) 70px',
          maxWidth: '1920px',
          marginInline: 'auto',
        }}
      >
        <div
          className="grid gap-[30px]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}
        >
          {filtered.map((p) => (
            <PortfolioCard key={p.id} project={p} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center py-[60px] font-normal text-[18px] text-faint">
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
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
