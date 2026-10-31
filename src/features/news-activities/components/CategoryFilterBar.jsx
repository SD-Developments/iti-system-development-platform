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
  <section className="mb-6 rounded-xl border border-border bg-card p-3 shadow-sm sm:p-4">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div
        role="group"
        aria-label="Filter by category"
        className="flex min-w-0 flex-1 flex-wrap items-center gap-1.5 text-xs font-semibold"
      >
        {newsCategories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => onCategoryChange(category)}
              className={`${isActive ? 'bg-sd-red text-white shadow-sm' : 'bg-muted text-muted-foreground hover:bg-secondary2 hover:text-foreground'} whitespace-nowrap rounded-full px-3 py-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sd-red`}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="flex w-full shrink-0 flex-wrap items-center gap-2 sm:w-auto">
        <div role="search" className="relative min-w-36 flex-1 sm:w-48 sm:flex-none lg:w-56">
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
            className="w-full rounded-full border border-border bg-muted py-1.5 pl-9 pr-8 text-xs font-medium text-foreground placeholder:text-muted-foreground transition-colors hover:border-sd-red/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sd-red/60 [&::-webkit-search-cancel-button]:appearance-none"
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
          <span>Sort by:</span>
          <span className="relative">
            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              className="cursor-pointer appearance-none rounded-full border border-border bg-muted py-1.5 pl-3 pr-8 text-xs font-semibold text-foreground transition-colors hover:border-sd-red/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sd-red/60"
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
