import { teamMembers } from '@/features/about/data';
import TeamCard from './TeamCard';

const TeamSection = () => {
  const topRow = teamMembers.slice(0, 4);
  const bottomRow = teamMembers.slice(4);

  return (
    <section id="faculty" className="w-full bg-background py-16 lg:py-24 transition-colors">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sd-red" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-sd-red">
              The People Behind SD
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Meet the SD Engineering Team
          </h2>

          <p className="max-w-2xl text-lg text-muted-foreground">
            Engineers, instructors, and mentors shaping the next generation of software developers
            across Egypt.
          </p>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topRow.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Bottom Row */}
        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bottomRow.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
