import { stitchImages } from '../../../constants';
const Icon = ({ children }) => (
  <svg className="w-4 h-4 text-sd-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    {children}
  </svg>
);
const FeaturedSection = () => (
  <section className="bg-card rounded-2xl border border-border shadow-sm p-5 sm:p-7" id="featured">
    <div className="flex items-center gap-2 text-sd-red font-mono text-[11px] font-bold uppercase tracking-wider mb-4">
      <span>// FEATURED</span>
    </div>
    <div className="grid grid-cols-12 gap-8 items-center">
      <div className="col-span-12 lg:col-span-7">
        <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-900 border border-border">
          <img
            alt="SD Technical Day 2026 Stage"
            className="w-full h-full object-cover"
            src={stitchImages.featured}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 text-white font-mono text-xs uppercase tracking-widest bg-black/60 px-3 py-1 rounded">
            SMART VILLAGE AUDITORIUM
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="bg-sd-red text-white text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded">
            EVENT
          </span>
          <span className="text-xs font-mono text-muted-foreground font-semibold">
            SEP 12, 2026
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-snug mb-3">
          SD Technical Day 2026
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Students and instructors come together for a day of technical talks, project showcases,
          and engineering discussions.
        </p>
        <div className="flex flex-wrap items-center gap-5 text-xs text-muted-foreground font-medium mb-6">
          <div className="flex items-center gap-1.5">
            <Icon>
              <path
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </Icon>
            <span>Smart Village, Cairo</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Icon>
              <path
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </Icon>
            <span>500+ Attendees</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="bg-sd-red hover:bg-sd-redHover text-white px-5 py-2.5 rounded-md font-semibold text-xs inline-flex items-center gap-2"
            href="#"
          >
            Read Full Story →
          </a>
          <a
            className="border border-border hover:border-slate-400 bg-muted px-3.5 py-2 rounded-md flex items-center gap-2.5"
            href="#"
          >
            <span className="w-5 h-5 rounded-full bg-sd-red text-white flex items-center justify-center text-[10px]">
              ▶
            </span>
            <div className="leading-none">
              <div className="text-[11px] font-bold text-foreground">Watch Highlights</div>
              <div className="text-[9px] font-mono text-muted-foreground">02:15 min</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);
export default FeaturedSection;
