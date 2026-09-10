function JourneyRow({ number, label, value, highlight = false }) {
  return (
    <div
      className={`flex items-center gap-5 rounded-2xl border p-4 ${
        highlight ? 'border-accent/30 bg-accent/5' : 'border-border bg-card'
      }`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-bold ${
          highlight ? 'bg-accent text-accent-foreground' : 'bg-secondary text-secondary-foreground'
        }`}
      >
        {number}
      </div>

      <div>
        <span className="block text-xs text-muted-foreground">{label}</span>

        <strong
          className={`mt-0.5 block text-sm ${highlight ? 'text-accent' : 'text-card-foreground'}`}
        >
          {value}
        </strong>
      </div>
    </div>
  );
}

export default JourneyRow;
