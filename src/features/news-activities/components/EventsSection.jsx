import { CalendarDays } from 'lucide-react';
import EmptyState from '@/components/EmptyState';
import SectionHeader from '@/components/SectionHeader';
import { upcomingEvents } from '../data';

const tagClasses = (event) => {
  if (event.featured) return 'bg-sd-red text-white';
  if (event.tagTone === 'teal') return 'bg-secondary2 text-sd-teal';
  return 'bg-muted text-muted-foreground';
};

const EventsSection = () => (
  <section id="events" className="scroll-mt-40">
    <SectionHeader
      variant="compact"
      eyebrow="EVENTS"
      title="Upcoming Events"
      description="What's next at SD."
      action="View All Events"
    />
    {upcomingEvents.length === 0 ? (
      <EmptyState
        icon={CalendarDays}
        title="No upcoming events"
        message="New events will be announced here as soon as they are scheduled."
      />
    ) : (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {upcomingEvents.map((event) => (
          <article
            key={event.title}
            className={`${event.featured ? 'border-slate-800 bg-sd-navy text-white' : 'border-border bg-card text-foreground hover:shadow-md'} group flex flex-col justify-between rounded-xl border p-5 shadow-sm transition-shadow`}
          >
            <div>
              <div className="mb-4 flex items-baseline gap-2 font-mono font-bold">
                <span className="text-sm text-sd-red">{event.month}</span>
                <span className="text-4xl leading-none tracking-tight">{event.day}</span>
              </div>
              <div
                className={`mb-1.5 font-mono text-xs ${event.featured ? 'text-slate-400' : 'text-muted-foreground'}`}
              >
                Posted {event.posted}
              </div>
              <h3
                className={`${event.featured ? '' : 'group-hover:text-sd-red'} mb-2 text-base font-bold leading-snug transition-colors`}
              >
                {event.title}
              </h3>
              <p
                className={`mb-5 text-sm leading-relaxed ${event.featured ? 'text-slate-300' : 'text-muted-foreground'}`}
              >
                {event.description}
              </p>
            </div>
            <div
              className={`flex items-center justify-between gap-3 border-t pt-4 ${event.featured ? 'border-slate-700/60' : 'border-border'}`}
            >
              <span
                className={`${tagClasses(event)} rounded px-2 py-0.5 font-mono text-[11px] font-bold uppercase`}
              >
                {event.tag}
              </span>
            </div>
          </article>
        ))}
        <div className="flex flex-col gap-4 rounded-xl border border-slate-800 bg-sd-navy p-5 text-white shadow-sm sm:col-span-2 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:col-span-4">
          <div className="flex items-center gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-slate-800 text-sd-teal">
              <CalendarDays aria-hidden="true" className="size-5" />
            </span>
            <div>
              <h3 className="text-base font-bold">More Events Ahead</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                More activities will be announced throughout the year.
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
  </section>
);
export default EventsSection;
