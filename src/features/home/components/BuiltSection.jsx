import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

import { projects } from '@/constants';
import { Link } from 'react-router';

function BuiltSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'center',
      loop: true,
      containScroll: 'trimSnaps',
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <section className="relative overflow-hidden bg-sd-navy py-20 text-sd-white lg:py-28">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -right-48 -top-48 h-[430px] w-[430px] rounded-full bg-sd-teal/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-48 left-[20%] h-[420px] w-[420px] rounded-full bg-primary/15 blur-[120px]" />

      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.035]
          bg-grid2
        "
      />

      <div className="relative mx-auto w-[90%] max-w-7xl">
        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sd-teal/20 bg-sd-teal/10 px-3 py-1.5">
              <Sparkles size={13} className="text-sd-teal" />

              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.17em] text-sd-teal">
                Best of Each Intake
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-extrabold leading-[1] tracking-[-0.04em] sm:text-5xl">
              Projects That
              <span className="block text-sd-teal">Stood Out.</span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-sd-white/55">
              A curated showcase of standout projects built by System Development students across
              recent intakes.
            </p>
          </div>

          {/* Header actions */}
          <div className="flex items-center gap-3">
            <Link
              to={'/projects'}
              className="
                mr-2 hidden items-center gap-2
                text-sm font-bold text-sd-teal
                transition-all
                hover:gap-3
                sm:inline-flex
              "
            >
              Explore Projects Hub
              <ArrowRight size={16} />
            </Link>

            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                border border-sd-white/10
                bg-sd-white/[0.05]
                text-sd-white
                transition-all
                hover:-translate-y-0.5
                hover:border-sd-teal/30
                hover:bg-sd-teal/10
                hover:text-sd-teal
              "
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                bg-primary
                text-primary-foreground
                shadow-lg shadow-primary/15
                transition-all
                hover:-translate-y-0.5
                hover:bg-primary/90
              "
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* ==================================================
            CAROUSEL
        ================================================== */}

        <div ref={emblaRef} className="mt-12 overflow-hidden">
          <div className="-ml-4 flex">
            {projects.slice(0, 6).map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="
                  min-w-0
                  shrink-0
                  grow-0
                  basis-[86%]
                  pl-4
                  sm:basis-[52%]
                  lg:basis-[34%]
                  xl:basis-[28%]
                "
              >
                <ProjectShowcaseCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* mobile CTA */}
        <div className="mt-8 sm:hidden">
          <Link
            to={'/projects'}
            className="inline-flex items-center gap-2 text-sm font-bold text-sd-teal"
          >
            Explore Projects Hub
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROJECT CARD
============================================================ */

function ProjectShowcaseCard({ project, index }) {
  const technologies = project.technologies?.slice(0, 3) || [];

  return (
    <article
      className="
        group relative
        h-full
        overflow-hidden
        rounded-[26px]
        border border-sd-white/10
        bg-sd-white/[0.045]
        transition-all duration-300
        hover:-translate-y-1.5
        hover:border-sd-teal/25
        hover:bg-sd-white/[0.065]
        hover:shadow-2xl
        hover:shadow-black/20
      "
    >
      {/* ==================================================
          IMAGE
      ================================================== */}

      <div className="relative aspect-[16/11] overflow-hidden bg-sd-white/[0.04]">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-full w-full
            object-cover
            transition duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-linear-to-t from-sd-navy/95 via-sd-navy/15 to-transparent" />

        {/* card number */}
        <span className="absolute right-4 top-4 font-mono text-[9px] font-bold text-sd-white/35">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Best badge */}
        <div
          className="
            absolute left-4 top-4
            inline-flex items-center gap-1.5
            rounded-full
            border border-sd-teal/20
            bg-sd-navy/80
            px-3 py-1.5
            backdrop-blur
          "
        >
          <Sparkles size={10} className="text-sd-teal" />

          <span className="font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-sd-teal">
            Best of Intake
          </span>
        </div>

        {/* Category over image */}
        <div className="absolute bottom-4 left-4 right-4">
          <span className="font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-sd-teal">
            {project.category}
          </span>
        </div>
      </div>

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="truncate text-xl font-extrabold tracking-[-0.02em] text-sd-white">
              {project.title}
            </h3>

            <p className="mt-1 text-[11px] font-semibold text-sd-white/45">
              {project.program} · {project.branch}
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border border-sd-white/10
                bg-sd-white/[0.04]
                px-2.5 py-1
                font-mono text-[8px] font-semibold
                text-sd-white/60
              "
            >
              {technology}
            </span>
          ))}

          {project.technologies?.length > 3 && (
            <span
              className="
                rounded-full
                border border-sd-white/10
                bg-sd-white/[0.04]
                px-2.5 py-1
                font-mono text-[8px] font-semibold
                text-sd-white/40
              "
            >
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* ==================================================
            CARD FOOTER
        ================================================== */}

        <div className="mt-5 flex items-center justify-between border-t border-sd-white/10 pt-4">
          <span className="font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-sd-white/35">
            Standout Project
          </span>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full
                  border border-sd-white/10
                  bg-sd-white/[0.04]
                  text-sd-white/45
                  transition
                  hover:border-sd-teal/30
                  hover:bg-sd-teal/10
                  hover:text-sd-teal
                "
              >
                <Sparkles size={13} />
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full
                  border border-sd-white/10
                  bg-sd-white/[0.04]
                  text-sd-white/45
                  transition
                  hover:border-primary/30
                  hover:bg-primary/10
                  hover:text-primary
                "
              >
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hover bottom accent */}
      <div
        className="
          absolute bottom-0 left-0
          h-0.5 w-0
          bg-primary
          transition-all duration-500
          group-hover:w-full
        "
      />
    </article>
  );
}

export default BuiltSection;
