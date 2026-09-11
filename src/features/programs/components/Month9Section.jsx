const Month9Section = () => {
  return (
    <>
      <section className="w-full py-20 bg-background" id="nine-month">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
          {/* 1. Header & Overview */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 border-b border-border/30 pb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sd-navy/10 border border-primary/20 w-max">
                <span className="material-symbols-outlined text-[15px] text-primary">flag</span>
                <span className="font-mono text-[11px] font-bold text-primary uppercase tracking-wider">
                  CHAPTER 01 // FLAGSHIP POSTGRADUATE RESIDENCY
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-sd-navy tracking-tight leading-tight">
                9-Month Professional Software Engineering Diploma
              </h2>
              <p className="font-sans text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Build your foundation. Find your specialty. Ship real software.
              </p>
            </div>
            {/* 4 Quick Facts badges/cards displayed in a clean horizontal grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-card border border-border/30 shadow-xs flex items-center gap-4 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-sd-navy/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">timer</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-base font-bold text-sd-navy">9 Months</span>
                  <span className="font-mono text-xs text-muted-foreground">Full Immersion</span>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-border/30 shadow-xs flex items-center gap-4 hover:border-sd-teal/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-secondary2 text-sd-teal flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">schedule</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-base font-bold text-sd-navy">
                    1,200+ Contact Hours
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">Labs & Studio</span>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-border/30 shadow-xs flex items-center gap-4 hover:border-sd-navy/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-sd-navy/10 text-sd-navy flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">calendar_month</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-base font-bold text-sd-navy">
                    October → June
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">Academic Cycle</span>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-border/30 shadow-xs flex items-center gap-4 hover:border-sd-teal/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-secondary2 text-sd-teal flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">domain</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-base font-bold text-sd-navy">
                    Full Residency
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">Studio-Based</span>
                </div>
              </div>
            </div>
          </div>
          {/* 2. Your 9-Month Journey (Main visual focus) */}
          <div className="flex flex-col gap-8 bg-sd-bg-light p-8 lg:p-10 rounded-3xl border border-border/30 relative overflow-hidden">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase font-bold tracking-wider text-primary">
                <span className="material-symbols-outlined text-[18px]">route</span>
                <span>CURRICULUM ARCHITECTURE // SEQUENTIAL TIMELINE</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-sd-navy">
                Your 9-Month Journey
              </h3>
              <p className="font-sans text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
                A sequential progression from fundamentals to enterprise capstone defense.
              </p>
            </div>
            {/* 3 Connected Stages visually linked in horizontal flow (01 → 02 → 03) */}
            <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-stretch pt-2">
              {/* Stage 01 — Foundations */}
              <div className="lg:col-span-3 bg-card p-6 rounded-2xl border-2 border-border/30 shadow-xs flex flex-col justify-between hover:border-sd-navy transition-all group">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-sd-navy text-white font-mono text-[11px] font-bold tracking-wider">
                      PHASE 01 // MONTHS 01–03
                    </span>
                    <span className="w-2 h-2 rounded-full bg-sd-navy"></span>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-sd-navy group-hover:text-primary transition-colors mt-1">
                    Foundations
                  </h4>
                  <p className="font-sans text-xs font-semibold text-sd-navy/80">
                    Build the engineering core.
                  </p>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                    Master low-level architectural paradigms, algorithmic design, and rigorous data
                    modeling standards.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-border/20 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-muted font-mono text-[11px] text-sd-navy font-medium">
                    Algorithms & OOP
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-muted font-mono text-[11px] text-sd-navy font-medium">
                    Data Structures
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-muted font-mono text-[11px] text-sd-navy font-medium">
                    Memory Management
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-muted font-mono text-[11px] text-sd-navy font-medium">
                    Design Patterns
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-muted font-mono text-[11px] text-sd-navy font-medium">
                    Relational Modeling
                  </span>
                </div>
              </div>
              {/* Connector 1 */}
              <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
                <div className="w-11 h-11 rounded-full bg-card border border-border/30 shadow-xs flex items-center justify-center text-sd-teal">
                  <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
                </div>
              </div>
              {/* Stage 02 — Specialization */}
              <div className="lg:col-span-3 bg-card p-6 rounded-2xl border-2 border-sd-teal/40 shadow-xs flex flex-col justify-between hover:border-sd-teal transition-all group">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-sd-teal text-white font-mono text-[11px] font-bold tracking-wider">
                      PHASE 02 // MONTHS 04–06
                    </span>
                    <span className="w-2 h-2 rounded-full bg-sd-teal"></span>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-sd-navy group-hover:text-sd-teal transition-colors mt-1">
                    Specialization
                  </h4>
                  <p className="font-sans text-xs font-semibold text-sd-teal">
                    Go deeper into professional technologies.
                  </p>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                    Transition into target industrial tracks with high-throughput cloud stacks and
                    distributed systems.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-border/20 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-secondary2 text-sd-teal font-mono text-[11px] font-semibold">
                    Enterprise Stacks
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-secondary2 text-sd-teal font-mono text-[11px] font-semibold">
                    Microservices
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-secondary2 text-sd-teal font-mono text-[11px] font-semibold">
                    Cloud Native
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-secondary2 text-sd-teal font-mono text-[11px] font-semibold">
                    DevOps
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-secondary2 text-sd-teal font-mono text-[11px] font-semibold">
                    CI/CD
                  </span>
                </div>
              </div>
              {/* Connector 2 */}
              <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
                <div className="w-11 h-11 rounded-full bg-card border border-border/30 shadow-xs flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
                </div>
              </div>
              {/* Stage 03 — Capstone */}
              <div className="lg:col-span-3 bg-card p-6 rounded-2xl border-2 border-primary/40 shadow-xs flex flex-col justify-between hover:border-primary transition-all group">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-sd-navy text-white font-mono text-[11px] font-bold tracking-wider">
                      PHASE 03 // MONTHS 07–09
                    </span>
                    <span className="w-2 h-2 rounded-full bg-sd-navy"></span>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-sd-navy group-hover:text-primary transition-colors mt-1">
                    Capstone
                  </h4>
                  <p className="font-sans text-xs font-semibold text-primary">
                    Build something real and defend it.
                  </p>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                    Full-scale engineering delivery under enterprise SLAs, culminating in corporate
                    CTO panel reviews.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-border/20 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-sd-navy/10 text-primary font-mono text-[11px] font-semibold">
                    8-Week Industry MVP
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-sd-navy/10 text-primary font-mono text-[11px] font-semibold">
                    Live Defense
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-sd-navy/10 text-primary font-mono text-[11px] font-semibold">
                    Engineering Practices
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-sd-navy/10 text-primary font-mono text-[11px] font-semibold">
                    Production SLAs
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* 3. Choose Your Engineering Path */}
          <div className="flex flex-col gap-5 p-8 rounded-3xl bg-sd-bg-light border border-border/30">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-border/20 pb-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    alt_route
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-sd-navy">
                    Choose Your Engineering Path
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-muted-foreground">
                  Select your dedicated postgraduate track for Phase 02 & 03.
                </p>
              </div>
              <span className="font-mono text-xs text-muted-foreground font-medium shrink-0">
                5 Dedicated Tracks
              </span>
            </div>
            {/* 5 clean, visually attractive, non-interactive selectable-looking path pills/cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-card border border-border/30 shadow-xs flex items-center gap-3 hover:border-primary transition-all">
                <div className="w-9 h-9 rounded-lg bg-sd-navy/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-xs font-bold text-sd-navy leading-snug">
                    Full Stack .NET Core
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    C# • Microservices
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border/30 shadow-xs flex items-center gap-3 hover:border-sd-teal transition-all">
                <div className="w-9 h-9 rounded-lg bg-secondary2 text-sd-teal flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">code</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-xs font-bold text-sd-navy leading-snug">
                    MEARN & TypeScript
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    Node.js • React • Mongo
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border/30 shadow-xs flex items-center gap-3 hover:border-sd-navy transition-all">
                <div className="w-9 h-9 rounded-lg bg-sd-navy/10 text-sd-navy flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">cloud</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-xs font-bold text-sd-navy leading-snug">
                    Cloud Native DevOps & K8s
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    CI/CD • Kubernetes
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border/30 shadow-xs flex items-center gap-3 hover:border-primary transition-all">
                <div className="w-9 h-9 rounded-lg bg-sd-navy/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">memory</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-xs font-bold text-sd-navy leading-snug">
                    Embedded Linux & Automotive RTOS
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    C/C++ • AUTOSAR
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border/30 shadow-xs flex items-center gap-3 hover:border-sd-teal transition-all">
                <div className="w-9 h-9 rounded-lg bg-secondary2 text-sd-teal flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-xs font-bold text-sd-navy leading-snug">
                    AI Platform Engineering
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    LLMs • MLOps • PyTorch
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* 4. What You'll Experience & Physical Studio Residency */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: 3 Structured Cards */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase font-bold text-primary">
                  IMMERSIVE STUDIO ENVIRONMENT
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-sd-navy">
                  What You'll Experience
                </h3>
              </div>
              <div className="flex flex-col gap-3.5 pt-2">
                {/* Card 1 */}
                <div className="p-5 rounded-2xl bg-card border border-border/30 shadow-xs flex items-start gap-4 hover:border-sd-navy/40 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-sd-navy/10 text-sd-navy flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">desktop_windows</span>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-heading text-base font-bold text-sd-navy">
                      Physical Studio Residency
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                      Dedicated developer pods and high-performance workstation setups.
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="p-5 rounded-2xl bg-card border border-border/30 shadow-xs flex items-start gap-4 hover:border-sd-teal/50 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-secondary2 text-sd-teal flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">group_work</span>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-heading text-base font-bold text-sd-navy">
                      Professional Engineering Workflows
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                      Pair programming, code reviews, and architectural debate.
                    </p>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="p-5 rounded-2xl bg-card border border-border/30 shadow-xs flex items-start gap-4 hover:border-primary/40 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-sd-navy/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">military_tech</span>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-heading text-base font-bold text-sd-navy">
                      Industry-Sponsored Capstone
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                      Build, test, and defend a real software project with live CTO juries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column: Authentic Studio Image with sleek floating verification badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-border/30">
                <img
                  alt="ITI Software Residency Studio"
                  className="w-full h-[380px] object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VlMej462q0aT54f6rASDRinUaYZ7Kg88UT9Clowor0onXvTqp5ozosak0zqn1WkVuTvE3SG-aPvkr95PxyJC_0pipTho-agMuxdjsZbbw6vaJ-ZPQ7KnpHlzRIGRf6yL8ae98VWzKj1QDqDpQjGaJYa44ALUxtr0oTzDMpTPgK3hqwYjLh3sG8UYjoVcbgpiZlbM35p_NfaHhwh_f9GUn154utNHJtMcatGEoqme7F48Qe5aioo_7ObOev"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sd-navy/85 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-card/95 backdrop-blur-md border border-border/40 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sd-navy/10 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[22px]">verified</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-xs font-bold text-sd-navy">
                        Physical Studio Residency
                      </span>
                      <span className="font-mono text-[11px] text-muted-foreground">
                        Live Engineering Environment
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-sd-teal text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* 5. From Learning to Industry (Career Outcome) */}
          <div className="relative rounded-3xl bg-sd-navy text-white p-8 lg:p-12 overflow-hidden shadow-xl flex flex-col gap-8">
            {/* Clear visual progression: LEARN → SPECIALIZE → BUILD → DEFEND → GROW */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
              <span className="px-3 py-1 rounded-lg bg-white/10 text-white font-bold tracking-wider">
                LEARN
              </span>
              <span className="text-sd-teal font-bold">→</span>
              <span className="px-3 py-1 rounded-lg bg-white/10 text-white font-bold tracking-wider">
                SPECIALIZE
              </span>
              <span className="text-sd-teal font-bold">→</span>
              <span className="px-3 py-1 rounded-lg bg-white/10 text-white font-bold tracking-wider">
                BUILD
              </span>
              <span className="text-sd-teal font-bold">→</span>
              <span className="px-3 py-1 rounded-lg bg-white/10 text-white font-bold tracking-wider">
                DEFEND
              </span>
              <span className="text-sd-teal font-bold">→</span>
              <span className="px-3 py-1 rounded-lg bg-sd-navy text-white font-bold tracking-wider">
                GROW
              </span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="flex flex-col gap-3 max-w-2xl">
                <span className="font-mono text-xs uppercase tracking-wider text-sd-teal font-bold">
                  THE EMPLOYMENT ACCELERATOR OUTCOME
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Senior-Ready Junior Engineers
                </h3>
                <p className="font-sans text-sm text-white/80 leading-relaxed">
                  Graduates possess production stamina, deep architectural instincts, and direct
                  hiring relationships with 450+ partner companies.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <a
                  className="px-6 py-3.5 rounded-xl bg-sd-navy hover:bg-primary/90 text-white font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-md flex items-center justify-center gap-2"
                  href="#intake-status"
                >
                  <span>Apply for 9-Month Residency</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
                <a
                  className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-sans text-xs uppercase tracking-wider font-semibold transition-all text-center"
                  href="#intake-status"
                >
                  <span>Check Eligibility & Prerequisites</span>
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
