const SdStats = () => {
  return (
    <section className="w-full bg-background py-16 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Metric 1 */}
          <div className="p-7 rounded-2xl bg-muted border border-border shadow-sm flex flex-col justify-between hover:border-primary/40 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold text-primary tracking-wider uppercase">
                01 // SPECIALIZATION
              </span>
              <span className="material-symbols-outlined text-primary text-2xl">stacks</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-5xl font-black text-foreground tracking-tight">3</span>
              <span className="font-mono text-xs font-bold text-foreground uppercase tracking-wider">
                PROFESSIONAL TRACKS
              </span>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Specialized intensive tracks: Full Stack Web, Cross-Platform Mobile, and .NET
                Enterprise.
              </p>
            </div>
          </div>
          {/* Metric 2 */}
          <div className="p-7 rounded-2xl bg-muted border border-border shadow-sm flex flex-col justify-between hover:border-accent/40 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold text-accent tracking-wider uppercase">
                02 // CAPSTONE DEFENSE
              </span>
              <span className="material-symbols-outlined text-accent text-2xl">timer</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-5xl font-black text-foreground tracking-tight">
                300 <span className="text-2xl text-muted-foreground font-semibold">hrs</span>
              </span>
              <span className="font-mono text-xs font-bold text-foreground uppercase tracking-wider">
                GRADUATION PROJECT
              </span>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Comprehensive capstone engineering under live mentor supervision and real industry
                requirements.
              </p>
            </div>
          </div>
          {/* Metric 3 */}
          <div className="p-7 rounded-2xl bg-muted border border-border shadow-sm flex flex-col justify-between hover:border-sd-navy/40 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold text-foreground tracking-wider uppercase">
                03 // FORMAT
              </span>
              <span className="material-symbols-outlined text-foreground text-2xl">school</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-5xl font-black text-foreground tracking-tight">75 / 25</span>
              <span className="font-mono text-xs font-bold text-foreground uppercase tracking-wider">
                BLENDED LEARNING
              </span>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                75% intensive on-campus practical labs and project sprints combined with 25%
                interactive digital learning.
              </p>
            </div>
          </div>
          {/* Metric 4 */}
          <div className="p-7 rounded-2xl bg-muted border border-border shadow-sm flex flex-col justify-between hover:border-primary/40 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold text-primary tracking-wider uppercase">
                04 // ADMISSIONS
              </span>
              <span className="material-symbols-outlined text-primary text-2xl">verified</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-5xl font-black text-foreground tracking-tight">Good+</span>
              <span className="font-mono text-xs font-bold text-foreground uppercase tracking-wider">
                MINIMUM REQUIREMENT
              </span>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Selective admissions admitting top STEM graduates across engineering, computer
                science, and sciences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SdStats;
