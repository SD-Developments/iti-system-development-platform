// import { NavLink } from 'react-router';

// import heroImage from '../../../assets/images/about2.png';

const AboutHero = () => {
  // const tags = [
  //   { icon: 'auto_awesome', text: 'AI Integration' },
  //   { icon: 'school', text: 'Hands-on Labs' },
  //   { icon: 'psychology', text: 'Mentor Guidance' },
  // ];

  return (
    <section className="relative w-full bg-[#F6F9FA] overflow-hidden border-b border-[#e2eaee]">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white border border-[#e2eaee] text-[#E03531] font-mono text-xs font-bold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#E03531] animate-pulse"></span>
              DEPARTMENT OF SOFTWARE DEVELOPMENT • EST. 1993
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#082B3E] tracking-tight leading-[1.12]">
                We Build Software Engineers Ready for Production.
              </h1>
            </div>
            <p className="text-lg text-[#687888] leading-relaxed max-w-xl">
              From software fundamentals to AI-powered applications, SD develops engineers who build
              real-world web, mobile, and enterprise software solutions.
            </p>
            {/* Metadata Indicators */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="font-mono text-[11px] font-semibold px-3 py-1.5 rounded-md bg-white border border-[#e2eaee] text-[#082B3E] flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-[11px] text-[#E03531]">
                  history_edu
                </span>{' '}
                Since 1993
              </span>
              <span className="font-mono text-[11px] font-semibold px-3 py-1.5 rounded-md bg-white border border-[#e2eaee] text-[#082B3E] flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-[15px] text-[#00B0B0]">
                  workspace_premium
                </span>{' '}
                Professional Training Program
              </span>
              <span className="font-mono text-[11px] font-semibold px-3 py-1.5 rounded-md bg-white border border-[#e2eaee] text-[#082B3E] flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-[15px] text-[#E03531]">
                  auto_awesome
                </span>{' '}
                AI Integration
              </span>
              <span className="font-mono text-[11px] font-semibold px-3 py-1.5 rounded-md bg-white border border-[#e2eaee] text-[#082B3E] flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-[15px] text-[#00B0B0]">hub</span>{' '}
                Blended Learning
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#E03531] text-white font-bold text-sm hover:bg-[#c92824] transition-all shadow-md shadow-[#E03531]/20 group"
                href="#tracks"
              >
                <span>Explore Academic Tracks</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </a>
              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#e2eaee] text-[#082B3E] font-bold text-sm hover:bg-[#e8eef2] transition-all shadow-sm"
                href="#faculty"
              >
                <span className="material-symbols-outlined text-[18px] text-[#687888]">group</span>
                <span>Meet The Faculty</span>
              </a>
            </div>
          </div>
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img
                alt="ITI software development students collaborating in modern engineering lab"
                className="w-full h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida/AEtjO1W_OoUGU6BLyoCC0Ow4WEagf04iQE_KHjlo-aEUVAvfyLN3_ug4OifwzSON1UC6snew2TA09u413gKF3LgoOMH3f0b9sL5AfY2K_3iqVLWMGn2oCs0314Nk6IctGEq4eOnRapg2dbSAOX-8UOXRhagmuMWLiLCbh-R5s-KaxVzCnVMd-NucN-X3EpficRrvHtA_kqdxIfV3Jj9-Q37qsX-K6U09amV0iADNUPGLh4J-XGkQ0N66fsAsVyiJ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082B3E]/90 via-[#082B3E]/20 to-transparent"></div>
              {/* Handwritten Accent Accent Overlay */}
              <div className="absolute top-5 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-white/50 -rotate-2">
                <span className="font-handwriting text-2xl text-[#E03531] font-bold tracking-wide">
                  Build • Learn • Grow
                </span>
              </div>
              {/* Floating Telemetry Glass Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/70 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#E03531] text-white flex items-center justify-center font-mono text-sm font-black shadow-md">
                    SD
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#082B3E]">
                      Intensive Professional Diploma
                    </span>
                    <span className="font-mono text-xs text-[#687888]">
                      1,200+ Instructional &amp; Practical Hours
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00B0B0]/15 text-[#007f7f] border border-[#00B0B0]/30 font-mono text-xs font-bold shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B0B0] animate-ping"></span>
                  PRODUCTION_READY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
