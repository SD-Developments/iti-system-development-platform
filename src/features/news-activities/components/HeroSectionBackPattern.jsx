import { ArrowRight, MapPin, Play, Users } from 'lucide-react';
import { stitchImages } from '../data';

const HeroSectionBackPattern = () => (
  <div id="featured" className="grid scroll-mt-40 grid-cols-12 items-center gap-8">
    <div className="relative z-10 col-span-12 pr-0 lg:col-span-6 lg:pr-6">
      <div className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-sd-red">
        <span className="text-slate-400">SD DEPARTMENT / NEWS & ACTIVITIES</span>
      </div>
      <div className="mb-4 flex items-center gap-2.5">
        <span className="rounded bg-sd-red px-2 py-0.5 font-mono text-[11px] font-bold uppercase text-white">
          EVENT
        </span>
        <span className="font-mono text-xs font-semibold text-slate-400">SEP 12, 2026</span>
      </div>
      <h1 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[54px]">
        SD Technical Day 2026
      </h1>
      <p className="mb-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
        Students and instructors come together for a day of technical talks, project showcases, and
        engineering discussions.
      </p>
      <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-slate-300">
        <div className="flex items-center gap-2">
          <MapPin aria-hidden="true" className="size-4 text-sd-teal" />
          <span>Smart Village, Cairo</span>
        </div>
        <div className="flex items-center gap-2">
          <Users aria-hidden="true" className="size-4 text-sd-teal" />
          <span>500+ Attendees</span>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <a
          className="inline-flex items-center gap-2 rounded-full bg-sd-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sd-red/25 transition-all hover:bg-sd-red/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sd-red"
          href="#"
        >
          Read Full Story
          <ArrowRight aria-hidden="true" className="size-4" />
        </a>
        <a
          className="inline-flex items-center gap-2.5 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2.5 transition-colors hover:border-sd-red/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sd-red"
          href="#"
        >
          <span className="flex size-6 items-center justify-center rounded-full bg-sd-red text-white">
            <Play aria-hidden="true" className="size-3 fill-current" />
          </span>
          <span className="text-sm font-bold leading-none text-white">Watch Highlights</span>
          <span className="font-mono text-[11px] leading-none text-slate-400">02:15 min</span>
        </a>
      </div>
      <div className="mt-12 hidden items-center gap-4 font-mono text-[10px] uppercase tracking-widest text-slate-400 lg:flex">
        <span className="h-px w-6 bg-sd-red" />
        <span>CODE PEOPLE IDEAS FUTURE</span>
      </div>
    </div>

    <div className="relative col-span-12 lg:col-span-6">
      <div className="group relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl">
        <div className="relative h-85 w-full overflow-hidden bg-slate-950 sm:h-97.5">
          <img
            alt="SD Technical Day 2026 Stage"
            className="h-full w-full object-cover object-center opacity-90 transition-transform duration-700 group-hover:scale-105"
            src={stitchImages.featured}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />
          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-md border border-sd-teal/30 bg-slate-900/80 px-3 py-1.5 backdrop-blur-md">
            <span className="size-2 animate-pulse rounded-full bg-sd-teal" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-sd-teal">
              FEATURED EVENT
            </span>
          </div>
          <div className="absolute bottom-5 left-5 rounded-md bg-black/60 px-3 py-1 font-mono text-xs uppercase tracking-widest text-white backdrop-blur-sm">
            SMART VILLAGE AUDITORIUM
          </div>
        </div>
      </div>
      <div className="mt-3 hidden justify-end gap-3 font-mono text-[11px] uppercase text-slate-400 sm:flex">
        <span>STUDENTS</span> • <span>EVENTS</span> • <span>WORKSHOPS</span> •{' '}
        <span>ACHIEVEMENTS</span>
      </div>
    </div>
  </div>
);

export default HeroSectionBackPattern;
