import HeroSectionBackPattern from './HeroSectionBackPattern';

const NewsActivitiesHero = () => (
  <section className="relative isolate overflow-hidden border-b border-slate-800 bg-sd-navy pb-16 pt-28 text-white">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-64 w-3/4 -translate-x-1/2 rounded-full bg-sd-red/10 blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-24 right-0 -z-10 h-56 w-1/2 rounded-full bg-sd-teal/10 blur-3xl"
    />
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] bg-grid2" />
    <div className="max-w-335 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <HeroSectionBackPattern />
    </div>
  </section>
);

export default NewsActivitiesHero;
