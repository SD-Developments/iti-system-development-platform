import img1 from '../../../assets/images/hero1.png';
import img2 from '../../../assets/images/about2.png';
import img3 from '../../../assets/images/about_hero_section.png';
const Moment = () => {
  return (
    <>
      <section className="w-full bg-[#F6F9FA] py-20 border-b border-[#e2eaee]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs font-bold text-[#E03531] uppercase tracking-widest">
                // DOCUMENTARY ARCHIVE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082B3E] tracking-tight">
                Moments From Inside the Department
              </h2>
            </div>
            <span className="font-mono text-xs text-[#687888]">
              WORKSHOPS • HACKATHONS • CTO DEFENSES • COLLABORATION
            </span>
          </div>
          {/* 6-shot Editorial Gallery Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-[#e2eaee] h-72">
              <img
                alt="Egyptian software students presenting software architecture project on screen to mentors"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={img1}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-mono text-xs text-white">CAPSTONE ARCHITECTURE REVIEW</span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-[#e2eaee] h-72">
              <img
                alt="Egyptian university students collaborating on software architecture diagrams at Smart Village"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={img2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-mono text-xs text-white">SYSTEM DESIGN WHITEBOARDING</span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-[#e2eaee] h-72">
              <img
                alt="Egyptian software capstone defense presentation to enterprise tech leaders"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={img3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-mono text-xs text-white">CTO DEFENSE &amp; EVALUATION</span>
              </div>
            </div>
            {/* Card 4 */}
            <div className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-[#e2eaee] h-72">
              <img
                alt="Dual monitor developer engineering workstations at ITI Smart Village tech hub"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={img1}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-mono text-xs text-white">SMART VILLAGE WORKSTATIONS</span>
              </div>
            </div>
            {/* Card 5 */}
            <div className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-[#e2eaee] h-72">
              <img
                alt="Egyptian university software engineering students whiteboard system design and collaborative hackathon"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={img2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-mono text-xs text-white">48-HOUR HACKATHON SPRINTS</span>
              </div>
            </div>
            {/* Card 6 */}
            <div className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-[#e2eaee] h-72">
              <img
                alt="Egyptian software engineering students and mentors in tech hub"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={img3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-mono text-xs text-white">PEER CODE REVIEWS &amp; RETROS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Moment;
