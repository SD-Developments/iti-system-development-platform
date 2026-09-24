import about4 from '../../../assets/images/hero1.png';
const TrackAi = () => {
  return (
    <>
      <section className="w-full bg-[#082B3E] py-20 text-white relative overflow-hidden">
        {/* Ambient light effect */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00B0B0]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#E03531]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E03531]/20 border border-[#E03531]/40 text-[#E03531] font-mono text-xs font-bold w-fit">
                <span className="w-2 h-2 rounded-full bg-[#E03531] animate-pulse"></span>
                FUTURE-PROOF ENGINEERING
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                AI Is Built Into Every Track.
              </h2>
              <p className="text-lg text-[#e0e9ee]">
                Not an isolated novelty, but a foundational engineering partner integrated across
                all courses.
              </p>
            </div>
            <div className="font-mono text-xs text-[#00B0B0] bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl shrink-0">
              // COPILOT • CURSOR • MCP • RAG • MULTI-AGENT
            </div>
          </div>
          {/* Authentic lab scene + 6 Glassmorphism cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-full min-h-[380px]">
              <img
                alt="Egyptian software engineering students working together in AI coding workshop"
                className="w-full h-full object-cover"
                src={about4}
              />
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* 1. Prompt Engineering */}
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#00B0B0] transition-colors flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#00B0B0] text-xl">tune</span>
                  <h4 className="text-sm font-bold text-white">Prompt Engineering</h4>
                </div>
                <p className="text-xs text-[#e0e9ee] leading-relaxed">
                  Context structuring, system instructions, few-shot prompting, and deterministic
                  structured outputs.
                </p>
              </div>
              {/* 2. AI-Assisted Development */}
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#E03531] transition-colors flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#E03531] text-xl">speed</span>
                  <h4 className="text-sm font-bold text-white">AI-Assisted Development</h4>
                </div>
                <p className="text-xs text-[#e0e9ee] leading-relaxed">
                  Supercharging velocity with GitHub Copilot, Cursor IDE, automated refactoring, and
                  code review.
                </p>
              </div>
              {/* 3. RAG Architectures */}
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#00B0B0] transition-colors flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#00B0B0] text-xl">
                    find_in_page
                  </span>
                  <h4 className="text-sm font-bold text-white">RAG Architectures</h4>
                </div>
                <p className="text-xs text-[#e0e9ee] leading-relaxed">
                  Augmenting LLMs with custom vector embeddings, hybrid indexing, and high-accuracy
                  semantic retrieval.
                </p>
              </div>
              {/* 4. AI Autonomous Agents */}
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#E03531] transition-colors flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#E03531] text-xl">
                    smart_toy
                  </span>
                  <h4 className="text-sm font-bold text-white">AI Autonomous Agents</h4>
                </div>
                <p className="text-xs text-[#e0e9ee] leading-relaxed">
                  Multi-agent collaboration loops, automated tool-calling execution, planning, and
                  autonomous code execution.
                </p>
              </div>
              {/* 5. Model Context Protocol (MCP) */}
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#00B0B0] transition-colors flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#00B0B0] text-xl">cable</span>
                  <h4 className="text-sm font-bold text-white">Model Context Protocol (MCP)</h4>
                </div>
                <p className="text-xs text-[#e0e9ee] leading-relaxed">
                  Connecting AI systems safely to live enterprise databases, Git repos, internal
                  APIs, and production telemetry.
                </p>
              </div>
              {/* 6. Intelligent Automation */}
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#E03531] transition-colors flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#E03531] text-xl">
                    auto_mode
                  </span>
                  <h4 className="text-sm font-bold text-white">Intelligent Automation</h4>
                </div>
                <p className="text-xs text-[#e0e9ee] leading-relaxed">
                  Integrating AI into automated end-to-end test generation, vulnerability audits,
                  and deployment pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackAi;
