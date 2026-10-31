// Tracks feature data.
import { Braces, Layers3, Sparkles, TerminalSquare } from 'lucide-react';

// Dynamic data: provided by the API (see docs/API.md); empty until it is connected.
export const branches = [];

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

// Dynamic data: provided by the API (see docs/API.md); empty until it is connected.
export const tracks = [];

// Dynamic data: provided by the API (see docs/API.md); empty until it is connected.
export const programs = [];
