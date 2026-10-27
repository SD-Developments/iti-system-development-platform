import { teamMembers } from '../data';

function AboutStatus() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 border-t border-border pt-8 md:grid-cols-3">
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
          <span className="text-4xl font-black text-[#6B7280] dark:text-[#9CA3AF]">1</span>

          <div>
            <p className="font-bold text-foreground">Unified Department</p>
            <p className="text-sm text-muted-foreground">One Vision. Greater National Impact.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutStatus;
