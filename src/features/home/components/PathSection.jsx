import SectionHeader from '@/components/SectionHeader';
import { ArrowRight, BookOpen, MapPin, Layers3 } from 'lucide-react';
import { programs, tracks } from '@/constants';

function PathSection() {
  return (
    <>
      <section className="py-20 lg:py-28 bg-sd-bg-light">
        <div className="mx-auto w-[90%] max-w-7xl">
          <SectionHeader
            eyebrow="Programs & Tracks"
            title="Choose Your Path"
            description="Start with the program that fits your journey, then explore the technical track and branch available to you."
            action="Explore All Programs"
          />

          {/* Programs */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.code}
                className={`group relative overflow-hidden rounded-3xl border p-8 transition duration-300 lg:p-10 ${
                  program.featured
                    ? 'border-sd-navy bg-sd-navy text-sd-white'
                    : 'border-border bg-card text-card-foreground'
                }`}
              >
                <div
                  className={`absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full ${
                    program.featured ? 'bg-sd-teal/10' : 'bg-primary/10'
                  }`}
                />

                <div className="relative">
                  <div className="mb-8 flex items-start justify-between gap-5">
                    <div>
                      <span
                        className={`font-mono text-xs font-bold uppercase tracking-[0.18em] ${
                          program.featured ? 'text-sd-teal' : 'text-primary'
                        }`}
                      >
                        {program.code}
                      </span>

                      <div
                        className={`mt-2 text-sm font-semibold ${
                          program.featured ? 'text-sd-white/60' : 'text-muted-foreground'
                        }`}
                      >
                        {program.duration}
                      </div>
                    </div>

                    <div
                      className={`rounded-2xl p-3 shadowbox ${
                        program.featured
                          ? 'bg-sd-white/10 text-sd-teal'
                          : 'bg-secondary text-primary'
                      }`}
                    >
                      <BookOpen size={24} />
                    </div>
                  </div>

                  <h3 className="max-w-xl text-3xl font-extrabold tracking-tight lg:text-4xl">
                    {program.title}
                  </h3>

                  <p
                    className={`mt-5 max-w-xl leading-7 ${
                      program.featured ? 'text-sd-white/65' : 'text-muted-foreground'
                    }`}
                  >
                    {program.description}
                  </p>

                  <div
                    className={`my-8 grid grid-cols-2 gap-3 border-y py-5 ${
                      program.featured ? 'border-sd-white/10' : 'border-border'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <Layers3
                        size={17}
                        className={program.featured ? 'text-sd-teal' : 'text-accent'}
                      />
                      {program.tracks}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <MapPin
                        size={17}
                        className={program.featured ? 'text-sd-teal' : 'text-accent'}
                      />
                      {program.branches}
                    </div>
                  </div>

                  <a
                    href={program.href}
                    className={`inline-flex items-center gap-2 text-sm font-bold ${
                      program.featured ? 'text-sd-teal' : 'text-primary'
                    }`}
                  >
                    Explore {program.code}
                    <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Tracks */}
          <div className="mt-16">
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Technical Paths
                </span>

                <h3 className="mt-2 text-2xl font-extrabold tracking-tight">
                  Explore Featured Tracks
                </h3>
              </div>

              <a
                href="/tracks"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                View All Tracks
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {tracks.map((track) => (
                <article
                  key={track.title}
                  className="group rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h4 className="text-lg font-bold text-card-foreground">{track.title}</h4>

                      <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
                        {track.description}
                      </p>
                    </div>

                    <ArrowRight
                      size={18}
                      className="shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary"
                    />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {track.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-secondary px-3 py-1.5 font-mono text-[11px] font-semibold text-secondary-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <BookOpen size={14} className="text-accent" />
                      {track.program}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-accent" />
                      {track.branches}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PathSection;
