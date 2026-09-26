import SectionHeader from './SectionHeader';
import { latestNews } from '../data';

const toneClasses = {
  dark: 'bg-slate-900',
  teal: 'bg-sd-teal',
  blue: 'bg-blue-700',
  red: 'bg-sd-red',
  orange: 'bg-orange-600',
};

const LatestSection = () => (
  <section id="latest">
    <SectionHeader
      eyebrow="LATEST"
      title="Latest from SD"
      description="Recent news, events, and activities from our community."
      action="View All"
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
      {latestNews.map((item) => (
        <article
          key={item.title}
          className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition group flex flex-col"
        >
          <div className="aspect-[16/10] overflow-hidden bg-muted">
            <img
              alt={item.title}
              src={item.image}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`text-[9px] font-mono font-bold uppercase ${toneClasses[item.tone]} text-white px-1.5 py-0.5 rounded`}
              >
                {item.type}
              </span>
              <span className="text-[10px] font-mono text-muted-foreground">{item.date}</span>
            </div>
            <h3 className="text-sm font-bold text-foreground group-hover:text-sd-red transition-colors line-clamp-2 leading-snug mb-1.5">
              {item.title}
            </h3>
            <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-grow">
              {item.description}
            </p>
            <div className="flex justify-end pt-2 border-t border-border text-muted-foreground group-hover:text-sd-red">
              ↗
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
export default LatestSection;
