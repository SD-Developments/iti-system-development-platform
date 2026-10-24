import { ChevronDown } from 'lucide-react';
import { newsCategories } from '../data';

const sortOptions = ['Latest', 'Most Popular', 'Oldest'];

const CategoryFilterBar = ({ activeCategory, onCategoryChange, sort, onSortChange }) => (
  <section className="sticky top-20 z-40 border-b border-border bg-card/95 py-3 backdrop-blur supports-backdrop-filter:bg-card/85">
    <div className="mx-auto flex max-w-335 flex-col gap-3 px-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6 lg:px-8">
      <div
        role="group"
        aria-label="Filter by category"
        className="-mx-4 flex items-center gap-2 overflow-x-auto px-4 pb-1 text-sm font-semibold scrollbar-none sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:pb-0"
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
      <label className="flex shrink-0 items-center gap-2 self-end text-sm font-medium text-muted-foreground md:self-auto">
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
  </section>
);

export default CategoryFilterBar;
