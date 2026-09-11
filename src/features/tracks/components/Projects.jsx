import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/constants';
import { ArrowRight } from 'lucide-react';

function Projects() {
  return (
    <>
      <section className="bg-sd-navy py-20 text-sd-white lg:py-28">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.17em] text-sd-teal">
                Built Through These Tracks
              </span>

              <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
                See What Students Build
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-sd-white/60">
                Tracks become meaningful when technical knowledge is transformed into real working
                systems.
              </p>
            </div>

            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-sd-teal"
            >
              Explore All Projects
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
