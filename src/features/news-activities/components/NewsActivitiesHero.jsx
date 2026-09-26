import { stitchImages } from '../data';
import HeroSectionBackPattern from './HeroSectionBackPattern';

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M14 5l7 7m0 0l-7 7m7-7H3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
    />
  </svg>
);

const NewsActivitiesHero = () => (
  <section className="relative overflow-hidden border-b border-slate-800 bg-sd-navy pb-16 pt-28 text-white">
    <HeroSectionBackPattern />

    <div className="max-w-335 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 lg:col-span-6 relative z-10 pr-0 lg:pr-6">
          <div className="flex items-center gap-2 text-sd-red font-mono text-xs tracking-wider uppercase font-semibold mb-3">
            <span>// 04</span>
            <span className="text-slate-400">SD DEPARTMENT / NEWS & ACTIVITIES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.1] mb-5 text-white">
            What's Happening Inside SD
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            News, events, achievements, workshops, and moments from our software development
            community.
          </p>
          <a
            href="#latest"
            className="inline-flex items-center gap-2 bg-sd-red hover:bg-sd-red/90 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all shadow-lg shadow-sd-red/25"
          >
            Explore Latest Updates <ArrowIcon />
          </a>
          <div className="hidden lg:flex items-center gap-4 text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-12">
            <span className="w-6 h-px bg-sd-red" />
            <span>CODE PEOPLE IDEAS FUTURE</span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-900 group">
            <div className="relative h-85 sm:h-97.5 w-full overflow-hidden bg-slate-950">
              <img
                alt="Software Development Students Community"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                src={stitchImages.hero}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute top-6 left-8 -rotate-12 pointer-events-none">
                <span className="font-handwriting text-sd-teal text-3xl sm:text-4xl font-bold">
                  Build
                  <br />
                  <span className="ml-4">Learn</span>
                  <br />
                  <span className="ml-8">Grow</span>
                </span>
              </div>
              <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-sd-teal/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sd-teal animate-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-wider text-sd-teal uppercase">
                  LIVE FROM SD
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-md bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-xl shadow-xl flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase bg-secondary2 text-sd-teal border border-sd-teal px-2 py-0.5 rounded font-bold">
                      LATEST EVENT
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">SEP 12, 2026</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mt-1">SD Technical Day 2026</h4>
                </div>
                <a
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-sd-red text-white flex items-center justify-center"
                  href="#featured"
                >
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex justify-end gap-3 mt-3 text-[11px] font-mono text-slate-400 uppercase">
            <span>STUDENTS</span> • <span>EVENTS</span> • <span>WORKSHOPS</span> •{' '}
            <span>ACHIEVEMENTS</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NewsActivitiesHero;
