import { teamMembers } from '@/constants';

import TeamCard from './TeamCard';
const TeamSection = () => {
  return (
    <>
      <section className="relative w-full overflow-visible border-y border-[#173e57] bg-[#082B3E] py-20 lg:py-28">
        {/* =====================================================
          BACKGROUND
      ====================================================== */}

        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0, 176, 176, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 176, 176, 0.08) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* Background Glow */}

        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#00B0B0]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#E03531]/10 blur-3xl" />

        {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8">
          {/* =====================================================
            TOP META
        ====================================================== */}

          <div className="mb-5 hidden items-center justify-between font-mono text-[11px] uppercase tracking-widest text-[#687888] md:flex">
            <div className="flex items-center gap-2">
              <span className="text-white/60">SOFTWARE DEVELOPMENT</span>

              <span className="text-white/30">/</span>

              <span className="text-[#00B0B0]">ITI</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-0.5 w-2.5 bg-[#E03531]" />

              <span className="font-bold tracking-wider text-white/80">THE PEOPLE BEHIND SD</span>
            </div>

            <div className="flex items-center gap-2 text-white/50">
              <span>PEOPLE</span>

              <span className="text-white/30">/</span>

              <span>TECHNOLOGY</span>

              <span className="text-white/30">/</span>

              <span>IMPACT</span>

              <span className="h-0.5 w-2.5 bg-[#E03531]" />
            </div>
          </div>

          {/* =====================================================
            HEADER
        ====================================================== */}

          <div className="relative mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
            {/* Badge */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1d465c] bg-[#0D354B] px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-[#00B0B0]">
              <span className="h-0.5 w-2 bg-[#E03531]" />

              <span className="font-bold text-white">THE PEOPLE BEHIND SD</span>

              <span className="h-0.5 w-2 bg-[#E03531]" />
            </div>

            {/* Title */}

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Meet the SD Engineering Team
            </h2>

            {/* Description */}

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Engineers, instructors, and mentors shaping the next generation of software
              developers.
            </p>

            {/* Right Decorative Text */}

            <div className="absolute -right-28 top-0 hidden rotate-[-6deg] select-none text-right text-lg font-semibold leading-tight tracking-wide text-[#00B0B0] opacity-80 lg:block">
              Build
              <br />
              <span className="pl-2">Learn</span>
              <br />
              <span className="pl-4">Grow</span>
            </div>

            {/* Left Decorative Box */}

            <div className="absolute -left-28 top-0 hidden rounded-lg border border-[#1d465c] bg-[#0a2638]/70 p-2.5 text-left font-mono text-[10px] leading-tight text-white/60 lg:block">
              SAME
              <br />
              PEOPLE
              <br />
              BIGGER
              <br />
              IMPACT
              <span className="mt-1 block text-sm font-bold text-[#E03531]">+</span>
            </div>
          </div>

          {/* =====================================================
            TEAM GRID
        ====================================================== */}

          <div className="space-y-8">
            {/* ===================================================
              FIRST ROW - 4 MEMBERS
          ==================================================== */}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.slice(0, 4).map((person) => (
                <TeamCard key={person.id} person={person} />
              ))}
            </div>

            {/* ===================================================
              SECOND ROW - 3 MEMBERS
          ==================================================== */}

            <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.slice(4).map((person) => (
                <TeamCard key={person.id} person={person} />
              ))}
            </div>
          </div>

          {/* =====================================================
            DECORATIVE LABELS
        ====================================================== */}

          <div className="mt-14 hidden items-end justify-between font-mono text-[10px] uppercase leading-tight tracking-wider text-white/40 md:flex">
            {/* Left */}

            <div>
              <span className="mb-1 block font-bold text-[#E03531]">—</span>
              CODE
              <br />
              PEOPLE
              <br />
              IDEAS
              <br />
              FUTURE
            </div>

            {/* Right */}

            <div className="text-right">
              <span className="mb-1 block font-bold text-[#E03531]">//</span>
              SOFTWARE
              <br />
              DEVELOPMENT
              <br />
              DEPARTMENT
            </div>
          </div>

          {/* =====================================================
            TEAM STATS
        ====================================================== */}

          <div className="mt-8 rounded-2xl border border-[#1d465c] bg-[#0a2638] p-6 shadow-2xl md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-[#1d465c]">
              {/* ================= TEAM MEMBERS ================= */}

              <div className="flex items-center gap-5 border-b border-[#1d465c] py-5 md:border-b-0 md:pr-8 md:py-0">
                <span className="text-5xl font-black leading-none tracking-tight text-[#E03531] md:text-6xl">
                  7
                </span>

                <div>
                  <div className="font-mono text-xs font-black uppercase tracking-wider text-white md:text-sm">
                    TEAM MEMBERS
                  </div>

                  <div className="mt-1 text-xs leading-snug text-white/60">
                    Experienced Instructors & Mentors
                  </div>
                </div>
              </div>

              {/* ================= TECHNICAL TRACKS ================= */}

              <div className="flex items-center gap-5 border-b border-[#1d465c] py-5 md:border-b-0 md:px-8 md:py-0">
                <span className="text-5xl font-black leading-none tracking-tight text-[#00B0B0] md:text-6xl">
                  3
                </span>

                <div>
                  <div className="font-mono text-xs font-black uppercase tracking-wider text-white md:text-sm">
                    TECHNICAL TRACKS
                  </div>

                  <div className="mt-1 text-xs leading-snug text-white/60">
                    Full Stack • Mobile Cross • .NET
                  </div>
                </div>
              </div>

              {/* ================= DEPARTMENT ================= */}

              <div className="flex items-center gap-5 py-5 md:py-0 md:pl-8">
                <span className="text-5xl font-black leading-none tracking-tight text-[#E03531] md:text-6xl">
                  1
                </span>

                <div>
                  <div className="font-mono text-xs font-black uppercase tracking-wider text-white md:text-sm">
                    SOFTWARE DEVELOPMENT DEPARTMENT
                  </div>

                  <div className="mt-1 text-xs leading-snug text-white/60">
                    One Vision. Greater Impact.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
