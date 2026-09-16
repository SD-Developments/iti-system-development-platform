const TeamCard = ({ person }) => {
  const isDepartmentHead = person.accent === 'red';
  return (
    <>
      <article
        className={`group relative flex flex-col overflow-hidden rounded-xl bg-[#0D354B] shadow-2xl transition-all duration-300 hover:-translate-y-1.5 ${
          isDepartmentHead
            ? 'border-2 border-[#E03531]'
            : 'border border-[#1d465c] hover:border-[#00B0B0] hover:shadow-[0_15px_35px_rgba(0,176,176,0.15)]'
        }`}
      >
        {/* ===================================================
          CARD HEADER
      ==================================================== */}

        <div className="flex items-center justify-between border-b border-[#1d465c] bg-[#0a2638] px-4 py-2.5">
          {/* Number */}

          <div className="flex items-center gap-1.5 font-mono">
            <span className="text-sm font-extrabold text-white">{person.id}</span>

            <span className="text-xs text-white/40">/ 07</span>
          </div>

          {/* Keywords */}

          <div className="text-right font-mono text-[9px] font-semibold uppercase leading-tight tracking-wider text-white/70">
            {person.keywords.map((keyword) => (
              <div key={keyword}>{keyword}</div>
            ))}
          </div>
        </div>

        {/* ===================================================
          IMAGE
      ==================================================== */}

        <div className="relative aspect-4/5 overflow-hidden bg-[#0a2638]">
          <img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          {/* Image Gradient */}

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#0D354B] to-transparent" />
        </div>

        {/* ===================================================
          CONTENT
      ==================================================== */}

        <div className="flex flex-1 flex-col justify-between bg-[#0D354B] p-5">
          <div>
            {/* Name */}

            <h3
              className={`text-xl font-medium leading-tight tracking-tight text-white ${
                !isDepartmentHead ? 'transition-colors group-hover:text-[#00B0B0]' : ''
              }`}
            >
              {person.name}
            </h3>

            {/* =================================================
              ROLES
          ================================================== */}

            <div className="mt-3 flex flex-col items-start gap-2">
              {person.roles.map((role, index) => (
                <div
                  key={role}
                  className={`inline-flex max-w-full items-center gap-2 rounded-md px-3 py-1.5 font-mono text-[10px] font-black uppercase tracking-wider ${
                    isDepartmentHead
                      ? 'bg-[#E03531] text-white shadow-[0_4px_15px_rgba(224,53,49,0.25)]'
                      : index === 0
                        ? 'bg-[#00B0B0] text-[#082B3E]'
                        : 'border border-[#00B0B0] bg-[#0a2638] text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-[15px]">
                    {index === 0 ? person.icon : 'arrow_forward'}
                  </span>

                  <span>{role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
            SOCIAL LINKS
        ================================================== */}

          <div className="mt-5 flex items-center justify-between border-t border-[#1d465c] pt-3">
            {/* Label */}

            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
              CONNECT
            </span>

            {/* Social Buttons */}

            <div className="flex items-center gap-2">
              {/* ================= LINKEDIN ================= */}

              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${person.name} LinkedIn`}
                title="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1d465c] bg-[#0a2638] text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00B0B0] hover:bg-[#00B0B0] hover:text-[#082B3E]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[17px] w-[17px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.1 20.45H3.54V9H7.1v11.45z" />
                </svg>
              </a>

              {/* ================= GITHUB ================= */}

              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${person.name} GitHub`}
                title="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1d465c] bg-[#0a2638] text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00B0B0] hover:bg-[#00B0B0] hover:text-[#082B3E]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[17px] w-[17px] fill-current"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.16c-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.07.78 2.16v3.2c0 .31.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default TeamCard;
