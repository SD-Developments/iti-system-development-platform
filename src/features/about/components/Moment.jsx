import img1 from '../../../assets/images/hero/hero1.png';
import img2 from '../../../assets/images/hero/about2.png';
import img3 from '../../../assets/images/hero/about_hero_section.png';

const shots = [
  {
    img: img1,
    alt: 'Egyptian software students presenting software architecture project on screen to mentors',
    caption: 'CAPSTONE ARCHITECTURE REVIEW',
  },
  {
    img: img2,
    alt: 'Egyptian university students collaborating on software architecture diagrams at Smart Village',
    caption: 'SYSTEM DESIGN WHITEBOARDING',
  },
  {
    img: img3,
    alt: 'Egyptian software capstone defense presentation to enterprise tech leaders',
    caption: 'CTO DEFENSE & EVALUATION',
  },
  {
    img: img1,
    alt: 'Dual monitor developer engineering workstations at ITI Smart Village tech hub',
    caption: 'SMART VILLAGE WORKSTATIONS',
  },
  {
    img: img2,
    alt: 'Egyptian university software engineering students whiteboard system design and collaborative hackathon',
    caption: '48-HOUR HACKATHON SPRINTS',
  },
  {
    img: img3,
    alt: 'Egyptian software engineering students and mentors in tech hub',
    caption: 'PEER CODE REVIEWS & RETROS',
  },
];

const Moment = () => {
  return (
    <section className="w-full bg-muted py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest">
              // DOCUMENTARY ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
              Moments From Inside the Department
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            WORKSHOPS • HACKATHONS • CTO DEFENSES • COLLABORATION
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shots.map((s) => (
            <div
              key={s.caption}
              className="group relative rounded-2xl overflow-hidden bg-card shadow-sm border border-border h-72"
            >
              <img
                alt={s.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={s.img}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-mono text-xs text-white">{s.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Moment;
