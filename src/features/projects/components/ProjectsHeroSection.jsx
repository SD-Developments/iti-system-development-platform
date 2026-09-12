const ProjectsHeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-sd-bg-light py-16 lg:py-32">
        {/* Technical Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--sd-navy) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            opacity: 0.05,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Hero Content */}
            <div className="space-y-6 lg:col-span-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 shadow-sm">
                <span className="live-pulse h-2 w-2 rounded-full bg-emerald-500" />

                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-primary">
                  PROJECTS HUB // SOFTWARE DEVELOPMENT DEPARTMENT
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Projects Built to Solve{' '}
                <span className="text-primary underline decoration-primary/30 decoration-2 decoration-wavy">
                  Real Problems.
                </span>
              </h1>

              {/* Description */}
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                From high-concurrency clearing switches to autonomous edge telemetry, SD student
                engineers architect, stress-test, and publicly defend distributed systems for
                sovereign national impact.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects-grid"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold tracking-wide text-primary-foreground shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Explore Exhibition ↓</span>

                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                  </svg>
                </a>

                <a
                  href="#engineering-journey"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent"
                >
                  <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>

                  <span>Watch Live CTO Defenses</span>
                </a>
              </div>

              {/* Proof Points */}
              <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
                {/* Stat 01 */}
                <div>
                  <div className="font-mono text-2xl font-black text-primary sm:text-3xl">340+</div>

                  <div className="text-xs font-medium text-muted-foreground">Projects Shipped</div>
                </div>

                {/* Stat 02 */}
                <div>
                  <div className="font-mono text-2xl font-black text-accent sm:text-3xl">
                    &lt;28ms
                  </div>

                  <div className="text-xs font-medium text-muted-foreground">P99 Latency Goal</div>
                </div>

                {/* Stat 03 */}
                <div>
                  <div className="font-mono text-2xl font-black text-primary sm:text-3xl">100%</div>

                  <div className="text-xs font-medium text-muted-foreground">CTO Jury Defended</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative lg:col-span-6">
              {/* Decorative Corner - Top Right */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-4 h-12 w-12 border-r-2 border-t-2 border-accent/40"
              />

              {/* Decorative Corner - Bottom Left */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-4 -left-4 h-12 w-12 border-b-2 border-l-2 border-primary/40"
              />

              {/* Image Card */}
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                <div className="relative h-95 w-full overflow-hidden sm:h-120">
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1VcPHQUEvaBoK45hcodYm8nNJTwj-vfdIR50_9N85onybQLGDADMVRX2CyFEyHYUP5I01pyv8GLc6Xaw-gtFMwc8y9PwNQs3co_kqbf1VDEPZbyoHSL6sXeOPvv5_IL99d3E1I_ptJEng4GL6dRRy4yJ034Z-Trg8VCX7sY1NS6O4Onzg27jo5g3us0_pBvskzU210j7Lxzp46Nx8Zqq2EvFeeScGi1Zv_-P_fMU59qjbKDSI2cLPpy-54D"
                    alt="SD student engineers collaborating on architecture in Smart Village lab"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-sd-navy/85 via-sd-navy/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-sd-navy/80 px-3.5 py-1.5 text-white shadow-lg backdrop-blur-md">
                      <span className="live-pulse h-2 w-2 rounded-full bg-accent" />

                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
                        FEATURED CAPSTONE // INTAKE 45
                      </span>
                    </div>

                    <span className="rounded-lg border border-white/20 bg-primary/80 px-2.5 py-1 font-mono text-[11px] font-bold text-white backdrop-blur-md">
                      99.4/100 DEFENSE
                    </span>
                  </div>

                  {/* Hero HUD */}
                  <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-sd-navy/90 p-4 text-white shadow-2xl backdrop-blur-md">
                    {/* HUD Header */}
                    <div className="mb-2 flex items-center justify-between gap-3 border-b border-white/10 pb-2">
                      <div>
                        <div className="font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
                          SOVEREIGN HEALTHCARE DISPATCH
                        </div>

                        <div className="text-sm font-bold tracking-tight">
                          KemetHealth AI — Triage Orchestration Engine
                        </div>
                      </div>

                      <span className="rounded border border-emerald-500/30 bg-emerald-950/60 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                        RAFT QUORUM 5/5
                      </span>
                    </div>

                    {/* HUD Metrics */}
                    <div className="grid grid-cols-3 gap-2 text-center font-mono">
                      <div className="rounded-lg border border-white/5 bg-white/5 px-2 py-1.5">
                        <div className="text-[10px] text-slate-300">MONITORED ICUs</div>

                        <div className="text-sm font-bold">142 Units</div>
                      </div>

                      <div className="rounded-lg border border-white/5 bg-white/5 px-2 py-1.5">
                        <div className="text-[10px] text-slate-300">VECTOR SEARCH</div>

                        <div className="text-sm font-bold text-emerald-400">24.2 ms</div>
                      </div>

                      <div className="rounded-lg border border-white/5 bg-white/5 px-2 py-1.5">
                        <div className="text-[10px] text-slate-300">DEFENSE SCORE</div>

                        <div className="text-sm font-bold text-primary">99.4 / 100</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsHeroSection;
