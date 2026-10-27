import { ChevronDown, Search, X } from 'lucide-react';
import { newsCategories } from '../data';

const sortOptions = ['Latest', 'Most Popular', 'Oldest'];

const CategoryFilterBar = ({
  activeCategory,
  onCategoryChange,
  sort,
  onSortChange,
  search = '',
  onSearchChange,
}) => (
  <section className="mb-6 rounded-2xl border border-border bg-card/90 p-3 shadow-sm backdrop-blur sm:mb-8 sm:p-4">
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div
        role="group"
        aria-label="Filter by category"
        className="-mx-3 flex min-w-0 snap-x snap-mandatory items-center gap-2 overflow-x-auto px-3 pb-1 text-sm font-semibold [scrollbar-width:none] sm:-mx-4 sm:px-4 lg:mx-0 lg:flex-1 lg:flex-wrap lg:overflow-visible lg:px-0 lg:pb-0 lg:text-xs [&::-webkit-scrollbar]:hidden"
      >
        {newsCategories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => onCategoryChange(category)}
              className={`${isActive ? 'bg-sd-red text-white shadow-sm' : 'bg-muted text-muted-foreground hover:bg-secondary2 hover:text-foreground'} shrink-0 snap-start whitespace-nowrap rounded-full px-4 py-2 transition-all active:scale-95 lg:px-3 lg:py-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sd-red`}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="flex w-full shrink-0 items-center gap-2 lg:w-auto">
        <div role="search" className="relative min-w-0 flex-1 lg:w-56 lg:flex-none">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search news..."
            aria-label="Search news and activities"
            className="w-full rounded-full border border-border bg-muted py-2.5 pl-9 pr-8 text-sm font-medium lg:py-1.5 lg:text-xs text-foreground placeholder:text-muted-foreground transition-colors hover:border-sd-red/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sd-red/60 [&::-webkit-search-cancel-button]:appearance-none"
          />
          {search && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 flex size-5 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary2 hover:text-foreground focus-visible:outline-2 focus-visible:outline-sd-red"
            >
              <X aria-hidden="true" className="size-3.5" />
            </button>
          )}
        </div>
        <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <span className="sr-only sm:not-sr-only">Sort by:</span>
          <span className="relative">
            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              className="cursor-pointer appearance-none rounded-full border border-border bg-muted py-2.5 pl-3 pr-8 text-sm font-semibold lg:py-1.5 lg:text-xs text-foreground transition-colors hover:border-sd-red/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sd-red/60"
            >
              {sortOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground"
            />
          </span>
        </label>
      </div>
    </div>
  </section>
);

export default CategoryFilterBar;
