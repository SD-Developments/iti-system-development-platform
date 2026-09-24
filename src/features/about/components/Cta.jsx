import img3 from '../../../assets/images/about_hero_section.png';
const Cta = () => {
  return (
    <>
      <section className="relative w-full bg-[#082B3E] py-24 overflow-hidden text-white">
        {/* Full-width background image with dark Navy overlay */}
        <div
          className="absolute inset-0 opacity-70 bg-cover bg-center"
          style={{
            backgroundImage: `url(${img3})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#082B3E]/80 via-[#082B3E]/95 to-[#082B3E]"></div>
        <div className="relative max-w-[1280px] mx-auto px-6 text-center flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00B0B0] font-mono text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#00B0B0] animate-pulse"></span>
            JOIN THE HERITAGE
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
              THIS IS SD.
            </h2>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#00B0B0] tracking-wide">
              Learn. Build. Engineer.
            </span>
          </div>
          <p className="text-base sm:text-lg text-[#e0e9ee] max-w-2xl leading-relaxed">
            Whether you are preparing to launch your engineering career through our intensive
            diploma or seeking top-tier software engineers for your technology team, the Software
            Development Department welcomes you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {/* Red button with subtle glow */}
            <a
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#E03531] text-white font-bold text-sm hover:bg-[#c92824] transition-all shadow-[0_0_25px_rgba(224,53,49,0.5)] group"
              href="#tracks"
            >
              <span>Explore Academic Tracks</span>
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
            {/* Glass border button */}
            <a
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-sm hover:bg-white/20 transition-all shadow-md"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px] text-[#00B0B0]">code</span>
              <span>View Student Projects</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
