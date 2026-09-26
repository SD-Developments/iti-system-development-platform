// Shared layout data (navbar + footer link groups).

export const brandingNavLinks = [
  {
    id: 'home',
    title: 'Home',
    path: '/',
  },
  {
    id: 'about',
    title: 'About SD',
    path: '/about',
  },
  {
    id: 'tracks',
    title: 'Tracks',
    path: '/tracks',
  },

  {
    id: 'projects',
    title: 'Projects Hub',
    path: '/projects',
  },
  {
    id: 'news',
    title: 'News & Activities',
    path: '/news-activities',
  },
];

export const academicPathways = [
  {
    title: '9-Month Professional Diploma',
    path: '/programs',
  },
  {
    title: '4-Month Intensive Accelerator',
    path: '/programs',
  },
  {
    title: 'Summer Tech Academies',
    path: '/programs',
  },
  {
    title: 'Undergraduate Hackathons',
    path: '/events',
  },
];

export const technicalTracks = [
  {
    title: 'Full Stack & Cloud DevOps',
    path: '/tracks',
  },
  {
    title: 'Applied Machine Learning & GenAI',
    path: '/tracks',
  },
  {
    title: 'Mobile Solutions Architecture',
    path: '/tracks',
  },
  {
    title: 'Enterprise Java & Cloud Native',
    path: '/tracks',
  },
  {
    title: 'Embedded Software & RTOS',
    path: '/tracks',
  },
];

export const departmentLinks = [
  {
    title: 'The SD Culture',
    path: '/about',
  },
  {
    title: 'Smart Village (HQ)',
    path: '/branches',
  },
  {
    title: 'Creativa Centers',
    path: '/branches',
  },
  {
    title: 'Capstones Showcase',
    path: '/projects',
  },
  {
    title: 'Alumni Stories',
    path: '/about',
  },
];

// Social / contact links (single source of truth for navbar dropdown + mobile).
// TODO: replace hrefs with the official SD pages.
export const socialLinks = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
  },
];
