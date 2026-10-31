import EmptyState from '@/components/EmptyState';
import { Button, ButtonLink } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight, Code, ExternalLink, Sparkles } from 'lucide-react';

import { projects } from '@/features/projects/data';

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
    <section className="relative overflow-hidden bg-sd-navy py-16 lg:py-24 text-sd-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -end-48 -top-48 h-[430px] w-[430px] rounded-full bg-sd-teal/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-48 start-[20%] h-[420px] w-[420px] rounded-full bg-primary/15 blur-[120px]" />

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
            <ButtonLink
              to="/projects"
              variant="link-accent"
              className="me-2 hidden font-bold sm:inline-flex"
            >
              Explore Projects Hub
              <ArrowRight size={16} />
            </ButtonLink>
            {projects.length > 1 && (
              <>
                <Button
                  variant="glass"
                  size="icon-lg"
                  className="rounded-full"
                  aria-label="Previous project"
                  onClick={() => emblaApi?.scrollPrev()}
                >
                  <ArrowLeft size={18} />
                </Button>

                <Button
                  size="icon-lg"
                  className="rounded-full"
                  aria-label="Next project"
                  onClick={() => emblaApi?.scrollNext()}
                >
                  <ArrowRight size={18} />
                </Button>
              </>
            )}{' '}
          </div>
        </div>

        {/* ==================================================
            CAROUSEL
        ================================================== */}

        {projects.length === 0 ? (
          <EmptyState
            tone="dark"
            className="mt-12"
            icon={Sparkles}
            title="No projects to showcase yet"
            message="Standout projects will appear here once they are published."
          />
        ) : (
          <div ref={emblaRef} className="mt-12 overflow-hidden">
            <div className="-ms-4 flex">
              {projects.slice(0, 6).map((project, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className="
                  min-w-0
                  shrink-0
                  grow-0
                  basis-[86%]
                  ps-4
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
        )}

        {/* mobile CTA */}
        <div className="mt-8 sm:hidden">
          <ButtonLink to="/projects" variant="link-accent" className="font-bold">
            Explore Projects Hub
            <ArrowRight size={16} />
          </ButtonLink>{' '}
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
        rounded-3xl
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
        <span className="absolute end-4 top-4 font-mono text-[9px] font-bold text-sd-white/35">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Best badge */}
        <div
          className="
            absolute start-4 top-4
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
        <div className="absolute bottom-4 start-4 end-4">
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
              <ButtonLink
                href={project.github}
                external
                variant="glass"
                size="icon-sm"
                className="rounded-full"
                aria-label={`${project.title} source code`}
              >
                <Code size={13} />
              </ButtonLink>
            )}
            {project.liveDemo && (
              <ButtonLink
                href={project.liveDemo}
                external
                variant="glass"
                size="icon-sm"
                className="rounded-full"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink size={13} />
              </ButtonLink>
            )}{' '}
          </div>
        </div>
      </div>

      {/* Hover bottom accent */}
      <div
        className="
          absolute bottom-0 start-0
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
