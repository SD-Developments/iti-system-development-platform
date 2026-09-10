import { heorHomeSlides } from '@/constants';
import clsx from 'clsx';
import { ArrowRight, BookOpen, Code2, Layers3, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

function HeroCarousel() {
  const [currSlide, setCurrSlide] = useState(0);
  const slide = heorHomeSlides[currSlide];
  useEffect(() => {
    let id = setInterval(() => {
      setCurrSlide((prev) => (prev + 1) % heorHomeSlides.length);
    }, 5000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <section
        className={clsx(`relative max-h-screen w-full  pb-15 pt-5`, {
          'bg-foreground text-background': slide.theme === 'dark',
          'bg-background text-foreground': slide.theme === 'light',
        })}
      >
        <div className="mx-auto flex flex-col lg:flex-row w-[90%] items-center ">
          <div className="my-5 w-1/2">
            <div className="mb-7 tracking-wider font-semibold text-md text-sd-gray">
              {String(currSlide + 1).padStart(2, '0')} /{' '}
              {String(HeroCarousel.length).padStart(2, '0')}
            </div>
            <div className="mb-7 text-xs font-bold tracking-[0.24em] text-sd-teal">
              {slide.eyebrow}
            </div>
            <h1 className="m-0 text-4xl font-extrabold leading-[0.92] tracking-[-0.055em] sm:text-[64px] md:text-[76px] lg:text-[92px]">
              {slide.title}
            </h1>
            <div
              className={`mt-7 text-[22px] leading-snug md:text-[28px] ${
                slide.theme === 'dark' ? 'text-slate-300' : 'text-sd-gray'
              }`}
            >
              {slide.subtitle}
            </div>
            <p
              className={`mt-6 max-w-140 text-base leading-8 md:text-lg ${
                slide.theme === 'dark' ? 'text-slate-400' : 'text-sd-gray'
              }`}
            >
              {slide.description}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex min-h-13 items-center justify-center gap-2 rounded-[14px] bg-primary px-6 font-bold text-background shadow-lg shadow-red-900/10 transition hover:-translate-y-0.5">
                {slide.primaryCta}
                <ArrowRight size={18} />
              </button>

              <button
                className={`inline-flex min-h-13 items-center justify-center rounded-[14px] border border-sd-teal px-6 font-bold transition hover:-translate-y-0.5 ${
                  slide.theme === 'dark' ? 'text-background' : 'text-foreground'
                }`}
              >
                {slide.secondaryCta}
              </button>
            </div>
          </div>
          <div className="flex  w-1/2 items-center justify-center">
            <HeroVisual type={slide.visual} />
          </div>
        </div>
        <div className="absolute right-1 rotate-90 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center gap-4 ">
          <div className="flex items-center gap-2">
            {heorHomeSlides.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currSlide ? 'w-7 bg-primary' : 'w-2.5 bg-sd-gray'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="absolute -bottom-11 left-1/2 -translate-x-1/2 z-20 mt-8 hidden lg:grid w-[80%] grid-cols-1 gap-5 rounded-[22px] border border-muted bg-background/90 px-6 py-6 shadow-lg shadow-slate-900/5 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
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
    </>
  );
}

function ProofItem({ icon, title, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-[#14B8A6]">{icon}</div>
      <div>
        <strong className="block text-sm text-[#0F172A]">{title}</strong>
        <span className="mt-1 block text-xs text-[#64748B]">{text}</span>
      </div>
    </div>
  );
}

function HeroVisual({ type }) {
  if (type === 'programs') {
    return (
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
        <div className="min-h-95 rounded-[28px] bg-linear-to-br from-[#0F172A] to-[#111C2D] p-8 text-background shadow-xl">
          <span className="font-extrabold text-sd-teal">PTP</span>

          <h3 className="mt-5 text-4xl font-bold leading-tight">9-Month Program</h3>

          <p className="mt-5 leading-7 text-slate-400">
            Intensive professional development journey with multiple tracks and branches.
          </p>

          <button className="mt-7 rounded-xl bg-[#14B8A6] px-5 py-3 font-bold text-[#08111F]">
            Explore PTP
          </button>
        </div>

        <div className="min-h-95 rounded-[28px] border border-slate-200 bg-white p-8 text-[#0F172A] shadow-xl shadow-slate-900/5">
          <span className="font-extrabold text-primabg-primary">ITP</span>

          <h3 className="mt-5 text-4xl font-bold leading-tight">4-Month Program</h3>

          <p className="mt-5 leading-7 text-[#64748B]">
            Focused accelerated learning journey for specialized technical paths.
          </p>

          <button className="mt-7 rounded-xl bg-primary px-5 py-3 font-bold text-white">
            Explore ITP
          </button>
        </div>
      </div>
    );
  }

  if (type === 'project') {
    return (
      <div className="w-full max-w-175 rounded-[30px] border border-white/10 bg-linear-to-br from-[#111C2D] to-[#08111F] p-5 shadow-2xl shadow-black/30 lg:-rotate-1">
        <div className="flex gap-2 pb-5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        </div>

        <div className="p-6">
          <span className="inline-block rounded-full bg-[#14B8A6]/10 px-3 py-2 text-xs font-bold text-[#2DD4BF]">
            Graduation Project
          </span>

          <h3 className="mt-6 text-5xl font-bold text-white">Requra.AI</h3>

          <p className="mt-3 text-slate-400">AI Requirements Engineering Platform</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {['React', '.NET', 'Python', 'AI'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#2DD4BF]/20 px-3 py-1.5 text-xs text-sd-teal"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ['24', 'Requirements'],
              ['12', 'User Stories'],
              ['6', 'Team Members'],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-background/10 bg-background/4 p-4"
              >
                <strong className="block text-2xl text-background">{value}</strong>
                <span className="mt-1 block text-xs text-slate-400">{label}</span>
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
            className="overflow-hidden rounded-[22px] border border-slate-200 bg-background shadow-lg shadow-slate-900/5"
          >
            <div className="h-40 bg-linear-to-br from-cyan-100 to-teal-50" />
            <div className="p-4 font-bold text-[#0F172A]">{title}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative min-h-117.5 w-full max-w-180">
      <div className="ml-auto flex h-100 w-full items-center justify-center rounded-[28px] bg-linear-to-br from-blue-100 to-teal-100 text-[#64748B] shadow-2xl shadow-slate-900/10 lg:w-[86%]">
        Student / Project Image
      </div>

      <div className="absolute left-0 top-16 flex flex-wrap gap-2 rounded-2xl bg-white/95 p-3 shadow-xl backdrop-blur">
        {['.NET', 'React', 'Python', 'Cloud'].map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-[#0F172A]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="absolute bottom-8 right-0 min-w-42.5 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">
        <span className="block text-xs text-[#64748B]">Ideas</span>
        <strong className="mt-1 block text-lg text-[#0F172A]">into Impact</strong>
      </div>
    </div>
  );
}

export default HeroCarousel;
