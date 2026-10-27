import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { programs, tracks } from '@/features/tracks/data';
import { cn } from '@/lib/utils';
import { Check, GitCompareArrows, Minus } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

const FILTERS = ['All', ...programs.map((p) => p.id)];

const ROWS = [
  { label: 'Program', render: (t) => <ProgramPill program={t.program} /> },
  { label: 'Category', render: (t) => t.category },
  { label: 'Duration', render: (t) => t.duration },
  { label: 'Total Hours', render: (t) => t.hours ?? '—' },
  { label: 'Project Hours', render: (t) => t.projectHours ?? 'Included in program' },
  { label: 'Main Technologies', render: (t) => <TechList items={t.technologies?.slice(0, 5)} /> },
  { label: 'AI Integration', render: (t) => <Flag value={t.technologies?.includes('RAG')} /> },
  { label: 'Typical Roles', render: (t) => <TechList items={t.jobProfiles?.slice(0, 2)} plain /> },
  {
    label: 'Available At',
    render: (t) => (t.branches?.length ? t.branches.join(', ') : 'Coming soon'),
  },
];

function Compare() {
  const [filter, setFilter] = useState('All');
  const comparisonTable = useRef(null);

  useEffect(() => {
    const element = comparisonTable.current;
    if (!element) return;
    console.log('object');
    const handleWheel = (e) => {
      console.log('scrollWidth', element.scrollWidth);
      console.log('clientWidth', element.clientWidth);
      console.log('deltaY', e.deltaY);
      console.log('deltaX', e.deltaX);

      if (e.deltaY == 0) return;
      e.preventDefault();
      element.scrollLeft += e.deltaY;
    };
    element.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      element.removeEventListener('wheel', handleWheel, { passive: false });
    };
  }, []);

  const visibleTracks = useMemo(
    () => (filter === 'All' ? tracks : tracks.filter((t) => t.program === filter)),
    [filter]
  );
  const activeProgram = programs.find((p) => p.id === filter);

  return (
    <section id="compare" className="py-20 lg:py-28">
      <div className="mx-auto w-[90%] max-w-7xl">
        <SectionHeader
          eyebrow="Compare"
          title="Which Track Fits You?"
          description="Filter by program to compare PTP and ITP tracks side by side across duration, technologies, roles, and availability."
        />

        {/* Program filter */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex w-fit rounded-2xl border border-border bg-card p-1.5 shadow-sm">
            {FILTERS.map((item) => (
              <Button
                key={item}
                size="lg"
                variant={filter === item ? 'default' : 'ghost'}
                onClick={() => setFilter(item)}
                className="rounded-xl px-6"
              >
                {item === 'All' ? 'All Programs' : item}
              </Button>
            ))}
          </div>

          <span className="font-mono text-xs text-muted-foreground">
            {visibleTracks.length} tracks
          </span>
        </div>

        {/* Program summary cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {programs.map((program) => (
            <button
              key={program.id}
              type="button"
              onClick={() => setFilter(filter === program.id ? 'All' : program.id)}
              className={cn(
                'rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md',
                filter === program.id
                  ? 'border-primary bg-primary/5 shadow-md'
                  : 'border-border bg-card'
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
                  {program.id}
                </span>
                <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-[10px] font-bold text-accent">
                  {program.duration}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-extrabold">{program.name}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{program.summary}</p>
              <p className="mt-3 text-xs font-semibold text-foreground">
                Best for:{' '}
                <span className="font-normal text-muted-foreground">{program.bestFor}</span>
              </p>
            </button>
          ))}
        </div>

        {/* Comparison table */}
        <div
          ref={comparisonTable}
          data-lenis-prevent
          className="mt-8 overflow-x-auto rounded-3xl border border-border bg-card shadow-sm"
        >
          <div
            className="grid min-w-max"
            style={{
              gridTemplateColumns: `180px repeat(${visibleTracks.length}, minmax(240px, 1fr))`,
            }}
          >
            {/* Header row */}
            <div className="sticky left-0 z-10 border-b border-border bg-secondary p-5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
              Compare
            </div>
            {visibleTracks.map((track) => {
              const Icon = track.icon;
              return (
                <div key={track.id} className="border-b border-l border-border bg-secondary/60 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    {Icon && <Icon size={19} />}
                  </div>
                  <div className="mt-3 text-sm font-bold leading-snug">{track.shortTitle}</div>
                  <a
                    href={`/tracks/${track.id}`}
                    className="mt-2 inline-block text-xs font-bold text-primary hover:underline"
                  >
                    View track
                  </a>
                </div>
              );
            })}

            {/* Body rows */}
            {ROWS.map((row) => (
              <Row key={row.label} row={row} tracks={visibleTracks} />
            ))}
          </div>
        </div>

        {/* Guidance */}
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl bg-sd-navy p-8 text-sd-white lg:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sd-teal/15 text-sd-teal">
              <GitCompareArrows size={24} />
            </div>
            <h3 className="mt-7 text-3xl font-extrabold tracking-tight">
              Start with what you want to build.
            </h3>
            <p className="mt-4 max-w-xl leading-7 text-sd-white/65">
              {activeProgram
                ? `${activeProgram.id}: ${activeProgram.bestFor}`
                : 'Choose the program length that suits you, then focus on the platforms and systems you want to work with.'}
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
              Ask Yourself
            </span>
            <div className="mt-6 space-y-5">
              <DecisionItem
                number="01"
                title="How much time can you commit?"
                text="9 months for PTP depth, or 4 months for a focused ITP."
              />
              <DecisionItem
                number="02"
                title="Do you want broad architecture or one specific stack?"
                text="PTP covers broader delivery. ITP targets one stack or role."
              />
              <DecisionItem
                number="03"
                title="Which branch is closest to you?"
                text="Check the Available At row. Some tracks run only at Smart Village."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ row, tracks }) {
  return (
    <>
      <div className="sticky left-0 z-10 border-b border-border bg-secondary p-5 text-sm font-bold last-of-type:border-b-0">
        {row.label}
      </div>
      {tracks.map((track) => (
        <div
          key={track.id}
          className="border-b border-l border-border p-5 text-sm text-muted-foreground transition-colors hover:bg-primary/3"
        >
          {row.render(track)}
        </div>
      ))}
    </>
  );
}

function ProgramPill({ program }) {
  return (
    <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
      {program}
    </span>
  );
}

function TechList({ items = [], plain }) {
  if (!items?.length) return <Minus size={16} className="text-muted-foreground/50" />;
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span
          key={item}
          className={cn(
            'text-[11px] font-semibold',
            plain
              ? 'w-full text-foreground'
              : 'rounded-lg bg-secondary px-2 py-1 font-mono text-secondary-foreground'
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function Flag({ value }) {
  return value ? (
    <span className="inline-flex items-center gap-1.5 font-semibold text-accent">
      <Check size={16} /> Included
    </span>
  ) : (
    <Minus size={16} className="text-muted-foreground/50" />
  );
}

function DecisionItem({ number, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary font-mono text-[11px] font-bold text-primary">
        {number}
      </div>
      <div>
        <h4 className="text-sm font-bold">{title}</h4>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

export default Compare;
