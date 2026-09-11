import { discoveryRoadmap, summerCoreModules, summerFacts, summerImpact } from '@/constants';
import programsHero from '../../../assets/images/about_hero_section.png';
const SummerSection = () => {
  return (
    <>
      <section id="summer-camps" className="w-full border-b border-border bg-background py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 border-b border-border pb-6">
              <div className="inline-flex w-max items-center gap-2 rounded bg-sd-teal/10 px-3 py-1">
                <span className="material-symbols-outlined text-[15px] text-sd-teal">explore</span>

                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-sd-teal">
                  CHAPTER 03 // UNDERGRADUATE DISCOVERY &amp; LABS
                </span>
              </div>

              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[42px]">
                Summer Tech Academies &amp; University Camps
              </h2>

              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Explore technology. Learn fast. Build something real before graduation.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {summerFacts.map((fact) => (
                <div
                  key={fact.value}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-sd-bg-light p-5 shadow-xs"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                      fact.accent === 'primary'
                        ? 'bg-primary/10 text-primary'
                        : fact.accent === 'teal'
                          ? 'bg-sd-teal/10 text-sd-teal'
                          : 'bg-sd-navy/10 text-sd-navy'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[24px]">{fact.icon}</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="font-heading text-base font-bold text-foreground">
                      {fact.value}
                    </span>

                    <span className="font-mono text-xs text-muted-foreground">{fact.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="flex flex-col gap-6 rounded-3xl border border-border bg-sd-bg-light p-8 shadow-xs">
            <div className="flex flex-col justify-between gap-2 border-b border-border pb-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-primary">
                  equalizer
                </span>

                <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                  ANNUAL SUMMER IMPACT NATIONWIDE
                </span>
              </div>

              <span className="rounded bg-emerald-500/10 px-2.5 py-1 font-mono text-xs font-bold uppercase text-emerald-700">
                100% STATE FUNDED BY MCIT
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {summerImpact.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-xs"
                >
                  <span
                    className={`font-heading text-3xl font-extrabold sm:text-4xl lg:text-5xl ${
                      item.accent === 'primary'
                        ? 'text-primary'
                        : item.accent === 'teal'
                          ? 'text-sd-teal'
                          : item.accent === 'green'
                            ? 'text-emerald-700'
                            : 'text-sd-navy'
                    }`}
                  >
                    {item.value}
                  </span>

                  <span className="mt-2 font-mono text-xs font-bold text-foreground">
                    {item.title}
                  </span>

                  <span className="mt-0.5 text-[11px] text-muted-foreground">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Discovery Mosaic */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Main image */}
            <div className="group relative flex min-h-95 flex-col justify-end overflow-hidden rounded-3xl border border-border p-6 shadow-lg lg:col-span-7">
              <img
                src={programsHero}
                alt="University students in ITI summer hackathon lab"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-sd-navy/90 via-sd-navy/40 to-transparent" />

              <div className="relative z-10 flex flex-col gap-2">
                <span className="w-max rounded-full bg-sd-teal px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                  HANDS-ON CAMPUS HACKATHONS &amp; STUDIO LABS
                </span>

                <h3 className="font-heading text-2xl font-bold leading-tight text-white">
                  Where University Talent Meets Real Production Code
                </h3>

                <p className="max-w-xl text-xs leading-relaxed text-gray-200 sm:text-sm">
                  Undergraduates build practical web apps, learn modern Git team workflows, and gain
                  immediate architectural confidence before final year graduation projects.
                </p>
              </div>
            </div>

            {/* Core Modules */}
            <div className="flex flex-col justify-between rounded-3xl border border-border bg-sd-bg-light p-7 shadow-xs lg:col-span-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                    FOUNDATIONAL SKILL MODULES
                  </span>

                  <span className="material-symbols-outlined text-[20px] text-sd-teal">
                    category
                  </span>
                </div>

                <h4 className="font-heading text-xl font-bold text-foreground">
                  Explore Core Stacks
                </h4>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  Four practical technical modules designed to elevate student graduation theses:
                </p>

                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  {summerCoreModules.map((module) => (
                    <div
                      key={module.title}
                      className="flex flex-col gap-1 rounded-xl border border-border bg-card p-3 transition-colors hover:border-sd-teal"
                    >
                      <span className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                        <span
                          className={`material-symbols-outlined text-[16px] ${
                            module.accent === 'primary'
                              ? 'text-primary'
                              : module.accent === 'teal'
                                ? 'text-sd-teal'
                                : module.accent === 'green'
                                  ? 'text-emerald-700'
                                  : 'text-sd-navy'
                          }`}
                        >
                          {module.icon}
                        </span>

                        {module.title}
                      </span>

                      <span className="text-[11px] text-muted-foreground">
                        {module.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="font-mono text-[11px] text-muted-foreground">
                  100% Practical Labs
                </span>

                <span className="font-mono text-xs font-bold text-sd-teal">Zero Tuition</span>
              </div>
            </div>

            {/* Discovery Roadmap */}
            <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-xs lg:col-span-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-sd-teal">
                    UNDERGRADUATE ROADMAP
                  </span>

                  <span className="material-symbols-outlined text-[20px] text-sd-teal">
                    alt_route
                  </span>
                </div>

                <h4 className="font-heading text-xl font-bold text-foreground">
                  Discovery Roadmap
                </h4>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  Sequential phases helping Egyptian university students transition from classroom
                  theory to engineering fluency:
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 text-center sm:grid-cols-4">
                  {discoveryRoadmap.map((step) => (
                    <div
                      key={step.number}
                      className={`flex flex-col items-center gap-1 rounded-xl border p-3 ${
                        step.accent === 'primary'
                          ? 'border-primary/30 bg-primary/5'
                          : 'border-border bg-sd-bg-light'
                      }`}
                    >
                      <span
                        className={`font-mono text-[10px] font-bold ${
                          step.accent === 'primary'
                            ? 'text-primary'
                            : step.accent === 'teal'
                              ? 'text-sd-teal'
                              : 'text-sd-navy'
                        }`}
                      >
                        {step.number} {step.label}
                      </span>

                      <span
                        className={`text-xs font-bold ${
                          step.accent === 'primary' ? 'text-primary' : 'text-foreground'
                        }`}
                      >
                        {step.title}
                      </span>

                      <span className="text-[10px] text-muted-foreground">{step.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs text-muted-foreground">
                  Open to Faculty of Engineering, CS &amp; Science
                </span>

                <span className="font-mono text-xs font-bold text-foreground">Summer Cohorts</span>
              </div>
            </div>

            {/* Fast Track */}
            <div className="flex flex-col justify-between rounded-3xl bg-sd-navy p-7 text-white shadow-md lg:col-span-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-primary px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                    DIPLOMA FAST-TRACK GATEWAY
                  </span>

                  <span className="material-symbols-outlined text-[22px] text-primary">
                    rocket_launch
                  </span>
                </div>

                <h4 className="font-heading text-xl font-bold text-white">
                  Direct Interview Fast-Track Bypass
                </h4>

                <p className="text-xs leading-relaxed text-gray-300 sm:text-sm">
                  Top 10% of Summer Academy performers earn fast-track interview bypass for the
                  Flagship 9-Month Diploma upon graduation.
                </p>
              </div>

              <div className="mt-4 flex flex-col justify-between gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center">
                <span className="font-mono text-xs text-gray-400">
                  Merit-Based Fellowship Bypass
                </span>

                <a
                  href="#intake-status"
                  className="rounded-xl bg-white px-5 py-2.5 text-center font-mono text-xs font-bold text-sd-navy transition-all hover:bg-gray-100"
                >
                  View Summer Schedule &amp; Register →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SummerSection;
