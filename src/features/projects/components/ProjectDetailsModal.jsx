import { useLenis } from '@/hooks/useLenis';
import { X } from 'lucide-react';
import { useEffect } from 'react';

const ProjectDetailsModal = ({ project, onClose }) => {
  const { stop, start } = useLenis();
  useEffect(() => {
    stop();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
      start();
    };
  }, [stop, start]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-sd-navy/70 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        data-lenis-prevent
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-sd-navy/80 text-white backdrop-blur-md transition-colors hover:bg-primary"
          aria-label="Close project details"
        >
          <X size={20} />
        </button>

        {/* Project Image */}
        {project.image && (
          <div className="relative h-56 w-full overflow-hidden sm:h-72 md:h-80">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />

            <div className="absolute inset-0 bg-linear-to-t from-sd-navy via-sd-navy/30 to-transparent" />

            <div className="absolute bottom-5 left-6 right-6">
              <span className="mb-2 inline-block rounded-md bg-accent px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-white">
                {project.category}
              </span>

              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{project.title}</h2>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Meta */}
          <div className="mb-6 flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
            <span>{project.track}</span>

            <span className="text-border">•</span>

            <span>{project.program}</span>

            <span className="text-border">•</span>

            <span>{project.branch}</span>
          </div>

          {/* Description */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-foreground">About the Project</h3>

            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Domains */}
          {project.domains?.length > 0 && (
            <div className="mt-7">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-foreground">
                Domains
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.domains.map((domain) => (
                  <span
                    key={domain}
                    className="rounded-lg border border-border bg-muted px-3 py-1.5 font-mono text-xs text-foreground"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          {project.technologies?.length > 0 && (
            <div className="mt-7">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-foreground">
                Technologies
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg bg-secondary2 px-3 py-1.5 font-mono text-xs font-medium text-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-muted px-5 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <span className="material-symbols-outlined text-[20px]">code</span>
                GitHub
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-accent"
              >
                <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
