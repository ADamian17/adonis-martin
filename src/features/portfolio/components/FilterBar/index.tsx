import { Builder } from '@builder.io/react'
import clsx from 'clsx'
import { Button as AriaButton } from 'react-aria-components'

import { BUILDER_IO_MODELS } from '@/services/builderIO/models'

export type FilterCategory = { category: string }

const DEFAULT_CATEGORIES: FilterCategory[] = [
  'All',
  'Dashboards',
  'Design Systems',
  'E-Commerce',
  'Marketing',
].map((category) => ({ category }))

type Props = {
  categories?: FilterCategory[]
  activeFilter: string
  onFilterChange?: (category: string) => void
}

export const FilterBar = ({
  categories = DEFAULT_CATEGORIES,
  activeFilter,
  onFilterChange,
}: Props) => (
  <div className="flex flex-wrap gap-3 justify-center mb-2">
    {categories.map(({ category }) => (
      <AriaButton
        key={category}
        onPress={() => onFilterChange?.(category)}
        className={clsx(
          'cursor-pointer px-5 py-[11px] rounded-lg font-medium text-[15px] border transition-colors',
          category === activeFilter
            ? 'bg-accent text-card-cream border-accent'
            : 'bg-white text-muted border-border-warm data-[hovered]:border-accent',
        )}
      >
        {category}
      </AriaButton>
    ))}
  </div>
)

export const registerFilterBar = () => {
  Builder.registerComponent(FilterBar, {
    name: 'FilterBar',
    models: [BUILDER_IO_MODELS.PAGE],
    inputs: [
      { name: 'activeFilter', type: 'text', defaultValue: 'All' },
      {
        name: 'categories',
        type: 'list',
        subFields: [{ name: 'category', type: 'text' }],
        defaultValue: DEFAULT_CATEGORIES,
      },
    ],
  })
}
