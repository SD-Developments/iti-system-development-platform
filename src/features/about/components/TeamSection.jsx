import { teamMembers } from '@/constants';
import TeamCard from './TeamCard';

const TeamSection = () => {
  const topRow = teamMembers.slice(0, 4);
  const bottomRow = teamMembers.slice(4);

  return (
    <section id="faculty" className="w-full bg-background py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sd-red animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-wider text-sd-red uppercase">
              The People Behind SD
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Meet the SD Engineering Team
          </h2>

          <p className="max-w-2xl text-lg text-muted-foreground">
            Engineers, instructors, and mentors shaping the next generation of software developers
            across Egypt.
          </p>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topRow.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
          {bottomRow.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-sd-red">{teamMembers.length}</span>

            <div>
              <p className="font-bold text-foreground">Faculty & Instructors</p>
              <p className="text-sm text-muted-foreground">Experienced Instructors & Mentors</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-sd-teal">3</span>

            <div>
              <p className="font-bold text-foreground">Core Technical Tracks</p>
              <p className="text-sm text-muted-foreground">Full Stack • Mobile Cross • .NET Core</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-sd-navy dark:text-white">1</span>

            <div>
              <p className="font-bold text-foreground">Unified Department</p>
              <p className="text-sm text-muted-foreground">One Vision. Greater National Impact.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
