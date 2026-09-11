import SectionHeader from '@/components/SectionHeader';
import { compareRows } from '@/constants';
import { Code2, GitCompareArrows, Smartphone, Workflow } from 'lucide-react';

function Compare() {
  return (
    <>
      <section id="compare" className="py-20 lg:py-28">
        <div className="mx-auto w-[90%] max-w-7xl">
          <SectionHeader
            eyebrow="Compare"
            title="Which Track Fits You?"
            description="The three tracks share strong software engineering foundations but differ significantly in platform, technical focus, and the kinds of systems you will build."
          />

          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card">
            <div className="hidden grid-cols-[1.1fr_1fr_1fr_1fr] border-b border-border bg-secondary/60 lg:grid">
              <div className="p-5" />

              <CompareHeader shortTitle="Mobile + AI" icon={<Smartphone size={19} />} />

              <CompareHeader shortTitle=".NET Enterprise + AI" icon={<Workflow size={19} />} />

              <CompareHeader shortTitle="Web + UI + AI" icon={<Code2 size={19} />} />
            </div>

            <div>
              {compareRows.map((row) => (
                <div
                  key={row.label}
                  className="grid border-b border-border last:border-0 lg:grid-cols-[1.1fr_1fr_1fr_1fr]"
                >
                  <div className="bg-secondary/40 p-5 text-sm font-bold">{row.label}</div>

                  <CompareValue value={row.mobile} />

                  <CompareValue value={row.dotnet} />

                  <CompareValue value={row.web} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl bg-sd-navy p-8 text-sd-white lg:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sd-teal/15 text-sd-teal">
                <GitCompareArrows size={24} />
              </div>

              <h3 className="mt-7 text-3xl font-extrabold tracking-tight">
                Start with what you want to build.
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-sd-white/65">
                The best choice is not necessarily the track with the longest technology list. Focus
                on the kind of systems, platforms, and development problems you want to work with.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
                Ask Yourself
              </span>

              <div className="mt-6 space-y-5">
                <DecisionItem
                  number="01"
                  title="Do you want to build mobile-first products?"
                  text="Start with Cross-Platform Mobile Applications Development."
                />

                <DecisionItem
                  number="02"
                  title="Are enterprise systems, backend architecture, BI, or CRM more interesting?"
                  text="The .NET Enterprise track is the strongest match."
                />

                <DecisionItem
                  number="03"
                  title="Do you prefer frontend, UI engineering, and full-stack JavaScript?"
                  text="Explore Full-Stack Web Development & UI Engineering."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CompareHeader({ shortTitle, icon }) {
  return (
    <div className="border-l border-border p-5">
      <div className="flex items-center gap-2 text-accent">{icon}</div>

      <div className="mt-3 text-sm font-bold">{shortTitle}</div>
    </div>
  );
}

function CompareValue({ value }) {
  return (
    <div className="border-t border-border p-5 text-sm text-muted-foreground lg:border-l lg:border-t-0">
      {value}
    </div>
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
