import programsHero from '../../../assets/images/about_hero_section.png';
import programsHero2 from '../../../assets/images/hero1.png';
import programsHero3 from '../../../assets/images/about2.png';
import { useEffect, useState } from 'react';

const ProgramsHero = () => {
  const [heroSlides] = useState([
    {
      image: programsHero,
      title: 'Smart Village & Creativa Studios',
      subtitle: 'Live Production Cohorts • Pair Programming',
      badge: 'ACTIVE',
      credential: 'MCIT State Fellowship',
    },
    {
      image: programsHero2,
      title: 'Software Engineering Labs',
      subtitle: 'Hands-on Learning • Production Workflows',
      badge: 'ACTIVE',
      credential: 'Official ITI Program',
    },
    {
      image: programsHero3,
      title: 'Collaborative Engineering',
      subtitle: 'Team Projects • Architecture Reviews',
      badge: 'ACTIVE',
      credential: 'MCIT State Fellowship',
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <>
      <div className="relative lg:col-span-5">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          <div className="relative h-115">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.title}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'z-10 opacity-100' : 'z-0 opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-sd-navy/85 via-sd-navy/20 to-transparent" />
                <div className="absolute bottom-8 left-5 right-5 flex items-center justify-between rounded-xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <span className="material-symbols-outlined text-[22px]">code_blocks</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white">{slide.title}</span>
                      <span className="font-mono text-[11px] text-white/75">{slide.subtitle}</span>
                    </div>
                  </div>
                  <span className="rounded-full bg-primary px-2.5 py-1 font-mono text-[11px] font-bold text-white">
                    {slide.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() =>
              setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
            }
            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-sd-navy/60 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-primary group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>
          <button
            type="button"
            onClick={() =>
              setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
            }
            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-sd-navy/60 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-primary group-hover:opacity-100"
            aria-label="Next slide"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
          <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-7 bg-primary' : 'w-1.5 bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Official Credential */}
        <div className="absolute -bottom-9.5 left-1/2 z-50 hidden w-65 -translate-x-1/2 translate-y-1/2 items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-xl sm:flex">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="material-symbols-outlined text-[24px]">school</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[11px] font-bold uppercase text-primary">
              Official Credential
            </span>
            <span className="text-sm font-bold text-card-foreground">
              {heroSlides[currentSlide].credential}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramsHero;
