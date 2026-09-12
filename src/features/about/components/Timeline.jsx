import { milestones } from '@/constants';

const Timeline = () => {
  return (
    <>
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
              Explore the chronological breakthroughs of the Software Development Department as it
              scaled from an early pioneering initiative to a nation-spanning digital factory.
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
    </>
  );
};

export default Timeline;
