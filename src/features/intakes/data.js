// Program (PTP / ITP / summer) comparison and phase data for the Intakes page.

export const diplomaPhases = [
  {
    label: 'PHASE 01 • FOUNDATIONS',
    title: 'Algorithms & OOP',
    description: 'Data structures, memory management, design patterns, and relational modeling.',
  },
  {
    label: 'PHASE 02 • SPECIALIZATION',
    title: 'Enterprise Stacks',
    description: 'Microservices, cloud-native DevOps, distributed messaging, CI/CD pipelines.',
  },
  {
    label: 'PHASE 03 • CAPSTONE',
    title: 'Live Defense',
    description: '8-week industry sponsored MVP defended before multinational engineering juries.',
  },
];

export const itpTracks = [
  {
    category: 'FRONTEND ENGINEERING',
    hours: '500h',
    title: 'Modern Web with Angular & React',
    description:
      'State management (NgRx / Redux), RxJS observables, WebSockets, accessibility, progressive web apps, and performance audits.',
    outcome: 'Frontend Engineer',
  },
  {
    category: 'BACKEND ARCHITECTURE',
    hours: '500h',
    title: 'Python Enterprise & FastApi',
    description:
      'Asynchronous microservices, Dockerized packaging, PostgreSQL caching layers, OAuth2 security, and production test suites.',
    outcome: 'Backend Specialist',
  },
  {
    category: 'CROSS-PLATFORM',
    hours: '500h',
    title: 'Flutter & Dart Mobile Architecture',
    description:
      'Bloc/Cubit patterns, native platform channels, offline persistence, automated CI/CD for App Store & Play Store deployments.',
    outcome: 'Mobile App Dev',
  },
  {
    category: 'RELIABILITY & QUALITY',
    hours: '500h',
    title: 'Software Quality Assurance Automation',
    description:
      'Selenium, Cypress, Playwright, API performance benchmarking with JMeter, CI pipeline integration, and ISTQB certification.',
    outcome: 'QA Automation Lead',
  },
];

export const summerFeatures = [
  {
    icon: 'terminal',
    title: 'Professional Git & CLI',
    description:
      'Branching models, pull requests, semantic versioning, and Linux environment commands.',
  },
  {
    icon: 'architecture',
    title: 'Modern Web Architecture',
    description:
      'HTML5/CSS3 semantics, modern JS (ES6+), responsive layouts, and REST client integration.',
  },
  {
    icon: 'dataset',
    title: 'Algorithms in Production',
    description:
      'Real-time problem solving, algorithmic complexity analysis, and competitive programming clinics.',
  },
  {
    icon: 'cloud_circle',
    title: 'Cloud Primer & Docker',
    description:
      'Containerization principles, building micro-containers, and deploying serverless functions.',
  },
];

export const summerStats = [
  {
    value: '4,500+',
    label: 'Students Trained Yearly',
    featured: true,
  },
  {
    value: '32',
    label: 'Partner Universities',
  },
  {
    value: '120h',
    label: 'Average Intensive Track',
  },
  {
    value: '0 EGP',
    label: 'Fully Sponsored',
    teal: true,
  },
];

export const comparisonPrograms = [
  {
    type: 'primary',
    badge: 'FLAGSHIP DIPLOMA',
    eyebrow: '9-MONTH RESIDENCY',
    title: 'Professional Software Diploma',
    description:
      'The flagship postgraduate immersion preparing engineers for top-tier enterprise roles.',
    specs: [
      ['Contact Hours', '1,200+ Hours'],
      ['Duration & Schedule', '9 Mo • Mon-Fri 8:30-16:30'],
      ['Target Audience', 'STEM University Grads (< 5y post grad)'],
      ['Capstone Requirement', 'Enterprise Production MVP + CTO Jury Defense'],
      ['Branch Availability', '11 Branches Nationwide'],
    ],
    career: 'Senior-Ready Junior',
    action: 'Apply for 9-Month Intake 45',
    href: '#intake-status',
  },
  {
    type: 'teal',
    badge: null,
    eyebrow: '4-MONTH ACCELERATOR',
    title: 'Intensive Training (ITP)',
    description:
      'High-velocity tech skills transfer focused directly on rapid corporate deployment.',
    specs: [
      ['Contact Hours', '500+ Hours'],
      ['Duration & Schedule', '4 Mo • Hybrid Sprints'],
      ['Target Audience', 'Graduates pivoting to specialized stacks'],
      ['Capstone Requirement', 'Production Sprint Deployment (CI/CD)'],
      ['Branch Availability', 'Selected Regional Hubs'],
    ],
    career: 'Direct Role Specialist',
    action: 'Explore 4-Month Tracks',
    href: '#four-month',
  },
  {
    type: 'neutral',
    badge: null,
    eyebrow: 'PRE-GRADUATION CAMPS',
    title: 'Summer Tech Academies',
    description:
      'Foundational industry workshops and clean code coaching for undergraduate talent.',
    specs: [
      ['Contact Hours', '120 – 180 Hours'],
      ['Duration & Schedule', '4 to 8 Weeks • July–Aug'],
      ['Target Audience', 'Active university undergraduates (Y2–Y4)'],
      ['Capstone Requirement', 'Summer Hackathon Showcase & Repo'],
      ['Branch Availability', '32 Universities + ITI Hubs'],
    ],
    career: 'Diploma Fast-Track',
    action: 'View Summer Schedule',
    href: '#summer-camps',
  },
];

