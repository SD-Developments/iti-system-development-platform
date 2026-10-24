import { ArrowUpRight } from 'lucide-react';
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

const LeadCard = ({ item }) => (
  <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md lg:col-span-6">
    <div className="relative aspect-[16/10] overflow-hidden bg-muted md:aspect-[2/1] lg:aspect-auto lg:min-h-64 lg:flex-1">
      <img
        alt={item.title}
        src={item.image}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
    <div className="flex items-end justify-between gap-4 p-5 sm:p-6">
      <div className="min-w-0">
        <Meta item={item} />
        <h3 className="mb-2 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-sd-red sm:text-2xl">
          {item.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {item.description}
        </p>
      </div>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors group-hover:bg-sd-red group-hover:text-white">
        <ArrowUpRight aria-hidden="true" className="size-5" />
      </span>
    </div>
  </article>
);

const ListCard = ({ item }) => (
  <article className="group flex overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
    <div className="relative w-28 shrink-0 overflow-hidden bg-muted sm:w-36">
      <img
        alt={item.title}
        src={item.image}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
    <div className="flex min-w-0 flex-1 flex-col justify-center p-4">
      <Meta item={item} />
      <h3 className="mb-1 line-clamp-2 text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-sd-red sm:text-base">
        {item.title}
      </h3>
      <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>
    </div>
  </article>
);

const LatestSection = ({ sort = 'Latest' }) => {
  const [lead, ...rest] = sortNews(latestNews, sort);

  return (
    <section id="latest" className="scroll-mt-40">
      <SectionHeader
        variant="compact"
        eyebrow="LATEST"
        title="Latest from SD"
        description="Recent news, events, and activities from our community."
        action="View All"
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <LeadCard item={lead} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-6 lg:grid-cols-1">
          {rest.map((item) => (
            <ListCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default LatestSection;
