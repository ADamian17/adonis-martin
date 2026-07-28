import clsx from 'clsx'
import { Button as AriaButton } from 'react-aria-components'

type Props = {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
  /** Spacing for the row itself, which belongs to the surrounding section. */
  className?: string
}

const optionClassName =
  'cursor-pointer rounded-lg border px-5 py-[11px] font-medium text-[15px] transition-colors data-focus-visible:outline-2 data-focus-visible:outline-accent data-focus-visible:outline-offset-2'

/**
 * Single-select category filter shared by the portfolio and blog listings.
 *
 * Owns its own look on purpose: it is the same control doing the same job on
 * sibling pages, so two shapes would read as an accident rather than a choice.
 */
export const FilterBar = ({ categories, activeCategory, onCategoryChange, className }: Props) => (
  <div className={clsx('flex flex-wrap justify-center gap-3', className)}>
    {categories.map((category) => (
      <AriaButton
        key={category}
        onPress={() => onCategoryChange(category)}
        className={clsx(
          optionClassName,
          category === activeCategory
            ? 'border-accent bg-accent text-card-cream'
            : 'border-border-warm bg-card-raised text-muted data-hovered:border-accent',
        )}
      >
        {category}
      </AriaButton>
    ))}
  </div>
)
