import SectionHeader from '@/components/SectionHeader';
import { workshops } from '../data';

const tone = {
  red: 'bg-red-100 text-sd-red',
  dark: 'bg-muted text-foreground',
  teal: 'bg-secondary2 text-sd-teal',
  green: 'bg-emerald-100 text-emerald-800',
};
const WorkshopsSection = () => (
  <section id="workshops">
    <SectionHeader
      variant="compact"
      eyebrow="LEARN"
      title="Learn. Build. Share."
      description="Technical sessions, workshops, and knowledge-sharing."
      action="View All Sessions"
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {workshops.map((item) => (
        <div
          key={item.title}
          className="bg-card rounded-xl p-5 border border-border shadow-sm hover:shadow-md transition flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span
                className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded ${tone[item.tone]}`}
              >
                {item.type}
              </span>
              <span className="text-[10px] font-mono text-muted-foreground">{item.date}</span>
            </div>
            <h3 className="text-sm font-bold text-foreground group-hover:text-sd-red transition-colors mb-2">
              {item.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">{item.description}</p>
          </div>
          <div className="pt-4 border-t border-border flex items-center justify-between text-[10px] font-mono text-muted-foreground">
            <span>⏱ {item.duration}</span>
            <span className="uppercase font-semibold">{item.level}</span>
            <span>↗</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default WorkshopsSection;
