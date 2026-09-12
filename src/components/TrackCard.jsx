import { ArrowRight, BookOpen, Layers3, MapPin } from 'lucide-react';

function TrackCard({ track }) {
  const Icon = track.icon;

  return (
    <article className="group flex flex-col rounded-3xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
          <Icon size={23} />
        </div>

        <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-primary">
          Smart Village
        </span>
      </div>

      <span className="mt-7 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
        {track.category}
      </span>

      <h3 className="mt-2 text-xl font-bold leading-snug">{track.title}</h3>

      <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{track.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {track.technologies.slice(0, 6).map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-secondary px-3 py-1.5 font-mono text-[10px] font-semibold text-secondary-foreground"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5">
        <TrackMeta label="Program" value={track.program} icon={<BookOpen size={14} />} />

        <TrackMeta label="Duration" value={track.duration} icon={<Layers3 size={14} />} />

        {/* <TrackMeta label="Hours" value={track.hours} icon={<Terminal size={14} />} /> */}

        <TrackMeta
          label="Available At"
          value={track.branches.join(', ')}
          icon={<MapPin size={14} />}
        />
      </div>

      <a
        href={`/tracks/${track.id}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary"
      >
        Explore Track
        <ArrowRight size={16} className="transition group-hover:translate-x-1" />
      </a>
    </article>
  );
}

function TrackMeta({ icon, label, value }) {
  return (
    <div className="flex items-start gap-2">
      <div className="mt-0.5 text-accent">{icon}</div>

      <div>
        <span className="block text-[10px] uppercase tracking-wide text-muted-foreground">
          {label}
        </span>

        <span className="mt-0.5 block text-xs font-semibold">{value}</span>
      </div>
    </div>
  );
}

export default TrackCard;
