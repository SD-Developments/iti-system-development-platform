import { newsCategories } from '../data';

const CategoryFilterBar = ({ activeCategory, onCategoryChange, sort, onSortChange }) => (
  <section className="bg-card border-b border-border py-4 sticky top-20 z-40 shadow-sm">
    <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs font-semibold">
        {newsCategories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`${activeCategory === category ? 'bg-sd-red text-white shadow-sm' : 'bg-muted text-muted-foreground hover:bg-secondary2 hover:text-foreground'} px-4 py-2 rounded-md whitespace-nowrap transition-colors`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground self-end md:self-auto">
        <span>Sort by:</span>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="appearance-none bg-muted border border-border rounded-md py-1.5 pl-3 pr-8 text-xs font-semibold text-foreground focus:outline-none focus:ring-1 focus:ring-sd-red"
        >
          <option>Latest</option>
          <option>Most Popular</option>
          <option>Oldest</option>
        </select>
      </div>
    </div>
  </section>
);

export default CategoryFilterBar;
