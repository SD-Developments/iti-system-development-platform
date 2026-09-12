import { leaders, partners } from '@/constants';

const Leadership = () => {
  return (
    <>
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
              {partners.map((partner) => (
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
    </>
  );
};

export default Leadership;
