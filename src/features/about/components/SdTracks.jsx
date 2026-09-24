import about1 from '../../../assets/images/about2.png';
import about2 from '../../../assets/images/about_hero_section.png';
import about3 from '../../../assets/images/about2.png';

const SdTracks = () => {
  return (
    <>
      <section className="w-full bg-[#F6F9FA] py-20 border-b border-[#e2eaee]" id="tracks">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-2xl">
              <span className="font-mono text-xs font-bold text-[#E03531] uppercase tracking-widest">
                // SPECIALIZED DISCIPLINES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082B3E] tracking-tight">
                Three Specialized Engineering Tracks
              </h2>
              <p className="text-lg text-[#687888]">
                Curricula tailored to market demands, forging specialized depth and production
                excellence.
              </p>
            </div>
            <div className="font-mono text-xs px-4 py-2 rounded-xl bg-white border border-[#e2eaee] text-[#082B3E] font-semibold shrink-0">
              UPDATED EVERY INTAKE WITH 40+ HIRING TECH PARTNERS
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Track 1: Full Stack Web (Dominant, Red accent #E03531) */}
            <div className="rounded-3xl bg-white border-2 border-[#E03531] shadow-lg flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col">
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    alt="Modern full stack web developer workspace and multi-screen coding"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={about1}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#E03531] text-white shadow-md">
                      CORE FLAGSHIP TRACK
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="font-mono text-xs text-white/80 uppercase tracking-wider">
                      TRACK 01
                    </span>
                    <h3 className="text-xl font-bold text-white leading-snug">
                      Full Stack Web Solutions &amp; UI Engineering
                    </h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <p className="text-sm text-[#687888] leading-relaxed">
                    End-to-end full-stack architectures, high-performance responsive user
                    interfaces, reactive cloud backends, micro-frontends, and automated testing
                    pipelines.
                  </p>
                  <div className="flex flex-col gap-2 pt-2 border-t border-[#e2eaee]">
                    <span className="font-mono text-[11px] font-bold text-[#082B3E] uppercase tracking-wider">
                      Tech Stack &amp; Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        React
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        Next.js
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        Angular
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        Vue
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        Node.js
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        NestJS
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        GraphQL
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        UI/UX
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#E03531]/10 text-[#E03531] border border-[#E03531]/30 font-bold">
                        AI Agents
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#E03531]/10 text-[#E03531] border border-[#E03531]/30 font-bold">
                        RAG
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  className="w-full py-3 px-4 rounded-xl bg-[#E03531] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#c92824] transition-colors"
                  href="#"
                >
                  <span>View Full Stack Syllabus</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
            {/* Track 2: Cross-Platform Mobile (Teal accent #00B0B0) */}
            <div className="rounded-3xl bg-white border border-[#e2eaee] hover:border-[#00B0B0] shadow-sm hover:shadow-lg flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col">
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    alt="Mobile app development and multi-device testing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={about2}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#00B0B0] text-white shadow-md">
                      MOBILE ENGINEERING
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="font-mono text-xs text-white/80 uppercase tracking-wider">
                      TRACK 02
                    </span>
                    <h3 className="text-xl font-bold text-white leading-snug">
                      Cross-Platform Mobile Development
                    </h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <p className="text-sm text-[#687888] leading-relaxed">
                    Native runtime performance across iOS and Android from unified codebases, state
                    architecture patterns, offline-first sync, and device hardware integration.
                  </p>
                  <div className="flex flex-col gap-2 pt-2 border-t border-[#e2eaee]">
                    <span className="font-mono text-[11px] font-bold text-[#082B3E] uppercase tracking-wider">
                      Tech Stack &amp; Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        Flutter
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        React Native
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        .NET MAUI
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        Firebase
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        Docker
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#00B0B0]/10 text-[#007f7f] border border-[#00B0B0]/30 font-bold">
                        AI Integration
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  className="w-full py-3 px-4 rounded-xl bg-[#082B3E] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#00B0B0] transition-colors"
                  href="#"
                >
                  <span>View Mobile Track Syllabus</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
            {/* Track 3: .NET Enterprise (Navy accent #082B3E) */}
            <div className="rounded-3xl bg-white border border-[#e2eaee] hover:border-[#082B3E] shadow-sm hover:shadow-lg flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col">
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    alt="Enterprise software architecture and distributed systems lab"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={about3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#082B3E] text-white shadow-md">
                      ENTERPRISE SYSTEMS
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="font-mono text-xs text-white/80 uppercase tracking-wider">
                      TRACK 03
                    </span>
                    <h3 className="text-xl font-bold text-white leading-snug">
                      .NET Enterprise Solutions
                    </h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <p className="text-sm text-[#687888] leading-relaxed">
                    Mission-critical enterprise backend architectures, scalable gRPC services,
                    relational database mastery, cloud deployments, and enterprise automation.
                  </p>
                  <div className="flex flex-col gap-2 pt-2 border-t border-[#e2eaee]">
                    <span className="font-mono text-[11px] font-bold text-[#082B3E] uppercase tracking-wider">
                      Tech Stack &amp; Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        ASP.NET Core
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        Web APIs
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        gRPC
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        SQL Server
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        Entity Framework
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        Azure
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        Power Platform
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#F6F9FA] text-[#082B3E] border border-[#e2eaee] font-semibold">
                        Power BI
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  className="w-full py-3 px-4 rounded-xl bg-[#082B3E] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#E03531] transition-colors"
                  href="#"
                >
                  <span>View .NET Track Syllabus</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SdTracks;
