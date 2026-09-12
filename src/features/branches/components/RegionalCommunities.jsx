import { regionalZones } from '@/constants';

const RegionalCommunities = () => {
  const getAccentClasses = (accent) => {
    const classes = {
      red: {
        badge: 'bg-primary/10 text-primary',
        dot: 'bg-primary',
        text: 'text-primary',
        hover: 'hover:border-primary/40',
      },

      teal: {
        badge: 'bg-sd-teal/10 text-sd-teal',
        dot: 'bg-sd-teal',
        text: 'text-sd-teal',
        hover: 'hover:border-sd-teal/40',
      },

      green: {
        badge: 'bg-emerald-500/10 text-emerald-700',
        dot: 'bg-emerald-500',
        text: 'text-emerald-600',
        hover: 'hover:border-emerald-500/40',
      },

      amber: {
        badge: 'bg-amber-500/10 text-amber-700',
        dot: 'bg-amber-500',
        text: 'text-amber-600',
        hover: 'hover:border-amber-500/40',
      },

      navy: {
        badge: 'bg-sd-navy/10 text-sd-navy',
        dot: 'bg-sd-navy',
        text: 'text-sd-navy',
        hover: 'hover:border-sd-navy/40',
      },
    };

    return classes[accent] || classes.navy;
  };
  return (
    <>
      <section
        id="regional-zones"
        className="w-full bg-sd-bg-light border-b border-border py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-sd-teal sm:text-xs">
                Geographic Footprint
              </span>

              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Regional Communities Directory
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
              Designed for quick scanning across all 4 national zones. Discover local hubs, lab
              density, and specialized technology tracks.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {regionalZones.map((zone) => {
              const accent = getAccentClasses(zone.accent);

              return (
                <div
                  key={zone.id}
                  className={`flex flex-col justify-between rounded-2xl border border-border bg-card p-5 transition-colors ${accent.hover}`}
                >
                  <div>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${accent.dot}`} />

                      <span className="font-mono text-[9px] font-semibold text-muted-foreground">
                        {zone.count}
                      </span>
                    </div>

                    <h3 className="mb-1 text-base font-bold text-foreground sm:text-lg">
                      {zone.title}
                    </h3>

                    <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                      {zone.description}
                    </p>

                    <div className="mb-6 space-y-3">
                      {zone.hubs.map((hub) => (
                        <div
                          key={hub.name}
                          className="rounded-xl border border-border bg-card p-3 shadow-sm"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-xs font-semibold text-foreground">
                              {hub.name}
                            </span>

                            <span
                              className={`shrink-0 font-mono text-[9px] font-bold ${accent.text}`}
                            >
                              {hub.labs}
                            </span>
                          </div>

                          <span className="mt-0.5 block text-[10px] leading-relaxed text-muted-foreground">
                            {hub.technologies}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#all-branches"
                    className={`flex items-center gap-1 border-t border-border pt-3 text-xs font-bold ${accent.text}`}
                  >
                    View Zone Details
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default RegionalCommunities;
