import SectionHeader from '@/components/SectionHeader';
import { featuredProjects } from '../data';
const ProjectsSection = () => (
  <section id="projects">
    <SectionHeader
      variant="compact"
      eyebrow="PROJECTS"
      title="Projects in Action"
      description="From classroom ideas to real-world software."
      action="Explore All Projects"
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {featuredProjects.map((project) => (
        <div
          key={project.title}
          className="bg-card rounded-xl border border-border p-4 shadow-sm hover:shadow-md transition flex items-center gap-4 group"
        >
          <div className="w-24 h-20 rounded-lg overflow-hidden bg-slate-900 shrink-0">
            <img alt={project.title} src={project.image} className="w-full h-full object-cover" />
          </div>
          <div className="flex-grow min-w-0">
            <h3 className="text-sm font-bold text-foreground truncate group-hover:text-sd-red">
              {project.title}
            </h3>
            <span className="text-[10px] font-mono text-sd-teal block uppercase font-medium">
              {project.track}
            </span>
            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{project.description}</p>
          </div>
          <span className="text-muted-foreground group-hover:text-sd-red">↗</span>
        </div>
      ))}
    </div>
  </section>
);
export default ProjectsSection;
