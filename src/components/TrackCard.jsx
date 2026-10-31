import { ArrowRight, BookOpen, BriefcaseBusiness, Clock, MapPin, Sparkles } from 'lucide-react';

function TrackCard({ track }) {
  const Icon = track.icon ?? BookOpen;
  const technologies = track.technologies ?? [];
  const visibleTechnologies = technologies.slice(0, 6);
  const remainingTechnologies = technologies.length - visibleTechnologies.length;
  const roles = track.jobProfiles ?? [];
  const branches = track.branches ?? [];

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10">
      {/* Header band */}
      <div className="relative overflow-hidden bg-linear-to-br from-primary/10 via-accent/5 to-transparent px-6 pb-6 pt-6">
        {/* Decorative watermark icon */}
        <Icon
          size={150}
          strokeWidth={1}
          className="pointer-events-none absolute -right-8 -top-8 text-accent/10 transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:text-accent/20"
        />

        <div className="relative flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-card text-accent shadow-sm ring-1 ring-border transition duration-300 group-hover:bg-accent group-hover:text-white group-hover:ring-accent">
            <Icon size={26} />
          </div>

          <span className="rounded-full border border-primary/20 bg-card/80 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-primary backdrop-blur">
            {track.program}
          </span>
        </div>

        <div className="relative mt-6 flex items-center gap-2">
          <span className="h-px w-6 bg-accent" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
            {track.category}
          </span>
        </div>

        <h3 className="relative mt-2 text-xl font-extrabold leading-snug tracking-tight">
          {track.title}
        </h3>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <p className="text-sm leading-6 text-muted-foreground">{track.description}</p>

        {/* Quick stats */}
        <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
          <Stat icon={<Clock size={14} />} label="Duration" value={track.duration} />
          <Stat icon={<Sparkles size={14} />} label="Hours" value={track.hours ?? '—'} />
        </div>

        {/* Technologies */}
        <div className="mt-6">
          <SectionLabel>Core Technologies</SectionLabel>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {visibleTechnologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-border bg-secondary px-2.5 py-1 font-mono text-[10px] font-semibold text-secondary-foreground transition group-hover:border-accent/20"
              >
                {technology}
              </span>
            ))}

            {remainingTechnologies > 0 && (
              <span className="rounded-lg bg-foreground px-2.5 py-1 font-mono text-[10px] font-bold text-background">
                +{remainingTechnologies}
              </span>
            )}
          </div>
        </div>

        {/* Roles */}
        {roles.length > 0 && (
          <div className="mt-6">
            <SectionLabel icon={<BriefcaseBusiness size={12} />}>Typical Roles</SectionLabel>

            <ul className="mt-3 space-y-2">
              {roles.slice(0, 2).map((role) => (
                <li
                  key={role}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-secondary/40 px-3 py-2 text-xs font-semibold transition group-hover:bg-primary/5"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {role}
                </li>
              ))}
            </ul>

            {roles.length > 2 && (
              <p className="mt-2 pl-1 text-[10px] font-semibold text-muted-foreground">
                +{roles.length - 2} more roles
              </p>
            )}
          </div>
        )}

        {/* Availability */}
        <div className="mt-6 flex items-start gap-2 text-xs">
          <MapPin size={14} className="mt-0.5 shrink-0 text-accent" />
          <div className="flex flex-wrap gap-1.5">
            {branches.length > 0 ? (
              branches.map((branch) => (
                <span
                  key={branch}
                  className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary"
                >
                  {branch}
                </span>
              ))
            ) : (
              <span className="text-[11px] text-muted-foreground">Branches to be announced</span>
            )}
          </div>
        </div>

        {/* CTA */}
        <a
          href={`/tracks/${track.id}`}
          className="mt-auto flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3 pt-3 text-sm font-bold text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
          style={{ marginTop: '1.5rem' }}
        >
          Explore Track
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 transition group-hover:translate-x-1 group-hover:bg-white/20">
            <ArrowRight size={15} />
          </span>
        </a>
      </div>

      {/* Bottom accent line that grows on hover */}
      <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-linear-to-r from-primary to-accent transition-transform duration-500 group-hover:scale-x-100" />
    </article>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-2.5 bg-card px-3.5 py-3">
      <div className="text-accent">{icon}</div>
      <div>
        <span className="block text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="block text-xs font-bold">{value}</span>
      </div>
    </div>
  );
}

function SectionLabel({ icon, children }) {
  return (
    <div className="flex items-center gap-2">
      {icon && <span className="text-primary">{icon}</span>}
      <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
        {children}
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export default TrackCard;
