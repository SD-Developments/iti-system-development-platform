// Home feature data. This file is .jsx because heroHomeSlides contains JSX.
import { BriefcaseBusiness, Code2, Presentation, Trophy } from 'lucide-react';

export const heroHomeSlides = [
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
