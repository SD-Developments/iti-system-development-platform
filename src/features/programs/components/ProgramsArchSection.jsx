import { matrixPrograms } from '@/constants';

const ProgramsArchSection = () => {
  return (
    <>
      <section id="comparison-matrix" className="w-full bg-background py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs font-semibold uppercase text-primary">
                EVALUATION GUIDE
              </span>

              <h2 className="mt-1 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Program Architectural Matrix
              </h2>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="material-symbols-outlined text-[18px] text-primary">verified</span>

              <span>Accredited MCIT Professional Standards</span>
            </div>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
            {matrixPrograms.map((program) => (
              <div
                key={program.title}
                className={`relative flex flex-col justify-between rounded-2xl p-8 ${
                  program.featured
                    ? 'border-2 border-primary/60 bg-sd-bg-light shadow-lg'
                    : 'border border-border bg-card shadow-xs'
                }`}
              >
                {program.featured && (
                  <div className="absolute -top-3.5 left-8 rounded-full bg-primary px-3 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                    FLAGSHIP DIPLOMA
                  </div>
                )}

                <div className="flex flex-col gap-6 pt-2">
                  <div>
                    <span
                      className={`font-mono text-xs font-semibold ${
                        program.accent === 'primary'
                          ? 'text-primary'
                          : program.accent === 'teal'
                            ? 'text-sd-teal'
                            : 'text-sd-navy'
                      }`}
                    >
                      {program.type}
                    </span>

                    <h3 className="mt-1 font-heading text-2xl font-bold text-foreground">
                      {program.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {program.description}
                    </p>
                  </div>

                  <div className="flex flex-col divide-y divide-border text-xs">
                    {program.rows.map(([label, value]) => (
                      <div key={label} className="flex items-start justify-between gap-4 py-3">
                        <span className="font-medium text-muted-foreground">{label}</span>

                        <span
                          className={`max-w-45 text-right font-medium ${
                            label === 'Contact Hours'
                              ? program.accent === 'primary'
                                ? 'font-mono text-sm font-bold text-primary'
                                : 'font-mono text-sm font-bold text-sd-teal'
                              : 'text-foreground'
                          }`}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <a
                    href={program.href}
                    className={`block w-full rounded-xl py-3 text-center text-xs font-semibold uppercase tracking-wider transition-colors ${
                      program.featured
                        ? 'bg-primary text-white hover:opacity-90'
                        : 'border border-border bg-muted text-foreground hover:bg-secondary'
                    }`}
                  >
                    {program.button}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramsArchSection;
