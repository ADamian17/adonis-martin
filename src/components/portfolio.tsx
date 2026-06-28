import { Link } from '@tanstack/react-router'
import { useState } from 'react'

import { CtaBanner } from '@/components/CtaBanner'
import { FilterBar } from '@/components/FilterBar'
import { PortfolioCard } from '@/components/PortfolioCard'
import { projects } from '@/data/projects'

export const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      {/* Centered header */}
      <section
        className="text-center"
        style={{
          padding: '80px clamp(20px, 8.4vw, 162px) 30px',
          maxWidth: '1920px',
          marginInline: 'auto',
        }}
      >
        <div
          className="inline-block px-[18px] py-[10px] rounded-[13px] bg-white font-medium text-[18px] text-accent mb-6"
          style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}
        >
          Portfolio
        </div>
        <h1
          className="m-0 mx-auto mb-4 font-semibold text-heading leading-[1.16]"
          style={{ fontSize: 'clamp(38px, 3.8vw, 54px)', maxWidth: '18ch' }}
        >
          Selected work I&apos;ve designed, built &amp; shipped
        </h1>
        <p
          className="m-0 mx-auto font-normal text-[18px] leading-[1.6] text-body"
          style={{ maxWidth: '60ch' }}
        >
          A cross-section of dashboards, design systems, storefronts, and marketing sites — each
          built fast, accessible, and made to last. Filter by category below.
        </p>
      </section>

      {/* Filters */}
      <section
        style={{
          padding: '20px clamp(20px, 8.4vw, 162px) 10px',
          maxWidth: '1920px',
          marginInline: 'auto',
        }}
      >
        <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </section>

      {/* Project grid */}
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

      <CtaBanner
        title="Like what you see?"
        description="These are just a few highlights. Tell me about your product and I'll show you how I'd approach it."
      >
        <Link
          to="/contact"
          className="no-underline px-7 py-[18px] rounded-lg bg-accent text-card-cream font-medium text-[18px] whitespace-nowrap hover:bg-accent/90 transition-colors"
        >
          Start a Project
        </Link>
      </CtaBanner>
    </>
  )
}