export const diplomaFacts = [
  {
    icon: 'timer',
    value: '9 Months',
    label: 'Full Immersion',
    accent: 'primary',
  },
  {
    icon: 'schedule',
    value: '1,200+ Contact Hours',
    label: 'Labs & Studio',
    accent: 'navy',
  },
  {
    icon: 'calendar_month',
    value: 'October — June',
    label: 'Academic Cycle',
    accent: 'navy',
  },
  {
    icon: 'domain',
    value: 'Full Residency',
    label: 'Studio-Based',
    accent: 'primary',
  },
];

export const diplomaStages = [
  {
    number: '01',
    months: 'MONTHS 01–03',
    title: 'Stage 01: Foundations',
    quote: '"Build the engineering core."',
    description:
      'Master low-level architectural paradigms, memory management, algorithmic design, and rigorous data modeling standards.',
    accent: 'navy',
    topics: [
      'Algorithms & OOP',
      'Data Structures',
      'Memory Management',
      'Design Patterns',
      'Relational Modeling',
    ],
  },
  {
    number: '02',
    months: 'MONTHS 04–06',
    title: 'Stage 02: Specialization',
    quote: '"Choose your engineering path and go deeper."',
    description:
      'Transition into target industrial tracks with high-throughput cloud stacks, microservices architecture, and modern distributed pipelines.',
    accent: 'navy',
    topics: ['Enterprise Stacks', 'Microservices', 'Cloud Native', 'DevOps', 'CI/CD'],
  },
  {
    number: '03',
    months: 'MONTHS 07–09',
    title: 'Stage 03: Capstone',
    quote: '"Build something real with industry constraints."',
    description:
      'Full-scale engineering delivery under production SLAs, enterprise practices, and rigorous technical CTO panel jury reviews.',
    accent: 'primary',
    topics: ['8-Week Industry MVP', 'Live Defense', 'Production SLAs', 'Enterprise Practices'],
  },
];

export const diplomaTracks = [
  {
    icon: 'terminal',
    title: 'Full-Stack Web Solutions Development',
    subtitle: 'UI Engineering • AI Integration',
    accent: 'primary',
  },
  {
    icon: 'smartphone',
    title: 'Cross-Platform Mobile App Development',
    subtitle: 'Mobile Engineering • AI Integration',
    accent: 'navy',
  },
  {
    icon: 'architecture',
    title: '.NET Enterprise Solutions Development',
    subtitle: 'Enterprise Architecture • AI Integration',
    accent: 'navy',
  },
];

export const experienceItems = [
  {
    icon: 'desktop_windows',
    title: 'Physical Studio Residency',
    description:
      'Dedicated developer pods, high-performance workstation setups, and collaborative coding labs across our national hubs.',
    accent: 'navy',
  },
  {
    icon: 'group_work',
    title: 'Live Engineering Workflows',
    description:
      'Pair programming, architectural critique, pull request reviews, continuous deployment drills, and real telemetry analysis.',
    accent: 'navy',
  },
  {
    icon: 'military_tech',
    title: 'Industry-Sponsored Capstone',
    description:
      'Build, test, and defend a real software project with live corporate CTO juries, strict production metrics, and actual users.',
    accent: 'primary',
  },
];

export const diplomaOutcomeSteps = ['LEARN', 'SPECIALIZE', 'BUILD', 'DEFEND', 'ENTER INDUSTRY'];

