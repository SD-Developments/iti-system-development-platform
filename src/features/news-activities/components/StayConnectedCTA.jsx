const StayConnectedCTA = () => (
  <section className="py-12 sm:py-16">
    <div className="mx-auto max-w-335 px-4 sm:px-6 lg:px-8">
      <div className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-2xl bg-sd-navy p-8 text-white shadow-lg sm:p-10 md:flex-row md:items-center">
        <div>
          <div className="mb-2 font-mono text-[11px] font-bold uppercase tracking-wider text-sd-red">
            / STAY CONNECTED
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Stay Connected With SD
          </h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
            Don't miss what's happening inside the Software Development Department.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            href="#projects"
          >
            Explore Projects
          </a>
          <a
            className="rounded-full border border-slate-600 bg-slate-900/80 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            href="#events"
          >
            View Upcoming Events
          </a>
        </div>
        <div className="hidden text-right font-mono text-[10px] leading-tight tracking-widest text-slate-500 lg:block">
          BUILD
          <br />
          LEARN
          <br />
          GROW
        </div>
      </div>
    </div>
  </section>
);
export default StayConnectedCTA;
