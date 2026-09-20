import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

function SectionHeader({ eyebrow, title, description, action }) {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      if (!containerRef) return;

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          end: 'top 45%',
          scrub: 1,
        },
      });
      t1.from('.head', {
        x: -100,
        duration: 1,
        opacity: 0,
        ease: 'power1.inOut',
      });
    },
    {
      scope: containerRef,
    }
  );
  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
    >
      <div className="head max-w-2xl">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </span>

        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">{description}</p>
      </div>

      {action ?? (
        <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary">
          {action}
        </a>
      )}
    </div>
  );
}

export default SectionHeader;
