function JourneyItem({ number, icon, title, text }) {
  return (
    <div className="bg-card p-7 lg:p-8">
      <div className="flex items-center justify-between">
        <div className="text-accent">{icon}</div>

        <span className="font-mono text-[10px] font-bold text-muted-foreground">{number}</span>
      </div>

      <h4 className="mt-7 text-lg font-bold text-card-foreground">{title}</h4>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

export default JourneyItem;
