import { ArrowUpRight, Megaphone } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { announcements } from '../data';

const AnnouncementsSection = () => (
  <section id="announcements" className="scroll-mt-40">
    <SectionHeader
      variant="compact"
      eyebrow="ANNOUNCEMENTS"
      title="Announcements"
      description="Important updates from the department."
      action="View All"
    />
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {announcements.map((item) => (
        <article
          key={item.title}
          className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition hover:border-sd-red/50 hover:shadow-md"
        >
          <div className="flex min-w-0 items-center gap-4">
            <div
              className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${item.tone === 'red' ? 'bg-sd-red/10 text-sd-red' : 'bg-secondary2 text-sd-teal'}`}
            >
              <Megaphone aria-hidden="true" className="size-5" />
            </div>
            <div className="min-w-0">
              <span
                className={`rounded px-2 py-0.5 font-mono text-[11px] font-bold uppercase text-white ${item.tone === 'red' ? 'bg-sd-red' : 'bg-sd-teal'}`}
              >
                {item.status}
              </span>
              <h3 className="mt-1.5 text-base font-bold leading-snug text-foreground transition-colors group-hover:text-sd-red">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </div>
          </div>
          <ArrowUpRight
            aria-hidden="true"
            className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-sd-red"
          />
        </article>
      ))}
    </div>
  </section>
);
export default AnnouncementsSection;
