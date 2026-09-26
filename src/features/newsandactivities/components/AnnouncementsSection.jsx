import SectionHeader from './SectionHeader';
import { announcements } from '../data';
const AnnouncementsSection = () => (
  <section>
    <SectionHeader
      eyebrow="ANNOUNCEMENTS"
      title="Announcements"
      description="Important updates from the department."
      action="View All"
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {announcements.map((item) => (
        <div
          key={item.title}
          className="bg-card rounded-xl border border-border p-4 flex items-center justify-between shadow-sm hover:border-sd-red/50 transition group"
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.tone === 'red' ? 'bg-red-50 text-sd-red' : 'bg-secondary2 text-sd-teal'}`}
            >
              ▤
            </div>
            <div>
              <span
                className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${item.tone === 'red' ? 'bg-sd-red text-white' : 'bg-sd-teal text-white'}`}
              >
                {item.status}
              </span>
              <h3 className="text-sm font-bold text-foreground mt-1 group-hover:text-sd-red transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground">{item.detail}</p>
            </div>
          </div>
          <span className="text-muted-foreground group-hover:text-sd-red">↗</span>
        </div>
      ))}
    </div>
  </section>
);
export default AnnouncementsSection;
