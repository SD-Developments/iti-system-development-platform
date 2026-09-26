// Central SEO source of truth for the SD Platform (ITI Software Development Department).
// All pages consume this via <Seo /> so titles/descriptions stay consistent.
//
// To change the production domain, set VITE_SITE_URL in .env:
//   VITE_SITE_URL=https://sd.iti.gov.eg
// Falls back to the canonical ITI SD URL below.

const rawSiteUrl =
  (import.meta.env?.VITE_SITE_URL ?? 'https://sd.iti.gov.eg').trim() || 'https://sd.iti.gov.eg';

export const SITE_URL = rawSiteUrl.replace(/\/+$/, '');

export const SITE = {
  name: 'ITI Software Development Department',
  shortName: 'ITI SD',
  url: SITE_URL,
  locale: 'en_US',
  language: 'en',
  author: 'ITI Software Development Department, Information Technology Institute (ITI), MCIT Egypt',
  themeColor: '#082b3e',
  // Used for og:image / twitter:image when a page does not define its own.
  // Keep this file in /public so it is served as-is.
  defaultImage: `${SITE_URL}/images/iti_sd_logo_light.png`,
  twitterCard: 'summary_large_image',
};

export const DEFAULT_SEO = {
  title: 'ITI Software Development Department | Production-Ready Software Engineers in Egypt',
  description:
    'ITI Software Development Department (SD) — building production-ready software engineers in Egypt since 1993 through the 9-month professional diploma, 4-month accelerator, industry capstones, and nationwide hubs.',
  keywords: [
    'ITI',
    'ITI Software Development',
    'System Development Department',
    'software engineering Egypt',
    'ITI tracks',
    'full stack Egypt',
    'cloud DevOps',
    'applied machine learning',
    'GenAI',
    'mobile development',
    'enterprise Java',
    'embedded software',
    '9-month professional diploma',
    'PTP',
    'ITP',
    'student capstone projects',
    'Smart Village',
    'Creativa',
    'MCIT Egypt',
  ],
  type: 'website',
  robots: 'index, follow',
};

export const PAGE_SEO = {
  home: {
    title: 'ITI Software Development Department | Production-Ready Software Engineers in Egypt',
    description:
      'Explore ITI Software Development Department: 9-month professional diploma (PTP) and 4-month accelerator (ITP), technical tracks in full-stack, AI, mobile, Java and embedded, 340+ defended capstones, outcomes, branches and FAQ.',
    keywords: [
      'ITI SD home',
      'software development diploma Egypt',
      'ITI professional training program',
      'PTP 9-month diploma',
      'ITP 4-month accelerator',
      'software engineering career Egypt',
      'ITI Smart Village',
      'student projects showcase',
      'software engineering outcomes',
    ],
    path: '/',
  },
  about: {
    title: 'About SD | Mission, Curriculum, Faculty & Culture Since 1993',
    description:
      'About ITI Software Development Department: pioneering software talent since 1993 with 1,200+ instructional hours, AI-integrated curriculum, production capstones, expert faculty and a nationwide Build • Learn • Grow culture.',
    keywords: [
      'about ITI SD',
      'ITI history 1993',
      'software development mission',
      'SD curriculum',
      'ITI faculty',
      'AI integration curriculum',
      'blended learning Egypt',
      'SD culture',
      'production-ready engineers',
    ],
    path: '/about',
  },
  tracks: {
    title: 'Technical Tracks | Full-Stack, AI, Mobile, Java & Embedded',
    description:
      'Compare ITI SD technical tracks: Full Stack & Cloud DevOps, Applied Machine Learning & GenAI, Mobile Solutions Architecture, Enterprise Java & Cloud Native, Embedded Software & RTOS — technologies, focus areas and branches.',
    keywords: [
      'ITI tracks',
      'full stack cloud DevOps',
      'applied machine learning GenAI',
      'mobile solutions architecture',
      'enterprise Java cloud native',
      'embedded software RTOS',
      'compare ITI tracks',
      'Smart Village tracks',
      'technical paths Egypt',
    ],
    path: '/tracks',
  },
  projects: {
    title: 'Projects Hub | 340+ Production Capstones Defended by CTO Jury',
    description:
      'Browse 340+ ITI SD capstones: distributed systems, AI triage engines, clearing switches and edge telemetry — architected, stress-tested and publicly defended. Explore featured projects, engineering journey and industry collaboration.',
    keywords: [
      'ITI student projects',
      'capstone showcase Egypt',
      'graduation projects ITI',
      'distributed systems projects',
      'KemetHealth AI',
      'Khedmacloud',
      'CTO jury defense',
      'software engineering portfolio',
      'industry collaboration ITI',
    ],
    path: '/projects',
  },
  intakes: {
    title: 'Intakes & Admission | PTP, ITP, Requirements & Deadlines',
    description:
      'ITI SD intakes and admission: 9-month Professional Diploma (PTP), 4-month Intensive Accelerator (ITP), summer academies and hackathons. Requirements, curriculum, branches, deadlines and how to apply via official ITI channels.',
    keywords: [
      'ITI intake',
      'ITI admission 2026',
      'PTP admission requirements',
      'ITP accelerator apply',
      '9-month diploma intake',
      '4-month intensive program',
      'summer tech academy',
      'ITI branches Creativa',
      'how to apply ITI',
    ],
    path: '/intakes',
  },
  news: {
    title: 'News & Activities | Events, Workshops, Hackathons & Achievements',
    description:
      "Inside SD: latest news, technical days, workshops, hackathons, company visits, student life, achievements and announcements from ITI's Software Development community across Egypt.",
    keywords: [
      'ITI news',
      'SD events',
      'technical day 2026',
      'workshops hackathons Egypt',
      'student achievements ITI',
      'company visits',
      'demo day',
      'SD community',
      'announcements ITI SD',
    ],
    path: '/news-activities',
  },
  notFound: {
    title: 'Page Not Found',
    description:
      'The page you requested does not exist on the ITI Software Development Department platform. Return home or explore technical tracks and projects.',
    keywords: ['404', 'page not found'],
    path: '/404',
    robots: 'noindex, follow',
  },
};

export function getAbsoluteUrl(path = '/') {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
