import { journeyStages } from '@/features/projects/data';
import JourneyCard from './JourneyCard';

const EngineeringJourney = () => {
  return (
    <>
      <section
        id="engineering-journey"
        className="relative overflow-hidden border-b border-border bg-card py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-sd-bg-light px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-accent">
              RIGOROUS LIFECYCLE
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              The SD Engineering Journey
            </h2>

            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Not toy weekend tutorial apps. SD capstones represent 9 months of systematic
              engineering rigor, continuous benchmarking, and live defense before external principal
              architects.
            </p>
          </div>

          {/* Timeline */}

          <div className="relative">
            <div className="absolute left-8 right-8 top-7 hidden h-0.5 bg-linear-to-r from-accent via-primary to-emerald-500 opacity-40 md:block" />

            <div className="relative z-10 grid grid-cols-1 gap-3 md:grid-cols-7">
              {journeyStages.map((stage) => (
                <JourneyCard key={stage.number} stage={stage} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EngineeringJourney;
