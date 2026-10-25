import { ArrowRight, MapPin, Play, Users } from 'lucide-react';
import { stitchImages } from '../data';

const FeaturedSection = () => (
  <section
    id="featured"
    className="scroll-mt-40 overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
  >
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="relative aspect-video overflow-hidden bg-slate-900 lg:col-span-7 lg:aspect-auto lg:min-h-105">
        <img
          alt="SD Technical Day 2026 Stage"
          className="absolute inset-0 h-full w-full object-cover"
          src={stitchImages.featured}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 rounded bg-black/60 px-3 py-1 font-mono text-xs uppercase tracking-widest text-white backdrop-blur-sm">
          SMART VILLAGE AUDITORIUM
        </div>
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-5 lg:p-10">
        <div className="mb-4 font-mono text-[11px] font-bold uppercase tracking-wider text-sd-red">
          // FEATURED
        </div>
        <div className="mb-3 flex items-center gap-2.5">
          <span className="rounded bg-sd-red px-2 py-0.5 font-mono text-[11px] font-bold uppercase text-white">
            EVENT
          </span>
          <span className="font-mono text-xs font-semibold text-muted-foreground">
            SEP 12, 2026
          </span>
        </div>
        <h2 className="mb-3 text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl">
          SD Technical Day 2026
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Students and instructors come together for a day of technical talks, project showcases,
          and engineering discussions.
        </p>
        <div className="mb-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin aria-hidden="true" className="size-4 text-sd-red" />
            <span>Smart Village, Cairo</span>
          </div>
          <div className="flex items-center gap-2">
            <Users aria-hidden="true" className="size-4 text-sd-red" />
            <span>500+ Attendees</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-sd-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sd-red/20 transition-colors hover:bg-sd-red/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sd-red"
            href="#"
          >
            Read Full Story
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
          <a
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-muted px-4 py-2.5 transition-colors hover:border-sd-red/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sd-red"
            href="#"
          >
            <span className="flex size-6 items-center justify-center rounded-full bg-sd-red text-white">
              <Play aria-hidden="true" className="size-3 fill-current" />
            </span>
            <span className="text-sm font-bold leading-none text-foreground">Watch Highlights</span>
            <span className="font-mono text-[11px] leading-none text-muted-foreground">
              02:15 min
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
);
export default FeaturedSection;
