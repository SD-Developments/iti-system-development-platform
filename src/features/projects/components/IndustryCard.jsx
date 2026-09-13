const IndustryCard = ({ feature }) => {
  const iconColor =
    feature.color === 'red'
      ? 'bg-primary/10 text-primary'
      : feature.color === 'teal'
        ? 'bg-accent/10 text-accent'
        : feature.color === 'green'
          ? 'bg-emerald-50 text-emerald-600'
          : 'bg-muted text-primary';

  return (
    <div className="rounded-xl border border-border bg-sd-bg-light p-6 shadow-sm transition-transform hover:-translate-y-1">
      <div
        className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg font-mono font-bold ${iconColor}`}
      >
        {feature.number}
      </div>

      <h3 className="mb-2 text-base font-bold text-primary">{feature.title}</h3>

      <p className="text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
    </div>
  );
};

export default IndustryCard;
