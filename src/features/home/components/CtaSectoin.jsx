import { ArrowRight } from 'lucide-react';

function CtaSectoin() {
  return (
    <>
      <section className="px-4 py-14 lg:px-8 lg:py-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-sd-navy px-7 py-12 text-sd-white sm:px-12 lg:px-16 lg:py-16">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-sd-teal/15 blur-3xl" />

          <div className="absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-sd-teal">
                Start Your Journey
              </span>

              <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Ready to Build What's Next?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-sd-white/60">
                Explore the program, track, and learning journey that fits your goals.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/programs/ptp"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground"
              >
                PTP · 9 Months
                <ArrowRight size={17} />
              </a>

              <a
                href="/programs/itp"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-sd-white/20 bg-sd-white/5 px-6 py-3.5 text-sm font-bold text-sd-white transition hover:bg-sd-white/10"
              >
                ITP · 4 Months
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CtaSectoin;
