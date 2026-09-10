import JourneyRow from '@/components/JourneyRow';
import { ArrowRight } from 'lucide-react';
import img2 from '../../../assets/images/hero1.png';

function StudentSection() {
  return (
    <>
      <section className="border-y border-border bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl bg-muted">
                <img src={img2} alt="SD alumni" className="aspect-4/5 w-full object-cover" />

                <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-sd-navy/90 p-5 text-sd-white backdrop-blur">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-sd-teal">
                    Alumni Story
                  </span>

                  <div className="mt-2 text-lg font-bold">From Student to Engineer</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-6">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
                The Journey Continues
              </span>

              <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
                From Student to Industry
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
                The SD experience continues beyond graduation. Projects, teamwork, technical depth,
                and community become part of every graduate's professional story.
              </p>

              <div className="mt-9 grid gap-3">
                <JourneyRow number="01" label="Before ITI" value="University Graduate" />

                <JourneyRow number="02" label="Program" value="PTP · System Development" />

                <JourneyRow number="03" label="Built" value="Graduation Project" />

                <JourneyRow number="04" label="Today" value="Software Engineer" highlight />
              </div>

              <a
                href="/stories"
                className="mt-8 inline-flex items-center gap-2 font-bold text-primary"
              >
                Explore Student & Alumni Stories
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StudentSection;
