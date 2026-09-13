import TechnicalProjectVisual from './TechnicalProjectVisual';

const ProjectCardComp = ({ project, onClick }) => {
  // console.log(project);
  const isWide = project.variant === 'wide';

  const spanClass = isWide ? 'md:col-span-8' : 'md:col-span-4';
  return (
    <>
      <article
        onClick={onClick}
        className={`group flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 ${
          project.typeColor === 'red' ? 'hover:border-primary' : 'hover:border-accent'
        } ${spanClass}`}
      >
        <div>
          {/* Visual */}

          {project.image ? (
            <div className="relative h-48 w-full overflow-hidden bg-sd-navy">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-sd-navy via-sd-navy/30 to-transparent" />

              <div className="absolute left-3.5 right-3.5 top-3.5 flex items-center justify-between gap-2">
                <span
                  className={`rounded px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-white ${
                    project.typeColor === 'red' ? 'bg-primary/90' : 'bg-accent/90'
                  }`}
                >
                  {project.type}
                </span>

                <span className="rounded border border-white/20 bg-sd-navy/80 px-2 py-0.5 font-mono text-[10px] text-white backdrop-blur-md">
                  {project.metaRight}
                </span>
              </div>

              <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between font-mono text-[10px] text-slate-300">
                <span>{project.metaLeft}</span>

                <span className="text-emerald-400">
                  {project.id === 5 ? '18km LoRaWAN Mesh' : 'LIVE'}
                </span>
              </div>
            </div>
          ) : (
            <TechnicalProjectVisual project={project} />
          )}

          {/* Body */}

          <div className={isWide ? 'p-7' : 'p-6'}>
            {isWide && (
              <div className="mb-2 flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">{project.location}</span>

                <span className="text-border">•</span>

                <span className="font-mono text-xs text-accent">{project.intake}</span>
              </div>
            )}

            <h3
              className={`font-bold text-primary transition-colors ${
                isWide ? 'text-2xl' : 'text-xl'
              } group-hover:text-accent`}
            >
              {project.title}
            </h3>

            <p
              className={`mt-3 leading-relaxed text-muted-foreground ${
                isWide ? 'text-sm' : 'text-xs'
              }`}
            >
              {project.description.slice(0, 200)}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-xs">
              {project.technologies.map((technology) => (
                <span key={technology} className="rounded bg-muted px-2.5 py-1 text-foreground">
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="flex items-center justify-between border-t border-border bg-muted px-6 py-3.5 font-mono text-xs">
          <span className="text-muted-foreground">{project.status}</span>

          <a href="#" className="font-bold text-primary transition-colors hover:text-accent">
            View Project →
          </a>
        </div>
      </article>
    </>
  );
};

export default ProjectCardComp;
