const VisionMission = () => {
  return (
    <>
      <section className="w-full border-b border-border bg-sd-bg-light py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
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
                  To stand as the preeminent regional center of gravity for software craftsmanship,
                  cultivating engineering leaders who drive monumental digital transformation and
                  steer high-impact global technology ventures.
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-border pt-4 font-mono text-xs text-muted-foreground">
                <span className="font-semibold text-primary">PILLAR // LEADERSHIP</span>
                <span>ACCREDITED EXCELLENCE</span>
              </div>
            </div>

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
    </>
  );
};

export default VisionMission;
