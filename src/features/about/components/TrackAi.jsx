import about4 from '../../../assets/images/hero1.png';

const TrackAi = () => {
  return (
    <section className="w-full bg-sd-navy py-20 text-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary font-mono text-xs font-bold w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              FUTURE-PROOF ENGINEERING
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              AI Is Built Into Every Track.
            </h2>
            <p className="text-lg text-white/80">
              Not an isolated novelty, but a foundational engineering partner integrated across all
              courses.
            </p>
          </div>
          <div className="font-mono text-xs text-accent bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl shrink-0">
            // COPILOT • CURSOR • MCP • RAG • MULTI-AGENT
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-full min-h-[380px]">
            <img
              alt="Egyptian software engineering students working together in AI coding workshop"
              className="w-full h-full object-cover"
              src={about4}
            />
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: 'tune',
                accent: 'accent',
                title: 'Prompt Engineering',
                desc: 'Context structuring, system instructions, few-shot prompting, and deterministic structured outputs.',
              },
              {
                icon: 'speed',
                accent: 'primary',
                title: 'AI-Assisted Development',
                desc: 'Supercharging velocity with GitHub Copilot, Cursor IDE, automated refactoring, and code review.',
              },
              {
                icon: 'find_in_page',
                accent: 'accent',
                title: 'RAG Architectures',
                desc: 'Augmenting LLMs with custom vector embeddings, hybrid indexing, and high-accuracy semantic retrieval.',
              },
              {
                icon: 'smart_toy',
                accent: 'primary',
                title: 'AI Autonomous Agents',
                desc: 'Multi-agent collaboration loops, automated tool-calling execution, planning, and autonomous code execution.',
              },
              {
                icon: 'cable',
                accent: 'accent',
                title: 'Model Context Protocol (MCP)',
                desc: 'Connecting AI systems safely to live enterprise databases, Git repos, internal APIs, and production telemetry.',
              },
              {
                icon: 'auto_mode',
                accent: 'primary',
                title: 'Intelligent Automation',
                desc: 'Integrating AI into automated end-to-end test generation, vulnerability audits, and deployment pipelines.',
              },
            ].map((f) => (
              <div
                key={f.title}
                className={`p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-${f.accent} transition-colors flex flex-col gap-2`}
              >
                <div className="flex items-center gap-2">
                  <span className={`material-symbols-outlined text-${f.accent} text-xl`}>
                    {f.icon}
                  </span>
                  <h4 className="text-sm font-bold text-white">{f.title}</h4>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackAi;
