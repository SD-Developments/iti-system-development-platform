import { coreValues } from '@/constants';

const CoreValues = () => {
  return (
    <>
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
              Our graduates are distinguished not merely by language syntax, but by the engineering
              ethos instilled throughout their immersive residency.
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
    </>
  );
};

export default CoreValues;
