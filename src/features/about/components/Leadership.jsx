const companies = [
  ['IBM', 'Enterprise Cloud', 'primary'],
  ['Deloitte', 'Digital Consulting', 'accent'],
  ['Vodafone', 'Telecom & Cloud', 'primary'],
  ['_VOIS', 'Intelligent Solutions', 'primary'],
  ['Fawry', 'FinTech Backbone', 'accent'],
  ['LinkDev', 'Digital Solutions', 'navy'],
  ['Valeo', 'Autonomous Systems', 'accent'],
  ['noon', 'E-Commerce Scale', 'navy'],
  ['Banque Misr', 'Digital Banking', 'primary'],
  ['Microsoft', 'Cloud Platforms', 'accent'],
  ['Dell Tech', 'Enterprise Hardware', 'navy'],
  ['Instabug', 'Dev Telemetry', 'accent'],
];

const ACCENT = {
  primary: { border: 'hover:border-primary', text: 'group-hover:text-primary' },
  accent: { border: 'hover:border-accent', text: 'group-hover:text-accent' },
  navy: { border: 'hover:border-sd-navy', text: 'group-hover:text-sd-navy' },
};

const Leadership = () => {
  return (
    <section className="w-full bg-background py-20 border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest">
              // ALUMNI DESTINATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
              Where SD Graduates Work
            </h2>
            <p className="text-lg text-muted-foreground">
              Our alumni engineer mission-critical systems at the world's most demanding technology
              leaders and multinationals.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 text-accent border border-accent/30 font-mono text-xs font-bold shrink-0">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            96%+ Placement Rate within 90 Days of Graduation
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {companies.map(([name, sub, accentKey]) => {
            const a = ACCENT[accentKey];
            return (
              <div
                key={name}
                className={`p-6 rounded-2xl bg-muted border border-border flex flex-col items-center justify-center text-center group hover:bg-card ${a.border} hover:shadow-md transition-all h-28`}
              >
                <span
                  className={`font-black text-lg text-muted-foreground tracking-tight transition-colors ${a.text}`}
                >
                  {name}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground mt-1">{sub}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
