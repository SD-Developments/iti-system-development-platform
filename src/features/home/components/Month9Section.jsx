const Month9Section = () => {
  return (
    <>
      <section className="w-full bg-background py-20 text-foreground" id="nine-month">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6">
          {/* ==================================================
              1. HEADER & OVERVIEW
          ================================================== */}

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 border-b border-border pb-6">
              <div className="inline-flex w-max items-center gap-2 rounded border border-primary/20 bg-primary/10 px-3 py-1">
                <span className="material-symbols-outlined text-[15px] text-primary">flag</span>

                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
                  CHAPTER 01 // FLAGSHIP POSTGRADUATE RESIDENCY
                </span>
              </div>

              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[42px]">
                9-Month Professional Software Engineering Diploma
              </h2>

              <p className="max-w-3xl font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
                Build your foundation. Find your specialty. Ship real software.
              </p>
            </div>

            {/* ==================================================
                QUICK FACTS
            ================================================== */}

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-xs transition-all hover:border-primary/40">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-[24px]">timer</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-heading text-base font-bold text-foreground">9 Months</span>

                  <span className="font-mono text-xs text-muted-foreground">Full Immersion</span>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-xs transition-all hover:border-accent/40">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <span className="material-symbols-outlined text-[24px]">schedule</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-heading text-base font-bold text-foreground">
                    1,200+ Contact Hours
                  </span>

                  <span className="font-mono text-xs text-muted-foreground">Labs & Studio</span>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-xs transition-all hover:border-foreground/30">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground">
                  <span className="material-symbols-outlined text-[24px]">calendar_month</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-heading text-base font-bold text-foreground">
                    October → June
                  </span>

                  <span className="font-mono text-xs text-muted-foreground">Academic Cycle</span>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-xs transition-all hover:border-accent/40">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-heading text-base font-bold text-foreground">
                    100% Fellowship
                  </span>

                  <span className="font-mono text-xs text-muted-foreground">Funded by MCIT</span>
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================
              2. YOUR 9-MONTH JOURNEY
          ================================================== */}

          <div className="relative flex flex-col gap-8 overflow-hidden rounded-3xl border border-border bg-secondary/30 p-8 lg:p-10">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-primary">
                <span className="material-symbols-outlined text-[18px]">route</span>

                <span>CURRICULUM ARCHITECTURE // SEQUENTIAL TIMELINE</span>
              </div>

              <h3 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
                Your 9-Month Journey
              </h3>

              <p className="max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground sm:text-base">
                A sequential progression from fundamentals to enterprise capstone defense.
              </p>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-4 pt-2 lg:grid-cols-11">
              {/* ==================================================
                  PHASE 01
              ================================================== */}

              <div className="group flex flex-col justify-between rounded-2xl border-2 border-border bg-card p-6 shadow-xs transition-all hover:border-foreground/30 lg:col-span-3">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-foreground px-2.5 py-1 font-mono text-[11px] font-bold tracking-wider text-background">
                      PHASE 01 // MONTHS 01–03
                    </span>

                    <span className="h-2 w-2 rounded-full bg-foreground" />
                  </div>

                  <h4 className="mt-1 font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    Foundations
                  </h4>

                  <p className="font-sans text-xs font-semibold text-foreground/75">
                    Build the engineering core.
                  </p>

                  <p className="font-sans text-xs leading-relaxed text-muted-foreground">
                    Master low-level architectural paradigms, algorithmic design, and rigorous data
                    modeling standards.
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-5">
                  {[
                    'Algorithms & OOP',
                    'Data Structures',
                    'Memory Management',
                    'Design Patterns',
                    'Relational Modeling',
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[11px] font-medium text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connector */}
              <div className="hidden items-center justify-center lg:col-span-1 lg:flex">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-accent shadow-xs">
                  <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
                </div>
              </div>

              {/* ==================================================
                  PHASE 02
              ================================================== */}

              <div className="group flex flex-col justify-between rounded-2xl border-2 border-accent/40 bg-card p-6 shadow-xs transition-all hover:border-accent lg:col-span-3">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-accent px-2.5 py-1 font-mono text-[11px] font-bold tracking-wider text-accent-foreground">
                      PHASE 02 // MONTHS 04–06
                    </span>

                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </div>

                  <h4 className="mt-1 font-heading text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                    Specialization
                  </h4>

                  <p className="font-sans text-xs font-semibold text-accent">
                    Go deeper into professional technologies.
                  </p>

                  <p className="font-sans text-xs leading-relaxed text-muted-foreground">
                    Transition into target industrial tracks with high-throughput cloud stacks and
                    distributed systems.
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-5">
                  {['Enterprise Stacks', 'Microservices', 'Cloud Native', 'DevOps', 'CI/CD'].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-md bg-accent/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-accent"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Connector */}
              <div className="hidden items-center justify-center lg:col-span-1 lg:flex">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary shadow-xs">
                  <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
                </div>
              </div>

              {/* ==================================================
                  PHASE 03
              ================================================== */}

              <div className="group flex flex-col justify-between rounded-2xl border-2 border-primary/40 bg-card p-6 shadow-xs transition-all hover:border-primary lg:col-span-3">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-primary px-2.5 py-1 font-mono text-[11px] font-bold tracking-wider text-primary-foreground">
                      PHASE 03 // MONTHS 07–09
                    </span>

                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </div>

                  <h4 className="mt-1 font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    Capstone
                  </h4>

                  <p className="font-sans text-xs font-semibold text-primary">
                    Build something real and defend it.
                  </p>

                  <p className="font-sans text-xs leading-relaxed text-muted-foreground">
                    Full-scale engineering delivery under enterprise SLAs, culminating in corporate
                    CTO panel reviews.
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-5">
                  {[
                    '8-Week Industry MVP',
                    'Live Defense',
                    'Engineering Practices',
                    'Production SLAs',
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================
              3. ENGINEERING PATHS
          ================================================== */}

          <div className="flex flex-col gap-5 rounded-3xl border border-border bg-secondary/30 p-8">
            <div className="flex flex-col justify-between gap-2 border-b border-border pb-4 sm:flex-row sm:items-end">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[22px] text-primary">
                    alt_route
                  </span>

                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Choose Your Engineering Path
                  </h3>
                </div>

                <p className="font-sans text-xs text-muted-foreground sm:text-sm">
                  Select your dedicated postgraduate track for Phase 02 & 03.
                </p>
              </div>

              <span className="shrink-0 font-mono text-xs font-medium text-muted-foreground">
                3 Dedicated Tracks
              </span>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3.5 pt-2 sm:grid-cols-2 lg:grid-cols-3">
              {/* Track 01 */}
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-xs transition-all hover:border-primary">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-heading text-xs font-bold leading-snug text-foreground">
                    Full-Stack Web Solutions Development
                  </span>

                  <span className="font-mono text-[10px] text-muted-foreground">
                    UI Engineering • AI Integration
                  </span>
                </div>
              </div>

              {/* Track 02 */}
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-xs transition-all hover:border-accent">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <span className="material-symbols-outlined text-[18px]">smartphone</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-heading text-xs font-bold leading-snug text-foreground">
                    Cross-Platform Mobile App Development
                  </span>

                  <span className="font-mono text-[10px] text-muted-foreground">
                    Mobile Engineering • AI Integration
                  </span>
                </div>
              </div>

              {/* Track 03 */}
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-xs transition-all hover:border-foreground/30">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <span className="material-symbols-outlined text-[18px]">architecture</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-heading text-xs font-bold leading-snug text-foreground">
                    .NET Enterprise Solutions Development
                  </span>

                  <span className="font-mono text-[10px] text-muted-foreground">
                    Enterprise Architecture • AI Integration
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================
              4. EXPERIENCE
          ================================================== */}

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="flex flex-col gap-4 lg:col-span-6">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs font-bold uppercase text-primary">
                  IMMERSIVE STUDIO ENVIRONMENT
                </span>

                <h3 className="font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
                  What You'll Experience
                </h3>
              </div>

              <div className="flex flex-col gap-3.5 pt-2">
                {/* Card 1 */}
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-xs transition-colors hover:border-primary/40">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-[24px]">desktop_windows</span>
                  </div>

                  <div className="flex flex-col">
                    <h4 className="font-heading text-base font-bold text-foreground">
                      Physical Studio Residency
                    </h4>

                    <p className="mt-1 font-sans text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Dedicated developer pods and high-performance workstation setups.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-xs transition-colors hover:border-accent/50">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <span className="material-symbols-outlined text-[24px]">group_work</span>
                  </div>

                  <div className="flex flex-col">
                    <h4 className="font-heading text-base font-bold text-foreground">
                      Professional Engineering Workflows
                    </h4>

                    <p className="mt-1 font-sans text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Pair programming, code reviews, and architectural debate.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-xs transition-colors hover:border-primary/40">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-[24px]">military_tech</span>
                  </div>

                  <div className="flex flex-col">
                    <h4 className="font-heading text-base font-bold text-foreground">
                      Industry-Sponsored Capstone
                    </h4>

                    <p className="mt-1 font-sans text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Build, test, and defend a real software project with live CTO juries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================================================
                STUDIO IMAGE
            ================================================== */}

            <div className="relative lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl">
                <img
                  alt="ITI Software Residency Studio"
                  className="h-95 w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VlMej462q0aT54f6rASDRinUaYZ7Kg88UT9Clowor0onXvTqp5ozosak0zqn1WkVuTvE3SG-aPvkr95PxyJC_0pipTho-agMuxdjsZbbw6vaJ-ZPQ7KnpHlzRIGRf6yL8ae98VWzKj1QDqDpQjGaJYa44ALUxtr0oTzDMpTPgK3hqwYjLh3sG8UYjoVcbgpiZlbM35p_NfaHhwh_f9GUn154utNHJtMcatGEoqme7F48Qe5aioo_7ObOev"
                />

                <div className="absolute inset-0 bg-linear-to-t from-sd-navy/85 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <span className="material-symbols-outlined text-[22px]">verified</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-sans text-xs font-bold text-foreground">
                        Physical Studio Residency
                      </span>

                      <span className="font-mono text-[11px] text-muted-foreground">
                        Live Engineering Environment
                      </span>
                    </div>
                  </div>

                  <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================
              5. FROM LEARNING TO INDUSTRY
          ================================================== */}

          <div className="relative flex flex-col gap-8 overflow-hidden rounded-3xl bg-sd-navy p-8 text-white shadow-xl lg:p-12">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:gap-3">
              {['LEARN', 'SPECIALIZE', 'BUILD', 'DEFEND', 'GROW'].map((step, index, array) => (
                <div key={step} className="flex items-center gap-2 sm:gap-3">
                  <span
                    className={`
                      rounded-lg px-3 py-1 font-bold tracking-wider text-white
                      ${step === 'GROW' ? 'bg-primary' : 'bg-white/10'}
                    `}
                  >
                    {step}
                  </span>

                  {index < array.length - 1 && <span className="font-bold text-accent">→</span>}
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="flex max-w-2xl flex-col gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                  THE EMPLOYMENT ACCELERATOR OUTCOME
                </span>

                <h3 className="font-heading text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Senior-Ready Junior Engineers
                </h3>

                <p className="font-sans text-sm leading-relaxed text-white/75">
                  Graduates possess production stamina, deep architectural instincts, and direct
                  hiring relationships with 450+ partner companies.
                </p>
              </div>

              <div className="flex shrink-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <a
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-sans text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md transition-all hover:bg-primary/90"
                  href="#intake-status"
                >
                  <span>Apply for 9-Month Residency</span>

                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>

                <a
                  className="rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-center font-sans text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-white/20"
                  href="#intake-status"
                >
                  Check Eligibility & Prerequisites
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Month9Section;
