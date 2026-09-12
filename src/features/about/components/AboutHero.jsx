import { NavLink } from 'react-router';
import aboutHero from '../../../assets/images/about_hero_section.png';
const AboutHero = () => {
  return (
    <>
      <section className="w-full border-b border-border bg-background pb-16 pt-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-6 flex items-center gap-2 font-mono text-[13px] text-muted-foreground">
            <NavLink to="/" className="transition-colors hover:text-primary">
              Home
            </NavLink>

            <span className="text-foreground/50">/</span>

            <span className="font-semibold text-primary">About SD</span>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 pb-12 lg:grid-cols-12 lg:gap-12">
            {/* Hero Content */}

            <div className="flex flex-col gap-4 lg:col-span-7">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary2 px-3.5 py-1 text-[12px] font-semibold text-secondary-foreground">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />

                <span>Ministry of Communications and Information Technology (MCIT)</span>
              </div>

              <h1 className="mt-1 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
                Shaping Egypt&apos;s Software Engineering Landscape{' '}
                <span className="font-black text-primary">Since 1993</span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                A legacy of academic rigor, industry co-design, and relentless commitment to
                cultivating elite software engineers who architect mission-critical enterprise
                systems and steer high-growth technology ventures across Egypt and the global tech
                economy.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-[12px] font-semibold text-primary shadow-sm">
                  <span className="material-symbols-outlined text-base">verified</span>

                  <span>Official Institutional Mandate • ITI SD</span>
                </div>

                <span className="font-mono text-[13px] text-muted-foreground">
                  DOC_REF: SD-REV-2025 // SEC_PUB
                </span>
              </div>
            </div>

            {/* Hero Image */}

            <div className="relative lg:col-span-5">
              <div className="group relative aspect-16/10 overflow-hidden rounded-2xl border border-border shadow-2xl lg:aspect-4/3">
                <img
                  src={aboutHero}
                  alt="Egyptian software engineering students collaborating in an ITI tech hub studio at Smart Village Cairo"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-linear-to-t from-sd-navy/85 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-0.5 font-mono text-[11px] text-white">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />

                    <span>Smart Village Tech Hub Studio</span>
                  </div>

                  <p className="text-xs leading-snug text-white/90">
                    Collaborative system design & live architecture reviews across national cohorts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics */}

          <div className="grid grid-cols-2 gap-8 border-t border-border pt-10 lg:grid-cols-4 lg:gap-12">
            <div>
              <span className="mb-1 block font-mono text-[11px] tracking-wider text-primary">
                METRIC // 01
              </span>

              <div className="text-4xl font-extrabold leading-none tracking-tight text-primary sm:text-5xl">
                30+
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
