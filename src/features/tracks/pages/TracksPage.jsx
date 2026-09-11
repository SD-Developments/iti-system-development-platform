import SectionHeader from '@/components/SectionHeader';
import {
  ArrowRight,
  Check,
  Code2,
  GitCompareArrows,
  Smartphone,
  Terminal,
  Workflow,
} from 'lucide-react';
import Hero from '../components/Hero';
import { partners, tracks } from '@/constants';
import Tracks from '../components/Tracks';

const compareRows = [
  {
    label: 'Primary Focus',
    mobile: 'Cross-platform mobile development',
    dotnet: 'Enterprise software & architecture',
    web: 'Full-stack web & UI engineering',
  },
  {
    label: 'Main Platforms',
    mobile: 'Flutter, React Native, .NET MAUI',
    dotnet: '.NET, Azure, Dynamics, Power BI',
    web: 'React, Angular, Vue, Next.js',
  },
  {
    label: 'AI Integration',
    mobile: 'RAG, AI Agents, AI-assisted apps',
    dotnet: 'RAG, Agents, AI for enterprise & BI',
    web: 'RAG, Agents, AI-enhanced web stacks',
  },
  {
    label: 'Program',
    mobile: 'PTP',
    dotnet: 'PTP',
    web: 'PTP',
  },
  {
    label: 'Smart Village',
    mobile: 'Available',
    dotnet: 'Available',
    web: 'Available',
  },
];

const projects = [
  {
    title: 'Requra.AI',
    track: '.NET Enterprise + AI',
    program: 'PTP',
    branch: 'Smart Village',
    description:
      'AI-assisted requirements engineering platform supporting structured analysis, collaboration, and documentation.',
    technologies: ['React', '.NET', 'Python', 'AI'],
    image: '/images/projects/requra.jpg',
  },

  {
    title: 'Smart Campus',
    track: 'Full-Stack Web + UI + AI',
    program: 'PTP',
    branch: 'Smart Village',
    description:
      'Integrated campus platform connecting students, instructors, academic operations, and digital services.',
    technologies: ['React', 'Node.js', 'SQL', 'UI/UX'],
    image: '/images/projects/smart-campus.jpg',
  },

  {
    title: 'Mobile Services Hub',
    track: 'Cross-Platform Mobile + AI',
    program: 'PTP',
    branch: 'Smart Village',
    description:
      'Cross-platform mobile solution combining mobile interfaces, cloud-backed services, and intelligent user experiences.',
    technologies: ['Flutter', 'Firebase', 'AI'],
    image: '/images/projects/mobile-services.jpg',
  },
];

const radar = [
  {
    title: 'Explore',
    subtitle: 'Emerging',
    description:
      'Technologies currently being explored and integrated into modern development practices.',
    technologies: ['AI Agents', 'RAG', 'Agentic Software', 'AI-Assisted Coding'],
    accent: true,
  },

  {
    title: 'Adopt',
    subtitle: 'Production Core',
    description: 'Technologies already used across current tracks and practical work.',
    technologies: ['React', '.NET', 'Flutter', 'Node.js', 'Docker'],
  },

  {
    title: 'Foundation',
    subtitle: 'Evergreen',
    description: 'Core engineering principles that support every specialization.',
    technologies: ['OOP', 'Algorithms', 'Databases', 'Software Engineering', 'Design Patterns'],
  },
];

