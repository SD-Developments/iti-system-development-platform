const JourneyCard = ({ stage }) => {
  const activeStyles = stage.active
    ? 'border-2 border-primary bg-sd-navy text-primary-foreground shadow-xl md:-translate-y-1'
    : 'border border-border bg-sd-bg-light text-foreground hover:border-accent';

  const numberStyles = stage.active
    ? 'bg-primary text-white'
    : stage.color === 'green'
      ? 'bg-emerald-600 text-white'
      : 'bg-accent text-white';

  return (
    <div
      className={`relative flex flex-col justify-between rounded-xl p-5 transition-all duration-200 ${activeStyles}`}
    >
      <div>
        <div className="mb-3 flex items-center justify-between">
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full font-mono text-[11px] font-bold ${numberStyles}`}
          >
            {stage.number}
          </span>

          <span
            className={`font-mono text-[11px] font-bold ${
              stage.active
                ? 'text-primary'
                : stage.color === 'green'
                  ? 'text-emerald-600'
                  : 'text-accent'
            }`}
          >
            STEP {stage.number.padStart(2, '0')}
          </span>
        </div>

        <h3 className={`mb-2 text-sm font-bold ${stage.active ? 'text-white' : 'text-navy'}`}>
          {stage.title}
        </h3>

        <p
          className={`text-xs leading-snug ${
            stage.active ? 'text-slate-300' : 'text-muted-foreground'
          }`}
        >
          {stage.description}
        </p>
      </div>

      <div
        className={`mt-4 border-t pt-3 font-mono text-[10px] font-medium ${
          stage.active ? 'border-white/10 text-accent' : 'border-border text-muted-foreground'
        }`}
      >
        {stage.output}
      </div>
    </div>
  );
};

export default JourneyCard;
