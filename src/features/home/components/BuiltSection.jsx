import { projects } from '@/constants';
import { ArrowRight } from 'lucide-react';
import img1 from '../../../assets/images/Requra.png';

function BuiltSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-sd-navy py-20 text-sd-white lg:py-28">
        <div className="pointer-events-none absolute -right-48 -top-48 h-96 w-96 rounded-full bg-sd-teal/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto w-[90%] max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-sd-teal">
                Student Projects
              </span>

              <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Built at SD
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-sd-white/60">
                Real teams building real systems. Explore selected projects created through the
                System Development journey.
              </p>
            </div>

            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-sd-teal"
            >
              Explore All Projects
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            {/* Featured project */}
            <article className="group overflow-hidden rounded-3xl border border-sd-white/10 bg-sd-white/5 lg:col-span-7">
              <div className="relative aspect-video overflow-hidden bg-sd-white/5">
                <img
                  src={img1}
                  alt={projects[0].title}
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-sd-navy via-sd-navy/10 to-transparent" />
              </div>

              <div className="p-7 lg:p-8">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-sd-teal">
                  Featured Project
                </span>

                <h3 className="mt-3 text-3xl font-extrabold">{projects[0].title}</h3>

                <p className="mt-1 text-sm font-semibold text-sd-white/55">
                  {projects[0].category}
                </p>

                <p className="mt-4 max-w-xl text-sm leading-6 text-sd-white/65">
                  {projects[0].description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {projects[0].technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-sd-teal/20 bg-sd-teal/10 px-3 py-1.5 font-mono text-[11px] text-sd-teal"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-sd-white/10 pt-5">
                  <span className="text-xs text-sd-white/50">{projects[0].meta}</span>

                  <a
                    href="/projects/requra"
                    className="flex items-center gap-2 text-sm font-bold text-sd-teal"
                  >
                    View Project
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>

            {/* Secondary projects */}
            <div className="flex flex-col gap-5 lg:col-span-5">
              {projects.slice(1).map((project) => (
                <article
                  key={project.title}
                  className="group flex flex-1 flex-col justify-between rounded-3xl border border-sd-white/10 bg-sd-white/5 p-7 transition hover:bg-sd-white/10"
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-sd-teal">
                        {project.meta}
                      </span>

                      <ArrowRight
                        size={18}
                        className="text-sd-white/40 transition group-hover:translate-x-1 group-hover:text-sd-teal"
                      />
                    </div>

                    <h3 className="text-2xl font-bold">{project.title}</h3>

                    <p className="mt-1 text-sm font-medium text-sd-white/50">{project.category}</p>

                    <p className="mt-4 text-sm leading-6 text-sd-white/60">{project.description}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-sd-white/5 px-3 py-1.5 font-mono text-[10px] text-sd-white/70"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuiltSection;
