const StayConnectedCTA = () => (
  <section className="bg-sd-navy text-white py-14 relative overflow-hidden">
    <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
      <div>
        <div className="text-[11px] font-mono uppercase text-sd-red font-bold tracking-wider mb-2">
          / STAY CONNECTED
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight">Stay Connected With SD</h2>
        <p className="text-slate-400 text-sm mt-1">
          Don't miss what's happening inside the Software Development Department.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <a
          className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs px-5 py-3 rounded-lg"
          href="#projects"
        >
          Explore Projects
        </a>
        <a
          className="border border-slate-700 hover:border-slate-500 bg-slate-900/80 text-white font-bold text-xs px-5 py-3 rounded-lg"
          href="#events"
        >
          View Upcoming Events
        </a>
      </div>
      <div className="hidden lg:block text-right font-mono text-[10px] tracking-widest text-slate-500 leading-tight">
        BUILD
        <br />
        LEARN
        <br />
        GROW
      </div>
    </div>
  </section>
);
export default StayConnectedCTA;
