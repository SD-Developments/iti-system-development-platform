import { projectCategories, projects } from '@/constants';
import ProjectCardComp from './ProjectCardComp';

const ProjectExplorer = () => {
  return (
    <>
      <section id="projects-grid" className="border-b border-border bg-sd-bg-light py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}

          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-accent">
                DIGITAL ENGINEERING GALLERY
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                Explore SD Projects
              </h2>

              <p className="mt-2 max-w-2xl text-base text-muted-foreground">
                From AI and high-concurrency clearing switches to WebXR, automotive firmware, and
                edge hydrology networks.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 font-mono text-xs text-foreground shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

              <span className="font-bold">342 Verified Capstones</span>
            </div>
          </div>

          {/* Category Pills */}

          <div className="custom-scrollbar mb-10 flex items-center gap-2.5 overflow-x-auto pb-4">
            {projectCategories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`shrink-0 rounded-xl px-4 py-2 font-mono text-xs font-medium tracking-wide transition-colors ${
                  index === 0
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'border border-border bg-card text-muted-foreground hover:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Gallery */}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {projects.map((project) => (
              <ProjectCardComp key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectExplorer;
