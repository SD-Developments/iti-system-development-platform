import {
  Braces,
  BriefcaseBusiness,
  Code2,
  Database,
  Layers3,
  Palette,
  Presentation,
  Smartphone,
  Sparkles,
  Terminal,
  TerminalSquare,
  Trophy,
  Workflow,
} from 'lucide-react';

export { default as hero1 } from './assets/images/hero1.png';
export { default as hero2 } from './assets/images/Requra.png';

export const bandingNavLinks = [
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
    id: 'programs',
    title: 'Programs',
    path: '/programs',
  },
  {
    id: 'tracks',
    title: 'Tracks',
    path: '/tracks',
  },
  {
    id: 'branches',
    title: 'Branches',
    path: '/branches',
  },
  {
    id: 'projects',
    title: 'Projects Hub',
    path: '/projects',
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

export const coreValues = [
  {
    icon: 'architecture',
    title: 'Engineering Craft',
    description:
      'Code clarity, clean architecture, and defensive systems design take precedence over rushed workarounds. We build software to endure.',
    tag: '#SOLID_PRINCIPLES',
  },
  {
    icon: 'sync',
    title: 'Continuous Evolution',
    description:
      'Complete agility in curriculum. Toolings, languages, and orchestration frameworks are refreshed every single intake to track real market demand.',
    tag: '#PERPETUAL_BETA',
  },
  {
    icon: 'public',
    title: 'Merit & Inclusion',
    description:
      'Free, merit-based education empowering bright problem-solvers across every governorate in Egypt, cultivating national intellectual equity.',
    tag: '#EGYPT_WIDE',
  },
  {
    icon: 'forum',
    title: 'Community & Mentorship',
    description:
      'A permanent brotherhood and sisterhood of alumni who return annually to conduct code reviews, deliver masterclasses, and recruit talent.',
    tag: '#ALUMNI_PAY_FORWARD',
  },
];

export const pipelineStages = [
  {
    number: '01',
    icon: 'memory',
    title: 'Foundational Rigor',
    description:
      'Deep dive into computer science essentials: advanced data structures, algorithmic complexity analysis, OOP patterns, and OS memory management fundamentals.',
    items: ['Algorithms & Complexity', 'Memory & Concurrency', 'Systems Architecture'],
  },
  {
    number: '02',
    icon: 'sprint',
    title: 'Production Sprints',
    description:
      'Intensive, daily coding cycles run under standard Scrum frameworks. Mandatory peer code reviews, continuous integration, and test-driven development metrics.',
    items: ['Automated CI/CD Pipelines', 'Strict TDD & Unit Tests', 'Agile Team Standups'],
  },
  {
    number: '03',
    icon: 'layers',
    title: 'Project-Based Learning',
    description:
      'Teams are handed messy, ambiguous enterprise business specifications directly from external industry tech partners, requiring robust architectural decisions.',
    items: ['Scalable Microservices', 'Polyglot Persistences', 'Security & Compliance'],
  },
  {
    number: '04',
    icon: 'co_present',
    title: 'Demo Days & CTO Defense',
    description:
      'Culminating graduation platforms where student teams deploy to production and defend their distributed codebases in front of industry hiring executives.',
    items: ['Live System Stress Tests', 'Architectural Defense', 'Direct Career Placement'],
  },
];

export const milestones = [
  {
    year: 'YEAR 1993',
    variant: 'primary',
    title: 'Establishment of ITI',
    meta: 'COHORT 01 FOUNDING',
    description:
      "The Information Technology Institute is founded as Egypt's flagship national institution for high-level computing sciences, laying the groundwork for specialized software engineering tracks.",
  },
  {
    year: 'YEAR 2005',
    variant: 'secondary',
    title: 'Autonomous SD Department & Open Source Labs',
    meta: 'ENTERPRISE SCALE',
    description:
      'Software Development is officially established as a dedicated specialized department. Pioneer labs launch enterprise Java, C++, and Linux open-source development tracks.',
  },
  {
    year: 'YEAR 2015',
    variant: 'neutral',
    title: 'Regional Expansion Across Egypt',
    meta: 'DELTA & ALEXANDRIA',
    description:
      'Scaling beyond the Smart Village headquarters, launching active SD specialized hubs in Alexandria and Upper Egypt to decentralize elite technology education.',
  },
  {
    year: 'YEAR 2020',
    variant: 'neutral',
    title: 'Creativa Innovation Hubs Rollout',
    meta: '11 SATELLITE CAMPUSES',
    description:
      'Nationwide rollout across university-embedded Creativa Centers in Aswan, Minya, Mansoura, Assiut, Menofia, and Suez, connecting local youth directly with international software markets.',
  },
  {
    year: '2024 - 2025',
    variant: 'primary',
    title: 'AI Native Systems & 15,000+ Alumni Milestone',
    meta: 'CURRENT ACTIVE MANDATE',
    description:
      'Full department curricula overhaul focusing on AI-augmented engineering, cloud-native architectures, micro-frontends, and global remote developer workforce acceleration.',
    featured: true,
  },
];

export const leaders = [
  {
    name: 'Eng. Bassem Mostafa',
    role: 'Head of Software Development Dept.',
    description:
      '20+ years steering mission-critical cloud architectures and leading national developer programs.',
    image:
      'https://lh3.googleusercontent.com/aida/AEtjO1VQ20EmfSOAn8Rdhv7vSNIAZctxyzkHdU9w1yvnz5WW9LzUKg-Cba0k2LX4rqUAkJefaICOJH0D7aDiTdA4entstbUarKt-TJ_ahWh4emf4OOAm-ZfjzOdFGNgKtwkEQiS-4IGcaK3f7JVVJMaGscCMuNm81N6ZNGDgWGuiThyAOsXPEt9otE0HWuPAkKHQwU4C2Jlb7qh_RFa-1U9JWmh-8CSlEVlelK3vvABCUeSzGgT22T5cb7_vC-lj',
    alt: 'Eng. Bassem Mostafa, Head of Software Development Dept.',
  },
  {
    name: 'Dr. Hoda Abdel-Salam',
    role: 'Principal Software Architect',
    description:
      'Specialist in distributed microservices, algorithmic verification, and open-source ecosystems.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdb2kwC9qyVUSTrHy6us_QkZwL_CJJbdG4xpMWbB8iYR-k_HokInGGz8bpa62Oj3JPzy1ghTKW-OeW0DIsWAsNnelzFRkig2m_DXXgGcSOXDbMp23YUR-TMfW1OYu68dPZYvez7dFEGYJCfWNNjSGoHDU-aysQ8aeTfSLS8fZ_X2n6nUUw3LgteMfeVyXreZFWo5t7UDlBRFCZQeFhg9bMfkEtD0TvBqtl7tU6SlJZqAA5auRFaKgPVQ',
    alt: 'Dr. Hoda Abdel-Salam, Principal Software Architect',
  },
  {
    name: 'Eng. Tamer Soliman',
    role: 'Director of Industry Integration',
    description:
      'Former Enterprise Tech Director linking hiring partners and startup scale-ups with SD cohorts.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBMmrTO9vy_ZFyPK1Rue-6883PlM_BmXXKopf9wgWhzAWE_3WDXgoTOLdcq6vcPB-1QdA_CruGKskKl8rifX15Jjbtz9HR147gSlrazs-8HpTVyh7TSRvKvCxTKFdOE1J9CduVvkRJFY7N3W57yLUYoVq8PRXthktGB1obh6BhEAwdBWTTXEifclYfImS3ORIIKQIJNU7pymCADyqBI-Gt35-cY891oSSpbd3vx1cL_S6Qtl0J5RP4qnA',
    alt: 'Eng. Tamer Soliman, Director of Industry Integration',
  },
];

export const aiInitiatives = [
  {
    title: 'AI Pair-Programming',
    description: 'Harnessing LLM copilot agents with test-first defensive verification.',
  },
  {
    title: 'RAG Architectures',
    description: 'Vector DBs, embedding indexing, and intelligent context injection.',
  },
  {
    title: 'Cloud Orchestration',
    description: 'Kubernetes, Terraform IaC, and resilient distributed microservices.',
  },
];

export const heorHomeSlides = [
  {
    id: 1,
    eyebrow: 'PEOPLE • SKILLS • SOLUTIONS',
    title: (
      <>
        ITI <br />
        System <br />
        Development
      </>
    ),
    subtitle: (
      <>
        Learn. <span className="text-[#14B8A6]">Build.</span> Collaborate.{' '}
        <span className="text-[#C62828]">Ship.</span>
      </>
    ),
    description:
      'Develop real engineering capability through intensive programs, practical projects, and collaborative learning.',
    primaryCta: 'Explore SD',
    secondaryCta: 'See What We Build',
    theme: 'light',
    visual: 'students',
  },
  {
    id: 2,
    eyebrow: 'PROGRAMS',
    title: (
      <>
        Two Programs. <br />
        One Future.
      </>
    ),
    subtitle: 'Choose the learning journey that fits your goals.',
    description:
      'Explore intensive professional programs with multiple tracks, branches, projects, and real-world learning experiences.',
    primaryCta: 'Explore Programs',
    secondaryCta: 'Compare Programs',
    theme: 'light',
    visual: 'programs',
  },
  {
    id: 3,
    eyebrow: 'PROJECTS',
    title: <>Built at SD</>,
    subtitle: 'Real projects. Real impact.',
    description:
      'Explore graduation projects built by students and see how learning turns into working systems.',
    primaryCta: 'See Projects',
    secondaryCta: 'Featured Project',
    theme: 'dark',
    visual: 'project',
  },
  {
    id: 4,
    eyebrow: 'ACTIVITIES',
    title: (
      <>
        More Than <br />a Classroom.
      </>
    ),
    subtitle: 'Learn through community, collaboration, and experience.',
    description:
      'Tech talks, workshops, hackathons, company visits, competitions, and community activities.',
    primaryCta: 'Explore Activities',
    secondaryCta: 'Inside SD',
    theme: 'light',
    visual: 'activities',
  },
];

export const programs = [
  {
    code: 'PTP',
    duration: '9 Months',
    title: 'Professional Training Program',
    description:
      'An intensive development journey combining technical foundations, specialization, teamwork, and real graduation projects.',
    tracks: 'Multiple Tracks',
    branches: 'Multiple Branches',
    href: '/programs/ptp',
    featured: true,
  },
  {
    code: 'ITP',
    duration: '4 Months',
    title: 'Intensive Training Program',
    description:
      'A focused, accelerated program designed around specialized technical skills and practical software development.',
    tracks: 'Multiple Tracks',
    branches: 'Multiple Branches',
    href: '/programs/itp',
    featured: false,
  },
];

export const projects = [
  {
    title: 'Requra.AI',
    track: '.NET Enterprise + AI',
    program: 'PTP',
    branch: 'Smart Village',
    category: 'AI Requirements Engineering',
    description:
      'An intelligent platform that supports requirements analysis, generation, and collaboration.',
    technologies: ['React', '.NET', 'Python', 'AI'],
    meta: 'PTP · Smart Village',
    image: '/images/projects/requra.jpg',
  },
  {
    title: 'Smart Campus',
    track: '.NET Enterprise + AI',
    program: 'PTP',
    branch: 'Smart Village',
    category: 'Campus Management Platform',
    description:
      'A unified digital platform connecting students, instructors, sessions, and academic operations.',
    technologies: ['Angular', '.NET', 'SQL'],
    meta: 'PTP · Alexandria',
    image: '/images/projects/smart-campus.jpg',
  },
  {
    title: 'HealthConnect',
    track: '.NET Enterprise + AI',
    program: 'PTP',
    branch: 'Smart Village',
    category: 'Digital Healthcare',
    description:
      'A healthcare solution designed around accessible digital services and structured patient journeys.',
    technologies: ['React', 'Node.js', 'Cloud'],
    meta: 'ITP · Mansoura',
    image: '/images/projects/health-connect.jpg',
  },
];

export const activities = [
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

export const branches = ['Smart Village', 'Alexandria', 'Suez Canal', 'Aswan'];
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
export const tracks = [
  {
    id: 'cross-platform-mobile-ai',
    category: 'Mobile',
    title: 'Cross-Platform Mobile Applications Development with AI Integration',
    shortTitle: 'Cross-Platform Mobile + AI',

    description:
      'Build cross-platform mobile applications with Flutter, React Native, and .NET MAUI, supported by full-stack development and Generative AI foundations.',

    technologies: [
      'Flutter',
      'React Native',
      '.NET MAUI',
      'Firebase',
      'React',
      'Node.js',
      'RAG',
      'AI Agents',
    ],

    program: 'PTP',
    duration: '9 Months',
    hours: '1,137 hrs',

    branches: ['Smart Village'],

    jobProfiles: [
      'Flutter Developer',
      'React Native Developer',
      'Full-Stack Web Developer',
      'Generative AI Application Developer',
      '.NET MAUI Developer',
    ],

    icon: Smartphone,
  },

  {
    id: 'dotnet-enterprise-ai',
    category: '.NET / Enterprise',
    title: '.NET Enterprise Solutions Development & Architecture Foundations with AI Integration',
    shortTitle: '.NET Enterprise + AI',

    description:
      'Design and build scalable enterprise applications with .NET, backend engineering, software architecture, cloud technologies, BI, CRM, and Generative AI.',

    technologies: [
      'C#',
      'ASP.NET Core',
      'Entity Framework',
      'SQL Server',
      'Microservices',
      'Azure',
      'Power BI',
      'Dynamics 365',
      'RAG',
      'AI Agents',
    ],

    program: 'PTP',
    duration: '9 Months',
    hours: '1,032 hrs',

    branches: ['Smart Village', 'Alexandria', 'Suez Canal', 'Aswan'],

    jobProfiles: [
      '.NET Full-Stack Developer',
      'Enterprise Application Developer',
      'Backend / Microservices Engineer',
      'Generative AI Application Developer',
      'Business Intelligence Developer',
    ],

    icon: Workflow,
  },

  {
    id: 'fullstack-web-ui-ai',
    category: 'Web / UI',
    title: 'Full-Stack Web Development & UI Engineering with AI Integration',
    shortTitle: 'Full-Stack Web + UI + AI',

    description:
      'Build modern full-stack web applications and digital experiences using JavaScript and TypeScript frameworks, UI/UX engineering, DevOps, and Generative AI.',

    technologies: [
      'React',
      'Angular',
      'Vue',
      'Next.js',
      'Node.js',
      'NestJS',
      'UI/UX',
      'Docker',
      'Kubernetes',
      'RAG',
      'AI Agents',
    ],

    program: 'PTP',
    duration: '9 Months',
    hours: '1,098 hrs',

    branches: ['Smart Village', 'Suez Canal'],

    jobProfiles: [
      'Full-Stack JavaScript Developer',
      'Frontend Developer',
      'UI/UX Developer',
      'Generative AI Application Developer',
    ],

    icon: Code2,
  },
  {
    id: 'front-end-cross-platform-mobile-genai',
    category: 'Mobile / Front-End',
    title: 'Front-End and Cross-Platform Mobile Development with Gen AI Integration',
    shortTitle: 'Front-End + Mobile + Gen AI',

    description:
      'Build responsive front-end applications and cross-platform mobile solutions using modern JavaScript, Flutter, Firebase, Next.js, and Generative AI technologies.',

    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Next.js',
      'Flutter',
      'Dart',
      'Firebase',
      'PWA',
      'Material UI',
      'Docker',
      'Gen AI',
      'RAG',
      'AI Agents',
    ],

    program: 'ITP',
    duration: '4 Months',
    hours: '570 hrs',
    projectHours: '90 hrs',

    branches: [],

    icon: Smartphone,
  },

  {
    id: 'fullstack-dotnet-genai',
    category: '.NET / Full Stack',
    title: 'Full-Stack Web & Generative AI Development using .NET',
    shortTitle: '.NET Full Stack + Gen AI',

    description:
      'Develop full-stack web applications using C#, ASP.NET Core, SQL Server, Entity Framework, frontend technologies, Docker, and Generative AI.',

    technologies: [
      'C#',
      'ASP.NET Core',
      'Entity Framework',
      'SQL Server',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Docker',
      'Design Patterns',
      'Gen AI',
      'RAG',
      'AI Agents',
    ],

    program: 'ITP',
    duration: '4 Months',
    hours: '594 hrs',
    projectHours: '90 hrs',

    branches: [],

    icon: Workflow,
  },

  {
    id: 'fullstack-mearn-genai',
    category: 'Web / Full Stack',
    title: 'Full-Stack Web & Generative AI Development using MEARN',
    shortTitle: 'MEARN Full Stack + Gen AI',

    description:
      'Build modern JavaScript full-stack applications using Angular, React, Next.js, NestJS, GraphQL, and Generative AI development techniques.',

    technologies: [
      'JavaScript',
      'Angular',
      'React',
      'Next.js',
      'NestJS',
      'GraphQL',
      'Material UI',
      'HTML5',
      'CSS3',
      'Docker',
      'Gen AI',
      'RAG',
      'AI Agents',
    ],

    program: 'ITP',
    duration: '4 Months',
    hours: '570 hrs',
    projectHours: '90 hrs',

    branches: [],

    icon: Code2,
  },

  {
    id: 'power-bi-developer',
    category: 'Data / BI',
    title: 'Power BI Developer',
    shortTitle: 'Power BI Developer',

    description:
      'Develop business intelligence and analytics solutions using SQL Server, data warehousing, data modeling, Power BI, DAX, Tableau, and supporting data technologies.',

    technologies: [
      'Power BI',
      'DAX',
      'SQL Server',
      'Data Warehousing',
      'Data Modeling',
      'Excel',
      'Tableau',
      'Python',
      'NoSQL',
      'Big Data',
      'Data Mining',
    ],

    program: 'ITP',
    duration: '4 Months',
    hours: '456 hrs',
    projectHours: '60 hrs',

    branches: [],

    icon: Database,
  },

  {
    id: 'software-fundamentals',
    category: 'Software Fundamentals',
    title: 'Software Fundamentals',
    shortTitle: 'Software Fundamentals',

    description:
      'Build a broad software engineering foundation covering programming, operating systems, databases, networks, algorithms, object-oriented programming, web technologies, testing, and secure development.',

    technologies: [
      'C',
      'C++',
      'JavaScript',
      'HTML',
      'CSS',
      'OOP',
      'Data Structures',
      'Algorithms',
      'Databases',
      'Linux',
      'Windows',
      'Networks',
      'Docker',
    ],

    program: 'ITP',
    duration: '4 Months',
    hours: '420 hrs',
    projectHours: '60 hrs',

    branches: [],

    icon: Terminal,
  },

  {
    id: 'uiux-developer-genai',
    category: 'UI / UX',
    title: 'UI/UX Developer with GenAI Integration',
    shortTitle: 'UI/UX + Gen AI',

    description:
      'Design and prototype digital experiences while building practical front-end skills, combining UI/UX methods, responsive web development, JavaScript, TypeScript, and Generative AI.',

    technologies: [
      'UI/UX',
      'Wireframing',
      'Design Thinking',
      'Visual Design',
      'Prototyping',
      'Photoshop',
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Bootstrap',
      'Gen AI',
      'RAG',
      'AI Agents',
    ],

    program: 'ITP',
    duration: '4 Months',
    hours: '540 hrs',
    projectHours: '90 hrs',

    branches: [],

    icon: Palette,
  },
];

export const compareRows = [
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

export const heroStats = [
  {
    value: '1,200+',
    label: 'Instructional Lab Hours',
    accent: false,
  },
  {
    value: '94.8%',
    label: 'Direct 90d Placement',
    accent: true,
  },
  {
    value: '11 Hubs',
    label: 'Governorates Served',
    accent: false,
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

export const itpFacts = [
  {
    icon: 'timer',
    value: '4 Months',
    label: 'Rapid Sprints',
    accent: 'teal',
  },
  {
    icon: 'speed',
    value: '500+ Sprint Hours',
    label: 'Lab & Project Studio',
    accent: 'teal',
  },
  {
    icon: 'event_repeat',
    value: '3 Cohorts Annually',
    label: 'Fall, Spring & Summer',
    accent: 'navy',
  },
  {
    icon: 'workspace_premium',
    value: '100% Scholarship',
    label: 'MCIT Funded',
    accent: 'green',
  },
];

export const itpSprints = [
  {
    number: '01',
    label: 'LEARN',
    weeks: 'WEEKS 01–04',
    title: 'Fast-Track Fundamentals',
    description:
      'Core language paradigms, algorithmic syntax, clean OOP structures, and branch management hygiene.',
    gate: 'Gate: PR Hygiene',
    status: '✓ 100% PASS',
  },
  {
    number: '02',
    label: 'PRACTICE',
    weeks: 'WEEKS 05–08',
    title: 'Stack Immersion',
    description:
      'Enterprise frameworks, async event processing, relational/NoSQL state handling, and RESTful APIs.',
    gate: 'Gate: API SLA <80ms',
    status: '✓ 100% PASS',
  },
  {
    number: '03',
    label: 'BUILD',
    weeks: 'WEEKS 09–12',
    title: 'Agile Team Sprints',
    description:
      'Multi-developer full-stack delivery sprints with automated unit test suites, Docker containers, and CI pipelines.',
    gate: 'Gate: Test Cov >85%',
    status: '✓ 100% PASS',
  },
  {
    number: '04',
    label: 'LAUNCH',
    weeks: 'WEEKS 13–16',
    title: 'Deployment & Hiring',
    description:
      'Live technical portfolio defense, system design mock interviews, and direct interviews with 450+ hiring partners.',
    gate: 'Gate: Hiring Match',
    status: '★ HIRED',
  },
];

export const technicalLanes = [
  {
    number: '01',
    category: 'Frontend Engineering // 500h',
    title: 'Modern Web with Angular & React',
    description:
      'State machines (NgRx & Redux Toolkit), RxJS, WebSockets, and lighthouse web performance tuning.',
    tags: ['Angular', 'React', 'TypeScript', 'Tailwind'],
    accent: 'teal',
  },
  {
    number: '02',
    category: 'Backend Architecture // 500h',
    title: 'Python Enterprise & FastAPI',
    description:
      'Microservices architecture, asynchronous event loops with Celery & Redis, PostgreSQL, and Docker.',
    tags: ['FastAPI', 'Celery', 'Redis', 'PostgreSQL'],
    accent: 'navy',
  },
  {
    number: '03',
    category: 'Cross-Platform Mobile // 500h',
    title: 'Flutter & Dart Mobile Architecture',
    description:
      'Clean Architecture with Bloc/Cubit state machines, native platform method channels, and offline-first storage.',
    tags: ['Flutter', 'Dart', 'Bloc', 'SQLite'],
    accent: 'primary',
  },
  {
    number: '04',
    category: 'Reliability & Quality // 500h',
    title: 'Software Quality Assurance & Automation',
    description:
      'Automated test harnesses with Cypress, Playwright, API stress testing with Apache JMeter, and CI gates.',
    tags: ['Playwright', 'Cypress', 'JMeter', 'CI/CD'],
    accent: 'green',
  },
];

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

export const tenets = [
  {
    number: '01',
    icon: 'terminal',
    title: 'Production Sprints over Lectures',
    description:
      '70% of contact hours are spent inside IDEs, pair-programming, and resolving production telemetry under simulated latency constraints.',
    footer: 'Zero Toy Homework →',
    accent: 'primary',
  },
  {
    number: '02',
    icon: 'groups',
    title: 'Peer Architecture Defenses',
    description:
      'Students regularly defend their database schemas, thread safety, and API payloads before fellow cohorts and department staff.',
    footer: 'Rigorous Code Reviews →',
    accent: 'teal',
  },
  {
    number: '03',
    icon: 'engineering',
    title: 'Industry CTO Mentorship',
    description:
      'Curricula are directly co-architected with leading enterprise software architects from IBM, Microsoft, Vodafone, and regional tech giants.',
    footer: 'Live Industry SLAs →',
    accent: 'navy',
  },
  {
    number: '04',
    icon: 'military_tech',
    title: 'Zero-Tuition Meritocracy',
    description:
      'Every single accepted candidate receives a 100% government scholarship funded by MCIT. Admission is decided strictly by competitive technical capability.',
    footer: '100% Funded Fellowships →',
    accent: 'green',
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

export const partnerCompanies = [
  'MICROSOFT',
  'VALEO',
  'DELL TECH',
  'FAWRY',
  'VODAFONE',
  'INSTABUG',
];

export const testimonials = [
  {
    initials: 'OA',
    quote:
      '"The 9-Month Diploma didn\'t teach me just syntax; it gave me the architectural stamina to design distributed systems handling 40,000 requests/second at Fawry."',
    name: 'Omar Abdelrahman',
    role: 'Lead Architect, Fawry • Intake 39',
    accent: 'primary',
  },
  {
    initials: 'SE',
    quote:
      '"Moving from civil engineering to cloud DevOps seemed impossible until the 4-Month ITP. The hands-on Kubernetes clusters we built in class were identical to real production."',
    name: 'Sara El-Sayed',
    role: 'Site Reliability Eng, Dell • ITP Round 14',
    accent: 'teal',
  },
  {
    initials: 'KM',
    quote:
      '"Attending the ITI Summer Camp at Mansoura University in my third year completely redirected my trajectory. I graduated with professional Git workflows already in my DNA."',
    name: 'Karim Mahmoud',
    role: 'Senior Mobile Eng, Instabug • Mansoura Hub',
    accent: 'navy',
  },
];

export const faqs = [
  {
    question: 'What are the precise admission qualifications for the 9-Month Diploma?',
    answer:
      "Applicants must hold a recognized Bachelor's degree (primarily from Engineering, Computer Science, Information Systems, Science, or related disciplines). Strong graduates from other faculties showing demonstrated logical ability and documented technical projects are actively considered.",
  },
  {
    question: 'Are all academic tracks 100% tuition-free?',
    answer:
      "Yes, unconditionally. Every student admitted into the 9-Month Professional Diploma, 4-Month Intensive Program, or University Summer Camps is awarded a full government fellowship sponsored by Egypt's Ministry of Communications and Information Technology (MCIT). Students in the 9-Month Diploma also receive a monthly stipend.",
  },
  {
    question: 'How does the 3-stage entrance examination work?',
    answer:
      'Candidates complete three sequential gates: (1) Standardized English Proficiency & Cognitive IQ Assessment, (2) Technical Examination covering fundamental programming logic, data structures, and algorithms, and (3) An in-depth technical interview conducted by department leads and industry architects.',
  },
];
// --------------------------
const heroImage = './assets/images/hero1.png';

const collaborationImage = './assets/images/about2.png';

export const regionalZones = [
  {
    id: 'cairo',
    title: 'Greater Cairo & Capital',
    description:
      'Central command for cloud architecture, fintech, and distributed enterprise engineering.',
    count: '2 Flagships • 1,250 Seats',
    accent: 'red',
    hubs: [
      {
        name: 'Smart Village HQ',
        labs: '14 Labs',
        technologies: 'Enterprise .NET, AI Systems, Cloud',
      },
      {
        name: 'Creativa New Capital',
        labs: '4 Labs',
        technologies: 'FinTech, Microservices, Data Sandboxes',
      },
    ],
  },
  {
    id: 'alex',
    title: 'Mediterranean Coast',
    description:
      'Automotive embedded systems, coastal software exports, and academic bridging studios.',
    count: '2 Hubs • 480 Seats',
    accent: 'teal',
    hubs: [
      {
        name: 'Alexandria Tech Campus',
        labs: '9 Labs',
        technologies: 'AUTOSAR Embedded, Full-Stack JS',
      },
      {
        name: 'Alex Univ Creativa Node',
        labs: '2 Labs',
        technologies: 'Undergraduate Fast-Track, Open Source',
      },
    ],
  },
  {
    id: 'delta',
    title: 'Nile Delta Belt',
    description:
      'Industrial hardware engineering legacy, high-volume backend talent, and mobile frameworks.',
    count: '3 Hubs • 680 Seats',
    accent: 'green',
    hubs: [
      {
        name: 'Mansoura University Hub',
        labs: '4 Labs',
        technologies: 'ASP.NET Core, Systems Performance',
      },
      {
        name: 'Menofia Tech Center',
        labs: '3 Labs',
        technologies: 'C++ Core, Linux Systems, Firmware',
      },
      {
        name: 'Tanta Creativa Hub',
        labs: '2 Labs',
        technologies: 'Flutter, Cross-Platform, Frontend',
      },
    ],
  },
  {
    id: 'upper',
    title: 'Upper Egypt & Canal',
    description:
      'High-density remote talent corridor spanning Assiut, Aswan, Ismailia, Minya, Sohag & Qena.',
    count: '4 Centers • 1,320 Seats',
    accent: 'amber',
    hubs: [
      {
        name: 'Assiut Tech Zone',
        labs: '5 Labs',
        technologies: 'Cloud DevOps, Python Web, AI',
      },
      {
        name: 'Creativa Aswan',
        labs: '3 Labs',
        technologies: 'Full Stack JS, African Cross-Border Tech',
      },
      {
        name: 'Ismailia Hub',
        labs: '3 Labs',
        technologies: 'Maritime Tech, Supply Chain APIs',
      },
    ],
  },
];

export const featuredHubs = [
  {
    name: 'Smart Village Software Studio',
    location: 'KM 28 Cairo-Alex Desert Road, Smart Village, Giza',
    description:
      'Flagship engineering environment for enterprise architecture & distributed systems. Houses 14 specialized software tracks, principal architects, and corporate tech defense stages.',
    badge: 'FLAGSHIP HQ',
    hubCode: 'HUB-01 // CAIRO',
    labs: '14 Labs',
    labsDescription: 'Xeon / RTX Workstations',
    students: '850',
    studentsDescription: 'Active Engineers',
    image: heroImage,
    accent: 'red',
    tags: ['Enterprise .NET & Cloud', 'High-Concurrency', 'Dual-Monitor Residency'],
  },
  {
    name: 'Alexandria Tech Campus',
    location: 'Borg El-Arab Tech Park & Sultan Hussein, Alexandria',
    description:
      'Regional hub connecting students with automotive embedded systems, web architectures, and maritime logistics tech. Directly aligned with European off-shoring partners.',
    badge: 'MEDITERRANEAN HUB',
    hubCode: 'HUB-03 // ALEX',
    labs: '9 Labs',
    labsDescription: 'AUTOSAR & Web Studios',
    students: '480',
    studentsDescription: 'Students',
    image: collaborationImage,
    accent: 'teal',
    tags: ['Automotive Linux / RTOS', 'Modern Web', 'Coastal Tech Hub'],
  },
  {
    name: 'Assiut Tech Zone',
    location: 'New Assiut Technology Park, Upper Egypt',
    description:
      'Powerhouse of high-density algorithmic talent, cloud backends, and open-source systems serving national tier-1 enterprises and high-velocity remote engineering teams.',
    badge: 'UPPER EGYPT FLAGSHIP',
    hubCode: 'HUB-07 // ASSIUT',
    labs: '8 Labs',
    labsDescription: 'Slurm & Cloud Sandbox',
    students: '420',
    studentsDescription: 'Students',
    image: collaborationImage,
    accent: 'navy',
    tags: ['Cloud DevOps & Python', 'Algorithmic Meritocracy', 'Direct Cairo Fast-Track'],
  },
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

export const branchesData = [
  {
    id: 1,
    name: 'Smart Village HQ Software Studio',
    region: 'cairo',
    location: 'Giza // Flagship',
    locationDescription: 'KM 28 Cairo-Alex Desert Road, Smart Village',
    labs: '14 Labs',
    seats: '850 Seats',
    code: 'HUB-01',
    keywords: 'smart village cairo giza net cloud distributed ai',
    tags: ['.NET Cloud', 'Distributed Go', 'AI Systems'],
    accent: 'red',
  },
  {
    id: 2,
    name: 'Creativa New Administrative Capital',
    region: 'cairo',
    location: 'New Capital',
    locationDescription: 'Knowledge City Tech District',
    labs: '4 Labs',
    seats: '400 Seats',
    code: 'HUB-02',
    keywords: 'new administrative capital creativa fintech microservices',
    tags: ['FinTech', 'Microservices', 'RegTech'],
    accent: 'navy',
  },
  {
    id: 3,
    name: 'Alexandria Tech Campus',
    region: 'alex',
    location: 'Alexandria',
    locationDescription: 'Borg El-Arab & Sultan Hussein Historic Hub',
    labs: '9 Labs',
    seats: '480 Seats',
    code: 'HUB-03',
    keywords: 'alexandria borg el arab autosar automotive react fullstack',
    tags: ['AUTOSAR Linux', 'Next.js / Node', 'Maritime SW'],
    accent: 'teal',
  },
  {
    id: 4,
    name: 'Alexandria Univ Creativa Node',
    region: 'alex',
    location: 'Alexandria Univ',
    locationDescription: 'Faculty of Engineering Campus',
    labs: '2 Labs',
    seats: '120 Seats',
    code: 'NODE-ALX',
    keywords: 'alexandria university faculty engineering creativa node mobile',
    tags: ['Undergrad Bridge', 'Open Source'],
    accent: 'teal',
  },
  {
    id: 5,
    name: 'Mansoura University Hub',
    region: 'delta',
    location: 'Dakahlia',
    locationDescription: 'Mansoura University Tech Park',
    labs: '4 Labs',
    seats: '310 Seats',
    code: 'HUB-04',
    keywords: 'mansoura dakahlia aspnet core database systems',
    tags: ['ASP.NET Core', 'Database Tuning', 'DevOps'],
    accent: 'green',
  },
  {
    id: 6,
    name: 'Menofia Tech Center',
    region: 'delta',
    location: 'Menoufia',
    locationDescription: 'Menouf Faculty of Electronic Engineering',
    labs: '3 Labs',
    seats: '220 Seats',
    code: 'HUB-05',
    keywords: 'menofia menouf electronic cpp linux firmware hardware',
    tags: ['Embedded Linux', 'C++ Core', 'Kernel Dev'],
    accent: 'green',
  },
  {
    id: 7,
    name: 'Tanta Creativa Hub',
    region: 'delta',
    location: 'Gharbia',
    locationDescription: 'Tanta University Campus',
    labs: '2 Labs',
    seats: '150 Seats',
    code: 'HUB-10',
    keywords: 'tanta gharbia flutter react mobile frontend',
    tags: ['Cross-Platform Mobile', 'Flutter', 'React.js'],
    accent: 'green',
  },
  {
    id: 8,
    name: 'Assiut Tech Zone',
    region: 'upper',
    location: 'Assiut // Flagship',
    locationDescription: 'New Assiut Technology Park',
    labs: '5 Labs',
    seats: '420 Seats',
    code: 'HUB-07',
    keywords: 'assiut upper egypt cloud devops python algorithms',
    tags: ['Cloud DevOps', 'Python Web', 'Slurm Compute'],
    accent: 'red',
  },
  {
    id: 9,
    name: 'Creativa Aswan',
    region: 'upper',
    location: 'Aswan',
    locationDescription: 'Aswan University Sahari Campus',
    labs: '3 Labs',
    seats: '210 Seats',
    code: 'HUB-11',
    keywords: 'aswan sahari javascript web fintech africa',
    tags: ['Full Stack JS', 'African FinTech', 'IoT Tech'],
    accent: 'amber',
  },
  {
    id: 10,
    name: 'Ismailia Hub (Suez Canal)',
    region: 'upper',
    location: 'Suez Canal',
    locationDescription: 'Suez Canal University Campus',
    labs: '3 Labs',
    seats: '260 Seats',
    code: 'HUB-06',
    keywords: 'ismailia suez canal maritime supply chain security',
    tags: ['Maritime Systems', 'Supply Chain APIs', 'Cyber Security'],
    accent: 'amber',
  },
  {
    id: 11,
    name: 'Minya, Sohag & Qena Hubs',
    region: 'upper',
    location: 'Mid-Upper Egypt',
    locationDescription: 'Minya Univ, New Sohag Tech & South Valley Qena',
    labs: '6 Labs',
    seats: '430 Seats',
    code: 'HUB-08/09/12',
    keywords: 'minya sohag qena south valley net kotlin android',
    tags: ['Full Stack .NET', 'Android Kotlin', 'Python Automation'],
    accent: 'amber',
  },
];

export const filterOptions = [
  {
    value: 'all',
    label: 'All 11 Hubs',
  },
  {
    value: 'cairo',
    label: 'Greater Cairo',
  },
  {
    value: 'alex',
    label: 'Alexandria',
  },
  {
    value: 'delta',
    label: 'Nile Delta',
  },
  {
    value: 'upper',
    label: 'Upper Egypt & Suez',
  },
];
