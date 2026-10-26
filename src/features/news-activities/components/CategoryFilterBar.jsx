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
  <section className="mb-6 rounded-2xl border border-border bg-card p-3 shadow-sm sm:p-4">
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
      <div
        role="group"
        aria-label="Filter by category"
        className="flex items-center gap-2 overflow-x-auto pb-1 text-sm font-semibold scrollbar-none md:pb-0"
      >
        {newsCategories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => onCategoryChange(category)}
              className={`${isActive ? 'bg-sd-red text-white shadow-sm' : 'bg-muted text-muted-foreground hover:bg-secondary2 hover:text-foreground'} shrink-0 whitespace-nowrap rounded-full px-4 py-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sd-red`}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
        <div role="search" className="relative sm:w-56 lg:w-64">
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
            className="w-full rounded-full border border-border bg-muted py-2 pl-10 pr-9 text-sm font-medium text-foreground placeholder:text-muted-foreground transition-colors hover:border-sd-red/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sd-red/60 [&::-webkit-search-cancel-button]:appearance-none"
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
        <label className="flex items-center gap-2 self-end text-sm font-medium text-muted-foreground sm:self-auto">
          <span>Sort by:</span>
          <span className="relative">
            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              className="cursor-pointer appearance-none rounded-full border border-border bg-muted py-2 pl-4 pr-9 text-sm font-semibold text-foreground transition-colors hover:border-sd-red/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sd-red/60"
            >
              {sortOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />
          </span>
        </label>
      </div>
    </div>
  </section>
);

export default CategoryFilterBar;
