const Curriculum = () => {
  return (
    <>
      <section className="w-full bg-[#F6F9FA] py-20 border-b border-[#e2eaee]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-14">
          <div className="flex flex-col gap-3 max-w-3xl">
            <span className="font-mono text-xs font-bold text-[#E03531] uppercase tracking-widest">
              // LEARNING PATHWAY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082B3E] tracking-tight">
              Inside The Curriculum
            </h2>
            <p className="text-lg text-[#687888]">
              A connected, progressive learning journey engineered to transform raw aptitude into
              senior-level discipline.
            </p>
          </div>
          {/* 4 Stages with Glowing Lines */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stage 01 */}
            <div className="p-6 rounded-3xl bg-white border border-[#e2eaee] shadow-sm flex flex-col justify-between gap-6 hover:shadow-lg transition-all relative">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-[#E03531]/10 text-[#E03531]">
                    STAGE 01
                  </span>
                  <span className="material-symbols-outlined text-[#687888] text-xl">
                    code_blocks
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#082B3E]">Programming Foundations</h3>
                <p className="text-xs text-[#687888] leading-relaxed">
                  Data structures, algorithms, OOP, clean code, design patterns, memory management,
                  and Linux OS fundamentals.
                </p>
              </div>
              <div className="pt-4 border-t border-[#e2eaee] flex flex-wrap gap-1">
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#F6F9FA] text-[#082B3E]">
                  C / C++
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#F6F9FA] text-[#082B3E]">
                  Algorithms
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#F6F9FA] text-[#082B3E]">
                  Data Structures
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#F6F9FA] text-[#082B3E]">
                  OOP
                </span>
              </div>
            </div>
            {/* Stage 02 */}
            <div className="p-6 rounded-3xl bg-white border border-[#e2eaee] shadow-sm flex flex-col justify-between gap-6 hover:shadow-lg transition-all relative">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-[#00B0B0]/15 text-[#007f7f]">
                    STAGE 02
                  </span>
                  <span className="material-symbols-outlined text-[#687888] text-xl">
                    account_tree
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#082B3E]">Core Engineering</h3>
                <p className="text-xs text-[#687888] leading-relaxed">
                  Modern frameworks, relational &amp; NoSQL databases, RESTful &amp; GraphQL APIs,
                  microservices, and software testing.
                </p>
              </div>
              <div className="pt-4 border-t border-[#e2eaee] flex flex-wrap gap-1">
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#F6F9FA] text-[#082B3E]">
                  APIs
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#F6F9FA] text-[#082B3E]">
                  Databases
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#F6F9FA] text-[#082B3E]">
                  Microservices
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#F6F9FA] text-[#082B3E]">
                  TDD
                </span>
              </div>
            </div>
            {/* Stage 03 */}
            <div className="p-6 rounded-3xl bg-white border-2 border-[#E03531] shadow-md flex flex-col justify-between gap-6 hover:shadow-xl transition-all relative">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-[#E03531] text-white">
                    STAGE 03 • AI
                  </span>
                  <span className="material-symbols-outlined text-[#E03531] text-xl animate-pulse">
                    auto_awesome
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#082B3E]">AI Integration</h3>
                <p className="text-xs text-[#687888] leading-relaxed">
                  Prompt engineering, Copilot &amp; Cursor workflows, RAG systems, LLM
                  orchestrations, and intelligent AI agents.
                </p>
              </div>
              <div className="pt-4 border-t border-[#e2eaee] flex flex-wrap gap-1">
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#E03531]/10 text-[#E03531] font-bold">
                  Copilot
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#E03531]/10 text-[#E03531] font-bold">
                  RAG
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#E03531]/10 text-[#E03531] font-bold">
                  LLMs
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#E03531]/10 text-[#E03531] font-bold">
                  Agents
                </span>
              </div>
            </div>
            {/* Stage 04 */}
            <div className="p-6 rounded-3xl bg-[#082B3E] text-white border border-[#082B3E] shadow-sm flex flex-col justify-between gap-6 hover:shadow-xl transition-all relative">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-white/20 text-white">
                    STAGE 04
                  </span>
                  <span className="material-symbols-outlined text-[#00B0B0] text-xl">
                    cloud_sync
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">Production Experience</h3>
                <p className="text-xs text-[#e0e9ee] leading-relaxed">
                  Containerization with Docker, cloud deployment on Azure/AWS, CI/CD automation, and
                  live capstone defense.
                </p>
              </div>
              <div className="pt-4 border-t border-white/20 flex flex-wrap gap-1">
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-white font-semibold">
                  Docker
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-white font-semibold">
                  CI / CD
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-white font-semibold">
                  Azure
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-white font-semibold">
                  Capstone
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Curriculum;
