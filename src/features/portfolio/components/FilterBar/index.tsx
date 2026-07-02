import { Builder } from '@builder.io/react'
import clsx from 'clsx'
import { Button as AriaButton } from 'react-aria-components'

import { BUILDER_IO_MODELS } from '@/services/builderIO/models'

const categories = ['All', 'Dashboards', 'Design Systems', 'E-Commerce', 'Marketing']

type Props = {
  activeFilter: string
  onFilterChange?: (category: string) => void
}

export const FilterBar = ({ activeFilter, onFilterChange }: Props) => (
  <div className="flex flex-wrap gap-3 justify-center mb-2">
    {categories.map((cat) => (
      <AriaButton
        key={cat}
        onPress={() => onFilterChange?.(cat)}
        className={clsx(
          'cursor-pointer px-5 py-[11px] rounded-lg font-medium text-[15px] border transition-colors',
          cat === activeFilter
            ? 'bg-accent text-card-cream border-accent'
            : 'bg-white text-muted border-border-warm data-[hovered]:border-accent',
        )}
      >
        {cat}
      </AriaButton>
    ))}
  </div>
)

export const registerFilterBar = () => {
  Builder.registerComponent(FilterBar, {
    name: 'FilterBar',
    models: [BUILDER_IO_MODELS.PAGE],
    inputs: [{ name: 'activeFilter', type: 'text', defaultValue: 'All' }],
  })
}
