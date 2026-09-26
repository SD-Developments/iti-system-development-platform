import { ArrowRight } from 'lucide-react';
import aboutCtaImage from '../assets/images/hero/about_hero_section.png';

function AboutCta() {
  return (
    <section className="relative w-full bg-sd-navy py-24 overflow-hidden text-white">
      <div
        className="absolute inset-0 opacity-70 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutCtaImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-sd-navy/80 via-sd-navy/95 to-sd-navy"></div>
      <div className="relative max-w-[1280px] mx-auto px-6 text-center flex flex-col items-center gap-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent font-mono text-xs font-bold">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          JOIN THE HERITAGE
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            THIS IS SD.
          </h2>
          <span className="text-2xl sm:text-3xl font-extrabold text-accent tracking-wide">
            Learn. Build. Engineer.
          </span>
        </div>
        <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
          Whether you are preparing to launch your engineering career through our intensive diploma
          or seeking top-tier software engineers for your technology team, the Software Development
          Department welcomes you.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-all shadow-[0_0_25px_color-mix(in_srgb,var(--color-primary)_50%,transparent)] group"
            href="#tracks"
          >
            <span>Explore Academic Tracks</span>
            <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
          <a
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-sm hover:bg-white/20 transition-all shadow-md"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px] text-accent">code</span>
            <span>View Student Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function TracksCta() {
  return (
    <>
      <section className="px-4 py-16 lg:px-8 lg:py-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-sd-navy px-7 py-12 text-sd-white sm:px-12 lg:px-16 lg:py-16">
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-sd-teal/15 blur-3xl" />

          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.17em] text-sd-teal">
                Continue Your Journey
              </span>

              <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Found a Track That Interests You?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-sd-white/60">
                Explore the Professional Training Program and learn more about admission
                requirements, curriculum, and the next intake.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/programs/ptp"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground"
              >
                Explore PTP
                <ArrowRight size={16} />
              </a>

              <a
                href="/intakes"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-sd-white/20 bg-sd-white/5 px-6 py-3.5 text-sm font-bold"
              >
                View Intakes
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Cta({ variant }) {
  if (variant === 'about') return <AboutCta />;
  if (variant === 'tracks') return <TracksCta />;
  throw new Error(`Unknown Cta variant: ${variant}`);
}

export default Cta;
