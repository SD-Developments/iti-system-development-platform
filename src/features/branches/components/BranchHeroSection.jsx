import heroImage from '../../../assets/images/hero1.png';
const BranchHeroSection = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden border-b border-border bg-linear-to-b from-background via-sd-bg-light to-sd-bg-light pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* HERO CONTENT */}

            <div className="flex flex-col items-start text-left lg:col-span-7">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-primary sm:text-[11px]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                Egypt-Wide Distributed Engineering Community // 11 Hubs
              </div>

              <h1 className="mb-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[56px]">
                Software Engineering,
                <br />
                <span className="text-primary">Everywhere.</span>
                <br />
                <span className="text-3xl font-bold text-foreground/90 sm:text-4xl lg:text-[44px]">
                  Where Software Communities Grow.
                </span>
              </h1>

              <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                SD is not just a department with locations. These branches are real engineering
                communities distributed across Egypt, giving students access to hands-on learning,
                dedicated studio residency, active mentorship, and direct industry connectivity.
              </p>

              <div className="mb-10 flex flex-wrap items-center gap-3">
                <a
                  href="#regional-zones"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-md transition-all hover:shadow-lg"
                >
                  <span className="material-symbols-outlined text-[18px]">travel_explore</span>
                  Explore Regional Hubs
                </a>

                <a
                  href="#all-branches"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background"
                >
                  <span className="material-symbols-outlined text-[18px]">location_searching</span>
                  Find Your Nearest Community
                </a>
              </div>

              {/* HERO STATS */}

              <div className="grid w-full grid-cols-2 gap-5 border-t border-border pt-6 sm:grid-cols-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-extrabold text-foreground lg:text-3xl">11+</span>

                  <span className="mt-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:text-xs">
                    Engineering Hubs
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-2xl font-extrabold text-primary lg:text-3xl">27</span>

                  <span className="mt-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:text-xs">
                    Governorates Reached
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-2xl font-extrabold text-foreground lg:text-3xl">
                    4,500+
                  </span>

                  <span className="mt-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:text-xs">
                    Active Students
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-2xl font-extrabold text-sd-teal lg:text-3xl">100%</span>

                  <span className="mt-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:text-xs">
                    Industry Connected
                  </span>
                </div>
              </div>
            </div>

            {/* HERO IMAGE */}

            <div className="relative lg:col-span-5">
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
                <img
                  src={heroImage}
                  alt="Modern dual-monitor developer engineering workstations in ITI tech hub lab"
                  className="h-105 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 sm:h-120"
                />

                <div className="absolute inset-0 bg-linear-to-t from-sd-navy via-sd-navy/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 sm:p-7">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded bg-primary px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-white">
                      Smart Village & Regional Pods
                    </span>

                    <span className="rounded bg-white/20 px-2 py-0.5 font-mono text-[9px] text-white backdrop-blur-md">
                      Dual-Display Pods
                    </span>
                  </div>

                  <h3 className="mb-1 text-lg font-bold text-white sm:text-xl">
                    Standardized Engineering Workstations
                  </h3>

                  <p className="max-w-md text-[11px] leading-relaxed text-white/85 sm:text-xs">
                    Identical dual-monitor setups, dark-fiber network fabric, and synchronized
                    curriculum from Aswan to Alexandria.
                  </p>
                </div>
              </div>

              {/* FLOATING TAG */}

              <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-xl sm:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-2xl">verified</span>
                </div>

                <div>
                  <span className="block font-mono text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Quality Pact
                  </span>

                  <span className="text-xs font-bold text-foreground">
                    Zero Educational Compromise
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BranchHeroSection;
