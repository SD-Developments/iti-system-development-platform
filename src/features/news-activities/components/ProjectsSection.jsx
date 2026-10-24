import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { featuredProjects } from '../data';

const ProjectsSection = () => (
  <section id="projects" className="scroll-mt-40">
    <SectionHeader
      variant="compact"
      eyebrow="PROJECTS"
      title="Projects in Action"
      description="From classroom ideas to real-world software."
      action="Explore All Projects"
    />
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {featuredProjects.map((project) => (
        <article
          key={project.title}
          className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="aspect-[16/9] overflow-hidden bg-slate-900">
            <img
              alt={project.title}
              src={project.image}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 items-start justify-between gap-3 p-5">
            <div className="min-w-0">
              <span className="mb-1.5 block font-mono text-[11px] font-semibold uppercase tracking-wide text-sd-teal">
                {project.track}
              </span>
              <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-sd-red">
                {project.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
            <ArrowUpRight
              aria-hidden="true"
              className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-sd-red"
            />
          </div>
        </article>
      ))}
    </div>
  </section>
);
export default ProjectsSection;
