import SectionHeader from '@/components/SectionHeader';
import { studentLife } from '../data';

const LifeCard = ({ item }) => (
  <div
    className={`relative rounded-xl overflow-hidden group shadow-sm bg-slate-900 min-h-[160px] ${item.size === 'large' ? 'md:col-span-4 md:row-span-2 md:min-h-full' : ''}`}
  >
    <img
      alt={item.title}
      src={item.image}
      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
    <div className="absolute bottom-3 left-3 right-3 text-white flex items-end justify-between">
      <div>
        <h3 className={item.size === 'large' ? 'text-base font-bold' : 'text-sm font-bold'}>
          {item.title}
        </h3>
        {item.description && <p className="text-[11px] text-slate-300">{item.description}</p>}
      </div>
      <span className="text-xs">↗</span>
    </div>
  </div>
);

const StudentLifeSection = () => (
  <section id="community">
    <SectionHeader
      variant="compact"
      eyebrow="COMMUNITY"
      title="Student Life at SD"
      description="Beyond the classroom — building, collaborating, competing, and creating."
      action="View Gallery"
    />
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:h-[340px]">
      <LifeCard item={studentLife[0]} />
      <div className="md:col-span-4 grid grid-rows-2 gap-4">
        {studentLife.slice(1, 3).map((item) => (
          <LifeCard key={item.title} item={item} />
        ))}
      </div>
      <div className="md:col-span-4 grid grid-rows-2 gap-4">
        {studentLife.slice(3).map((item) => (
          <LifeCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  </section>
);
export default StudentLifeSection;
