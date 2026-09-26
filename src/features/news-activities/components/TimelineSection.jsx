import { timeline } from '../data';
const TimelineSection = () => (
  <section className="bg-sd-navy text-white py-14 mt-12 border-t border-b border-slate-800">
    <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-sd-red font-mono text-[11px] font-bold uppercase tracking-wider mb-1">
            // MILESTONES
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">SD Timeline</h2>
          <p className="text-xs text-slate-400 mt-1">A look at our recent journey.</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-sd-red text-white text-xs font-mono font-bold px-3 py-1 rounded-full">
            2026
          </span>
          <a
            className="text-xs font-mono text-slate-300 hover:text-white border border-slate-700 px-3 py-1.5 rounded-md"
            href="#"
          >
            View Full Timeline →
          </a>
        </div>
      </div>
      <div className="relative py-6">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-slate-700 -translate-y-1/2" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
          {timeline.map((item) => (
            <div
              key={item.month}
              className="bg-slate-900/80 md:bg-transparent p-4 md:p-0 rounded-lg border border-slate-800 md:border-none"
            >
              <div
                className={`hidden md:flex items-center justify-center w-5 h-5 rounded-full mx-auto mb-3 ${item.active ? 'bg-sd-red border-2 border-white' : 'bg-slate-800 border-2 border-slate-600'}`}
              >
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
              <div className="text-center">
                <span
                  className={`text-xs font-mono font-bold block ${item.active ? 'text-sd-red' : 'text-sd-teal'}`}
                >
                  {item.month}
                </span>
                <p
                  className={`text-xs font-semibold mt-1 ${item.active ? 'text-white' : 'text-slate-200'}`}
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center pt-8 border-t border-slate-800 text-[11px] font-mono tracking-widest text-slate-400 uppercase">
        SAME PEOPLE • BIGGER IMPACT
      </div>
    </div>
  </section>
);
export default TimelineSection;
