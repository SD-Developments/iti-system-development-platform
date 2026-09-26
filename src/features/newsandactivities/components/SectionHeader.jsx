const SectionHeader = ({ eyebrow, title, description, action, href = '#' }) => (
  <div className="flex items-end justify-between mb-6 pb-2 border-b border-border">
    <div>
      <div className="flex items-center gap-2 text-sd-red font-mono text-[11px] font-bold uppercase tracking-wider mb-1">
        <span>// {eyebrow}</span>
      </div>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
    </div>
    {action && (
      <a
        href={href}
        className="text-xs font-bold text-primary hover:text-sd-red inline-flex items-center gap-1 transition-colors"
      >
        {action} <span className="text-sm">→</span>
      </a>
    )}
  </div>
);

export default SectionHeader;
