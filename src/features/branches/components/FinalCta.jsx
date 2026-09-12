const FinalCta = () => {
  return (
    <>
      <section className="w-full bg-sd-bg-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-sd-navy bg-linear-to-br from-sd-navy via-[#0A344A] to-[#051D2A] p-7 text-white shadow-2xl sm:p-10 lg:p-14">
            {/* CIRCUIT DECORATION */}

            <div className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full border-28 border-white/5" />

            <div className="pointer-events-none absolute -bottom-6 -right-6 h-48 w-48 rounded-full border-14 border-sd-teal/20" />

            <div className="pointer-events-none absolute left-1/3 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative z-10 max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[10px] text-sd-teal sm:text-xs">
                <span className="h-2 w-2 animate-ping rounded-full bg-sd-teal" />
                INTAKE 45 ADMISSIONS CALENDAR LIVE
              </div>

              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Find Your Engineering Community.
              </h2>

              <p className="mb-8 text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg">
                Your software engineering journey begins at your nearest SD tech hub. Step into
                high-performance labs, mentorship pods, and lifelong alumni networks.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#all-branches"
                  className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-bold text-white shadow-md transition-all hover:shadow-lg sm:px-7 sm:py-3.5 sm:text-sm"
                >
                  Explore Admission Intakes
                  <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
                </a>

                <a
                  href="#featured-hubs"
                  className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-xs font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:px-6 sm:py-3.5 sm:text-sm"
                >
                  <span className="material-symbols-outlined text-[17px]">download</span>
                  Download Hub Directory PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalCta;
