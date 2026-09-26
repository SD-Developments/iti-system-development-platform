// Tracks feature data.
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

    branches: ['Smart Village'],

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

    branches: ['Smart Village'],

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

    branches: ['Smart Village'],

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
