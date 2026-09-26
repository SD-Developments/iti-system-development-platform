// Branch-hub data. Preserved from the removed Branches page; currently unreferenced.

import heroImage from '../../assets/images/hero/hero1.png';

import collaborationImage from '../../assets/images/hero/about2.png';

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

export const partners = ['MICROSOFT', 'VALEO', 'DELL TECH', 'FAWRY', 'VODAFONE', 'IBM', 'INSTABUG'];
