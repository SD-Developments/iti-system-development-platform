import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { latestNews } from '../data';

const toneClasses = {
  dark: 'bg-sd-navy dark:bg-slate-700',
  teal: 'bg-sd-teal',
  blue: 'bg-sd-gray',
  red: 'bg-sd-red',
  orange: 'bg-sd-navy/60 dark:bg-slate-600',
};

const timestamp = (item) => {
  const time = Date.parse(item.date);
  return Number.isNaN(time) ? 0 : time;
};

const sortNews = (items, sort) => {
  if (sort === 'Oldest') return [...items].sort((a, b) => timestamp(a) - timestamp(b));
  if (sort === 'Latest') return [...items].sort((a, b) => timestamp(b) - timestamp(a));
  return items;
};

const Meta = ({ item }) => (
  <div className="mb-2 flex flex-wrap items-center gap-x-2.5 gap-y-1">
    <span
      className={`${toneClasses[item.tone]} rounded px-2 py-0.5 font-mono text-[11px] font-bold uppercase text-white`}
    >
      {item.type}
    </span>
    <span className="font-mono text-xs text-muted-foreground">{item.date}</span>
  </div>
);

const NewsCard = ({ item }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sd-red/30 hover:shadow-xl">
    <div className="relative aspect-16/10 overflow-hidden bg-muted">
      <img
        alt={item.title}
        src={item.image}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
    <div className="flex flex-1 flex-col p-5">
      <Meta item={item} />
      <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-sd-red">
        {item.title}
      </h3>
      <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors group-hover:text-sd-red">
        Read more
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </span>
    </div>
  </article>
);

const filterNews = (items, search) => {
  const query = search.trim().toLowerCase();
  if (!query) return items;
  return items.filter((item) =>
    [item.title, item.description, item.type].some((field) => field?.toLowerCase().includes(query))
  );
};

const PAGE_SIZE = 3;

const LatestSection = ({ sort = 'Latest', search = '', filterBar = null, showCards = true }) => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const items = sortNews(filterNews(latestNews, search), sort);
  const visibleItems = items.slice(0, visibleCount);
  const remaining = items.length - visibleItems.length;

  return (
    <section id="latest" className="scroll-mt-40">
      <SectionHeader
        variant="compact"
        eyebrow="LATEST"
        title="Latest from SD"
        description="Recent news, events, and activities from our community."
        action="View All"
      />
      {filterBar}
      {showCards &&
        (items.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleItems.map((item) => (
                <NewsCard key={item.title} item={item} />
              ))}
            </div>
            {remaining > 0 && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-bold text-foreground shadow-sm transition-all hover:border-sd-red hover:bg-sd-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sd-red"
                >
                  Show more
                  <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground transition-colors group-hover:bg-white/20 group-hover:text-white">
                    {remaining}
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-y-0.5"
                  />
                </button>
              </div>
            )}
          </>
        ) : (
          <p
            role="status"
            className="rounded-2xl border border-dashed border-border bg-card px-6 py-12 text-center text-sm text-muted-foreground"
          >
            No results for &ldquo;{search.trim()}&rdquo;.
          </p>
        ))}
    </section>
  );
};
export default LatestSection;
