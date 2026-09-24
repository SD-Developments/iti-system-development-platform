const ACCENTS = {
  red: {
    border: 'border-[#E03531]',
    badgeBg: 'bg-[#E03531]',
    glow: 'shadow-[0_0_15px_rgba(224,53,49,0.5)]',
  },
  teal: {
    border: 'border-[#00B0B0]',
    badgeBg: 'bg-[#00B0B0]',
    glow: 'shadow-[0_0_15px_rgba(0,176,176,0.5)]',
  },
  blue: {
    border: 'border-[#1D4ED8]',
    badgeBg: 'bg-[#1D4ED8]',
    glow: 'shadow-[0_0_15px_rgba(29,78,216,0.6)]',
  },
};
const TeamCard = ({ member }) => {
  const accent = ACCENTS[member.accent] ?? ACCENTS.teal;

  return (
    <div
      className={`p-5 rounded-2xl bg-white/10 backdrop-blur-md flex flex-col justify-between gap-4 border-t-4 ${accent.border} hover:bg-white/15 transition-all`}
    >
      <div className="flex items-center justify-between font-mono text-xs text-[#e0e9ee]">
        <span className="text-white font-bold">{member.id}</span>
        <span>{member.keywords.join(' • ')}</span>
      </div>

      <div className="rounded-xl overflow-hidden bg-slate-800 h-64 relative">
        <img
          alt={`${member.name} - ${member.roles[0]}`}
          className="w-full h-full object-cover"
          src={member.image}
        />
        <span
          className={`absolute bottom-2 right-2 w-8 h-8 rounded-full ${accent.badgeBg} text-white flex items-center justify-center ${accent.glow}`}
        >
          <span className="material-symbols-outlined text-[16px]">{member.icon}</span>
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-white">{member.name}</h3>

        <div className="flex flex-wrap gap-1.5">
          {member.roles.map((role) => (
            <span
              key={role}
              className={`self-start font-mono text-xs px-3 py-1.5 rounded-lg ${accent.badgeBg} text-white font-black tracking-wider uppercase ${accent.glow}`}
            >
              {role}
            </span>
          ))}
        </div>

        {member.quote && <p className="text-xs text-[#e0e9ee] pt-1">“{member.quote}”</p>}

        <div className="flex items-center gap-2 pt-2 border-t border-white/10">
          {member.linkedin && (
            <a
              className="text-white/70 hover:text-white transition-colors"
              href={member.linkedin}
              title="LinkedIn"
            >
              <span className="material-symbols-outlined text-[18px]">share</span>
            </a>
          )}
          {member.github && (
            <a
              className="text-white/70 hover:text-white transition-colors"
              href={member.github}
              title="GitHub"
            >
              <span className="material-symbols-outlined text-[18px]">code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
