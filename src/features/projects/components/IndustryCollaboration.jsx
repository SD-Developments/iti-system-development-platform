import { industryFeatures } from '@/constants';
import IndustryCard from './IndustryCard';

const IndustryCollaboration = () => {
  return (
    <>
      <section className="border-b border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-accent">
              INDUSTRY COLLABORATION
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-primary">
              Engineered with Industry, Defended for Impact
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              SD bridges the gap between theoretical software engineering and enterprise-grade
              deployment realities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industryFeatures.map((feature) => (
              <IndustryCard key={feature.number} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryCollaboration;
