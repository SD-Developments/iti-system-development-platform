import { ArrowUpRight, Clock } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { workshops } from '../data';

const tone = {
  red: 'bg-sd-red/10 text-sd-red',
  dark: 'bg-muted text-foreground',
  teal: 'bg-secondary2 text-sd-teal',
  green: 'bg-foreground/10 text-foreground',
};

const WorkshopsSection = () => (
  <section id="workshops" className="scroll-mt-40">
    <SectionHeader
      variant="compact"
      eyebrow="LEARN"
      title="Learn. Build. Share."
      description="Technical sessions, workshops, and knowledge-sharing."
      action="View All Sessions"
    />
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {workshops.map((item) => (
        <article
          key={item.title}
          className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
        >
          <div>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5">
              <span
                className={`${tone[item.tone]} rounded px-2 py-0.5 font-mono text-[11px] font-bold uppercase`}
              >
                {item.type}
              </span>
              <span className="font-mono text-xs text-muted-foreground">{item.date}</span>
            </div>
            <h3 className="mb-2 text-base font-bold leading-snug text-foreground transition-colors group-hover:text-sd-red">
              {item.title}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </div>
          <div className="flex items-center justify-between gap-2 border-t border-border pt-4 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Clock aria-hidden="true" className="size-3.5" />
              {item.duration}
            </span>
            <span className="rounded-full bg-muted px-2.5 py-0.5 font-semibold uppercase">
              {item.level}
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-colors group-hover:text-sd-red"
            />
          </div>
        </article>
      ))}
    </div>
  </section>
);
export default WorkshopsSection;
