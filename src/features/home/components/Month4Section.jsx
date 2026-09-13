import { itpFacts, itpSprints, technicalLanes } from '@/constants';
import programsHero2 from '../../../assets/images/hero1.png';

const Month4Section = () => {
  return (
    <>
      <section
        id="four-month"
        className="w-full border-y border-border bg-background py-20 text-foreground"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6">
          {/* ==================================================
              HEADER
          ================================================== */}

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 border-b border-border pb-6">
              <div className="inline-flex w-max items-center gap-2 rounded border border-accent/20 bg-accent/10 px-3 py-1">
                <span className="material-symbols-outlined text-[15px] text-accent">bolt</span>

                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent">
                  CHAPTER 02 // RAPID CAREER TRANSITION ACCELERATOR
                </span>
              </div>

              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[42px]">
                4-Month Intensive Training Program (ITP)
              </h2>

              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Targeted depth. High velocity. Immediate industry hire.
              </p>
            </div>

            {/* ==================================================
                QUICK FACTS
            ================================================== */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {itpFacts.map((fact) => (
                <div
                  key={fact.value}
                  className="
                    flex items-center gap-4
                    rounded-2xl
                    border border-border
                    bg-card
                    p-5
                    shadow-xs
                    transition-all
                    hover:border-accent/30
                  "
                >
                  <div
                    className={`
                      flex h-12 w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      ${
                        fact.accent === 'teal'
                          ? 'bg-accent/10 text-accent'
                          : fact.accent === 'primary'
                            ? 'bg-primary/10 text-primary'
                            : fact.accent === 'green'
                              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                              : 'bg-secondary text-foreground'
                      }
                    `}
                  >
                    <span className="material-symbols-outlined text-[24px]">{fact.icon}</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="font-heading text-base font-bold text-foreground">
                      {fact.value}
                    </span>

                    <span className="font-mono text-xs text-muted-foreground">{fact.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ==================================================
              PIPELINE
          ================================================== */}

          <div
            className="
              relative
              flex flex-col gap-8
              overflow-hidden
              rounded-3xl
              bg-sd-navy
              p-8
              text-white
              shadow-xl
              lg:p-10
            "
          >
            <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end">
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-accent">
                  <span className="material-symbols-outlined text-[18px]">reorder</span>
                  CONTINUOUS HIGH-VELOCITY SPRINT PIPELINE
                </div>

                <h3 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
                  4-Month Velocity Pipeline
                </h3>

                <p className="max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
                  Engineered for STEM pivoters: structured two-week Agile cadences with continuous
                  integration gates and automated code check-ins.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 font-mono text-xs">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />

                <span className="font-bold text-accent">PIPELINE STATUS:</span>

                <span className="text-white">CI/CD PASSING</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-2 lg:grid-cols-4">
              {itpSprints.map((sprint) => (
                <div
                  key={sprint.number}
                  className="
                    group
                    flex flex-col justify-between
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    p-5
                    transition-all
                    hover:border-accent
                    hover:bg-white/10
                  "
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-accent/10 px-2 py-0.5 font-mono text-[11px] font-bold text-accent">
                        {sprint.number} // {sprint.label}
                      </span>

                      <span className="font-mono text-[10px] text-white/40">{sprint.weeks}</span>
                    </div>

                    <h4 className="font-heading text-base font-bold text-white transition-colors group-hover:text-accent">
                      {sprint.title}
                    </h4>

                    <p className="text-xs leading-relaxed text-white/65">{sprint.description}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[11px]">
                    <span className="text-white/40">{sprint.gate}</span>

                    <span
                      className={
                        sprint.number === '04'
                          ? 'font-bold text-accent'
                          : 'font-bold text-emerald-400'
                      }
                    >
                      {sprint.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ==================================================
              TECHNICAL LANES
          ================================================== */}

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="flex flex-col gap-4 lg:col-span-7">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[22px] text-accent">
                    view_timeline
                  </span>

                  <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                    Technical Velocity Lanes
                  </h3>
                </div>

                <span className="font-mono text-xs font-semibold text-accent">
                  {technicalLanes.length} Specialized Sprint Tracks
                </span>
              </div>

              <div className="scrollbar-thin flex max-h-155 flex-col gap-3 overflow-y-auto pr-2">
                {technicalLanes.map((lane) => (
                  <div
                    key={lane.number}
                    className="
                      group
                      flex shrink-0
                      flex-col
                      justify-between
                      gap-4
                      rounded-2xl
                      border border-border
                      bg-card
                      p-4
                      shadow-xs
                      transition-all
                      hover:border-accent
                      hover:shadow-md
                      sm:flex-row
                      sm:items-center
                      sm:p-5
                    "
                  >
                    <div className="flex max-w-md flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <span
                          className={`
                            rounded
                            px-2 py-0.5
                            font-mono
                            text-[10px]
                            font-bold
                            uppercase
                            ${
                              lane.accent === 'primary'
                                ? 'bg-primary/10 text-primary'
                                : lane.accent === 'green'
                                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                                  : lane.accent === 'teal'
                                    ? 'bg-accent/10 text-accent'
                                    : 'bg-secondary text-foreground'
                            }
                          `}
                        >
                          LANE {lane.number}
                        </span>

                        <span className="font-mono text-[11px] text-muted-foreground">
                          {lane.category}
                        </span>
                      </div>

                      <h4 className="font-heading text-base font-bold text-foreground transition-colors group-hover:text-accent">
                        {lane.title}
                      </h4>

                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {lane.description}
                      </p>

                      <div className="flex flex-wrap gap-1 pt-1">
                        {lane.tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                              rounded
                              bg-secondary
                              px-2 py-0.5
                              font-mono
                              text-[10px]
                              text-secondary-foreground
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href="#comparison-matrix"
                      className="
                        flex
                        shrink-0
                        items-center
                        gap-1.5
                        self-start
                        rounded-xl
                        border border-border
                        bg-secondary
                        px-3.5 py-2
                        font-mono
                        text-xs
                        font-bold
                        text-accent
                        transition-all
                        hover:border-accent
                        hover:bg-accent
                        hover:text-accent-foreground
                        sm:self-center
                      "
                    >
                      <span>Syllabus</span>

                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* ==================================================
                ITP IMAGE
            ================================================== */}

            <div className="flex flex-col gap-4 lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-lg">
                <img
                  src={programsHero2}
                  alt="High-Velocity Agile Sprints in Action"
                  className="h-90 w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-linear-to-t from-sd-navy/85 via-transparent to-transparent" />

                <div
                  className="
                    absolute
                    bottom-4 left-4 right-4
                    flex items-center justify-between
                    rounded-xl
                    border border-border
                    bg-card/95
                    p-4
                    shadow-md
                    backdrop-blur-md
                  "
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <span className="material-symbols-outlined text-[20px]">group</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-foreground">
                        High-Velocity Agile Sprints // Daily Code Reviews
                      </span>

                      <span className="font-mono text-[11px] text-muted-foreground">
                        Team Syncs • Pair Debugging Sessions
                      </span>
                    </div>
                  </div>

                  <span className="rounded bg-accent px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-accent-foreground">
                    LIVE
                  </span>
                </div>
              </div>

              {/* Velocity Card */}
              <div className="flex items-center justify-between rounded-2xl border border-border bg-card p-5 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 font-mono text-sm font-bold text-accent">
                    4x
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-foreground">Velocity Compression</span>

                    <span className="text-[11px] text-muted-foreground">
                      Equivalent to 1.5 Years junior on-the-job training
                    </span>
                  </div>
                </div>

                <span className="material-symbols-outlined text-[24px] text-accent">
                  trending_up
                </span>
              </div>
            </div>
          </div>

          {/* ==================================================
              ENROLLMENT
          ================================================== */}

          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-4
              rounded-2xl
              border-2 border-accent/30
              bg-card
              p-5
              shadow-sm
              sm:flex-row
              sm:p-6
            "
          >
            <div className="flex items-center gap-3.5">
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <span className="absolute h-3 w-3 animate-ping rounded-full bg-accent opacity-50" />

                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                  ROUND 02 ADMISSIONS CYCLE ACTIVE
                </span>

                <span className="text-sm font-bold text-foreground">
                  Enrolling Now across Smart Village HQ, Assiut &amp; Alexandria Creativa Hubs
                </span>
              </div>
            </div>

            <a
              href="#intake-status"
              className="
                flex
                w-full
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-accent
                px-6 py-3
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-accent-foreground
                shadow-md
                transition-all
                hover:bg-accent/90
                sm:w-auto
              "
            >
              <span>Apply for 4-Month</span>

              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Month4Section;
