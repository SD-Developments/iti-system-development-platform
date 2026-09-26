import about4 from '../../../assets/images/hero1.png';

const cards = [
  {
    icon: 'rocket_launch',
    accent: 'primary',
    title: 'Graduation Project',
    tag: '300 HOURS',
    desc: 'Comprehensive 300-hour team capstone solving a real-world enterprise challenge defended before multinational CTOs.',
  },
  {
    icon: 'monetization_on',
    accent: 'accent',
    title: 'Freelancing Deliverable',
    tag: 'MARKET READY',
    desc: 'Commercial software sprint equipping graduates with client delivery, contract structuring, and market monetization skills.',
  },
  {
    icon: 'terminal',
    accent: 'accent',
    title: 'Hands-on Labs',
    tag: '1,200+ HOURS',
    desc: '1,200+ hours of live coding, test-driven development, peer reviews, bug triage, and automated CI/CD pipelines.',
  },
  {
    icon: 'psychology',
    accent: 'primary',
    title: 'Interview Preparation',
    tag: 'RIGOROUS DRILLS',
    desc: 'Intensive algorithmic problem solving, mock technical whiteboarding interviews, and system design defenses.',
  },
  {
    icon: 'verified_user',
    accent: 'accent',
    title: 'International Certificate',
    tag: 'GLOBAL CREDENTIALS',
    desc: 'Globally recognized cloud and technology certifications including AWS, Microsoft Azure, Google Cloud, and Meta.',
  },
];

const ACCENT_CLASSES = {
  primary: {
    border: 'hover:border-primary',
    iconBg: 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground',
    tagText: 'text-primary',
  },
  accent: {
    border: 'hover:border-accent',
    iconBg: 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground',
    tagText: 'text-accent',
  },
  navy: {
    border: 'hover:border-sd-navy',
    iconBg: 'bg-sd-navy/10 text-sd-navy group-hover:bg-sd-navy group-hover:text-white',
    tagText: 'text-sd-navy',
  },
};

const StudentsBuilds = () => {
  return (
    <section className="w-full bg-background py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest">
            // MEASURABLE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
            Every Student Graduates With Production Experience.
          </h2>
          <p className="text-lg text-muted-foreground">
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
              <div className="absolute inset-0 bg-linear-to-t from-sd-navy/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-card/95 backdrop-blur-md border border-border shadow-lg">
                <span className="font-mono text-[11px] font-bold text-primary uppercase tracking-wider block mb-1">
                  Standard Operating Principle
                </span>
                <p className="text-xs font-semibold text-foreground">
                  “We do not simulate industry work. We execute live commercial architectures.”
                </p>
              </div>
            </div>
          </div>
          {/* 5 Achievement Cards on Right */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {cards.map((c) => {
              const a = ACCENT_CLASSES[c.accent];
              return (
                <div
                  key={c.title}
                  className={`p-5 rounded-2xl bg-muted border border-border ${a.border} hover:bg-card hover:shadow-md transition-all flex items-start gap-4 group`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${a.iconBg}`}
                  >
                    <span className="material-symbols-outlined text-2xl">{c.icon}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-foreground">{c.title}</h4>
                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded bg-card border border-border font-bold ${a.tagText}`}
                      >
                        {c.tag}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsBuilds;
