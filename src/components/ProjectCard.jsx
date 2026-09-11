import { ArrowRight } from 'lucide-react';

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-sd-white/10 bg-sd-white/5">
      <div className="relative aspect-16/10 overflow-hidden bg-sd-white/5">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-sd-navy/90 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 rounded-full bg-sd-navy/80 px-3 py-1.5 font-mono text-[10px] text-sd-teal backdrop-blur">
          {project.track}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="mt-3 text-sm leading-6 text-sd-white/60">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-sd-teal/20 bg-sd-teal/10 px-3 py-1 font-mono text-[10px] text-sd-teal"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-sd-white/10 pt-5">
          <span className="text-xs text-sd-white/45">
            {project.program} · {project.branch}
          </span>

          <ArrowRight size={17} className="text-sd-teal transition group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
