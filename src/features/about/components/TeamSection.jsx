import { teamMembers } from '@/constants';
import TeamCard from './TeamCard';

const TeamSection = () => {
  const topRow = teamMembers.slice(0, 4);
  const bottomRow = teamMembers.slice(4);

  return (
    <section className="w-full bg-[#082B3E] py-20 text-white" id="faculty">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E03531] text-white font-mono text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            THE PEOPLE BEHIND SD
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Meet the SD Engineering Team
          </h2>
          <p className="text-lg text-[#e0e9ee] max-w-2xl">
            Engineers, instructors, and mentors shaping the next generation of software developers
            across Egypt.
          </p>
        </div>

        {/* Top Row: 4 Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topRow.map((member) => (
            <TeamCard key={member.id} member={member} total={teamMembers.length} />
          ))}
        </div>

        {/* Bottom Row: remaining Members, centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
          {bottomRow.map((member) => (
            <TeamCard key={member.id} member={member} total={teamMembers.length} />
          ))}
        </div>

        {/* Bottom Summary Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/15">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-[#E03531]">{teamMembers.length}</span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white">Faculty &amp; Instructors</span>
              <span className="text-xs text-[#e0e9ee]">Experienced Instructors &amp; Mentors</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-[#00B0B0]">3</span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white">Core Technical Tracks</span>
              <span className="text-xs text-[#e0e9ee]">Full Stack • Mobile Cross • .NET Core</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-white">1</span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white">Unified Department</span>
              <span className="text-xs text-[#e0e9ee]">One Vision. Greater National Impact.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
