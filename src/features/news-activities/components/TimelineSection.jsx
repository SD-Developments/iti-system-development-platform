import { CalendarDays } from 'lucide-react';
import EmptyState from '@/components/EmptyState';
import { timeline } from '../data';

const TimelineSection = () => (
  <section className="relative isolate mt-6 overflow-hidden border-y border-slate-800 bg-sd-navy py-16 lg:py-24 text-white">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-64 w-3/4 -translate-x-1/2 rounded-full bg-sd-red/10 blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-24 end-0 -z-10 h-56 w-1/2 rounded-full bg-sd-teal/10 blur-3xl"
    />
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] bg-grid2" />
    <div className="mx-auto max-w-335 px-4 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <div className="mb-1.5 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-sd-red">
            // MILESTONES
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">SD Timeline</h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-linear-to-r from-sd-red to-sd-teal" />
          <p className="mt-3 text-sm text-slate-400">A look at our recent journey.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-sd-red px-3 py-1 font-mono text-xs font-bold text-white shadow-lg shadow-sd-red/30">
            2026
          </span>
        </div>
      </div>
      {timeline.length === 0 ? (
        <EmptyState
          tone="dark"
          icon={CalendarDays}
          title="No milestones yet"
          message="Key dates will appear here once they are published."
        />
      ) : (
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-x-[10%] top-2.5 hidden h-0.5 rounded-full bg-linear-to-r from-sd-teal/60 via-slate-600 to-sd-red/60 md:block"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-6 start-2.5 top-6 w-0.5 -translate-x-1/2 rounded-full bg-linear-to-b from-sd-teal/60 via-slate-600 to-sd-red/60 md:hidden"
          />
          <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-5 md:gap-6">
            {timeline.map((item) => (
              <div key={item.month} className="group relative ps-10 md:ps-0">
                <div className="absolute start-0 top-4 flex size-5 items-center justify-center md:relative md:top-0 md:mx-auto">
                  {item.active && (
                    <span className="absolute inline-flex size-full rounded-full bg-sd-red/60 motion-safe:animate-ping" />
                  )}
                  <span
                    className={`relative flex size-5 items-center justify-center rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${item.active ? 'border-white bg-sd-red shadow-md shadow-sd-red/50' : 'border-slate-600 bg-slate-800 group-hover:border-sd-teal'}`}
                  >
                    <span className="size-1.5 rounded-full bg-white" />
                  </span>
                </div>
                <div
                  aria-hidden="true"
                  className={`absolute start-5 top-[25px] h-0.5 w-5 md:hidden ${item.active ? 'bg-sd-red/70' : 'bg-slate-700 group-hover:bg-sd-teal/70'}`}
                />
                <div
                  aria-hidden="true"
                  className={`mx-auto hidden h-5 w-0.5 md:block ${item.active ? 'bg-linear-to-b from-sd-red to-sd-red/10' : 'bg-linear-to-b from-slate-600 to-slate-800 group-hover:from-sd-teal'}`}
                />
                <div
                  className={`rounded-xl border p-4 text-start transition-all duration-300 group-hover:-translate-y-1 md:text-center ${item.active ? 'border-sd-red/40 bg-slate-900 shadow-lg shadow-sd-red/10' : 'border-slate-800 bg-slate-900/80 group-hover:border-sd-teal/50 group-hover:bg-slate-900'}`}
                >
                  <span
                    className={`block font-mono text-xs font-bold uppercase tracking-wider ${item.active ? 'text-sd-red' : 'text-sd-teal'}`}
                  >
                    {item.month}
                  </span>
                  <p
                    className={`mt-1.5 text-sm font-semibold leading-snug ${item.active ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-12 border-t border-slate-800 pt-6 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-slate-400">
        SAME PEOPLE • BIGGER IMPACT
      </div>
    </div>
  </section>
);
export default TimelineSection;
