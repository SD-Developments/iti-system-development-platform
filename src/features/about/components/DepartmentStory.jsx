import about2 from '../../../assets/images/about2.png';

const DepartmentStory = () => {
  return (
    <>
      <section className="w-full border-b border-border bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col gap-4 lg:col-span-6">
              <div className="flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-wider text-primary">
                <span className="material-symbols-outlined text-sm">code_blocks</span>

                <span>The Bedrock of Digital Egypt</span>
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[40px]">
                An Institutional Pillar Fueling High-End Software Engineering
              </h2>

              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  As the core division within the Information Technology Institute (ITI), the
                  Software Development Department serves as Egypt&apos;s primary national incubator
                  for elite software craft. Established under the auspices of the Ministry of
                  Communications and Information Technology (MCIT), the department acts as the
                  definitive bridge connecting high-potential graduates with production-grade
                  engineering realities.
                </p>

                <p>
                  Our pedagogical approach bypasses conventional academic lectures. We operate
                  immersive software delivery incubators, where curriculum is co-architected with
                  leading enterprise software conglomerates, fast-growing scale-ups, and
                  international engineering research labs. Every intake is re-calibrated against
                  global production standards: from strict distributed systems to autonomous AI
                  pipelines.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-xl">account_tree</span>

                    <h3 className="text-sm font-bold text-card-foreground">Curriculum Co-Design</h3>
                  </div>

                  <p className="text-xs leading-normal text-muted-foreground">
                    Over 60+ chief technical officers and software leads review our track syllabi
                    twice per calendar year.
                  </p>
                </div>

                <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-xl">terminal</span>

                    <h3 className="text-sm font-bold text-card-foreground">Production Immersion</h3>
                  </div>

                  <p className="text-xs leading-normal text-muted-foreground">
                    Students complete 1,200+ hours of synchronous code authoring, automated testing,
                    and CI/CD pipelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}

            <div className="relative lg:col-span-6">
              <div className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-border shadow-2xl">
                <img
                  src={about2}
                  alt="Authentic documentary photograph of Egyptian software engineering students and mentors in an ITI tech hub lab"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-linear-to-t from-sd-navy/85 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 font-mono text-[11px] text-white shadow-sm">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />

                    <span>Authentic Engineering Residency</span>
                  </div>

                  <p className="text-sm font-medium leading-snug">
                    Peer code reviews, whiteboard design arguments, and architectural defense at ITI
                    Smart Village HQ.
                  </p>

                  <span className="mt-2 block font-mono text-[11px] text-sd-teal">
                    Intake Residency • Collaborative Pair-Programming in Action
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

export default DepartmentStory;
