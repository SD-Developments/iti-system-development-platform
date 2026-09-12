import { pipelineStages } from '@/constants';

const ProductionPipeline = () => {
  return (
    <>
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
                How we transform gifted STEM graduates into seasoned software engineers capable of
                contributing to production systems from day one.
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
    </>
  );
};

export default ProductionPipeline;
