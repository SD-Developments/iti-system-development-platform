import { ArrowRight, Braces, Code2, GitCompareArrows } from 'lucide-react';
import Metric from '../../../components/Metric';

function Hero() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-secondary/40 py-14 lg:py-24">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/8 blur-3xl" />

        <div className="relative mx-auto w-[90%] max-w-7xl">
          <div className="mb-10 flex items-center gap-2 text-xs text-muted-foreground">
            <span>Home</span>
            <span>/</span>
            <span className="font-semibold text-primary">Tracks</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                <Braces size={14} />
                Technical Paths
              </div>

              <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Find Your Path in <span className="text-primary">System Development</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground lg:text-lg">
                Explore the current technical tracks, understand what each path focuses on, discover
                the technologies you will work with, and see where each track is available.
              </p>

              <div className="mt-8 flex flex-wrap gap-6 border-y border-border py-5">
                <Metric value="3" label="Current Smart Village Tracks" />
                <Metric value="PTP" label="Professional Training Program" />
                <Metric value="AI" label="Integrated Across All Tracks" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#track-explorer"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground"
                >
                  Explore Tracks
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#compare"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-bold text-card-foreground"
                >
                  <GitCompareArrows size={17} className="text-accent" />
                  Compare Tracks
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-2xl shadow-foreground/10">
                <img
                  src="/images/tracks/tracks-hero.jpg"
                  alt="System Development students collaborating"
                  className="aspect-4/3 w-full rounded-[20px] object-cover"
                />

                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/30 bg-card/90 p-4 shadow-lg backdrop-blur-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Code2 size={21} />
                    </div>

                    <div>
                      <div className="text-sm font-bold text-card-foreground">
                        Build through real engineering experiences
                      </div>

                      <div className="mt-1 text-xs text-muted-foreground">
                        Tracks · Projects · Technologies · Branches
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
