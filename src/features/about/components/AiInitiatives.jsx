import { aiInitiatives } from '@/constants';

const AiInitiatives = () => {
  return (
    <>
      <section className="w-full border-b border-border bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-sd-bg-light p-8 md:p-12">
            <div className="relative z-10 flex max-w-3xl flex-col gap-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-3 py-1 font-mono text-xs text-white">
                <span className="material-symbols-outlined text-sm">smart_toy</span>

                <span>THE NEXT FRONTIER: 2025 CURRICULAR INTEGRATION</span>
              </div>

              <h2 className="mt-1 text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Infusing Generative AI, LLMOps & Cloud Sovereignty
              </h2>

              <p className="text-base leading-relaxed text-muted-foreground">
                Software engineering has permanently pivoted. At the SD Department, AI is not
                treated as a peripheral elective—it is woven directly into every development stack.
                Our cohorts author software with modern AI-augmented developer workflows, embed
                specialized LLMs via vector storage (RAG), and monitor models via cloud-native
                pipelines.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {aiInitiatives.map((initiative) => (
                  <div
                    key={initiative.title}
                    className="rounded-xl border border-border bg-card p-4 shadow-sm"
                  >
                    <span className="mb-1 block font-mono text-xs font-bold text-primary">
                      {initiative.title}
                    </span>

                    <p className="text-xs leading-normal text-muted-foreground">
                      {initiative.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiInitiatives;
