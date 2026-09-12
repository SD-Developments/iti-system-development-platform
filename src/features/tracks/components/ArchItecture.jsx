import { architectureStages } from '@/constants';

function ArchItecture() {
  return (
    <>
      <section
        id="track-architecture"
        className="relative overflow-hidden bg-sd-navy py-20 text-sd-white lg:py-28"
      >
        {/* decorative glow */}
        <div className="pointer-events-none absolute -right-40 -top-24 h-[520px] w-[520px] rounded-full bg-sd-teal/10 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-44 left-[20%] h-[500px] w-[500px] rounded-full bg-primary/15 blur-[130px]" />

        {/* grid */}
        <div
          className="
            pointer-events-none absolute inset-0 opacity-[0.04]
           bggrid
          "
        />

        <div className="relative mx-auto w-[90%] max-w-7xl">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-sd-teal">
              Track Architecture
            </span>

            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Built in Layers.
              <span className="block text-sd-teal">Designed for Practice.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-sd-white/60">
              Although each track specializes in a different technology direction, the learning
              experience follows a common engineering structure—from foundations and specialization
              to AI integration and professional delivery.
            </p>
          </div>

          {/* Architecture flow */}
          <div className="relative mt-14">
            {/* Connector */}
            <div className="absolute left-[10%] right-[10%] top-[38px] hidden h-px bg-linear-to-r from-transparent via-sd-teal/35 to-transparent lg:block" />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {architectureStages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <article
                    key={stage.number}
                    className="
                        group relative rounded-[26px]
                        border border-sd-white/10
                        bg-sd-white/[0.045]
                        p-6
                        backdrop-blur-sm
                        transition duration-300
                        hover:-translate-y-1
                        hover:border-sd-teal/30
                        hover:bg-sd-white/[0.07]
                      "
                  >
                    {/* Number */}
                    <span className="absolute right-5 top-5 font-mono text-[10px] font-bold text-sd-white/25">
                      {stage.number}
                    </span>

                    {/* Icon */}
                    <div
                      className="
                        relative z-10
                        flex h-[76px] w-[76px]
                        items-center justify-center
                        rounded-[22px]
                        border border-sd-teal/20
                        bg-sd-navy
                        text-sd-teal
                        shadow-xl
                        transition
                        group-hover:border-sd-teal/45
                      "
                    >
                      <Icon size={28} />
                    </div>

                    <div className="mt-7 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-sd-teal/70">
                      Layer {stage.number}
                    </div>

                    <h3 className="mt-2 text-xl font-bold">{stage.title}</h3>

                    <p className="mt-3 text-sm leading-6 text-sd-white/55">{stage.description}</p>

                    {/* Progress */}
                    <div className="mt-6 flex items-center gap-2">
                      {architectureStages.map((_, dotIndex) => (
                        <span
                          key={dotIndex}
                          className={`
                                h-1.5 rounded-full
                                ${dotIndex <= index ? 'w-6 bg-sd-teal' : 'w-3 bg-sd-white/15'}
                              `}
                        />
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          {/* Architecture footer */}
          <div className="mt-12 grid gap-4 rounded-[28px] border border-sd-white/10 bg-sd-white/[0.035] p-6 md:grid-cols-4">
            <ArchitectureSummary number="01" title="Learn" text="Establish the engineering core." />

            <ArchitectureSummary
              number="02"
              title="Specialize"
              text="Go deeper into the track stack."
            />

            <ArchitectureSummary
              number="03"
              title="Integrate"
              text="Apply AI throughout development."
            />

            <ArchitectureSummary
              number="04"
              title="Build"
              text="Turn learning into working systems."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ArchitectureSummary({ number, title, text }) {
  return (
    <div className="flex gap-3">
      <span className="font-mono text-[9px] font-bold text-sd-teal">{number}</span>

      <div>
        <h4 className="text-sm font-bold">{title}</h4>

        <p className="mt-1 text-xs leading-5 text-sd-white/45">{text}</p>
      </div>
    </div>
  );
}

export default ArchItecture;
