const categories = ['All', 'Dashboards', 'Design Systems', 'E-Commerce', 'Marketing']

type Props = {
  activeFilter: string
  onFilterChange: (category: string) => void
}

export const FilterBar = ({ activeFilter, onFilterChange }: Props) => (
  <div className="flex flex-wrap gap-3 justify-center mb-2">
    {categories.map((cat) => (
      <button
        key={cat}
        type="button"
        onClick={() => onFilterChange(cat)}
        className={
          cat === activeFilter
            ? 'cursor-pointer px-5 py-[11px] rounded-lg font-medium text-[15px] bg-accent text-card-cream border border-accent transition-colors'
            : 'cursor-pointer px-5 py-[11px] rounded-lg font-medium text-[15px] bg-white text-[#333] border border-[#e4e0d8] hover:border-accent transition-colors'
        }
      >
        {cat}
      </button>
    ))}
  </div>
)
