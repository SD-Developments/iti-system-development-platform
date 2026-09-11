import { heroStats } from '@/constants';
import ProgramsHero from './ProgramsHero';
import { NavLink } from 'react-router';

const ProgramsHeroSection = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden border-b border-border bg-sd-bg-light py-16 lg:py-24">
        {/* Decorative Background */}

        <div className="pointer-events-none absolute -right-28 -top-28 h-137.5 w-137.5 rounded-full bg-primary/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-1/4 h-95 w-95 rounded-full bg-sd-teal/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Breadcrumb / Status */}

          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div className="mb-6 flex items-center gap-2 font-mono text-[13px] text-muted-foreground">
              <NavLink to="/" className="transition-colors hover:text-primary">
                Home
              </NavLink>

              <span className="text-foreground/50">/</span>

              <span className="font-semibold text-primary">Programs</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sd-teal" />

              <span className="font-mono text-[11px] font-semibold text-card-foreground">
                INTAKE 47 ADMISSIONS CYCLE ACTIVE
              </span>

              <span className="text-muted-foreground">|</span>

              <span className="font-mono text-[11px] font-bold uppercase text-primary">
                100% MCIT FUNDED
              </span>
            </div>
          </div>

          {/* Hero Grid */}

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Content */}

            <div className="flex flex-col gap-6 lg:col-span-7">
              <div className="inline-flex w-fit items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Accredited Engineering Pedagogy
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[54px] lg:leading-15.5">
                Transformative Learning Pathways in{' '}
                <span className="relative inline-block text-primary underline-sketch">
                  Software Craft
                </span>
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                The System Development Department at ITI prepares Egypt’s most accomplished
                technical minds through intense, studio-style immersion. From comprehensive 9-month
                professional diplomas and agile 4-month career accelerators to pre-university summer
                academies, our curricula bridge theory with uncompromising production engineering.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#nine-month"
                  className="group flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/80 hover:shadow-lg"
                >
                  Explore The 9-Month Residency
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-y-1">
                    arrow_downward
                  </span>
                </a>

                <a
                  href="#comparison-matrix"
                  className="flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3.5 text-sm font-semibold text-card-foreground shadow-xs transition-all hover:bg-muted"
                >
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    sync_alt
                  </span>
                  Compare Curricula Dimensions
                </a>
              </div>

              {/* Stats */}

              <div className="mt-2 grid grid-cols-3 gap-4 border-t border-border pt-6">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <div
                      className={`text-2xl font-bold lg:text-3xl ${
                        stat.featured ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {stat.value}
                    </div>

                    <div className="mt-0.5 font-mono text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <ProgramsHero></ProgramsHero>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramsHeroSection;
