import { Button, ButtonLink } from '@/components/ui/button';
import { currentIntake } from '@/data/siteFacts';
import Icon from '@/components/Icon';
import { faqs } from '@/features/home/data';

const FAQ = () => {
  return (
    <>
      <section id="intake-status" className="w-full bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-[1000px] flex-col gap-12 px-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="font-mono text-xs font-semibold uppercase text-primary">
              ADMISSIONS ARCHITECTURE
            </span>

            <h2 className="font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="max-w-lg text-sm text-muted-foreground">
              Everything you need to understand regarding qualifications, testing, and cohort
              placements.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-border bg-sd-bg-light p-5"
              >
                <h4 className="font-heading text-base font-bold text-foreground">{faq.question}</h4>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-xl border border-border bg-sd-bg-light p-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon name="calendar_today" className="text-[22px]" />
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-[11px] font-bold uppercase text-primary">
                  NEXT INTAKE TIMELINE
                </span>

                <span className="text-sm font-bold text-foreground">
                  Intake {currentIntake} Online Application Window Opens Early July
                </span>
              </div>
            </div>

            <Button type="button" variant="navy" size="xl">
              Set Calendar Alert
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="w-full bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-sd-navy bg-linear-to-r from-sd-navy via-[#0b3850] to-sd-navy p-10 text-white shadow-2xl lg:flex-row lg:p-16">
            <div className="relative z-10 flex max-w-2xl flex-col gap-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                NATIONWIDE ENGINEERING ADMISSIONS
              </span>

              <h2 className="font-heading text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Choose Your Path into Egypt’s Elite Software Community
              </h2>

              <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                Step into an immersive legacy of software leadership. Whether you are ready for the
                9-Month residency or an agile 4-month accelerator, your engineering future starts
                here.
              </p>
            </div>

            <div className="relative z-10 flex w-full shrink-0 flex-col items-center gap-3 sm:w-auto sm:flex-row">
              <ButtonLink
                href="#intake-status"
                variant="default"
                size="xl"
                className="w-full sm:w-auto"
              >
                Apply for Intake {currentIntake}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
