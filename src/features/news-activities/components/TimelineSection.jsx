import { ArrowRight } from 'lucide-react';
import { timeline } from '../data';

const TimelineSection = () => (
  <section className="mt-6 border-y border-slate-800 bg-sd-navy py-14 text-white sm:py-16">
    <div className="mx-auto max-w-335 px-4 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <div className="mb-1.5 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-sd-red">
            // MILESTONES
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">SD Timeline</h2>
          <p className="mt-1 text-sm text-slate-400">A look at our recent journey.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-sd-red px-3 py-1 font-mono text-xs font-bold text-white">
            2026
          </span>
          <a
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 px-4 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:border-slate-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sd-teal"
            href="#"
          >
            View Full Timeline
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-x-[10%] top-2.5 hidden h-0.5 bg-slate-700 md:block" />
        <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5 md:gap-6">
          {timeline.map((item) => (
            <div
              key={item.month}
              className="rounded-lg border border-slate-800 bg-slate-900/80 p-4 md:border-none md:bg-transparent md:p-0"
            >
              <div
                className={`mx-auto mb-4 hidden size-5 items-center justify-center rounded-full border-2 md:flex ${item.active ? 'border-white bg-sd-red' : 'border-slate-600 bg-slate-800'}`}
              >
                <span className="size-1.5 rounded-full bg-white" />
              </div>
              <div className="text-left md:text-center">
                <span
                  className={`block font-mono text-xs font-bold ${item.active ? 'text-sd-red' : 'text-sd-teal'}`}
                >
                  {item.month}
                </span>
                <p
                  className={`mt-1 text-sm font-semibold ${item.active ? 'text-white' : 'text-slate-200'}`}
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 border-t border-slate-800 pt-6 text-center font-mono text-[11px] uppercase tracking-widest text-slate-400">
        SAME PEOPLE • BIGGER IMPACT
      </div>
    </div>
  </section>
);
export default TimelineSection;
