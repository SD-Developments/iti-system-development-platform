import about4 from '../../../assets/images/hero1.png';

const StudentsBuilds = () => {
  return (
    <>
      <section className="w-full bg-white py-20 border-b border-[#e2eaee]">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-3xl">
            <span className="font-mono text-xs font-bold text-[#E03531] uppercase tracking-widest">
              // MEASURABLE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082B3E] tracking-tight">
              Every Student Graduates With Production Experience.
            </h2>
            <p className="text-lg text-[#687888]">
              Replacing hypothetical classroom exercises with verified professional deliverables
              deployed live.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Documentary Photo on Left */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl bg-slate-900 h-[580px]">
                <img
                  alt="Egyptian software engineering students pair programming and discussing architecture in lab"
                  className="w-full h-full object-cover"
                  src={about4}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B3E]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/70 shadow-lg">
                  <span className="font-mono text-[11px] font-bold text-[#E03531] uppercase tracking-wider block mb-1">
                    Standard Operating Principle
                  </span>
                  <p className="text-xs font-semibold text-[#082B3E]">
                    “We do not simulate industry work. We execute live commercial architectures.”
                  </p>
                </div>
              </div>
            </div>
            {/* 5 Achievement Cards on Right */}
            <div className="lg:col-span-7 flex flex-col gap-3.5">
              {/* 1. Graduation Project */}
              <div className="p-5 rounded-2xl bg-[#F6F9FA] border border-[#e2eaee] hover:border-[#E03531] hover:bg-white hover:shadow-md transition-all flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#E03531]/10 text-[#E03531] group-hover:bg-[#E03531] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-[#082B3E]">Graduation Project</h4>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white border border-[#e2eaee] text-[#E03531] font-bold">
                      300 HOURS
                    </span>
                  </div>
                  <p className="text-sm text-[#687888] leading-relaxed">
                    Comprehensive 300-hour team capstone solving a real-world enterprise challenge
                    defended before multinational CTOs.
                  </p>
                </div>
              </div>
              {/* 2. Freelancing Deliverable */}
              <div className="p-5 rounded-2xl bg-[#F6F9FA] border border-[#e2eaee] hover:border-[#00B0B0] hover:bg-white hover:shadow-md transition-all flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#00B0B0]/10 text-[#00B0B0] group-hover:bg-[#00B0B0] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">monetization_on</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-[#082B3E]">Freelancing Deliverable</h4>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white border border-[#e2eaee] text-[#00B0B0] font-bold">
                      MARKET READY
                    </span>
                  </div>
                  <p className="text-sm text-[#687888] leading-relaxed">
                    Commercial software sprint equipping graduates with client delivery, contract
                    structuring, and market monetization skills.
                  </p>
                </div>
              </div>
              {/* 3. Hands-on Labs */}
              <div className="p-5 rounded-2xl bg-[#F6F9FA] border border-[#e2eaee] hover:border-[#082B3E] hover:bg-white hover:shadow-md transition-all flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#082B3E]/10 text-[#082B3E] group-hover:bg-[#082B3E] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">terminal</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-[#082B3E]">Hands-on Labs</h4>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white border border-[#e2eaee] text-[#082B3E] font-bold">
                      1,200+ HOURS
                    </span>
                  </div>
                  <p className="text-sm text-[#687888] leading-relaxed">
                    1,200+ hours of live coding, test-driven development, peer reviews, bug triage,
                    and automated CI/CD pipelines.
                  </p>
                </div>
              </div>
              {/* 4. Interview Preparation */}
              <div className="p-5 rounded-2xl bg-[#F6F9FA] border border-[#e2eaee] hover:border-[#E03531] hover:bg-white hover:shadow-md transition-all flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#E03531]/10 text-[#E03531] group-hover:bg-[#E03531] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">psychology</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-[#082B3E]">Interview Preparation</h4>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white border border-[#e2eaee] text-[#E03531] font-bold">
                      RIGOROUS DRILLS
                    </span>
                  </div>
                  <p className="text-sm text-[#687888] leading-relaxed">
                    Intensive algorithmic problem solving, mock technical whiteboarding interviews,
                    and system design defenses.
                  </p>
                </div>
              </div>
              {/* 5. International Certificate */}
              <div className="p-5 rounded-2xl bg-[#F6F9FA] border border-[#e2eaee] hover:border-[#00B0B0] hover:bg-white hover:shadow-md transition-all flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#00B0B0]/10 text-[#00B0B0] group-hover:bg-[#00B0B0] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-[#082B3E]">
                      International Certificate
                    </h4>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white border border-[#e2eaee] text-[#00B0B0] font-bold">
                      GLOBAL CREDENTIALS
                    </span>
                  </div>
                  <p className="text-sm text-[#687888] leading-relaxed">
                    Globally recognized cloud and technology certifications including AWS, Microsoft
                    Azure, Google Cloud, and Meta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentsBuilds;
