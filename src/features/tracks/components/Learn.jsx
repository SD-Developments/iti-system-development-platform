import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { tracks } from '@/constants';
import { ArrowRight, BriefcaseBusiness } from 'lucide-react';
import { useMemo, useState } from 'react';

function Learn() {
  const [extend, setExtend] = useState(3);
  let tracksArr = useMemo(() => tracks.slice(0, extend) || [], [extend]);
  const disBtn = tracksArr.length === tracks.length;
  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary/30 py-20 lg:py-28">
      {/* subtle background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto w-[90%] max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Learning Focus"
            title="What Each Track Is Built Around"
            description="Each track combines a shared software engineering foundation with a distinct specialization, technology stack, and professional direction."
          />

          <div className="hidden font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground lg:block">
            {tracks.length} Technical Tracks
          </div>
        </div>

        <div className="mt-12 space-y-5">
          {tracksArr.map((track, index) => (
            <TrackLearningRow key={track.id} track={track} index={index} />
          ))}
        </div>
      </div>

      <div className="flex-center mt-10">
        {!disBtn ? (
          <Button
            onClick={() => {
              setExtend(tracks.length);
            }}
          >
            more
          </Button>
        ) : (
          <Button
            variant="accent"
            onClick={() => {
              setExtend(3);
            }}
          >
            reset
          </Button>
        )}
      </div>
    </section>
  );
}

function TrackLearningRow({ track, index }) {
  const Icon = track.icon;
  const visibleTechnologies = track.technologies?.slice(0, 7) || [];
  const remainingTechnologies = (track.technologies?.length || 0) - visibleTechnologies.length;

  return (
    <article
      className="
        group relative overflow-hidden rounded-[28px]
        border border-border bg-card
        transition-all duration-300
        hover:-translate-y-1
        hover:border-accent/30
        hover:shadow-xl
        hover:shadow-foreground/5
      "
    >
      {/* accent line */}
      <div className="absolute inset-y-0 left-0 w-1 bg-primary" />
      <div className="grid gap-7 p-6 sm:p-7 lg:grid-cols-12 lg:items-center lg:p-8">
        <div className="lg:col-span-4">
          <div className="flex items-start gap-4">
            <div
              className="
                flex h-14 w-14 shrink-0 items-center justify-center
                rounded-2xl bg-accent/10 text-accent
                ring-1 ring-accent/10
                transition
                group-hover:bg-accent
                group-hover:text-white
              "
            >
              <Icon size={24} />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-bold tracking-[0.12em] text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="h-px w-8 bg-border" />

                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  {track.program}
                </span>
              </div>

              <h3 className="mt-2 text-xl font-extrabold leading-snug tracking-[-0.02em]">
                {track.shortTitle}
              </h3>

              {track.category && (
                <div className="mt-2 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-accent">
                  {track.category}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
              Core Technologies
            </span>

            <span className="text-[10px] font-semibold text-muted-foreground">
              {track.technologies?.length || 0} technologies
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {visibleTechnologies.map((technology) => (
              <span
                key={technology}
                className={`
                  rounded-full border px-3 py-1.5
                  font-mono text-[10px] font-semibold
                  transition
                  border-border bg-secondary text-secondary-foreground
                `}
              >
                {technology}
              </span>
            ))}

            {remainingTechnologies > 0 && (
              <span
                className="
                  rounded-full bg-foreground
                  px-3 py-1.5
                  font-mono text-[10px] font-bold
                  text-background
                "
              >
                +{remainingTechnologies}
              </span>
            )}
          </div>
        </div>

        <div className="lg:col-span-3">
          {track.jobProfiles?.length > 0 ? (
            <div
              className="
                rounded-2xl border border-border
                bg-secondary/50 p-4
                transition
                group-hover:border-primary/20
                group-hover:bg-primary/3
              "
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BriefcaseBusiness size={15} />
                </div>

                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Typical Roles
                </span>
              </div>

              <div className="mt-3 space-y-2">
                {track.jobProfiles.slice(0, 2).map((role) => (
                  <div
                    key={role}
                    className="flex items-start gap-2 text-xs font-semibold leading-5"
                  >
                    <span className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {role}
                  </div>
                ))}
              </div>

              {track.jobProfiles.length > 2 && (
                <div className="mt-3 text-[10px] font-semibold text-muted-foreground">
                  +{track.jobProfiles.length - 2} more roles
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border p-4">
              <div className="text-xs text-muted-foreground">
                Role information will be added soon.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* footer */}
      <div
        className="
          flex items-center justify-between
          border-t border-border
          bg-secondary/20
          px-6 py-3.5
          sm:px-7 lg:px-8
        "
      >
        <div className="flex flex-wrap items-center gap-4 text-[10px] font-semibold text-muted-foreground">
          {track.duration && <span>{track.duration}</span>}

          {track.branches?.length > 0 && (
            <>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>
                {track.branches.length} {track.branches.length === 1 ? 'Branch' : 'Branches'}
              </span>
            </>
          )}
        </div>

        <a
          href={`/tracks/${track.id}`}
          className="
            inline-flex items-center gap-2
            text-xs font-bold text-primary
            transition
            group-hover:gap-3
          "
        >
          Explore Track
          <ArrowRight size={14} />
        </a>
      </div>
    </article>
  );
}

export default Learn;
