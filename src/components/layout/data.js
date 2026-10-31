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
    path: '/intakes',
  },
  {
    title: '4-Month Intensive Accelerator',
    path: '/intakes',
  },
  {
    title: 'Summer Tech Academies',
    path: '/intakes',
  },
  {
    title: 'Undergraduate Hackathons',
    path: '/news-activities',
  },
];

// Dynamic data: provided by the API (see docs/API.md); empty until it is connected.
export const technicalTracks = [];

export const departmentLinks = [
  {
    title: 'The SD Culture',
    path: '/about',
  },
  {
    title: 'Smart Village (HQ)',
    path: '/about',
  },
  {
    title: 'Creativa Centers',
    path: '/about',
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
