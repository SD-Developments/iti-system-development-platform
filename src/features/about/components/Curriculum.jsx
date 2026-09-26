const Curriculum = () => {
  return (
    <section className="w-full bg-muted py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-14">
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest">
            // LEARNING PATHWAY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
            Inside The Curriculum
          </h2>
          <p className="text-lg text-muted-foreground">
            A connected, progressive learning journey engineered to transform raw aptitude into
            senior-level discipline.
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stage 01 */}
          <div className="p-6 rounded-3xl bg-card border border-border shadow-sm flex flex-col justify-between gap-6 hover:shadow-lg transition-all relative">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-primary/10 text-primary">
                  STAGE 01
                </span>
                <span className="material-symbols-outlined text-muted-foreground text-xl">
                  code_blocks
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground">Programming Foundations</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Data structures, algorithms, OOP, clean code, design patterns, memory management,
                and Linux OS fundamentals.
              </p>
            </div>
            <div className="pt-4 border-t border-border flex flex-wrap gap-1">
              {['C / C++', 'Algorithms', 'Data Structures', 'OOP'].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2 py-0.5 rounded bg-muted text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          {/* Stage 02 */}
          <div className="p-6 rounded-3xl bg-card border border-border shadow-sm flex flex-col justify-between gap-6 hover:shadow-lg transition-all relative">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-accent/15 text-accent">
                  STAGE 02
                </span>
                <span className="material-symbols-outlined text-muted-foreground text-xl">
                  account_tree
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground">Core Engineering</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Modern frameworks, relational &amp; NoSQL databases, RESTful &amp; GraphQL APIs,
                microservices, and software testing.
              </p>
            </div>
            <div className="pt-4 border-t border-border flex flex-wrap gap-1">
              {['APIs', 'Databases', 'Microservices', 'TDD'].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2 py-0.5 rounded bg-muted text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          {/* Stage 03 */}
          <div className="p-6 rounded-3xl bg-card border-2 border-primary shadow-md flex flex-col justify-between gap-6 hover:shadow-xl transition-all relative">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-primary text-primary-foreground">
                  STAGE 03 • AI
                </span>
                <span className="material-symbols-outlined text-primary text-xl animate-pulse">
                  auto_awesome
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground">AI Integration</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Prompt engineering, Copilot &amp; Cursor workflows, RAG systems, LLM orchestrations,
                and intelligent AI agents.
              </p>
            </div>
            <div className="pt-4 border-t border-border flex flex-wrap gap-1">
              {['Copilot', 'RAG', 'LLMs', 'Agents'].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          {/* Stage 04 — intentionally always-dark accent card */}
          <div className="p-6 rounded-3xl bg-sd-navy text-white border border-sd-navy shadow-sm flex flex-col justify-between gap-6 hover:shadow-xl transition-all relative">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-white/20 text-white">
                  STAGE 04
                </span>
                <span className="material-symbols-outlined text-accent text-xl">cloud_sync</span>
              </div>
              <h3 className="text-lg font-bold text-white">Production Experience</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Containerization with Docker, cloud deployment on Azure/AWS, CI/CD automation, and
                live capstone defense.
              </p>
            </div>
            <div className="pt-4 border-t border-white/20 flex flex-wrap gap-1">
              {['Docker', 'CI / CD', 'Azure', 'Capstone'].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-white font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
