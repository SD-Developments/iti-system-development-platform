const ImpactItem = ({ number, title, description, color }) => {
  const numberColor =
    color === 'teal' ? 'text-accent' : color === 'red' ? 'text-primary' : 'text-primary';

  return (
    <div className="px-0 pt-4 md:px-6 md:pt-0 first:md:pl-0">
      <div
        className={`font-mono text-4xl font-extrabold tracking-tight sm:text-5xl ${numberColor}`}
      >
        {number}
      </div>

      <div className="mt-2 text-sm font-bold text-foreground">{title}</div>

      <p className="mt-1 text-xs text-muted-foreground">{description}</p>
    </div>
  );
};

export default ImpactItem;
