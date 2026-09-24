const ACCENTS = {
  red: {
    border: 'border-[#E03531]',
    badgeBg: 'bg-[#E03531]',
    glow: 'shadow-[0_0_15px_rgba(224,53,49,0.35)]',
  },
  teal: {
    border: 'border-[#00B0B0]',
    badgeBg: 'bg-[#00B0B0]',
    glow: 'shadow-[0_0_15px_rgba(0,176,176,0.35)]',
  },
  blue: {
    border: 'border-[#1D4ED8]',
    badgeBg: 'bg-[#1D4ED8]',
    glow: 'shadow-[0_0_15px_rgba(29,78,216,0.35)]',
  },
};

const TeamCard = ({ member }) => {
  const accent = ACCENTS[member.accent] ?? ACCENTS.teal;

  return (
    <div
      className={`
        rounded-2xl border border-border bg-card
        p-5 flex flex-col gap-4
        shadow-lg hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
        hover:border-sd-teal/40
      `}
    >
      {/* Top Meta */}
      <div className="flex items-center justify-between font-mono text-xs">
        <span className="font-bold text-foreground">{member.id}</span>

        <span className="text-muted-foreground text-[10px] uppercase tracking-wide">
          {member.keywords.join(' • ')}
        </span>
      </div>

      {/* Image */}
      <div className={`relative h-64 overflow-hidden rounded-xl border ${accent.border}`}>
        <img
          src={member.image}
          alt={`${member.name} - ${member.roles[0]}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <span
          className={`
            absolute bottom-3 right-3
            flex h-9 w-9 items-center justify-center
            rounded-full text-white
            ${accent.badgeBg} ${accent.glow}
          `}
        >
          <span className="material-symbols-outlined text-[18px]">{member.icon}</span>
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold text-foreground">{member.name}</h3>

        <div className="flex flex-wrap gap-2">
          {member.roles.map((role) => (
            <span
              key={role}
              className={`
                rounded-lg px-3 py-1.5
                font-mono text-[11px] font-bold uppercase tracking-wider
                text-white ${accent.badgeBg} ${accent.glow}
              `}
            >
              {role}
            </span>
          ))}
        </div>

        {member.quote && (
          <p className="border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
            “{member.quote}”
          </p>
        )}

        {/* Links */}
        <div className="flex items-center gap-3 border-t border-border pt-3">
          {member.linkedin && (
            <a
              href={member.linkedin}
              title="LinkedIn"
              className="text-muted-foreground transition hover:text-sd-teal"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
          )}

          {member.github && (
            <a
              href={member.github}
              title="GitHub"
              className="text-muted-foreground transition hover:text-sd-red"
            >
              <span className="material-symbols-outlined">code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
