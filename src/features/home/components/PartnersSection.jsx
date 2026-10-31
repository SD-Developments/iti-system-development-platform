import EmptyState from '@/components/EmptyState';
import { Building2 } from 'lucide-react';
import { partnerCompanies } from '@/features/home/data';

function PartnersSection() {
  return (
    <>
      <section className="bg-card py-12">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-start">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.17em] text-primary">
                Industry Connection
              </span>

              <h3 className="mt-2 text-xl font-bold text-card-foreground">
                Learning Connected to Industry
              </h3>
            </div>

            {partnerCompanies.length === 0 ? (
              <EmptyState
                className="min-h-0 flex-1 py-6"
                icon={Building2}
                title="No partners listed yet"
                message="Industry partners will appear here once they are published."
              />
            ) : (
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:justify-end">
                {partnerCompanies.map((partner) => (
                  <span
                    key={partner}
                    className="text-sm font-bold text-muted-foreground transition hover:text-foreground"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default PartnersSection;