const TracksPage = () => {
  return (
    <>
      <main className="bg-background text-foreground">
        <Hero />
        {/* ======================================================
          02 — TRACK EXPLORER
      ====================================================== */}

        <Tracks />

        {/* ======================================================
          04 — COMPARE TRACKS
      ====================================================== */}

        <section id="compare" className="py-20 lg:py-28">
          <div className="mx-auto w-[90%] max-w-7xl">
            <SectionHeader
              eyebrow="Compare"
              title="Which Track Fits You?"
              description="The three tracks share strong software engineering foundations but differ significantly in platform, technical focus, and the kinds of systems you will build."
            />

            <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card">
              <div className="hidden grid-cols-[1.1fr_1fr_1fr_1fr] border-b border-border bg-secondary/60 lg:grid">
                <div className="p-5" />

                <CompareHeader shortTitle="Mobile + AI" icon={<Smartphone size={19} />} />

                <CompareHeader shortTitle=".NET Enterprise + AI" icon={<Workflow size={19} />} />

                <CompareHeader shortTitle="Web + UI + AI" icon={<Code2 size={19} />} />
              </div>

              <div>
                {compareRows.map((row) => (
                  <div
                    key={row.label}
                    className="grid border-b border-border last:border-0 lg:grid-cols-[1.1fr_1fr_1fr_1fr]"
                  >
                    <div className="bg-secondary/40 p-5 text-sm font-bold">{row.label}</div>

                    <CompareValue value={row.mobile} />

                    <CompareValue value={row.dotnet} />

                    <CompareValue value={row.web} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <div className="rounded-3xl bg-sd-navy p-8 text-sd-white lg:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sd-teal/15 text-sd-teal">
                  <GitCompareArrows size={24} />
                </div>

                <h3 className="mt-7 text-3xl font-extrabold tracking-tight">
                  Start with what you want to build.
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-sd-white/65">
                  The best choice is not necessarily the track with the longest technology list.
                  Focus on the kind of systems, platforms, and development problems you want to work
                  with.
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
                  Ask Yourself
                </span>

                <div className="mt-6 space-y-5">
                  <DecisionItem
                    number="01"
                    title="Do you want to build mobile-first products?"
                    text="Start with Cross-Platform Mobile Applications Development."
                  />

                  <DecisionItem
                    number="02"
                    title="Are enterprise systems, backend architecture, BI, or CRM more interesting?"
                    text="The .NET Enterprise track is the strongest match."
                  />

                  <DecisionItem
                    number="03"
                    title="Do you prefer frontend, UI engineering, and full-stack JavaScript?"
                    text="Explore Full-Stack Web Development & UI Engineering."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
          05 — WHAT YOU WILL LEARN
      ====================================================== */}

        <section className="border-y border-border bg-secondary/35 py-20 lg:py-28">
          <div className="mx-auto w-[90%] max-w-7xl">
            <SectionHeader
              eyebrow="Learning Focus"
              title="What Each Track Is Built Around"
              description="Each track combines common software engineering foundations with a distinct technical specialization."
            />

            <div className="mt-10 space-y-5">
              {tracks.map((track, index) => (
                <TrackLearningRow key={track.id} track={track} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
          06 — PROJECTS BY TRACK
      ====================================================== */}

        <section className="bg-sd-navy py-20 text-sd-white lg:py-28">
          <div className="mx-auto w-[90%] max-w-7xl">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.17em] text-sd-teal">
                  Built Through These Tracks
                </span>

                <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
                  See What Students Build
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-sd-white/60">
                  Tracks become meaningful when technical knowledge is transformed into real working
                  systems.
                </p>
              </div>

              <a
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-bold text-sd-teal"
              >
                Explore All Projects
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
          07 — TECHNOLOGY RADAR
      ====================================================== */}

        <section className="py-20 lg:py-28">
          <div className="mx-auto w-[90%] max-w-7xl">
            <SectionHeader
              eyebrow="Technology Radar"
              title="A Curriculum That Evolves"
              description="Modern technologies continue to change, while core engineering fundamentals remain essential across every track."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {radar.map((item) => (
                <article
                  key={item.title}
                  className={`rounded-3xl border p-7 ${
                    item.accent ? 'border-primary/30 bg-primary/5' : 'border-border bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider ${
                        item.accent
                          ? 'bg-primary/10 text-primary'
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      {item.subtitle}
                    </span>

                    <Terminal size={19} className={item.accent ? 'text-primary' : 'text-accent'} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>

                  <div className="mt-6 space-y-2">
                    {item.technologies.map((technology) => (
                      <div
                        key={technology}
                        className="flex items-center justify-between rounded-xl bg-secondary/65 px-3 py-2.5"
                      >
                        <span className="font-mono text-xs font-semibold">{technology}</span>

                        <Check size={14} className="text-accent" />
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
          08 — INDUSTRY CONNECTION
      ====================================================== */}

        <section className="border-y border-border bg-card py-12">
          <div className="mx-auto w-[90%] max-w-7xl">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                  Industry Connection
                </span>

                <h3 className="mt-2 text-lg font-bold">
                  Learning connected to real industry environments
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
                {partners.map((partner) => (
                  <span key={partner} className="text-sm font-bold text-muted-foreground">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
          09 — CTA
      ====================================================== */}

        <section className="px-4 py-16 lg:px-8 lg:py-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-sd-navy px-7 py-12 text-sd-white sm:px-12 lg:px-16 lg:py-16">
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
      </main>
    </>
  );
};

function CompareHeader({ shortTitle, icon }) {
  return (
    <div className="border-l border-border p-5">
      <div className="flex items-center gap-2 text-accent">{icon}</div>

      <div className="mt-3 text-sm font-bold">{shortTitle}</div>
    </div>
  );
}

function CompareValue({ value }) {
  return (
    <div className="border-t border-border p-5 text-sm text-muted-foreground lg:border-l lg:border-t-0">
      {value}
    </div>
  );
}

function DecisionItem({ number, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary font-mono text-[11px] font-bold text-primary">
        {number}
      </div>

      <div>
        <h4 className="text-sm font-bold">{title}</h4>

        <p className="mt-1 text-xs leading-5 text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

function TrackLearningRow({ track, index }) {
  const Icon = track.icon;

  return (
    <article className="grid gap-6 rounded-3xl border border-border bg-card p-7 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Icon size={22} />
          </div>

          <div>
            <span className="font-mono text-[10px] font-bold text-primary">0{index + 1}</span>

            <h3 className="mt-1 text-lg font-bold">{track.shortTitle}</h3>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="flex flex-wrap gap-2">
          {track.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-secondary px-3 py-1.5 font-mono text-[10px] font-semibold text-secondary-foreground"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {track.jobProfiles && (
        <div className="lg:col-span-3">
          <div className="text-xs text-muted-foreground">Typical roles</div>

          <div className="mt-2 text-sm font-semibold">
            {track.jobProfiles.slice(0, 2).join(' · ')}
          </div>
        </div>
      )}
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-sd-white/10 bg-sd-white/5">
      <div className="relative aspect-[16/10] overflow-hidden bg-sd-white/5">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-sd-navy/90 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 rounded-full bg-sd-navy/80 px-3 py-1.5 font-mono text-[10px] text-sd-teal backdrop-blur">
          {project.track}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="mt-3 text-sm leading-6 text-sd-white/60">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-sd-teal/20 bg-sd-teal/10 px-3 py-1 font-mono text-[10px] text-sd-teal"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-sd-white/10 pt-5">
          <span className="text-xs text-sd-white/45">
            {project.program} · {project.branch}
          </span>

          <ArrowRight size={17} className="text-sd-teal transition group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
}

export default TracksPage;
