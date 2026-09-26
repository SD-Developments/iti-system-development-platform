import SectionHeader from '@/components/SectionHeader';
import { gallery } from '../data';
const GallerySection = () => (
  <section>
    <SectionHeader
      variant="compact"
      eyebrow="GALLERY"
      title="Inside SD"
      description="People, moments, and memories from the Software Development Department."
      action="View All Photos"
    />
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {gallery.map((item) => (
        <div
          key={item.title}
          className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900"
        >
          <img
            alt={item.title}
            src={item.image}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-2.5 left-2.5 text-white">
            <p className="text-xs font-bold">{item.title}</p>
            <span className="text-[10px] font-mono text-slate-300">{item.date}</span>
          </div>
          <span className="absolute bottom-2.5 right-2.5 text-white/70 text-xs">↗</span>
        </div>
      ))}
    </div>
  </section>
);
export default GallerySection;
