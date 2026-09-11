import { ArrowRight } from 'lucide-react';

function Cta() {
  return (
    <>
      <section className="px-4 py-16 lg:px-8 lg:py-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-sd-navy px-7 py-12 text-sd-white sm:px-12 lg:px-16 lg:py-16">
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-sd-teal/15 blur-3xl" />

          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.17em] text-sd-teal">
                Continue Your Journey
              </span>

              <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Found a Track That Interests You?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-sd-white/60">
                Explore the Professional Training Program and learn more about admission
                requirements, curriculum, and the next intake.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/programs/ptp"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground"
              >
                Explore PTP
                <ArrowRight size={16} />
              </a>

              <a
                href="/intakes"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-sd-white/20 bg-sd-white/5 px-6 py-3.5 text-sm font-bold"
              >
                View Intakes
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta;
