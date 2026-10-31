import { MapPin, Users } from 'lucide-react';
import { stitchImages } from '../data';

const HeroSectionBackPattern = () => (
  <div id="featured" className="grid scroll-mt-40 grid-cols-12 items-center gap-10 lg:gap-12">
    <div className="relative z-10 col-span-12 pr-0 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 lg:col-span-6 lg:pr-6">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300 backdrop-blur-sm sm:text-xs">
        <span className="size-1.5 rounded-full bg-sd-teal shadow-[0_0_12px_var(--color-sd-teal)]" />
        <span>SD Department / News &amp; Activities</span>
      </div>
      <div className="mb-5 flex items-center gap-3">
        <span className="rounded-full bg-sd-red px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-sd-red/20">
          EVENT
        </span>
        <span className="h-px w-8 bg-linear-to-r from-white/40 to-transparent" />
        <span className="font-mono text-xs font-medium tracking-[0.12em] text-slate-400">
          SEP 12, 2026
        </span>
      </div>
      <h1 className="mb-5 max-w-2xl text-4xl font-extrabold leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl lg:text-[60px]">
        SD Technical Day <span className="text-sd-teal">2026</span>
      </h1>
      <div
        aria-hidden="true"
        className="mb-6 h-1 w-16 rounded-full bg-linear-to-r from-sd-red via-sd-red to-sd-teal"
      />
      <p className="mb-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
        Students and instructors come together for a day of technical talks, project showcases, and
        engineering discussions.
      </p>
      <div className="mb-9 flex flex-wrap items-center gap-3 text-sm font-medium text-slate-200">
        <div className="flex items-center gap-2.5 rounded-full bg-white/[0.07] px-3.5 py-2.5 shadow-inner shadow-white/5 backdrop-blur-sm">
          <MapPin aria-hidden="true" className="size-4 text-sd-teal" />
          <span>Smart Village, Cairo</span>
        </div>
        <div className="flex items-center gap-2.5 rounded-full bg-white/[0.07] px-3.5 py-2.5 shadow-inner shadow-white/5 backdrop-blur-sm">
          <Users aria-hidden="true" className="size-4 text-sd-teal" />
          <span>500+ Attendees</span>
        </div>
      </div>
      <div className="mt-12 hidden items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 lg:flex">
        <span className="h-px w-8 bg-linear-to-r from-sd-red to-sd-teal" />
        <span>CODE PEOPLE IDEAS FUTURE</span>
      </div>
    </div>

    <div className="relative col-span-12 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-150 lg:col-span-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-linear-to-br from-sd-teal/20 via-transparent to-sd-red/20 blur-2xl"
      />
      <div className="group relative rounded-[1.6rem] shadow-2xl shadow-black/35 transition-transform duration-500 hover:-translate-y-1">
        <div className="relative h-85 w-full overflow-hidden rounded-[1.6rem] bg-slate-950 sm:h-97.5">
          <img
            alt="SD Technical Day 2026 Stage"
            className="h-full w-full object-cover object-center brightness-[0.88] saturate-[0.85] transition-[filter] duration-700 ease-out motion-safe:group-hover:brightness-100 motion-safe:group-hover:saturate-110"
            src={stitchImages.featured}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_15%,rgba(0,176,176,0.22),transparent_45%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/5 to-black/20" />
          <div className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-black/25 to-transparent" />
          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-slate-950/55 px-3.5 py-2 shadow-lg shadow-black/10 backdrop-blur-lg sm:right-5 sm:top-5">
            <span className="size-2 rounded-full bg-sd-teal shadow-[0_0_12px_var(--color-sd-teal)] motion-safe:animate-pulse" />
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-white sm:text-[10px]">
              FEATURED EVENT
            </span>
          </div>
          <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
            <div className="inline-flex max-w-full flex-col gap-2 rounded-xl bg-slate-950/35 px-4 py-3 shadow-lg shadow-black/10 backdrop-blur-md sm:px-5 sm:py-4">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-sd-teal sm:text-[10px]">
                Ideas in motion
              </span>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-white sm:text-xs">
                Smart Village Auditorium
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 hidden justify-end gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400 sm:flex">
        <span>STUDENTS</span> • <span>EVENTS</span> • <span>WORKSHOPS</span> •{' '}
        <span>ACHIEVEMENTS</span>
      </div>
    </div>
  </div>
);

export default HeroSectionBackPattern;
