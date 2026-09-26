import { ArrowDownRight } from 'lucide-react';

function JourneyToOutcomes() {
  return (
    <div className="relative flex justify-center py-6 lg:py-8 bg-sd-bg-light">
      <div className="group flex flex-col items-center">
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          From Experience to Impact
        </span>

        <div
          className="
            mt-3
            flex h-14 w-14
            items-center justify-center
            rounded-full
            border border-border
            bg-card
            text-primary
            shadow-lg
            shadow-foreground/5
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:border-primary/30
            group-hover:bg-primary
            group-hover:text-primary-foreground
          "
        >
          <ArrowDownRight
            size={22}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
          />
        </div>

        <div className="mt-3 h-10 w-px bg-linear-to-b from-primary/50 to-transparent" />
      </div>
    </div>
  );
}

export default JourneyToOutcomes;
