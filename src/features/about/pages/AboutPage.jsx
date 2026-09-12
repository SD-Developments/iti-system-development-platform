import { NavLink } from 'react-router';

import aboutHero from '../../../assets/images/about_hero_section.png';
import about2 from '../../../assets/images/about2.png';

import {
  coreValues,
  pipelineStages,
  leaders,
  milestones,
  aiInitiatives,
  partnerCompanies,
} from '../../../constants';

const AboutPage = () => {
  return (
    <>
      <main className="w-full bg-background text-foreground">
        <div className="flex w-full flex-col">
          {/* =====================================================
              SECTION 1 — HERO
          ===================================================== */}

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
                    systems and steer high-growth technology ventures across Egypt and the global
                    tech economy.
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
                        Collaborative system design & live architecture reviews across national
                        cohorts.
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

          {/* =====================================================
              SECTION 2 — DEPARTMENT STORY
          ===================================================== */}

          <section className="w-full border-b border-border bg-background py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="flex flex-col gap-4 lg:col-span-6">
                  <div className="flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-wider text-primary">
                    <span className="material-symbols-outlined text-sm">code_blocks</span>

                    <span>The Bedrock of Digital Egypt</span>
                  </div>

                  <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[40px]">
                    An Institutional Pillar Fueling High-End Software Engineering
                  </h2>

                  <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      As the core division within the Information Technology Institute (ITI), the
                      Software Development Department serves as Egypt&apos;s primary national
                      incubator for elite software craft. Established under the auspices of the
                      Ministry of Communications and Information Technology (MCIT), the department
                      acts as the definitive bridge connecting high-potential graduates with
                      production-grade engineering realities.
                    </p>

                    <p>
                      Our pedagogical approach bypasses conventional academic lectures. We operate
                      immersive software delivery incubators, where curriculum is co-architected
                      with leading enterprise software conglomerates, fast-growing scale-ups, and
                      international engineering research labs. Every intake is re-calibrated against
                      global production standards: from strict distributed systems to autonomous AI
                      pipelines.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                    <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5 shadow-sm">
                      <div className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined text-xl">account_tree</span>

                        <h3 className="text-sm font-bold text-card-foreground">
                          Curriculum Co-Design
                        </h3>
                      </div>

                      <p className="text-xs leading-normal text-muted-foreground">
                        Over 60+ chief technical officers and software leads review our track
                        syllabi twice per calendar year.
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5 shadow-sm">
                      <div className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined text-xl">terminal</span>

                        <h3 className="text-sm font-bold text-card-foreground">
                          Production Immersion
                        </h3>
                      </div>

                      <p className="text-xs leading-normal text-muted-foreground">
                        Students complete 1,200+ hours of synchronous code authoring, automated
                        testing, and CI/CD pipelines.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image */}

                <div className="relative lg:col-span-6">
                  <div className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-border shadow-2xl">
                    <img
                      src={about2}
                      alt="Authentic documentary photograph of Egyptian software engineering students and mentors in an ITI tech hub lab"
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-sd-navy/85 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 font-mono text-[11px] text-white shadow-sm">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />

                        <span>Authentic Engineering Residency</span>
                      </div>

                      <p className="text-sm font-medium leading-snug">
                        Peer code reviews, whiteboard design arguments, and architectural defense at
                        ITI Smart Village HQ.
                      </p>

                      <span className="mt-2 block font-mono text-[11px] text-sd-teal">
                        Intake Residency • Collaborative Pair-Programming in Action
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              SECTION 3 — VISION & MISSION
          ===================================================== */}

          <section className="w-full border-b border-border bg-sd-bg-light py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Vision */}

                <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-primary/20 bg-card p-8 shadow-sm sm:p-10">
                  <div className="relative z-10 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[12px] font-bold uppercase tracking-wider text-primary">
                        STRATEGIC HORIZON 2030
                      </span>

                      <span className="material-symbols-outlined text-2xl text-primary">
                        visibility
                      </span>
                    </div>

                    <h3 className="mt-2 text-2xl font-extrabold text-card-foreground sm:text-3xl">
                      Our Department Vision
                    </h3>

                    <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                      To stand as the preeminent regional center of gravity for software
                      craftsmanship, cultivating engineering leaders who drive monumental digital
                      transformation and steer high-impact global technology ventures.
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-border pt-4 font-mono text-xs text-muted-foreground">
                    <span className="font-semibold text-primary">PILLAR // LEADERSHIP</span>

                    <span>ACCREDITED EXCELLENCE</span>
                  </div>
                </div>

                {/* Mission */}

                <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-sd-navy bg-sd-navy p-8 text-white shadow-xl sm:p-10">
                  <div className="relative z-10 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[12px] font-bold uppercase tracking-wider text-sd-teal">
                        OPERATIONAL DIRECTIVE
                      </span>

                      <span className="material-symbols-outlined text-2xl text-sd-teal">
                        rocket_launch
                      </span>
                    </div>

                    <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                      Our Department Mission
                    </h3>

                    <p className="mt-1 text-base leading-relaxed text-white/90">
                      Deliver rigorous, project-driven, and market-attuned software engineering
                      education that dismantles the gap between academic theory and enterprise
                      production environments through intensive mentorship and authentic challenges.
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs text-sd-teal">
                    <span className="font-semibold">PILLAR // PRODUCTION-READY</span>

                    <span>SYSTEMS RHYTHM</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              SECTION 4 — CORE VALUES
          ===================================================== */}

          <section className="w-full border-b border-border bg-background py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className="mb-14 max-w-2xl">
                <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-primary">
                  ENGINEERED MINDSET
                </span>

                <h2 className="mt-1.5 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-[40px]">
                  Core Values Defining the SD Engineer
                </h2>

                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  Our graduates are distinguished not merely by language syntax, but by the
                  engineering ethos instilled throughout their immersive residency.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {coreValues.map((value) => (
                  <div
                    key={value.title}
                    className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/40"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sd-bg-light text-primary">
                        <span className="material-symbols-outlined text-xl">{value.icon}</span>
                      </div>

                      <h3 className="text-lg font-bold text-card-foreground">{value.title}</h3>

                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>

                    <span className="mt-6 font-mono text-[11px] font-semibold text-primary">
                      {value.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =====================================================
              SECTION 5 — PRODUCTION PIPELINE
          ===================================================== */}

          <section className="w-full border-b border-border bg-sd-bg-light py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex max-w-2xl flex-col gap-2">
                  <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-primary">
                    EDUCATIONAL METHODOLOGY
                  </span>

                  <h2 className="mt-1 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-[40px]">
                    The SD Four-Stage Production Pipeline
                  </h2>

                  <p className="text-base text-muted-foreground">
                    How we transform gifted STEM graduates into seasoned software engineers capable
                    of contributing to production systems from day one.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-xl border border-border bg-card px-4 py-2 font-mono text-xs font-semibold text-card-foreground shadow-sm">
                    TOTAL DURATION: 1,200+ CONTACT HOURS
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {pipelineStages.map((stage) => (
                  <div
                    key={stage.number}
                    className="flex flex-col justify-between rounded-2xl border-t-4 border-primary bg-card p-6 shadow-sm"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="rounded bg-primary/10 px-2.5 py-0.5 font-mono text-xs font-bold text-primary">
                          STAGE {stage.number}
                        </span>

                        <span className="material-symbols-outlined text-xl text-primary">
                          {stage.icon}
                        </span>
                      </div>

                      <h3 className="mt-1 text-lg font-bold text-card-foreground">{stage.title}</h3>

                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {stage.description}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-border pt-4">
                      <ul className="space-y-1.5 font-mono text-[11px] text-muted-foreground">
                        {stage.items.map((item) => (
                          <li key={item} className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =====================================================
              SECTION 6 — AI INITIATIVES
          ===================================================== */}

          <section className="w-full border-b border-border bg-background py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-sd-bg-light p-8 md:p-12">
                <div className="relative z-10 flex max-w-3xl flex-col gap-4">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-3 py-1 font-mono text-xs text-white">
                    <span className="material-symbols-outlined text-sm">smart_toy</span>

                    <span>THE NEXT FRONTIER: 2025 CURRICULAR INTEGRATION</span>
                  </div>

                  <h2 className="mt-1 text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                    Infusing Generative AI, LLMOps & Cloud Sovereignty
                  </h2>

                  <p className="text-base leading-relaxed text-muted-foreground">
                    Software engineering has permanently pivoted. At the SD Department, AI is not
                    treated as a peripheral elective—it is woven directly into every development
                    stack. Our cohorts author software with modern AI-augmented developer workflows,
                    embed specialized LLMs via vector storage (RAG), and monitor models via
                    cloud-native pipelines.
                  </p>

                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {aiInitiatives.map((initiative) => (
                      <div
                        key={initiative.title}
                        className="rounded-xl border border-border bg-card p-4 shadow-sm"
                      >
                        <span className="mb-1 block font-mono text-xs font-bold text-primary">
                          {initiative.title}
                        </span>

                        <p className="text-xs leading-normal text-muted-foreground">
                          {initiative.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              SECTION 7 — TIMELINE
          ===================================================== */}

          <section className="w-full border-b border-border bg-sd-bg-light py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className="mb-16 flex max-w-2xl flex-col gap-3">
                <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-primary">
                  THREE DECADES OF IMPACT
                </span>

                <h2 className="mt-1.5 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-[40px]">
                  Milestones in Egyptian Technology History
                </h2>

                <p className="text-base text-muted-foreground">
                  Explore the chronological breakthroughs of the Software Development Department as
                  it scaled from an early pioneering initiative to a nation-spanning digital
                  factory.
                </p>
              </div>

              <div className="relative flex flex-col gap-8">
                {/* Timeline Line */}

                <div className="absolute bottom-4 left-35 top-4 hidden w-0.5 bg-border md:block" />

                {milestones.map((milestone) => (
                  <div
                    key={milestone.year}
                    className="relative flex flex-col gap-6 md:flex-row md:gap-12"
                  >
                    <div className="shrink-0 md:w-35 md:justify-end">
                      <span
                        className={`inline-flex rounded-full px-3.5 py-1.5 font-mono text-xs font-bold shadow-sm ${
                          milestone.variant === 'primary'
                            ? 'bg-primary text-white'
                            : milestone.variant === 'secondary'
                              ? 'bg-secondary2 text-secondary-foreground'
                              : 'bg-sd-bg-light text-foreground'
                        }`}
                      >
                        {milestone.year}
                      </span>
                    </div>

                    <div
                      className={`flex flex-1 flex-col gap-2 rounded-2xl bg-card p-6 shadow-sm sm:p-7 ${
                        milestone.featured ? 'border-2 border-primary/30' : 'border border-border'
                      }`}
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-base font-bold text-card-foreground sm:text-lg">
                          {milestone.title}
                        </h3>

                        <span
                          className={`font-mono text-xs font-medium ${
                            milestone.featured ? 'font-bold text-primary' : 'text-muted-foreground'
                          }`}
                        >
                          {milestone.meta}
                        </span>
                      </div>

                      <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =====================================================
              SECTION 8 — LEADERSHIP
          ===================================================== */}

          <section className="w-full border-b border-border bg-background py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className="mx-auto mb-16 flex max-w-3xl flex-col gap-3 text-center">
                <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-primary">
                  Academic & Industrial Governance
                </span>

                <h2 className="mt-1.5 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-[40px]">
                  Guided by Leading Engineers & Practitioners
                </h2>

                <p className="text-base text-muted-foreground">
                  Our track supervisors, lead architects, and advisory council members bridge public
                  institutional commitment with real-world tech industry execution.
                </p>
              </div>

              {/* Leaders */}

              <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                {leaders.map((leader) => (
                  <div
                    key={leader.name}
                    className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-7 text-center shadow-sm transition-colors hover:border-primary/40"
                  >
                    <img
                      src={leader.image}
                      alt={leader.alt}
                      className="h-24 w-24 rounded-full object-cover shadow-inner ring-2 ring-primary/20"
                    />

                    <div className="flex flex-col">
                      <h3 className="text-base font-bold text-card-foreground">{leader.name}</h3>

                      <span className="mt-0.5 font-mono text-xs font-bold text-primary">
                        {leader.role}
                      </span>

                      <span className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {leader.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Advisory Council */}

              <div className="flex flex-col gap-6 rounded-2xl border border-border bg-sd-bg-light p-8">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-foreground">
                      Active Industry Advisory Council
                    </span>

                    <span className="mt-0.5 text-xs text-muted-foreground">
                      The companies co-designing our graduation challenges and track rubrics
                    </span>
                  </div>

                  <span className="font-mono text-xs font-bold text-primary">
                    60+ GLOBAL & LOCAL PARTNERS
                  </span>
                </div>

                <div className="grid grid-cols-2 items-center gap-3 sm:grid-cols-4 md:grid-cols-7">
                  {partnerCompanies.map((partner) => (
                    <div
                      key={partner}
                      className="rounded-xl border border-border bg-card px-2 py-3 text-center font-mono text-xs font-bold text-card-foreground shadow-sm"
                    >
                      {partner}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              SECTION 9 — CTA
          ===================================================== */}

          <section className="mx-auto w-full max-w-7xl px-4 py-20 md:px-6 lg:py-24">
            <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl bg-linear-to-r from-primary via-primary/80 to-sd-navy p-8 text-white shadow-2xl md:p-14 lg:flex-row">
              <div className="relative z-10 flex max-w-xl flex-col gap-3">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-white/90 backdrop-blur-md">
                  INTAKE 45 ADMISSIONS NOW PREVIEWING
                </div>

                <h2 className="mt-1 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Ready to Build the Future of Software?
                </h2>

                <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                  Explore our specialized diplomas, intensive 4-month bootcamps, and nationwide
                  tracks. Admissions open cyclically across all 11 Egyptian branches.
                </p>
              </div>

              <div className="relative z-10 flex w-full shrink-0 flex-col items-center gap-4 sm:flex-row lg:w-auto">
                <NavLink
                  to="/tracks"
                  className="w-full rounded-xl bg-white px-8 py-4 text-center text-sm font-bold text-sd-navy shadow-lg transition-all hover:bg-sd-white sm:w-auto"
                >
                  Explore All Tracks
                </NavLink>

                <NavLink
                  to="/programs"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-center text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto"
                >
                  View Programs & Diplomas
                </NavLink>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
