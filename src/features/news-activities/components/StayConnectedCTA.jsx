import { ButtonLink } from '@/components/ui/button';
import { ArrowRight, CalendarDays } from 'lucide-react';

const StayConnectedCTA = () => (
  <section className="py-12 sm:py-16">
    <div className="mx-auto max-w-335 px-4 sm:px-6 lg:px-8">
      <div className="relative isolate flex flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl border border-slate-800 bg-sd-navy p-8 text-white shadow-2xl shadow-sd-navy/30 sm:p-10 md:flex-row md:items-center lg:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -start-16 -top-24 -z-10 h-64 w-64 rounded-full bg-sd-red/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 end-0 -z-10 h-64 w-72 rounded-full bg-sd-teal/15 blur-3xl"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] bg-grid2" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sd-red/70 to-transparent" />

        <div>
          <div className="mb-3 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-sd-red">
            <span className="h-px w-6 bg-sd-red" />
            STAY CONNECTED
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            Stay Connected With SD
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-linear-to-r from-sd-red to-sd-teal" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
            Don't miss what's happening inside the Software Development Department.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink href="#projects" variant="default" size="xl" className="group">
            Explore Projects
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </ButtonLink>
          <ButtonLink href="#events" variant="glass" size="xl">
            <CalendarDays aria-hidden="true" className="size-4 text-sd-teal" />
            View Upcoming Events
          </ButtonLink>
        </div>
        <div className="hidden border-s border-slate-700 ps-6 text-end font-mono text-[10px] leading-relaxed tracking-[0.3em] text-slate-400 lg:block">
          BUILD
          <br />
          <span className="text-sd-teal">LEARN</span>
          <br />
          <span className="text-sd-red">GROW</span>
        </div>
      </div>
    </div>
  </section>
);
export default StayConnectedCTA;
