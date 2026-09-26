import SectionHeader from './SectionHeader';
import { upcomingEvents } from '../data';

const EventsSection = () => (
  <section id="events">
    <SectionHeader
      eyebrow="EVENTS"
      title="Upcoming Events"
      description="What's next at SD."
      action="View All Events"
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {upcomingEvents.map((event) => (
        <div
          key={event.title}
          className={`${event.featured ? 'bg-sd-navy text-white border-slate-800' : 'bg-card text-foreground border-border'} rounded-xl p-4 flex flex-col justify-between border shadow-sm`}
        >
          <div>
            <div className="flex items-baseline gap-1.5 font-mono font-bold mb-3">
              <span className="text-xs text-sd-red">{event.month}</span>
              <span className="text-3xl tracking-tight">{event.day}</span>
            </div>
            <div
              className={`text-[10px] font-mono mb-1 ${event.featured ? 'text-slate-400' : 'text-muted-foreground'}`}
            >
              {event.posted}
            </div>
            <h3 className="text-sm font-bold mb-2">{event.title}</h3>
            <p
              className={`text-[11px] leading-relaxed mb-4 ${event.featured ? 'text-slate-300' : 'text-muted-foreground'}`}
            >
              {event.description}
            </p>
          </div>
          <div
            className={`flex items-center justify-between pt-3 border-t text-xs ${event.featured ? 'border-slate-700/60' : 'border-border'}`}
          >
            <span
              className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded font-bold ${event.featured ? 'bg-sd-red text-white' : event.tagTone === 'teal' ? 'bg-secondary2 text-sd-teal' : 'bg-muted text-muted-foreground'}`}
            >
              {event.tag}
            </span>
            <a
              className={`${event.featured ? 'text-slate-300' : 'text-muted-foreground'} hover:text-sd-red`}
              href="#"
            >
              View Event →
            </a>
          </div>
        </div>
      ))}
      <div className="bg-[#051E2C] text-white rounded-xl p-4 flex flex-col justify-between border border-slate-800 shadow-sm">
        <div>
          <div className="w-8 h-8 rounded-full bg-slate-800 text-sd-teal flex items-center justify-center mb-4">
            ▣
          </div>
          <h3 className="text-base font-bold mb-2">More Events Ahead</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Check out our full calendar for upcoming activities.
          </p>
        </div>
        <a className="pt-3 border-t border-slate-800 text-xs font-semibold text-sd-teal" href="#">
          View Calendar →
        </a>
      </div>
    </div>
  </section>
);
export default EventsSection;
