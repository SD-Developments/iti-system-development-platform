import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { studentLife } from '../data';

const LifeCard = ({ item }) => {
  const isLarge = item.size === 'large';
  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-slate-900 shadow-sm md:col-span-4 ${isLarge ? 'min-h-72 md:row-span-2' : 'min-h-44'}`}
    >
      <img
        alt={item.title}
        src={item.image}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-white">
        <div className="min-w-0">
          <h3 className={isLarge ? 'text-lg font-bold' : 'text-base font-bold'}>{item.title}</h3>
          {item.description && <p className="text-sm text-slate-300">{item.description}</p>}
        </div>
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 shrink-0 text-white/70 transition-colors group-hover:text-white"
        />
      </div>
    </div>
  );
};

const StudentLifeSection = () => (
  <section id="community" className="scroll-mt-40">
    <SectionHeader
      variant="compact"
      eyebrow="COMMUNITY"
      title="Student Life at SD"
      description="Beyond the classroom — building, collaborating, competing, and creating."
      action="View Gallery"
    />
    <div className="grid grid-cols-1 gap-4 md:h-[440px] md:grid-cols-12 md:grid-rows-2">
      {studentLife.map((item) => (
        <LifeCard key={item.title} item={item} />
      ))}
    </div>
  </section>
);
export default StudentLifeSection;
