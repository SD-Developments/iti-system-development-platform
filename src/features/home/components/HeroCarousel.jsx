import { heorHomeSlides } from '@/constants';
import clsx from 'clsx';
import { ArrowRight, BookOpen, Code2, Layers3, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import hero1 from '../../../assets/images/hero1.png';
import hero2 from '../../../assets/images/requra.png';

function HeroCarousel() {
  const [currSlide, setCurrSlide] = useState(0);
  const slide = heorHomeSlides[currSlide];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrSlide((prev) => (prev + 1) % heorHomeSlides.length);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className={clsx('relative min-h-screen w-full py-20 bg-background text-foreground')}>
      <div className="mx-auto flex w-[90%] flex-col items-center lg:flex-row">
        <div className="my-5 w-full lg:w-1/2">
          <div className="mb-7 text-md font-semibold tracking-wider text-muted-foreground">
            {String(currSlide + 1).padStart(2, '0')} /{' '}
            {String(heorHomeSlides.length).padStart(2, '0')}
          </div>

          <div className="mb-7 text-xs font-bold tracking-[0.24em] text-accent">
            {slide.eyebrow}
          </div>

          <h1 className="m-0 text-4xl font-extrabold leading-[0.92] tracking-[-0.055em] sm:text-[64px] md:text-[76px] lg:text-[92px]">
            {slide.title}
          </h1>

          <div
            className={clsx('mt-7 text-[22px] leading-snug md:text-[28px] text-muted-foreground')}
          >
            {slide.subtitle}
          </div>

          <p
            className={clsx('mt-6 max-w-140 text-muted-foreground text-base leading-8 md:text-lg')}
          >
            {slide.description}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button className="inline-flex min-h-13 items-center justify-center gap-2 rounded-[14px] bg-primary px-6 font-bold text-primary-foreground shadow-lg shadow-primary/10 transition hover:-translate-y-0.5">
              {slide.primaryCta}
              <ArrowRight size={18} />
            </button>
            <button
              className={clsx(
                'inline-flex text-foreground min-h-13 items-center justify-center rounded-[14px] border border-accent px-6 font-bold transition hover:-translate-y-0.5'
              )}
            >
              {slide.secondaryCta}
            </button>
          </div>
        </div>

        <div className="flex w-full items-center justify-center lg:w-1/2">
          <HeroVisual type={slide.visual} />
        </div>
      </div>

      <div className="absolute right-1 top-1/2 z-10 flex -translate-y-1/2 rotate-90 items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          {heorHomeSlides.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrSlide(index)}
              className={clsx(
                'h-2.5 rounded-full transition-all',
                index === currSlide ? 'w-7 bg-primary' : 'w-2.5 bg-muted-foreground/40'
              )}
            />
          ))}
        </div>
      </div>

      <div className="absolute -bottom-11 left-1/2 z-20 mt-8 hidden w-[80%] -translate-x-1/2 grid-cols-1 gap-5 rounded-[22px] border border-border bg-card/90 px-6 py-6 shadowbox backdrop-blur sm:grid-cols-2 lg:grid lg:grid-cols-4">
        <ProofItem icon={<BookOpen size={24} />} title="2 Programs" text="PTP · ITP" />
        <ProofItem icon={<Layers3 size={24} />} title="Multiple Tracks" text="Build your path" />
        <ProofItem icon={<MapPin size={24} />} title="Multiple Branches" text="Across Egypt" />
        <ProofItem
          icon={<Code2 size={24} />}
          title="Real Projects"
          text="From learning to impact"
        />
      </div>
    </section>
  );
}

function ProofItem({ icon, title, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-accent">{icon}</div>

      <div>
        <strong className="block text-sm text-card-foreground">{title}</strong>

        <span className="mt-1 block text-xs text-muted-foreground">{text}</span>
      </div>
    </div>
  );
}

