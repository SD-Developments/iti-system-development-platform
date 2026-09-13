const KhedmacloudSpotlight = () => {
  return (
    <>
      <section className="border-b border-border bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded border border-border bg-card px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-foreground shadow-sm">
                PROJECT SPOTLIGHT // CIVIC INFRASTRUCTURE
              </div>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">
                KhedmaCloud — Zero-Knowledge Municipal Licensing Protocol
              </h2>

              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <strong className="font-semibold text-foreground">The Friction:</strong>{' '}
                  Traditional paper-based municipal commercial licensing takes 14 days and leaks
                  proprietary business revenue and tax figures to untrusted middlemen during manual
                  validation.
                </p>

                <p>
                  <strong className="font-semibold text-foreground">
                    The Engineering Solution:
                  </strong>{' '}
                  A privacy-preserving zk-SNARK cryptographic engine enabling entrepreneurs to
                  mathematically prove financial and zoning compliance in under 12 seconds without
                  revealing raw ledgers.
                </p>
              </div>

              {/* Specs */}

              <div className="space-y-2.5 rounded-xl border border-border bg-card p-4 font-mono text-xs shadow-sm">
                <div className="flex flex-col gap-1 border-b border-border pb-2 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-muted-foreground">CRYPTOGRAPHIC PRIMITIVE</span>

                  <span className="font-bold text-foreground">Groth16 zk-SNARK over BN254</span>
                </div>

                <div className="flex flex-col gap-1 border-b border-border pb-2 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-muted-foreground">PROOF GENERATION TIME</span>

                  <span className="font-bold text-emerald-600">
                    820 ms in browser WASM (&lt;12s total)
                  </span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-muted-foreground">PILOT VALIDATION</span>

                  <span className="font-bold text-accent">
                    3 Municipal Districts / 100% Audit Pass
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {['Rust', 'Circom', 'Next.js 15', 'PostgreSQL'].map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-muted px-2.5 py-1 font-semibold text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="text-sm font-bold text-primary transition-colors hover:text-accent"
                >
                  View Architectural Specs →
                </a>
              </div>
            </div>

            {/* Khedma Image */}

            <div className="lg:col-span-6">
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1UKr7T0jAxdQflL4aHs3Iw8Qib_0xrUxybiMpTyCeq8hGfYgO4g57VaZeRlw9b8saFt97FC0KvZRuvdU-hdkQDBk29oFHka_ZhYe6LbIe7-NxOxjrHcp3QCoN4J9T40Q92p1wFvx2JHG-H9ryLtGXqe4Rp8Ct9hDSPISSSVTGyPceZNKj6VHXZ5ZrRrKUim2ykXGm7tslcL4ovu8rjdLB8Du63bLCT9IsUkdnDNdrBGaZFA77fSAp8WmyIK"
                  alt="System Development Capstone engineers collaborating on monitors in lab"
                  className="h-[380px] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 sm:h-[460px]"
                />

                <div className="absolute inset-0 bg-linear-to-t from-sd-navy/80 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-sd-navy/85 px-3 py-1.5 font-mono text-xs text-white shadow-lg backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />

                  <span>zk-SNARK Circuit Validated • 0x00 VALID</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex flex-col justify-between gap-3 rounded-xl border border-white/10 bg-sd-navy/90 p-4 text-white backdrop-blur-md sm:flex-row sm:items-center">
                  <div>
                    <div className="font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
                      PRODUCTION SPRINT // INTAKE 45
                    </div>

                    <div className="mt-0.5 text-xs font-semibold">
                      Engineers verifying zero-knowledge constraint systems
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="rounded bg-white/10 px-2 py-1 font-mono text-[11px] text-slate-200">
                      Smart Village Campus
                    </span>
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

export default KhedmacloudSpotlight;
