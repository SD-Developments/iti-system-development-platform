import { BadgeCheck, Gift, TrendingUp, Users } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { achievements } from '../data';

const icons = { gift: Gift, group: Users, verified: BadgeCheck, trend: TrendingUp };

const numberTone = { red: 'text-sd-red', teal: 'text-sd-teal' };
const iconTone = { red: 'bg-sd-red/10 text-sd-red', teal: 'bg-secondary2 text-sd-teal' };

const AchievementsSection = () => (
  <section id="achievements" className="scroll-mt-40">
    <SectionHeader
      variant="compact"
      eyebrow="ACHIEVEMENTS"
      title="SD Achievements"
      description="Celebrating the success of our students."
      action="View All Achievements"
    />
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {achievements.map((item) => {
        const Icon = icons[item.icon];
        return (
          <article
            key={item.number}
            className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <span
                className={`${numberTone[item.tone] ?? 'text-foreground'} font-mono text-4xl font-extrabold leading-none tracking-tighter`}
              >
                {item.number}
              </span>
              <span
                className={`${iconTone[item.tone] ?? iconTone.teal} flex size-10 items-center justify-center rounded-full`}
              >
                <Icon aria-hidden="true" className="size-5" />
              </span>
            </div>
            <div className="mb-1 font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              {item.label}
            </div>
            <p className="text-sm font-bold leading-snug text-foreground">{item.text}</p>
          </article>
        );
      })}
    </div>
  </section>
);
export default AchievementsSection;
