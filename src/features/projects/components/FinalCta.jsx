const FinalCta = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-sd-navy py-20 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-99"
          style={{
            backgroundImage:
              'radial-gradient(rgba(0,176,176,0.12) 1px, transparent 1px), radial-gradient(rgba(224,53,49,0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            backgroundPosition: '0 0, 16px 16px',
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl space-y-6 px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-xs font-semibold tracking-wider text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" />

            <span>PARTNER WITH SYSTEM DEVELOPMENT</span>
          </div>

          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Have a Real-World Engineering Problem Worth Solving?
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300">
            Partner with ITI System Development to sponsor capstone squads, co-develop innovative
            solutions, or scout top-tier software engineering graduates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#"
              className="rounded-xl bg-primary px-7 py-3.5 text-sm font-bold tracking-wide text-primary-foreground shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Submit an Industry Challenge
            </a>

            <a
              href="/programs"
              className="rounded-xl border border-slate-600 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10"
            >
              Explore SD Academic Programs
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 font-mono text-xs text-slate-400">
            <span>✔ 11 Nationwide Hubs Across Egypt</span>
            <span>✔ Zero IP Royalties Retained</span>
            <span>✔ Direct Ministry &amp; Dean Oversight</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalCta;
