import {
  BriefcaseBusiness,
  Code2,
  Database,
  Palette,
  Presentation,
  Smartphone,
  Terminal,
  Trophy,
  Workflow,
} from 'lucide-react';

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

export const partners = ['MICROSOFT', 'VALEO', 'DELL TECH', 'FAWRY', 'VODAFONE', 'IBM', 'INSTABUG'];

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

export const categories = ['All', 'Web / UI', '.NET / Enterprise', 'Mobile'];

export const branches = ['Smart Village', 'Alexandria', 'Suez Canal', 'Aswan'];

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
