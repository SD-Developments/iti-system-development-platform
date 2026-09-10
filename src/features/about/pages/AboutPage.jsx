import { useState } from 'react';
import { NavLink } from 'react-router';
import aboutHero from '../../../assets/images/about_hero_section.png';
import about2 from '../../../assets/images/about2.png';
import { coreValues, pipelineStages } from '../../../constants';

const AboutPage = () => {
  const [milestones] = useState([
    {
      year: 'YEAR 1993',
      variant: 'primary',
      title: 'Establishment of ITI',
      meta: 'COHORT 01 FOUNDING',
      description:
        "The Information Technology Institute is founded as Egypt's flagship national institution for high-level computing sciences, laying the groundwork for specialized software engineering tracks.",
    },
    {
      year: 'YEAR 2005',
      variant: 'secondary',
      title: 'Autonomous SD Department & Open Source Labs',
      meta: 'ENTERPRISE SCALE',
      description:
        'Software Development is officially established as a dedicated specialized department. Pioneer labs launch enterprise Java, C++, and Linux open-source development tracks.',
    },
    {
      year: 'YEAR 2015',
      variant: 'neutral',
      title: 'Regional Expansion Across Egypt',
      meta: 'DELTA & ALEXANDRIA',
      description:
        'Scaling beyond the Smart Village headquarters, launching active SD specialized hubs in Alexandria and Upper Egypt to decentralize elite technology education.',
    },
    {
      year: 'YEAR 2020',
      variant: 'neutral',
      title: 'Creativa Innovation Hubs Rollout',
      meta: '11 SATELLITE CAMPUSES',
      description:
        'Nationwide rollout across university-embedded Creativa Centers in Aswan, Minya, Mansoura, Assiut, Menofia, and Suez, connecting local youth directly with international software markets.',
    },
    {
      year: '2024 - 2025',
      variant: 'primary',
      title: 'AI Native Systems & 15,000+ Alumni Milestone',
      meta: 'CURRENT ACTIVE MANDATE',
      description:
        'Full department curricula overhaul focusing on AI-augmented engineering, cloud-native architectures, micro-frontends, and global remote developer workforce acceleration.',
      featured: true,
    },
  ]);

  const [leaders] = useState([
    {
      name: 'Eng. Bassem Mostafa',
      role: 'Head of Software Development Dept.',
      description:
        '20+ years steering mission-critical cloud architectures and leading national developer programs.',
      image:
        'https://lh3.googleusercontent.com/aida/AEtjO1VQ20EmfSOAn8Rdhv7vSNIAZctxyzkHdU9w1yvnz5WW9LzUKg-Cba0k2LX4rqUAkJefaICOJH0D7aDiTdA4entstbUarKt-TJ_ahWh4emf4OOAm-ZfjzOdFGNgKtwkEQiS-4IGcaK3f7JVVJMaGscCMuNm81N6ZNGDgWGuiThyAOsXPEt9otE0HWuPAkKHQwU4C2Jlb7qh_RFa-1U9JWmh-8CSlEVlelK3vvABCUeSzGgT22T5cb7_vC-lj',
      alt: 'Eng. Bassem Mostafa, Head of Software Development Dept.',
    },
    {
      name: 'Dr. Hoda Abdel-Salam',
      role: 'Principal Software Architect',
      description:
        'Specialist in distributed microservices, algorithmic verification, and open-source ecosystems.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBdb2kwC9qyVUSTrHy6us_QkZwL_CJJbdG4xpMWbB8iYR-k_HokInGGz8bpa62Oj3JPzy1ghTKW-OeW0DIsWAsNnelzFRkig2m_DXXgGcSOXDbMp23YUR-TMfW1OYu68dPZYvez7dFEGYJCfWNNjSGoHDU-aysQ8aeTfSLS8fZ_X2n6nUUw3LgteMfeVyXreZFWo5t7UDlBRFCZQeFhg9bMfkEtD0TvBqtl7tU6SlJZqAA5auRFaKgPVQ',
      alt: 'Dr. Hoda Abdel-Salam, Principal Software Architect',
    },
    {
      name: 'Eng. Tamer Soliman',
      role: 'Director of Industry Integration',
      description:
        'Former Enterprise Tech Director linking hiring partners and startup scale-ups with SD cohorts.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBMmrTO9vy_ZFyPK1Rue-6883PlM_BmXXKopf9wgWhzAWE_3WDXgoTOLdcq6vcPB-1QdA_CruGKskKl8rifX15Jjbtz9HR147gSlrazs-8HpTVyh7TSRvKvCxTKFdOE1J9CduVvkRJFY7N3W57yLUYoVq8PRXthktGB1obh6BhEAwdBWTTXEifclYfImS3ORIIKQIJNU7pymCADyqBI-Gt35-cY891oSSpbd3vx1cL_S6Qtl0J5RP4qnA',
      alt: 'Eng. Tamer Soliman, Director of Industry Integration',
    },
  ]);

  const [partners] = useState([
    'MICROSOFT',
    'VALEO',
    'DELL TECH',
    'FAWRY',
    'VODAFONE',
    'IBM',
    'INSTABUG',
  ]);

  const [aiInitiatives] = useState([
    {
      title: 'AI Pair-Programming',
      description: 'Harnessing LLM copilot agents with test-first defensive verification.',
    },
    {
      title: 'RAG Architectures',
      description: 'Vector DBs, embedding indexing, and intelligent context injection.',
    },
    {
      title: 'Cloud Orchestration',
      description: 'Kubernetes, Terraform IaC, and resilient distributed microservices.',
    },
  ]);
  return (
    <>
      <main className="w-full ">
        <div className="flex w-full flex-col">
          {/* =====================================================
            SECTION 1 — HERO
        ===================================================== */}
          <section className="w-full border-b border-[#e2eaee]  pb-16 pt-8">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className="mb-6 flex items-center gap-2 font-mono text-[13px] ">
                <NavLink to="/" className="transition-colors hover:text-[#F02F2F]">
                  Home
                </NavLink>
                <span className="text-[#687888]/50">/</span>
                <span className="font-semibold text-[#F02F2F]">About SD</span>
                <span className="text-[#687888]/50">/</span>
                <span className="text-[#687888]">Strategic Overview & Legacy</span>
              </div>

              <div className="grid grid-cols-1 items-center gap-8 pb-12 lg:grid-cols-12 lg:gap-12">
                {/* Hero Content */}
                <div className="flex flex-col gap-4 lg:col-span-7">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#e0f7f7] px-3.5 py-1 text-[12px] font-semibold text-[#082B3E]">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#F02F2F]" />
                    <span>Ministry of Communications and Information Technology (MCIT)</span>
                  </div>

                  <h1 className="mt-1 font-['Plus_Jakarta_Sans'] text-4xl font-extrabold leading-tight tracking-tight text-[#082B3E] sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
                    Shaping Egypt&apos;s Software Engineering Landscape{' '}
                    <span className="font-black text-[#F02F2F]">Since 1993</span>
                  </h1>

                  <p className="max-w-2xl text-base leading-relaxed text-[#687888] sm:text-lg">
                    A legacy of academic rigor, industry co-design, and relentless commitment to
                    cultivating elite software engineers who architect mission-critical enterprise
                    systems and steer high-growth technology ventures across Egypt and the global
                    tech economy.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <div className="flex items-center gap-2 rounded-lg border border-[#e2eaee] bg-white px-3 py-2 text-[12px] font-semibold text-[#F02F2F] shadow-sm">
                      <span className="material-symbols-outlined text-base">verified</span>

                      <span>Official Institutional Mandate • ITI SD</span>
                    </div>

                    <span className="font-mono text-[13px] text-[#687888]">
                      DOC_REF: SD-REV-2025 // SEC_PUB
                    </span>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="relative lg:col-span-5">
                  <div className="group relative aspect-16/10 overflow-hidden rounded-2xl border border-[#e2eaee] shadow-2xl lg:aspect-4/3">
                    <img
                      src={aboutHero}
                      alt="Egyptian software engineering students collaborating in an ITI tech hub studio at Smart Village Cairo"
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#082B3E]/80 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-[#F02F2F] px-2.5 py-0.5 font-mono text-[11px]">
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

              {/* Metric */}
              <div className="grid grid-cols-2 gap-8 border-t border-[#e2eaee] pt-10 lg:grid-cols-4 lg:gap-12">
                <div>
                  <span className="mb-1 block font-mono text-[11px] tracking-wider text-[#F02F2F]">
                    METRIC // 01
                  </span>

                  <div className="font-['Plus_Jakarta_Sans'] text-4xl font-extrabold leading-none tracking-tight text-[#F02F2F] sm:text-5xl">
                    30+
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* =====================================================
            SECTION 2 — DEPARTMENT STORY
        ===================================================== */}
          <section className="w-full border-b border-[#e2eaee] bg-white py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="flex flex-col gap-4 lg:col-span-6">
                  <div className="flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-wider text-[#F02F2F]">
                    <span className="material-symbols-outlined text-sm">code_blocks</span>
                    <span>The Bedrock of Digital Egypt</span>
                  </div>

                  <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-black leading-tight tracking-tight text-[#082B3E] sm:text-4xl lg:text-[40px]">
                    An Institutional Pillar Fueling High-End Software Engineering
                  </h2>

                  <div className="space-y-4 text-base leading-relaxed text-[#687888]">
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
                    <div className="flex flex-col gap-2 rounded-xl border border-[#e2eaee] bg-white p-5 shadow-sm">
                      <div className="flex items-center gap-2 text-[#F02F2F]">
                        <span className="material-symbols-outlined text-xl">account_tree</span>

                        <h3 className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#082B3E]">
                          Curriculum Co-Design
                        </h3>
                      </div>

                      <p className="text-xs leading-normal text-[#687888]">
                        Over 60+ chief technical officers and software leads review our track
                        syllabi twice per calendar year.
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 rounded-xl border border-[#e2eaee] bg-white p-5 shadow-sm">
                      <div className="flex items-center gap-2 text-[#F02F2F]">
                        <span className="material-symbols-outlined text-xl">terminal</span>

                        <h3 className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#082B3E]">
                          Production Immersion
                        </h3>
                      </div>

                      <p className="text-xs leading-normal text-[#687888]">
                        Students complete 1,200+ hours of synchronous code authoring, automated
                        testing, and CI/CD pipelines.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative lg:col-span-6">
                  <div className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-[#e2eaee] shadow-2xl">
                    <img
                      src={about2}
                      alt="Authentic documentary photograph of Egyptian software engineering students and mentors in an ITI tech hub lab"
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#082B3E]/85 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#F02F2F] px-3 py-1 font-mono text-[11px] shadow-sm">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                        <span>Authentic Engineering Residency</span>
                      </div>

                      <p className="text-sm font-medium leading-snug">
                        Peer code reviews, whiteboard design arguments, and architectural defense at
                        ITI Smart Village HQ.
                      </p>

                      <span className="mt-1 block font-mono text-[11px] text-[#F02F2F]">
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
          <section className="w-full border-b border-[#e2eaee] bg-[#f6f9fa] py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Vision */}
                <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-[#F02F2F]/20 bg-white p-8 shadow-sm sm:p-10">
                  <div className="relative z-10 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-[#F02F2F]/10 px-3 py-1 font-mono text-[12px] font-bold uppercase tracking-wider text-[#F02F2F]">
                        STRATEGIC HORIZON 2030
                      </span>

                      <span className="material-symbols-outlined text-2xl text-[#F02F2F]">
                        visibility
                      </span>
                    </div>

                    <h3 className="mt-2 font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#082B3E] sm:text-3xl">
                      Our Department Vision
                    </h3>

                    <p className="mt-1 text-base leading-relaxed text-[#687888]">
                      To stand as the preeminent regional center of gravity for software
                      craftsmanship, cultivating engineering leaders who drive monumental digital
                      transformation and steer high-impact global technology ventures.
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-[#e2eaee] pt-4 font-mono text-xs text-[#687888]">
                    <span className="font-semibold text-[#F02F2F]">PILLAR // LEADERSHIP</span>

                    <span>ACCREDITED EXCELLENCE</span>
                  </div>
                </div>

                {/* Mission */}
                <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#082B3E] bg-[#082B3E] p-8 text-white shadow-xl sm:p-10">
                  <div className="relative z-10 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[12px] font-bold uppercase tracking-wider text-[#00B0B0]">
                        OPERATIONAL DIRECTIVE
                      </span>

                      <span className="material-symbols-outlined text-2xl text-[#00B0B0]">
                        rocket_launch
                      </span>
                    </div>

                    <h3 className="mt-2 font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-white sm:text-3xl">
                      Our Department Mission
                    </h3>

                    <p className="mt-1 text-base leading-relaxed text-white/90">
                      Deliver rigorous, project-driven, and market-attuned software engineering
                      education that dismantles the gap between academic theory and enterprise
                      production environments through intensive mentorship and authentic challenges.
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs text-[#00B0B0]">
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
          <section className="w-full border-b border-[#e2eaee] bg-white py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className="mb-14 max-w-2xl">
                <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-[#F02F2F]">
                  ENGINEERED MINDSET
                </span>

                <h2 className="mt-1.5 font-['Plus_Jakarta_Sans'] text-3xl font-black tracking-tight text-[#082B3E] sm:text-4xl lg:text-[40px]">
                  Core Values Defining the SD Engineer
                </h2>

                <p className="mt-2 text-base leading-relaxed text-[#687888]">
                  Our graduates are distinguished not merely by language syntax, but by the
                  engineering ethos instilled throughout their immersive residency.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {coreValues.map((value) => (
                  <div
                    key={value.title}
                    className="flex flex-col justify-between rounded-2xl border border-[#e2eaee] bg-white p-6 shadow-sm transition-colors hover:border-[#F02F2F]/40"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e6eef2] text-[#F02F2F]">
                        <span className="material-symbols-outlined text-xl">{value.icon}</span>
                      </div>

                      <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#082B3E]">
                        {value.title}
                      </h3>

                      <p className="text-xs leading-relaxed text-[#687888]">{value.description}</p>
                    </div>

                    <span className="mt-6 font-mono text-[11px] font-semibold text-[#F02F2F]">
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
          <section className="w-full border-b border-[#e2eaee] bg-[#f6f9fa] py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex max-w-2xl flex-col gap-2">
                  <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-[#F02F2F]">
                    EDUCATIONAL METHODOLOGY
                  </span>

                  <h2 className="mt-1 font-['Plus_Jakarta_Sans'] text-3xl font-black tracking-tight text-[#082B3E] sm:text-4xl lg:text-[40px]">
                    The SD Four-Stage Production Pipeline
                  </h2>

                  <p className="text-base text-[#687888]">
                    How we transform gifted STEM graduates into seasoned software engineers capable
                    of contributing to production systems from day one.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-xl border border-[#e2eaee] bg-white px-4 py-2 font-mono text-xs font-semibold text-[#082B3E] shadow-sm">
                    TOTAL DURATION: 1,200+ CONTACT HOURS
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {pipelineStages.map((stage) => (
                  <div
                    key={stage.number}
                    className="flex flex-col justify-between rounded-2xl border-t-4 border-[#F02F2F] bg-white p-6 shadow-sm"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="rounded bg-[#F02F2F]/10 px-2.5 py-0.5 font-mono text-xs font-bold text-[#F02F2F]">
                          STAGE {stage.number}
                        </span>

                        <span className="material-symbols-outlined text-xl text-[#F02F2F]">
                          {stage.icon}
                        </span>
                      </div>

                      <h3 className="mt-1 font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#082B3E]">
                        {stage.title}
                      </h3>

                      <p className="text-xs leading-relaxed text-[#687888]">{stage.description}</p>
                    </div>

                    <div className="mt-6 border-t border-[#e2eaee] pt-4">
                      <ul className="space-y-1.5 font-mono text-[11px] text-[#687888]">
                        {stage.items.map((item) => (
                          <li key={item} className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F02F2F]" />
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
          <section className="w-full border-b border-[#e2eaee] bg-white py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className="relative overflow-hidden rounded-3xl border border-[#e2eaee] bg-[#edf4f7] p-8 md:p-12">
                <div className="relative z-10 flex max-w-3xl flex-col gap-4">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F02F2F] px-3 py-1 font-mono text-xs text-white">
                    <span className="material-symbols-outlined text-sm">smart_toy</span>

                    <span>THE NEXT FRONTIER: 2025 CURRICULAR INTEGRATION</span>
                  </div>

                  <h2 className="mt-1 font-['Plus_Jakarta_Sans'] text-2xl font-black tracking-tight text-[#082B3E] sm:text-3xl lg:text-4xl">
                    Infusing Generative AI, LLMOps & Cloud Sovereignty
                  </h2>

                  <p className="text-base leading-relaxed text-[#687888]">
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
                        className="rounded-xl border border-[#e2eaee] bg-white p-4 shadow-sm"
                      >
                        <span className="mb-1 block font-mono text-xs font-bold text-[#F02F2F]">
                          {initiative.title}
                        </span>

                        <p className="text-xs leading-normal text-[#687888]">
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
          <section className="w-full border-b border-[#e2eaee] bg-[#f6f9fa] py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className="mb-16 flex max-w-2xl flex-col gap-3">
                <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-[#F02F2F]">
                  THREE DECADES OF IMPACT
                </span>

                <h2 className="mt-1.5 font-['Plus_Jakarta_Sans'] text-3xl font-black tracking-tight text-[#082B3E] sm:text-4xl lg:text-[40px]">
                  Milestones in Egyptian Technology History
                </h2>

                <p className="text-base text-[#687888]">
                  Explore the chronological breakthroughs of the Software Development Department as
                  it scaled from an early pioneering initiative to a nation-spanning digital
                  factory.
                </p>
              </div>

              <div className="relative flex flex-col gap-8">
                {/* Timeline Line */}
                <div className="absolute bottom-4 left-35 top-4 hidden w-0.5 bg-[#e6eef2] md:block" />

                {milestones.map((milestone) => (
                  <div
                    key={milestone.year}
                    className="relative flex flex-col gap-6 md:flex-row md:gap-12"
                  >
                    <div className="shrink-0 md:w-35 md:justify-end">
                      <span
                        className={`inline-flex rounded-full px-3.5 py-1.5 font-mono text-xs font-bold shadow-sm ${
                          milestone.variant === 'primary'
                            ? 'bg-[#F02F2F] text-white'
                            : milestone.variant === 'secondary'
                              ? 'bg-[#e0f7f7] text-[#082B3E]'
                              : 'bg-[#edf4f7] text-[#082B3E]'
                        }`}
                      >
                        {milestone.year}
                      </span>
                    </div>

                    <div
                      className={`flex flex-1 flex-col gap-2 rounded-2xl bg-white p-6 shadow-sm sm:p-7 ${
                        milestone.featured
                          ? 'border-2 border-[#F02F2F]/30'
                          : 'border border-[#e2eaee]'
                      }`}
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#082B3E] sm:text-lg">
                          {milestone.title}
                        </h3>

                        <span
                          className={`font-mono text-xs font-medium ${
                            milestone.featured ? 'font-bold text-[#F02F2F]' : 'text-[#687888]'
                          }`}
                        >
                          {milestone.meta}
                        </span>
                      </div>

                      <p className="text-xs leading-relaxed text-[#687888] sm:text-sm">
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
          <section className="w-full border-b border-[#e2eaee] bg-white py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className="mx-auto mb-16 flex max-w-3xl flex-col gap-3 text-center">
                <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-[#F02F2F]">
                  Academic & Industrial Governance
                </span>

                <h2 className="mt-1.5 font-['Plus_Jakarta_Sans'] text-3xl font-black tracking-tight text-[#082B3E] sm:text-4xl lg:text-[40px]">
                  Guided by Leading Engineers & Practitioners
                </h2>

                <p className="text-base text-[#687888]">
                  Our track supervisors, lead architects, and advisory council members bridge public
                  institutional commitment with real-world tech industry execution.
                </p>
              </div>

              {/* Leaders */}
              <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                {leaders.map((leader) => (
                  <div
                    key={leader.name}
                    className="flex flex-col items-center gap-4 rounded-2xl border border-[#e2eaee] bg-white p-7 text-center shadow-sm transition-colors hover:border-[#F02F2F]/40"
                  >
                    <img
                      src={leader.image}
                      alt={leader.alt}
                      className="h-24 w-24 rounded-full object-cover shadow-inner ring-2 ring-[#F02F2F]/20"
                    />

                    <div className="flex flex-col">
                      <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#082B3E]">
                        {leader.name}
                      </h3>

                      <span className="mt-0.5 font-mono text-xs font-bold text-[#F02F2F]">
                        {leader.role}
                      </span>

                      <span className="mt-2 text-xs leading-relaxed text-[#687888]">
                        {leader.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Advisory Council */}
              <div className="flex flex-col gap-6 rounded-2xl border border-[#e2eaee] bg-[#f6f9fa] p-8">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                  <div className="flex flex-col">
                    <span className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#082B3E]">
                      Active Industry Advisory Council
                    </span>

                    <span className="mt-0.5 text-xs text-[#687888]">
                      The companies co-designing our graduation challenges and track rubrics
                    </span>
                  </div>

                  <span className="font-mono text-xs font-bold text-[#F02F2F]">
                    60+ GLOBAL & LOCAL PARTNERS
                  </span>
                </div>

                <div className="grid grid-cols-2 items-center gap-3 sm:grid-cols-4 md:grid-cols-7">
                  {partners.map((partner) => (
                    <div
                      key={partner}
                      className="rounded-xl border border-[#e2eaee] bg-white px-2 py-3 text-center font-mono text-xs font-bold text-[#082B3E] shadow-sm"
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
            <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl bg-linear-to-r from-[#F02F2F] via-[#c51c1c] to-[#082B3E] p-8 text-white shadow-2xl md:p-14 lg:flex-row">
              <div className="relative z-10 flex max-w-xl flex-col gap-3">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-white/90 backdrop-blur-md">
                  INTAKE 45 ADMISSIONS NOW PREVIEWING
                </div>

                <h2 className="mt-1 font-['Plus_Jakarta_Sans'] text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
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
                  className="w-full rounded-xl bg-white px-8 py-4 text-center text-sm font-bold text-[#082B3E] shadow-lg transition-all hover:bg-[#FEFEFE] sm:w-auto"
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
