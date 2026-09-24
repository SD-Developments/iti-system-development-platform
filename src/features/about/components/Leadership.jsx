const Leadership = () => {
  return (
    <>
      <section className="w-full bg-white py-20 border-b border-[#e2eaee]">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-2xl">
              <span className="font-mono text-xs font-bold text-[#E03531] uppercase tracking-widest">
                // ALUMNI DESTINATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082B3E] tracking-tight">
                Where SD Graduates Work
              </h2>
              <p className="text-lg text-[#687888]">
                Our alumni engineer mission-critical systems at the world's most demanding
                technology leaders and multinationals.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00B0B0]/10 text-[#007f7f] border border-[#00B0B0]/30 font-mono text-xs font-bold shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#00B0B0]"></span>
              96%+ Placement Rate within 90 Days of Graduation
            </div>
          </div>
          {/* 12 Multinationals / Top Tech Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="p-6 rounded-2xl bg-[#F6F9FA] border border-[#e2eaee] flex flex-col items-center justify-center text-center group hover:bg-white hover:border-[#E03531] hover:shadow-md transition-all h-28">
              <span className="font-black text-xl text-[#687888] group-hover:text-[#082B3E] tracking-wider transition-colors">
                IBM
              </span>
              <span className="font-mono text-[10px] text-[#687888] mt-1">Enterprise Cloud</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#F6F9FA] border border-[#e2eaee] flex flex-col items-center justify-center text-center group hover:bg-white hover:border-[#00B0B0] hover:shadow-md transition-all h-28">
              <span className="font-black text-xl text-[#687888] group-hover:text-[#082B3E] tracking-wider transition-colors">
                Deloitte
              </span>
              <span className="font-mono text-[10px] text-[#687888] mt-1">Digital Consulting</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#F6F9FA] border border-[#e2eaee] flex flex-col items-center justify-center text-center group hover:bg-white hover:border-[#E03531] hover:shadow-md transition-all h-28">
              <span className="font-black text-xl text-[#687888] group-hover:text-[#E03531] tracking-wider transition-colors">
                Vodafone
              </span>
              <span className="font-mono text-[10px] text-[#687888] mt-1">Telecom &amp; Cloud</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#F6F9FA] border border-[#e2eaee] flex flex-col items-center justify-center text-center group hover:bg-white hover:border-[#E03531] hover:shadow-md transition-all h-28">
              <span className="font-black text-xl text-[#687888] group-hover:text-[#E03531] tracking-wider transition-colors">
                _VOIS
              </span>
              <span className="font-mono text-[10px] text-[#687888] mt-1">
                Intelligent Solutions
              </span>
            </div>
            <div className="p-6 rounded-2xl bg-[#F6F9FA] border border-[#e2eaee] flex flex-col items-center justify-center text-center group hover:bg-white hover:border-[#00B0B0] hover:shadow-md transition-all h-28">
              <span className="font-black text-xl text-[#687888] group-hover:text-[#00B0B0] tracking-wider transition-colors">
                Fawry
              </span>
              <span className="font-mono text-[10px] text-[#687888] mt-1">FinTech Backbone</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#F6F9FA] border border-[#e2eaee] flex flex-col items-center justify-center text-center group hover:bg-white hover:border-[#082B3E] hover:shadow-md transition-all h-28">
              <span className="font-black text-lg text-[#687888] group-hover:text-[#082B3E] tracking-tight transition-colors">
                LinkDev
              </span>
              <span className="font-mono text-[10px] text-[#687888] mt-1">Digital Solutions</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#F6F9FA] border border-[#e2eaee] flex flex-col items-center justify-center text-center group hover:bg-white hover:border-[#00B0B0] hover:shadow-md transition-all h-28">
              <span className="font-black text-xl text-[#687888] group-hover:text-[#082B3E] tracking-wider transition-colors">
                Valeo
              </span>
              <span className="font-mono text-[10px] text-[#687888] mt-1">Autonomous Systems</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#F6F9FA] border border-[#e2eaee] flex flex-col items-center justify-center text-center group hover:bg-white hover:border-[#082B3E] hover:shadow-md transition-all h-28">
              <span className="font-black text-xl text-[#687888] group-hover:text-[#082B3E] tracking-wider transition-colors">
                noon
              </span>
              <span className="font-mono text-[10px] text-[#687888] mt-1">E-Commerce Scale</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#F6F9FA] border border-[#e2eaee] flex flex-col items-center justify-center text-center group hover:bg-white hover:border-[#E03531] hover:shadow-md transition-all h-28">
              <span className="font-black text-lg text-[#687888] group-hover:text-[#082B3E] tracking-tight transition-colors">
                Banque Misr
              </span>
              <span className="font-mono text-[10px] text-[#687888] mt-1">Digital Banking</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#F6F9FA] border border-[#e2eaee] flex flex-col items-center justify-center text-center group hover:bg-white hover:border-[#00B0B0] hover:shadow-md transition-all h-28">
              <span className="font-black text-lg text-[#687888] group-hover:text-[#082B3E] tracking-tight transition-colors">
                Microsoft
              </span>
              <span className="font-mono text-[10px] text-[#687888] mt-1">Cloud Platforms</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#F6F9FA] border border-[#e2eaee] flex flex-col items-center justify-center text-center group hover:bg-white hover:border-[#082B3E] hover:shadow-md transition-all h-28">
              <span className="font-black text-lg text-[#687888] group-hover:text-[#082B3E] tracking-tight transition-colors">
                Dell Tech
              </span>
              <span className="font-mono text-[10px] text-[#687888] mt-1">Enterprise Hardware</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#F6F9FA] border border-[#e2eaee] flex flex-col items-center justify-center text-center group hover:bg-white hover:border-[#00B0B0] hover:shadow-md transition-all h-28">
              <span className="font-black text-xl text-[#687888] group-hover:text-[#00B0B0] tracking-wider transition-colors">
                Instabug
              </span>
              <span className="font-mono text-[10px] text-[#687888] mt-1">Dev Telemetry</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leadership;
