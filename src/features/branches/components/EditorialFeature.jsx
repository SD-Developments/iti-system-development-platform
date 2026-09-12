import collaborationImage from '../../../assets/images/about2.png';
const EditorialFeature = () => {
  return (
    <>
      <section className="w-full border-b border-border bg-sd-bg-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card shadow-sm lg:grid-cols-2">
            {/* IMAGE */}

            <div className="relative min-h-85 sm:min-h-100 lg:min-h-125">
              <img
                src={collaborationImage}
                alt="Egyptian university software engineering students collaborating"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 flex items-end bg-linear-to-t from-sd-navy/90 via-sd-navy/20 to-transparent p-6 sm:p-8">
                <div className="text-white">
                  <span className="mb-2 inline-block rounded bg-primary px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider">
                    Documentary Archive // 2024
                  </span>

                  <h4 className="text-lg font-bold sm:text-xl">
                    Whiteboard Systems Architecture Sprint
                  </h4>

                  <p className="mt-1 max-w-sm text-xs text-white/80">
                    Egyptian software engineers defending distributed microservice models at the
                    regional tech hub.
                  </p>
                </div>
              </div>
            </div>

            {/* CONTENT */}

            <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
                  Decentralization Story
                </div>

                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                  More Than a Classroom.
                </h2>

                <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Every SD hub is engineered from the ground up as a physical and digital
                  engineering collective. No matter which governorate an aspiring engineer calls
                  home, they enter identical dual-monitor workstations, synchronized curriculum
                  milestones, and rigorous peer review culture.
                </p>

                <div className="mb-8 rounded-2xl border-l-4 border-primary bg-card p-5 shadow-sm">
                  <blockquote className="text-sm font-medium italic leading-relaxed text-foreground">
                    "In Assiut and Mansoura, students undergo the exact same git pull requests and
                    architectural scrutiny as those in Smart Village Cairo. Quality is
                    decentralized."
                  </blockquote>

                  <div className="mt-2 text-right font-mono text-[10px] font-bold text-primary">
                    — Regional Software Track Lead
                  </div>
                </div>
              </div>

              {/* METRICS */}

              <div className="grid grid-cols-3 gap-3 border-t border-border pt-5 font-mono sm:gap-4">
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-primary sm:text-2xl">52%</span>

                  <span className="mt-0.5 text-[9px] font-semibold text-muted-foreground sm:text-[11px]">
                    Regional Top Talent
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-sd-teal sm:text-2xl">100%</span>

                  <span className="mt-0.5 text-[9px] font-semibold text-muted-foreground sm:text-[11px]">
                    Unified Standard
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-foreground sm:text-2xl">88%+</span>

                  <span className="mt-0.5 text-[9px] font-semibold text-muted-foreground sm:text-[11px]">
                    Direct Placement
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditorialFeature;
