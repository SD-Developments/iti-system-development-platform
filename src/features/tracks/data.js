// Tracks feature data: static page copy plus UI-friendly views of the dynamic
// content that lives in src/data (tracks, programs, branches).
import {
  Braces,
  Code2,
  Database,
  Layers3,
  Palette,
  Smartphone,
  Sparkles,
  Terminal,
  TerminalSquare,
  Workflow,
} from 'lucide-react';
import {
  branches as branchRecords,
  formatDuration,
  getBranch,
  getProgram,
  getTrackCategory,
  programs as programRecords,
  t,
  tracks as trackRecords,
} from '@/data/content';

// Icons are stored as names in the data; the UI maps them to components here.
const trackIcons = {
  smartphone: Smartphone,
  workflow: Workflow,
  'code-2': Code2,
  database: Database,
  terminal: Terminal,
  palette: Palette,
};

const hoursLabel = (hours) => (hours ? `${hours} hrs` : null);
export const architectureStages = [
  {
    number: '01',
    title: 'Software Foundations',
    description:
      'Programming, OOP, algorithms, databases, software engineering, testing, and core development practices.',
    icon: Braces,
  },
  {
    number: '02',
    title: 'Track Specialization',
    description:
      'Deep technical learning focused on the platforms, frameworks, tools, and engineering practices of each track.',
    icon: Layers3,
  },
  {
    number: '03',
    title: 'AI Integration',
    description:
      'AI-assisted development, Generative AI, RAG, intelligent automation, and agentic software capabilities.',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Professional Delivery',
    description:
      'Projects, teamwork, DevOps, deployment, cloud environments, and practical software delivery.',
    icon: TerminalSquare,
  },
];

export const tracks = trackRecords.map((track) => {
  const program = getProgram(track.programId);
  return {
    id: track.id,
    category: t(getTrackCategory(track.category)),
    title: t(track.title),
    shortTitle: t(track.shortTitle),
    description: t(track.summary),
    technologies: track.technologies,
    program: program.code,
    duration: formatDuration(program.duration),
    hours: hoursLabel(track.hours),
    projectHours: hoursLabel(track.projectHours),
    branches: track.branchIds.map((id) => t(getBranch(id).shortName)),
    jobProfiles: track.jobProfiles,
    icon: trackIcons[track.icon] ?? Code2,
  };
});

// Branch names that offer at least one track (used by the branch filter).
export const branches = branchRecords
  .filter((branch) => tracks.some((track) => track.branches.includes(t(branch.shortName))))
  .map((branch) => t(branch.shortName));

export const programs = programRecords
  .filter((program) => program.kind !== 'summer')
  .map((program) => ({
    id: program.code,
    name: t(program.name),
    duration: formatDuration(program.duration),
    summary: t(program.summary),
    bestFor: t(program.bestFor),
  }));
