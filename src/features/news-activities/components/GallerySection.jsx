import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { gallery } from '../data';

// Column spans that keep the grid without orphan tiles on mobile (2 cols) and tablet (6 cols).
const spans = [
  'col-span-2 sm:col-span-2 lg:col-span-1',
  'sm:col-span-2 lg:col-span-1',
  'sm:col-span-2 lg:col-span-1',
  'sm:col-span-3 lg:col-span-1',
  'sm:col-span-3 lg:col-span-1',
];

const GallerySection = () => (
  <section id="gallery" className="scroll-mt-40">
    <SectionHeader
      variant="compact"
      eyebrow="GALLERY"
      title="Inside SD"
      description="People, moments, and memories from the Software Development Department."
      action="View All Photos"
    />
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-6 lg:grid-cols-5">
      {gallery.map((item, index) => (
        <div
          key={item.title}
          className={`${spans[index] ?? ''} group relative h-44 overflow-hidden rounded-xl bg-slate-900 shadow-sm sm:h-52 lg:h-48`}
        >
          <img
            alt={item.title}
            src={item.image}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2 text-white">
            <div className="min-w-0">
              <p className="truncate text-sm font-bold">{item.title}</p>
              <span className="font-mono text-xs text-slate-300">{item.date}</span>
            </div>
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 shrink-0 text-white/70 transition-colors group-hover:text-white"
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default GallerySection;
