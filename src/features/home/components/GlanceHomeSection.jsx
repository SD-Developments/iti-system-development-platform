import JourneyItem from '@/components/JourneyItem';
import JourneyRow from '@/components/JourneyRow';
import SectionHeader from '@/components/SectionHeader';
import img1 from '../../../assets/images/Requra.png';
import img2 from '../../../assets/images/hero1.png';
import {
  ArrowRight,
  BookOpen,
  Code2,
  MapPin,
  Users,
  Layers3,
  Lightbulb,
  Rocket,
  Trophy,
  Presentation,
  BriefcaseBusiness,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { programs, tracks } from '@/constants';

const projects = [
  {
    title: 'Requra.AI',
    category: 'AI Requirements Engineering',
    description:
      'An intelligent platform that supports requirements analysis, generation, and collaboration.',
    technologies: ['React', '.NET', 'Python', 'AI'],
    meta: 'PTP · Smart Village',
    image: '/images/projects/requra.jpg',
  },
  {
    title: 'Smart Campus',
    category: 'Campus Management Platform',
    description:
      'A unified digital platform connecting students, instructors, sessions, and academic operations.',
    technologies: ['Angular', '.NET', 'SQL'],
    meta: 'PTP · Alexandria',
    image: '/images/projects/smart-campus.jpg',
  },
  {
    title: 'HealthConnect',
    category: 'Digital Healthcare',
    description:
      'A healthcare solution designed around accessible digital services and structured patient journeys.',
    technologies: ['React', 'Node.js', 'Cloud'],
    meta: 'ITP · Mansoura',
    image: '/images/projects/health-connect.jpg',
  },
];

const activities = [
  {
    title: 'Tech Talks',
    description: 'Learn directly from engineers and technology leaders.',
    icon: Presentation,
    image: '/images/activities/tech-talk.jpg',
  },
  {
    title: 'Hackathons',
    description: 'Solve challenges, experiment, and build under pressure.',
    icon: Trophy,
    image: '/images/activities/hackathon.jpg',
  },
  {
    title: 'Workshops',
    description: 'Hands-on sessions focused on practical engineering skills.',
    icon: Code2,
    image: '/images/activities/workshop.jpg',
  },
  {
    title: 'Company Visits',
    description: 'Experience technology teams and working environments.',
    icon: BriefcaseBusiness,
    image: '/images/activities/company-visit.jpg',
  },
];

const partners = ['Microsoft', 'IBM', 'Oracle', 'Valeo', 'Vodafone', 'Orange'];

function GlanceHomeSection() {
  return (
    <>
      {/* ======================================================
          02 — CHOOSE YOUR PATH
      ====================================================== */}

      <section className="py-20 lg:py-28 bg-sd-bg-light">
        <div className="mx-auto w-[90%] max-w-7xl">
          <SectionHeader
            eyebrow="Programs & Tracks"
            title="Choose Your Path"
            description="Start with the program that fits your journey, then explore the technical track and branch available to you."
            action="Explore All Programs"
          />

          {/* Programs */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.code}
                className={`group relative overflow-hidden rounded-3xl border p-8 transition duration-300 lg:p-10 ${
                  program.featured
                    ? 'border-sd-navy bg-sd-navy text-sd-white'
                    : 'border-border bg-card text-card-foreground'
                }`}
              >
                <div
                  className={`absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full ${
                    program.featured ? 'bg-sd-teal/10' : 'bg-primary/10'
                  }`}
                />

                <div className="relative">
                  <div className="mb-8 flex items-start justify-between gap-5">
                    <div>
                      <span
                        className={`font-mono text-xs font-bold uppercase tracking-[0.18em] ${
                          program.featured ? 'text-sd-teal' : 'text-primary'
                        }`}
                      >
                        {program.code}
                      </span>

                      <div
                        className={`mt-2 text-sm font-semibold ${
                          program.featured ? 'text-sd-white/60' : 'text-muted-foreground'
                        }`}
                      >
                        {program.duration}
                      </div>
                    </div>

                    <div
                      className={`rounded-2xl p-3 shadowbox ${
                        program.featured
                          ? 'bg-sd-white/10 text-sd-teal'
                          : 'bg-secondary text-primary'
                      }`}
                    >
                      <BookOpen size={24} />
                    </div>
                  </div>

                  <h3 className="max-w-xl text-3xl font-extrabold tracking-tight lg:text-4xl">
                    {program.title}
                  </h3>

                  <p
                    className={`mt-5 max-w-xl leading-7 ${
                      program.featured ? 'text-sd-white/65' : 'text-muted-foreground'
                    }`}
                  >
                    {program.description}
                  </p>

                  <div
                    className={`my-8 grid grid-cols-2 gap-3 border-y py-5 ${
                      program.featured ? 'border-sd-white/10' : 'border-border'
                    }`}
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

                  <a
                    href={program.href}
                    className={`inline-flex items-center gap-2 text-sm font-bold ${
                      program.featured ? 'text-sd-teal' : 'text-primary'
                    }`}
                  >
                    Explore {program.code}
                    <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Tracks */}
          <div className="mt-16">
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Technical Paths
                </span>

                <h3 className="mt-2 text-2xl font-extrabold tracking-tight">
                  Explore Featured Tracks
                </h3>
              </div>

              <a
                href="/tracks"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                View All Tracks
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {tracks.map((track) => (
                <article
                  key={track.title}
                  className="group rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h4 className="text-lg font-bold text-card-foreground">{track.title}</h4>

                      <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
                        {track.description}
                      </p>
                    </div>

                    <ArrowRight
                      size={18}
                      className="shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary"
                    />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {track.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-secondary px-3 py-1.5 font-mono text-[11px] font-semibold text-secondary-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <BookOpen size={14} className="text-accent" />
                      {track.program}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-accent" />
                      {track.branches}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          03 — BUILT AT SD
      ====================================================== */}

      <section className="relative overflow-hidden bg-sd-navy py-20 text-sd-white lg:py-28">
        <div className="pointer-events-none absolute -right-48 -top-48 h-96 w-96 rounded-full bg-sd-teal/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto w-[90%] max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-sd-teal">
                Student Projects
              </span>

              <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Built at SD
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-sd-white/60">
                Real teams building real systems. Explore selected projects created through the
                System Development journey.
              </p>
            </div>

            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-sd-teal"
            >
              Explore All Projects
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            {/* Featured project */}
            <article className="group overflow-hidden rounded-3xl border border-sd-white/10 bg-sd-white/5 lg:col-span-7">
              <div className="relative aspect-video overflow-hidden bg-sd-white/5">
                <img
                  src={img1}
                  alt={projects[0].title}
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-sd-navy via-sd-navy/10 to-transparent" />
              </div>

              <div className="p-7 lg:p-8">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-sd-teal">
                  Featured Project
                </span>

                <h3 className="mt-3 text-3xl font-extrabold">{projects[0].title}</h3>

                <p className="mt-1 text-sm font-semibold text-sd-white/55">
                  {projects[0].category}
                </p>

                <p className="mt-4 max-w-xl text-sm leading-6 text-sd-white/65">
                  {projects[0].description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {projects[0].technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-sd-teal/20 bg-sd-teal/10 px-3 py-1.5 font-mono text-[11px] text-sd-teal"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-sd-white/10 pt-5">
                  <span className="text-xs text-sd-white/50">{projects[0].meta}</span>

                  <a
                    href="/projects/requra"
                    className="flex items-center gap-2 text-sm font-bold text-sd-teal"
                  >
                    View Project
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>

            {/* Secondary projects */}
            <div className="flex flex-col gap-5 lg:col-span-5">
              {projects.slice(1).map((project) => (
                <article
                  key={project.title}
                  className="group flex flex-1 flex-col justify-between rounded-3xl border border-sd-white/10 bg-sd-white/5 p-7 transition hover:bg-sd-white/10"
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-sd-teal">
                        {project.meta}
                      </span>

                      <ArrowRight
                        size={18}
                        className="text-sd-white/40 transition group-hover:translate-x-1 group-hover:text-sd-teal"
                      />
                    </div>

                    <h3 className="text-2xl font-bold">{project.title}</h3>

                    <p className="mt-1 text-sm font-medium text-sd-white/50">{project.category}</p>

                    <p className="mt-4 text-sm leading-6 text-sd-white/60">{project.description}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-sd-white/5 px-3 py-1.5 font-mono text-[10px] text-sd-white/70"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          04 — LIFE INSIDE SD
      ====================================================== */}

      <section className="py-20 lg:py-28">
        <div className="mx-auto w-[90%] max-w-7xl">
          <SectionHeader
            eyebrow="The Community"
            title="Life Inside SD"
            description="Learning happens beyond lectures — through collaboration, workshops, competitions, industry exposure, and shared experiences."
            action="Explore Activities"
          />

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
            {/* Large image */}
            <article className="group relative min-h-107.5 overflow-hidden rounded-3xl lg:col-span-7">
              <img
                src={img2}
                alt="SD students collaborating"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-sd-navy via-sd-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-sd-white lg:p-8">
                <Badge>Together at SD</Badge>
                <h3 className="mt-2 text-3xl font-extrabold">Learn together. Build together.</h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-sd-white/70">
                  Collaboration is part of the learning experience — from labs and project teams to
                  technical communities.
                </p>
              </div>
            </article>

            {/* Activity cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-5">
              {activities.map((activity) => {
                const Icon = activity.icon;

                return (
                  <article
                    key={activity.title}
                    className="group overflow-hidden rounded-2xl border border-border bg-card"
                  >
                    <div className="relative h-36 overflow-hidden bg-secondary">
                      <img
                        src={img2}
                        alt={activity.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute left-4 top-4 rounded-xl bg-card/90 p-2 text-primary shadow-sm backdrop-blur">
                        <Icon size={18} />
                      </div>
                    </div>

                    <div className="p-5">
                      <h4 className="font-bold text-card-foreground">{activity.title}</h4>

                      <p className="mt-2 text-xs leading-5 text-muted-foreground">
                        {activity.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Journey */}
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            <JourneyItem
              number="01"
              icon={<BookOpen size={22} />}
              title="Learn"
              text="Build strong technical foundations."
            />

            <JourneyItem
              number="02"
              icon={<Lightbulb size={22} />}
              title="Build"
              text="Turn knowledge into working solutions."
            />

            <JourneyItem
              number="03"
              icon={<Users size={22} />}
              title="Collaborate"
              text="Work with peers, instructors, and teams."
            />

            <JourneyItem
              number="04"
              icon={<Rocket size={22} />}
              title="Ship"
              text="Deliver projects with real impact."
            />
          </div>
        </div>
      </section>

      {/* ======================================================
          05 — STUDENT TO INDUSTRY
      ====================================================== */}

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

      {/* ======================================================
          06 — PARTNERS
      ====================================================== */}

      <section className="bg-card py-12">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.17em] text-primary">
                Industry Connection
              </span>

              <h3 className="mt-2 text-xl font-bold text-card-foreground">
                Learning Connected to Industry
              </h3>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:justify-end">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="text-sm font-bold text-muted-foreground transition hover:text-foreground"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          07 — FINAL CTA
      ====================================================== */}

      <section className="px-4 py-14 lg:px-8 lg:py-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-sd-navy px-7 py-12 text-sd-white sm:px-12 lg:px-16 lg:py-16">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-sd-teal/15 blur-3xl" />

          <div className="absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-sd-teal">
                Start Your Journey
              </span>

              <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Ready to Build What's Next?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-sd-white/60">
                Explore the program, track, and learning journey that fits your goals.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/programs/ptp"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground"
              >
                PTP · 9 Months
                <ArrowRight size={17} />
              </a>

              <a
                href="/programs/itp"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-sd-white/20 bg-sd-white/5 px-6 py-3.5 text-sm font-bold text-sd-white transition hover:bg-sd-white/10"
              >
                ITP · 4 Months
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GlanceHomeSection;
