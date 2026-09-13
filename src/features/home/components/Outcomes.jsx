import { partnerCompanies, testimonials } from '@/constants';

const Outcomes = () => {
  return (
    <>
      <section className="w-full border-b border-border bg-sd-bg-light py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs font-semibold uppercase text-primary">
                OUTCOMES &amp; ALUMNI SUCCESS
              </span>

              <h2 className="mt-1 font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
                Where SD Graduates Lead
              </h2>
            </div>

            <p className="max-w-md text-sm text-muted-foreground">
              Our alumni architect mission-critical infrastructure at regional scaleups and global
              technology leaders across Europe, the GCC, and North America.
            </p>
          </div>

          {/* Companies */}
          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8">
            <span className="text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Trusted by Multinational &amp; Sovereign Engineering Teams
            </span>

            <div className="grid grid-cols-2 items-center gap-6 text-center sm:grid-cols-3 md:grid-cols-6">
              {partnerCompanies.map((company) => (
                <span
                  key={company}
                  className="font-heading text-lg font-bold text-muted-foreground transition-colors hover:text-foreground"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6"
              >
                <p className="text-sm leading-relaxed text-foreground italic">
                  {testimonial.quote}
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white ${
                      testimonial.accent === 'primary'
                        ? 'bg-primary'
                        : testimonial.accent === 'teal'
                          ? 'bg-sd-teal'
                          : 'bg-sd-navy'
                    }`}
                  >
                    {testimonial.initials}
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-foreground">{testimonial.name}</h4>

                    <p className="font-mono text-[11px] text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Outcomes;