export const summerFacts = [
  {
    icon: 'school',
    value: '2nd, 3rd & 4th Year',
    label: 'Undergrads',
    accent: 'navy',
  },
  {
    icon: 'sunny',
    value: 'July — August',
    label: 'Summer Sprints',
    accent: 'primary',
  },
  {
    icon: 'date_range',
    value: '4 to 6 Weeks',
    label: 'Hands-on Cohort',
    accent: 'teal',
  },
  {
    icon: 'hub',
    value: '32 Universities',
    label: '+ 272 Hubs',
    accent: 'teal',
  },
];

export const summerImpact = [
  {
    value: '4,500+',
    title: 'Students Trained Yearly',
    description: 'Across all 27 governorates',
    accent: 'primary',
  },
  {
    value: '32',
    title: 'Partner Universities',
    description: 'Public & private campuses',
    accent: 'navy',
  },
  {
    value: '120h',
    title: 'Average Intensive Track',
    description: 'Hands-on lab workshops',
    accent: 'teal',
  },
  {
    value: '0 EGP',
    title: 'Fully Sponsored',
    description: 'By MCIT Fellowship Grant',
    accent: 'green',
  },
];

export const summerCoreModules = [
  {
    icon: 'terminal',
    title: 'Git & CLI',
    description: 'Branching & PRs',
    accent: 'primary',
  },
  {
    icon: 'architecture',
    title: 'Modern Web',
    description: 'HTML5, CSS & JS',
    accent: 'teal',
  },
  {
    icon: 'cloud_circle',
    title: 'Docker Primer',
    description: 'Container Basics',
    accent: 'navy',
  },
  {
    icon: 'dataset',
    title: 'Algorithms',
    description: 'Production clinics',
    accent: 'green',
  },
];

export const discoveryRoadmap = [
  {
    number: '01',
    label: 'DISCOVER',
    title: 'Explore',
    description: 'Track orientation',
    accent: 'navy',
  },
  {
    number: '02',
    label: 'LEARN',
    title: 'Practice',
    description: 'Hands-on labs',
    accent: 'teal',
  },
  {
    number: '03',
    label: 'BUILD',
    title: 'Ship MVP',
    description: 'Team hackathon',
    accent: 'navy',
  },
  {
    number: '04',
    label: 'QUALIFY',
    title: 'Explore Next',
    description: 'Diploma access',
    accent: 'primary',
  },
];

export const matrixPrograms = [
  {
    type: '9-MONTH RESIDENCY',
    title: 'Professional Software Diploma',
    description:
      'The flagship postgraduate immersion preparing engineers for top-tier enterprise roles.',
    accent: 'primary',
    rows: [
      ['Contact Hours', '1,200+ Hours'],
      ['Duration & Schedule', '9 Mo • Mon-Fri 8:30-16:30'],
      ['Target Audience', 'STEM University Grads (< 5y post grad)'],
      ['Capstone Requirement', 'Enterprise Production MVP + CTO Jury Defense'],
      ['Branch Availability', '11 Branches Nationwide'],
      ['Career Trajectory', 'Senior-Ready Junior'],
    ],
    button: 'Apply for 9-Month Intake 45',
    href: '#intake-status',
    featured: true,
  },
  {
    type: '4-MONTH ACCELERATOR',
    title: 'Intensive Training (ITP)',
    description:
      'High-velocity tech skills transfer focused directly on rapid corporate deployment.',
    accent: 'teal',
    rows: [
      ['Contact Hours', '500+ Hours'],
      ['Duration & Schedule', '4 Mo • Hybrid Sprints'],
      ['Target Audience', 'Graduates pivoting to specialized stacks'],
      ['Capstone Requirement', 'Production Sprint Deployment (CI/CD)'],
      ['Branch Availability', 'Selected Regional Hubs'],
      ['Career Trajectory', 'Direct Role Specialist'],
    ],
    button: 'Explore 4-Month Tracks',
    href: '#four-month',
    featured: false,
  },
  {
    type: 'PRE-GRADUATION CAMPS',
    title: 'Summer Tech Academies',
    description:
      'Foundational industry workshops and clean code coaching for undergraduate talent.',
    accent: 'navy',
    rows: [
      ['Contact Hours', '120 – 180 Hours'],
      ['Duration & Schedule', '4 to 8 Weeks • July–Aug'],
      ['Target Audience', 'Active university undergraduates (Y2–Y4)'],
      ['Capstone Requirement', 'Summer Hackathon Showcase & Repo'],
      ['Branch Availability', '32 Universities + ITI Hubs'],
      ['Career Trajectory', 'Diploma Fast-Track'],
    ],
    button: 'View Summer Schedule',
    href: '#summer-camps',
    featured: false,
  },
];
