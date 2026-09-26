import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

function SectionHeader({ eyebrow, title, description, action, href = '#', variant = 'hero' }) {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      if (!containerRef.current) return;
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

  if (variant === 'compact') {
    return (
      <div className="flex items-end justify-between mb-6 pb-2 border-b border-border">
        <div>
          <div className="flex items-center gap-2 text-sd-red font-mono text-[11px] font-bold uppercase tracking-wider mb-1">
            <span>// {eyebrow}</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        </div>
        {action && (
          <a
            href={href}
            className="text-xs font-bold text-primary hover:text-sd-red inline-flex items-center gap-1 transition-colors"
          >
            {action} <span className="text-sm">→</span>
          </a>
        )}
      </div>
    );
  }

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

      {action ? (
        <a href={href} className="inline-flex items-center gap-2 text-sm font-bold text-primary">
          {action}
        </a>
      ) : null}
    </div>
  );
}

export default SectionHeader;
