import projectImage from '../../../assets/images/project1.jpg';
const FeaturedProject = () => {
  return (
    <>
      <section
        id="featured-spotlight"
        className="relative overflow-hidden bg-sd-navy py-20 text-white"
      >
        {/* Dark Technical Grid */}

        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              'radial-gradient(rgba(0,176,176,0.12) 1px, transparent 1px), radial-gradient(rgba(224,53,49,0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            backgroundPosition: '0 0, 16px 16px',
          }}
        />

        <div className="pointer-events-none absolute left-120 -top-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <div className="mb-1 font-mono text-xs font-bold uppercase tracking-widest text-accent">
                CAPSTONE CASE STUDY // INTAKE 45 FLAGSHIP
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Cinematic Project Spotlight
              </h2>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <span className="h-3 w-3 animate-ping rounded-full bg-accent" />

              <span className="font-mono text-xs text-slate-300">
                CTO Panel Validated: Smart Village HQ
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Featured Image */}

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl lg:col-span-7">
              <div className="relative h-80 overflow-hidden sm:h-95">
                <img
                  src={projectImage}
                  alt="SD student engineers presenting architectural defense to jury"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent" />

                <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-sd-navy/90 px-3 py-1 text-xs font-mono">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    <span>KEMETHEALTH AI // DEFENSE PANEL</span>
                  </div>

                  <span className="rounded-lg border border-slate-700 bg-slate-800/90 px-2.5 py-1 font-mono text-[11px] text-slate-300">
                    142 Hospitals Connected
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2.5">
                  <div className="rounded-xl border border-white/10 bg-slate-900/85 p-3 backdrop-blur-md">
                    <div className="font-mono text-[10px] uppercase text-slate-400">
                      Bed Match Speed
                    </div>

                    <div className="mt-0.5 font-mono text-lg font-black">182 ms</div>

                    <div className="font-mono text-[9px] text-emerald-400">
                      ↓ 94% vs legacy phone
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-slate-900/85 p-3 backdrop-blur-md">
                    <div className="font-mono text-[10px] uppercase text-slate-400">
                      Active Incidents
                    </div>

                    <div className="mt-0.5 font-mono text-lg font-black text-accent">
                      1,240 live
                    </div>

                    <div className="font-mono text-[9px] text-slate-300">0 lost packets</div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-slate-900/85 p-3 backdrop-blur-md">
                    <div className="font-mono text-[10px] uppercase text-slate-400">
                      Offline Mesh
                    </div>

                    <div className="mt-0.5 font-mono text-lg font-black text-emerald-400">
                      100% OK
                    </div>

                    <div className="font-mono text-[9px] text-slate-300">P2P Fallback ready</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-2 border-t border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-400 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2">
                  <span className="text-accent">[INGRESS-TRACE]</span>

                  <span>
                    Ambulance Telemetry Sector 4 &gt;&gt; Raft Consensus Verified (14.88ms)
                  </span>
                </div>

                <span className="font-semibold text-primary">Team: 6 SWE-45 Engineers</span>
              </div>
            </div>

            {/* Featured Story */}

            <div className="space-y-6 lg:col-span-5">
              <div className="inline-flex items-center rounded border border-primary/30 bg-primary/20 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-primary">
                SOVEREIGN HEALTHCARE DEFENSE
              </div>

              <h3 className="text-3xl font-extrabold leading-tight">
                KemetHealth AI — Sovereign Clinical Emergency Orchestration
              </h3>

              <div className="space-y-4 text-sm leading-relaxed text-slate-300">
                <div className="border-l-2 border-primary pl-4">
                  <span className="mb-1 block font-mono text-xs font-bold uppercase text-white">
                    The Critical Problem
                  </span>
                  Critical care ambulance networks in Greater Cairo lose up to 47 minutes matching
                  pediatric ICUs across non-federated hospital networks during life-threatening
                  respiratory events.
                </div>

                <div className="border-l-2 border-accent pl-4">
                  <span className="mb-1 block font-mono text-xs font-bold uppercase text-white">
                    The SD Solution
                  </span>
                  A localized asynchronous vector-similarity routing engine synchronizing 142 ICU
                  units with zero clinical latency, zero central cloud dependencies, and
                  peer-to-peer offline fallback.
                </div>
              </div>

              <div className="pt-2">
                <div className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  ARCHITECTURAL STACK:
                </div>

                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {['FastAPI', 'React 19', 'Milvus Vector DB', 'Apache Kafka', 'Docker Swarm'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1 text-white"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#"
                  className="rounded-xl bg-primary px-6 py-3 text-sm font-bold tracking-wide text-primary-foreground shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  Explore Case Study &amp; Whitepaper →
                </a>

                <button
                  type="button"
                  className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 font-mono text-xs text-slate-200 transition-colors hover:bg-slate-700"
                >
                  View Live Telemetry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProject;