function HeroVisual({ type }) {
  if (type === 'programs') {
    return (
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
        <div className="min-h-95 rounded-[28px] bg-sd-navy p-8 text-sd-white shadow-xl">
          <span className="font-extrabold text-sd-teal">PTP</span>

          <h3 className="mt-5 text-4xl font-bold leading-tight text-sd-white">9-Month Program</h3>

          <p className="mt-5 leading-7 text-sd-white/65">
            Intensive professional development journey with multiple tracks and branches.
          </p>

          <button className="mt-7 rounded-xl bg-accent px-5 py-3 font-bold text-accent-foreground">
            Explore PTP
          </button>
        </div>

        <div className="min-h-95 rounded-[28px] border border-border bg-card p-8 text-card-foreground shadow-xl shadow-foreground/5">
          <span className="font-extrabold text-primary">ITP</span>

          <h3 className="mt-5 text-4xl font-bold leading-tight text-card-foreground">
            4-Month Program
          </h3>

          <p className="mt-5 leading-7 text-muted-foreground">
            Focused accelerated learning journey for specialized technical paths.
          </p>

          <button className="mt-7 rounded-xl bg-primary px-5 py-3 font-bold text-primary-foreground">
            Explore ITP
          </button>
        </div>
      </div>
    );
  }

  if (type === 'project') {
    return (
      <div className="w-full max-w-175 rounded-[30px] border border-background/10 bg-sd-navy p-5 shadow-2xl shadow-black/30 lg:-rotate-1">
        <div className="flex gap-2 pb-5">
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/50" />
        </div>

        <div className="p-6">
          <div className="flex items-center">
            <div className="w-1/2">
              <span className="inline-block rounded-full bg-accent/10 px-3 py-2 text-xs font-bold text-accent">
                Graduation Project
              </span>

              <h3 className="mt-6 text-5xl font-bold text-sd-white">Requra.AI</h3>

              <p className="mt-3 text-sd-white/60">AI Requirements Engineering Platform</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {['React', '.NET', 'JavaScript', 'AI'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent/20 px-3 py-1.5 text-xs text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-1/2 rounded-3xl">
              <img src={hero2} className="rounded-3xl object-cover w-full h-full" alt="" />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ['24', 'Requirements'],
              ['12', 'User Stories'],
              ['6', 'Team Members'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-sd-white/10 bg-sd-white/5 p-4">
                <strong className="block text-2xl text-sd-white">{value}</strong>

                <span className="mt-1 block text-xs text-sd-white/55">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'activities') {
    return (
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {['Tech Talks', 'Hackathons', 'Company Visits', 'Workshops'].map((title) => (
          <div
            key={title}
            className="rounded-[22px] border border-border bg-card shadow-lg shadow-foreground/5"
          >
            <div className="h-40 relative">
              <div className="absolute rounded-t-[22px] bg-linear-to-br from-secondary/10 to-accent/50 w-full h-full"></div>
              <img src={hero1} className="rounded-t-[22px] w-full h-full object-cover" alt="" />
            </div>

            <div className="p-4 font-bold text-card-foreground">{title}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative min-h-117.5 w-full max-w-180">
      <div className="relative ml-auto flex h-100 w-full items-center justify-center rounded-[28px] text-muted-foreground shadow-2xl shadow-foreground/10 lg:w-[86%]">
        <div className="absolute inset-0 bg-linear-to-tl rounded-[28px] from-secondary/10 to-accent/50" />
        <img src={hero1} className="h-full w-full rounded-[28px] object-cover" alt="" />{' '}
      </div>

      <div className="absolute left-0 top-16 flex flex-wrap gap-2 rounded-2xl bg-card/95 p-3 shadow-xl backdrop-blur">
        {['.NET', 'React', 'JavaScript', 'AI'].map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-muted px-3 py-2 text-xs font-bold text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="absolute bottom-8 right-0 min-w-42.5 rounded-2xl bg-card/95 p-5 shadow-xl backdrop-blur">
        <span className="block text-xs text-muted-foreground">Ideas</span>

        <strong className="mt-1 block text-lg text-card-foreground">into Impact</strong>
      </div>
    </div>
  );
}

export default HeroCarousel;
