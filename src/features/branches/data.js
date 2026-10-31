// Branch-hub data: static page content plus UI-friendly views of the dynamic
// branches that live in src/data. Currently unreferenced (Branches page pending).

import heroImage from '../../assets/images/hero/hero1.png';

import collaborationImage from '../../assets/images/hero/about2.png';
import { branchCount } from '@/data/siteFacts';
import { branches as branchRecords, taxonomies, t } from '@/data/content';
const accentByRegion = { cairo: 'red', alex: 'teal', delta: 'green', upper: 'amber' };
const pluralize = (count, word) => `${count} ${word}${count === 1 ? '' : 's'}`;

export const branchesData = branchRecords.map((branch) => ({
  id: branch.id,
  name: t(branch.name),
  region: branch.region,
  location: branch.isFlagship ? `${branch.city} // Flagship` : branch.city,
  locationDescription: t(branch.address),
  labs: pluralize(branch.labs, 'Lab'),
  seats: `${branch.seats} Seats`,
  code: branch.code,
  keywords: [branch.city, t(branch.name), ...branch.focus].join(' ').toLowerCase(),
  tags: branch.focus,
  accent: accentByRegion[branch.region],
}));

export const regionalZones = taxonomies.regions.map((region) => {
  const hubs = branchRecords.filter((branch) => branch.region === region.id);
  const seats = hubs.reduce((total, branch) => total + branch.seats, 0);
  return {
    id: region.id,
    title: t(region.label),
    description: t(region.description),
    count: `${pluralize(hubs.length, 'Hub')} • ${seats.toLocaleString('en-US')} Seats`,
    accent: accentByRegion[region.id],
    hubs: hubs.map((branch) => ({
      name: t(branch.name),
      labs: pluralize(branch.labs, 'Lab'),
      technologies: branch.focus.join(', '),
    })),
  };
});

export const filterOptions = [
  { value: 'all', label: `All ${branchCount} Hubs` },
  ...taxonomies.regions.map((region) => ({ value: region.id, label: t(region.label) })),
];
export const experiences = [
  {
    number: '01',
    label: 'RESIDENCY',
    title: 'Build Together',
    description:
      'Pair programming, collaborative dual-screen labs, and peer review sprints. You learn to write clean, maintainable code as an integrated team.',
    footer: 'Daily Peer Sprints',
    icon: 'terminal',
    accent: 'red',
    image: collaborationImage,
  },
  {
    number: '02',
    label: 'GUIDANCE',
    title: 'Learn from Engineers',
    description:
      'Resident technical mentors, live broadcast architect masterclasses, and architecture teardowns that solve production bugs on real systems.',
    footer: 'Resident Lab Leads',
    icon: 'support_agent',
    accent: 'teal',
    image: heroImage,
  },
  {
    number: '03',
    label: 'PRODUCTION',
    title: 'Ship Real Software',
    description:
      'No toy assignments. Every student team delivers enterprise capstone platforms with automated CI/CD pipelines and strict SLA requirements.',
    footer: 'Production SLAs',
    icon: 'deployed_code',
    accent: 'navy',
    image: heroImage,
  },
  {
    number: '04',
    label: 'ALIGNMENT',
    title: 'Connect with Industry',
    description:
      'Rigorous CTO jury defenses, direct tech hiring days, and local alumni meetups linking talent to international product companies.',
    footer: 'Direct CTO Juries',
    icon: 'handshake',
    accent: 'red',
    image: collaborationImage,
  },
];

export const getAccentClasses = (accent) => {
  const classes = {
    red: {
      badge: 'bg-primary/10 text-primary',
      dot: 'bg-primary',
      text: 'text-primary',
      hover: 'hover:border-primary/40',
    },

    teal: {
      badge: 'bg-sd-teal/10 text-sd-teal',
      dot: 'bg-sd-teal',
      text: 'text-sd-teal',
      hover: 'hover:border-sd-teal/40',
    },

    green: {
      badge: 'bg-emerald-500/10 text-emerald-700',
      dot: 'bg-emerald-500',
      text: 'text-emerald-600',
      hover: 'hover:border-emerald-500/40',
    },

    amber: {
      badge: 'bg-amber-500/10 text-amber-700',
      dot: 'bg-amber-500',
      text: 'text-amber-600',
      hover: 'hover:border-amber-500/40',
    },

    navy: {
      badge: 'bg-sd-navy/10 text-sd-navy',
      dot: 'bg-sd-navy',
      text: 'text-sd-navy',
      hover: 'hover:border-sd-navy/40',
    },
  };

  return classes[accent] || classes.navy;
};
