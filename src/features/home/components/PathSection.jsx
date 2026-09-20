import SectionHeader from '@/components/SectionHeader';
import { ArrowRight, BookOpen, Clock3, Layers3, MapPin, X } from 'lucide-react';

import { programs, tracks } from '@/constants';
import { Link } from 'react-router';
import Month9Section from './Month9Section';
import { useState } from 'react';
import Month4Section from './Month4Section';

function PathSection() {
  const [showProgram, setShowProgram] = useState(null);
  const smartVillageTracks = tracks
    .filter((track) => track.program === 'PTP' && track.branches?.includes('Smart Village'))
    .slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-sd-bg-light py-20 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-accent/5 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-[110px]" />

      <div className="relative mx-auto w-[90%] max-w-7xl">
        {/* ==================================================
            HEADER
        ================================================== */}

        <SectionHeader
          eyebrow="Programs & Tracks"
          title="Choose Your Path"
          description="Start with the program that fits your journey, then explore the main technical tracks currently offered at Smart Village."
          action="Explore All Programs"
        />

        {/* ==================================================
            PROGRAMS
        ================================================== */}

        <div className="mt-12 grid gap-6 lg:grid-cols-2 ">
          {programs.map((program) => (
            <article
              key={program.code}
              onClick={() => {
                setShowProgram(program.code);
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                p-8
                transition
                duration-300
                lg:p-10
                hover:border-primary
                cursor-pointer
                ${
                  program.featured
                    ? 'border-sd-navy bg-sd-navy text-sd-white'
                    : 'border-border bg-card text-card-foreground'
                }
              `}
            >
              {/* decorative circle */}
              <div
                className={`
                  absolute right-0 top-0
                  h-40 w-40
                  translate-x-1/3
                  -translate-y-1/3
                  rounded-full
                  ${program.featured ? 'bg-sd-teal/10' : 'bg-primary/10'}
                `}
              />

              <div className="relative">
                <div className="mb-8 flex items-start justify-between gap-5">
                  <div>
                    <span
                      className={`
                        font-mono
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        ${program.featured ? 'text-sd-teal' : 'text-primary'}
                      `}
                    >
                      {program.code}
                    </span>

                    <div
                      className={`
                        mt-2
                        text-sm
                        font-semibold
                        ${program.featured ? 'text-sd-white/60' : 'text-muted-foreground'}
                      `}
                    >
                      {program.duration}
                    </div>
                  </div>

                  <div
                    className={`
                      rounded-2xl
                      p-3
                      shadow-sm
                      ${
                        program.featured
                          ? 'bg-sd-white/10 text-sd-teal'
                          : 'bg-secondary text-primary'
                      }
                    `}
                  >
                    <BookOpen size={24} />
                  </div>
                </div>

                <h3 className="max-w-xl text-3xl font-extrabold tracking-tight lg:text-4xl">
                  {program.title}
                </h3>

                <p
                  className={`
                    mt-5
                    max-w-xl
                    leading-7
                    ${program.featured ? 'text-sd-white/65' : 'text-muted-foreground'}
                  `}
                >
                  {program.description}
                </p>

                <div
                  className={`
                    my-8
                    grid
                    grid-cols-2
                    gap-3
                    border-y
                    py-5
                    ${program.featured ? 'border-sd-white/10' : 'border-border'}
                  `}
                >
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Layers3
                      size={17}
                      className={program.featured ? 'text-sd-teal' : 'text-accent'}
                    />

                    {program.tracks}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <MapPin
                      size={17}
                      className={program.featured ? 'text-sd-teal' : 'text-accent'}
                    />

                    {program.branches}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setShowProgram(program.code);
                  }}
                  className={`
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    ${program.featured ? 'text-sd-teal' : 'text-primary'}
                  `}
                >
                  Explore {program.code}
                  <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* ==================================================
            TRACKS
        ================================================== */}

        <div className="mt-20">
          {/* track section heading */}
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                  Smart Village · PTP
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />

                <span className="text-xs font-semibold text-muted-foreground">9-Month Program</span>
              </div>

              <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
                Three Main Technical Tracks
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                Explore the primary System Development paths currently available through the
                Professional Training Program at Smart Village.
              </p>
            </div>

            <Link
              to="/tracks"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-2
                text-sm
                font-bold
                text-primary
              "
            >
              View All Tracks
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* compact track cards */}
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {smartVillageTracks.map((track, index) => (
              <TrackCard key={track.id} track={track} index={index} />
            ))}
          </div>
        </div>
      </div>

      {showProgram === 'ITP' && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-sd-navy/70 p-4 backdrop-blur-sm sm:p-6"

          onClick={() => {
            setShowProgram(null);
          }}
        >
          <div
            className="relative max-h-[90vh] w-[80%]  overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"

            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              type="button"
              onClick={() => {
                setShowProgram(null);
              }}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-sd-navy/80 text-white backdrop-blur-md transition-colors hover:bg-primary"
              aria-label="Close project details"
            >
              <X size={20} />
            </button>
            <Month4Section />
          </div>
        </div>
      )}
      {showProgram === 'PTP' && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-sd-navy/70 p-4 backdrop-blur-sm sm:p-6"

          onClick={() => {
            setShowProgram(null);
          }}
        >
          <div
            className="relative max-h-[90vh] w-[80%]  overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"

            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              type="button"
              onClick={() => {
                setShowProgram(null);
              }}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-sd-navy/80 text-white backdrop-blur-md transition-colors hover:bg-primary"
              aria-label="Close project details"
            >
              <X size={20} />
            </button>
            <Month9Section />
          </div>
        </div>
      )}
    </section>
  );
}

/* ============================================================
   TRACK CARD
============================================================ */

function TrackCard({ track, index }) {
  const Icon = track.icon;

  const styles = [
    {
      rail: 'bg-sd-teal',
      icon: 'bg-sd-teal/10 text-sd-teal',
      label: 'text-sd-teal',
      number: 'text-sd-teal/[0.07]',
      hover: 'hover:border-sd-teal/30',
      arrow: 'group-hover/card:bg-sd-teal group-hover/card:text-white',
    },

    {
      rail: 'bg-primary',
      icon: 'bg-primary/10 text-primary',
      label: 'text-primary',
      number: 'text-primary/[0.06]',
      hover: 'hover:border-primary/30',
      arrow: 'group-hover/card:bg-primary group-hover/card:text-primary-foreground',
    },

    {
      rail: 'bg-sd-navy dark:bg-sd-teal',
      icon: 'bg-sd-navy/10 text-sd-navy dark:bg-sd-teal/10 dark:text-sd-teal',
      label: 'text-sd-navy dark:text-sd-teal',
      number: 'text-sd-navy/[0.05] dark:text-sd-teal/[0.06]',
      hover: 'hover:border-sd-navy/25 dark:hover:border-sd-teal/30',
      arrow:
        'group-hover/card:bg-sd-navy group-hover/card:text-white dark:group-hover/card:bg-sd-teal',
    },
  ];

  const style = styles[index % styles.length];

  return (
    <article
      className={`
        group/card
        relative
        flex
        min-h-[330px]
        flex-col
        overflow-hidden
        rounded-[26px]
        border border-border
        bg-card
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:shadow-xl
        ${style.hover}
      `}
    >
      {/* top rail */}
      <div className={`h-1.5 w-full ${style.rail}`} />

      {/* large faded number */}
      <span
        className={`
          pointer-events-none
          absolute
          right-3
          top-3
          select-none
          text-[90px]
          font-black
          leading-none
          tracking-[-0.08em]
          ${style.number}
        `}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative flex flex-1 flex-col p-6">
        {/* icon */}
        <div
          className={`
            flex h-12 w-12
            items-center
            justify-center
            rounded-2xl
            ${style.icon}
          `}
        >
          <Icon size={22} />
        </div>

        {/* category */}
        <span
          className={`
            mt-6
            font-mono
            text-[9px]
            font-bold
            uppercase
            tracking-[0.15em]
            ${style.label}
          `}
        >
          {track.category}
        </span>

        {/* title */}
        <h4 className="mt-2 max-w-[270px] text-xl font-extrabold leading-snug tracking-[-0.025em]">
          {track.shortTitle}
        </h4>

        {/* tech */}
        <div className="mt-5 flex flex-wrap gap-2">
          {track.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="
                  rounded-full
                  border border-border
                  bg-secondary/70
                  px-2.5 py-1
                  font-mono
                  text-[9px]
                  font-semibold
                  text-secondary-foreground
                "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* footer */}
        <div className="mt-auto pt-7">
          <div className="flex items-end justify-between border-t border-border pt-5">
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-muted-foreground">
                <MapPin size={12} className="text-accent" />
                Smart Village
              </div>

              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-muted-foreground">
                <Clock3 size={12} className="text-accent" />

                {track.duration}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PathSection;
