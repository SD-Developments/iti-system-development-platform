import { experiences, getAccentClasses } from '@/constants';

const StudentsExperience = () => {
  return (
    <>
      <section className="w-full py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <span className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-primary sm:text-xs">
              Human-Centered Engineering
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              What Happens Inside an SD Hub?
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Beyond physical hardware, each branch is a tight-knit software community driven by
              collaboration, mentorship, and shipping real code.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((experience) => {
              const accent = getAccentClasses(experience.accent);

              return (
                <div
                  key={experience.number}
                  className="group flex bg-sd-bg-light flex-col overflow-hidden rounded-2xl border border-border  shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute left-3 top-3 rounded bg-sd-navy/85 px-2.5 py-0.5 font-mono text-[9px] font-bold text-white backdrop-blur-md">
                      {experience.number} // {experience.label}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-foreground sm:text-xl">
                        {experience.title}
                      </h3>

                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {experience.description}
                      </p>
                    </div>

                    <div
                      className={`mt-4 flex items-center gap-1.5 border-t border-border pt-3 font-mono text-[10px] font-semibold ${accent.text}`}
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {experience.icon}
                      </span>

                      {experience.footer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentsExperience;
