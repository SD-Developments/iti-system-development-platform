import SectionHeader from '@/components/SectionHeader';
import { tracks } from '@/constants';

function Learn() {
  return (
    <>
      <section className="border-y border-border bg-secondary/35 py-20 lg:py-28">
        <div className="mx-auto w-[90%] max-w-7xl">
          <SectionHeader
            eyebrow="Learning Focus"
            title="What Each Track Is Built Around"
            description="Each track combines common software engineering foundations with a distinct technical specialization."
          />

          <div className="mt-10 space-y-5">
            {tracks.map((track, index) => (
              <TrackLearningRow key={track.id} track={track} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function TrackLearningRow({ track, index }) {
  const Icon = track.icon;

  return (
    <article className="grid gap-6 rounded-3xl border border-border bg-card p-7 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Icon size={22} />
          </div>

          <div>
            <span className="font-mono text-[10px] font-bold text-primary">0{index + 1}</span>

            <h3 className="mt-1 text-lg font-bold">{track.shortTitle}</h3>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="flex flex-wrap gap-2">
          {track.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-secondary px-3 py-1.5 font-mono text-[10px] font-semibold text-secondary-foreground"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {track.jobProfiles && (
        <div className="lg:col-span-3">
          <div className="text-xs text-muted-foreground">Typical roles</div>

          <div className="mt-2 text-sm font-semibold">
            {track.jobProfiles.slice(0, 2).join(' · ')}
          </div>
        </div>
      )}
    </article>
  );
}

export default Learn;
