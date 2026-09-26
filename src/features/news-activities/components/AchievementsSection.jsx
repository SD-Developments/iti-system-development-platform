import SectionHeader from '@/components/SectionHeader';
import { achievements } from '../data';

const icons = { gift: '🎁', group: '♧', verified: '✓', trend: '↗' };
const AchievementsSection = () => (
  <section id="achievements">
    <SectionHeader
      variant="compact"
      eyebrow="ACHIEVEMENTS"
      title="SD Achievements"
      description="Celebrating the success of our students."
      action="View All Achievements"
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {achievements.map((item) => (
        <div
          key={item.number}
          className="bg-card rounded-xl p-5 border border-border shadow-sm flex items-center gap-4"
        >
          <span
            className={`text-4xl font-extrabold font-mono tracking-tighter ${item.tone === 'red' ? 'text-sd-red' : item.tone === 'teal' ? 'text-sd-teal' : 'text-foreground'}`}
          >
            {item.number}
          </span>
          <div className="leading-tight">
            <div className="text-[10px] font-mono uppercase font-bold text-muted-foreground">
              {item.label}
            </div>
            <p className="text-xs font-bold text-foreground mt-0.5">{item.text}</p>
          </div>
          <div
            className={`ml-auto text-xl ${item.tone === 'red' ? 'text-sd-red' : 'text-sd-teal'}`}
          >
            {icons[item.icon]}
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default AchievementsSection;
