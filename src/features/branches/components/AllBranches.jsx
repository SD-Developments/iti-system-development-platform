import { branchesData, filterOptions, getAccentClasses } from '@/constants';
import { useMemo, useState } from 'react';

const AllBranches = () => {
  const [activeRegion, setActiveRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBranches = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return branchesData.filter((branch) => {
      const matchesRegion = activeRegion === 'all' || branch.region === activeRegion;

      const searchableText = [
        branch.name,
        branch.location,
        branch.locationDescription,
        branch.keywords,
        ...branch.tags,
      ]
        .join(' ')
        .toLowerCase();

      const matchesSearch = !query || searchableText.includes(query);

      return matchesRegion && matchesSearch;
    });
  }, [activeRegion, searchQuery]);
  return (
    <>
      <section id="all-branches" className="w-full bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* HEADER */}

          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-foreground sm:text-xs">
                Interactive Directory
              </span>

              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Explore All 11 Hubs
              </h2>
            </div>

            {/* FILTERS */}

            <div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-xl border border-border bg-card p-1 shadow-sm">
              {filterOptions.map((option) => {
                const isActive = activeRegion === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setActiveRegion(option.value)}
                    className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-[10px] transition-all sm:text-xs ${
                      isActive
                        ? 'bg-primary font-bold text-primary-foreground'
                        : 'font-medium text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* SEARCH */}

          <div className="mb-8">
            <div className="relative max-w-md">
              <span className="material-symbols-outlined absolute left-3.5 top-2.5 text-[20px] text-muted-foreground">
                search
              </span>

              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search by city, governorate, or technology..."
                className="w-full rounded-xl border border-border bg-card py-2.5 pl-11 pr-4 text-xs text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* RESULTS */}

          {filteredBranches.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBranches.map((branch) => {
                const accent = getAccentClasses(branch.accent);

                return (
                  <div
                    key={branch.id}
                    className="flex flex-col justify-between rounded-2xl border border-border bg-sd-bg-light p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div>
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <span
                          className={`rounded px-2 py-0.5 font-mono text-[9px] font-bold ${accent.badge}`}
                        >
                          {branch.location}
                        </span>

                        <span className="shrink-0 font-mono text-[9px] text-muted-foreground sm:text-xs">
                          {branch.labs} • {branch.seats}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-foreground sm:text-lg">
                        {branch.name}
                      </h4>

                      <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground sm:text-xs">
                        {branch.locationDescription}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1">
                        {branch.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-sd-bg-light px-2 py-0.5 font-mono text-[9px] text-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                      <span className="font-mono text-[9px] text-muted-foreground sm:text-[11px]">
                        {branch.code}
                      </span>

                      <a
                        href="#featured-hubs"
                        className={`flex items-center gap-1 text-[10px] font-bold transition-all hover:translate-x-1 sm:text-xs ${accent.text}`}
                      >
                        View Campus
                        <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-card p-10 text-center">
              <span className="material-symbols-outlined mb-3 text-4xl text-muted-foreground">
                search_off
              </span>

              <h3 className="text-lg font-bold text-foreground">No hubs found</h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Try another city, governorate, or technology.
              </p>

              <button
                type="button"
                onClick={() => {
                  setActiveRegion('all');
                  setSearchQuery('');
                }}
                className="mt-4 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-primary-foreground"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AllBranches;
