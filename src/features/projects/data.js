// Projects feature data.

import web1 from '../../assets/images/web1.jpg';

import web2 from '../../assets/images/web2.jpg';

import web3 from '../../assets/images/web3.jpg';

import web4 from '../../assets/images/web4.jpg';

import mobile1 from '../../assets/images/mobile1.jpg';

import mobile2 from '../../assets/images/mobile2.jpg';

import mobile3 from '../../assets/images/mobile3.jpg';

export const projects = [
  {
    title: 'AquaMetrics',
    track: 'AI & Intelligent Systems',
    domains: ['Web & UI', 'AI & Machine Learning'],
    program: 'PTP',
    branch: 'Smart Village',
    category: 'Sports Technology',
    description:
      'AquaMetrics is an AI-powered athlete management and decision support platform for competitive swimming academies. By integrating Retrieval-Augmented Generation (RAG), domain-specific AI agents, longitudinal performance tracking, and centralized athlete management, the platform assists coaches in monitoring athlete progress, personalizing training plans, and making evidence-based decisions.',
    technologies: ['React', 'Python', 'RAG', 'AI Agents', 'LLM', 'Data Analytics'],
    meta: 'PTP · Smart Village',
    image: web1,

    github: 'https://github.com/demo/aquametrics',
    liveDemo: 'https://aquametrics-demo.example.com',
  },

  {
    title: 'Ruya',
    track: 'AI & Intelligent Systems',
    domains: ['UI & UX Design'],
    program: 'PTP',
    branch: 'Smart Village',
    category: 'Smart Tourism',
    description:
      'RUYA is an intelligent tourism platform that leverages Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), computer vision, and multi-agent orchestration to assist tourists in exploring historical sites. By combining visual recognition, contextual retrieval, user profiling, and location awareness, the system delivers accurate, personalized, and interactive guidance through natural conversation.',
    technologies: ['React', 'Python', 'LLM', 'RAG', 'Computer Vision', 'Multi-Agent AI'],
    meta: 'PTP · Smart Village',
    image: web2,

    github: 'https://github.com/demo/ruya',
    liveDemo: 'https://ruya-demo.example.com',
  },

  {
    title: 'FoodLoop',
    track: 'AI & Intelligent Systems',
    domains: ['UI & UX Design', 'AI & Machine Learning'],
    program: 'PTP',
    branch: 'Smart Village',
    category: 'Food Waste & Marketplace',
    description:
      'FoodLoop is an AI-powered marketplace that helps reduce food waste by connecting consumers and charities with nearby businesses selling surplus food at discounted prices. Using AI for product recognition, OCR, and dynamic pricing recommendations, the platform enables merchants to create listings efficiently while making affordable, quality food more accessible to consumers.',
    technologies: ['React', 'Node.js', 'AI', 'OCR', 'Computer Vision', 'Dynamic Pricing'],
    meta: 'PTP · Smart Village',
    image: web3,

    github: 'https://github.com/demo/foodloop',
    liveDemo: 'https://foodloop-demo.example.com',
  },

  {
    title: 'Englisphere AI',
    track: 'AI & Intelligent Systems',
    domains: ['Web & UI', 'UI & UX Design'],
    program: 'PTP',
    branch: 'Smart Village',
    category: 'AI Education',
    description:
      'Englisphere AI is an adaptive English learning platform for working professionals. It profiles the user’s job, industry, level, and goals, then uses AI agents to build a personalized curriculum, give feedback, and run realistic practice conversations tailored to their field.',
    technologies: ['React', 'Node.js', 'LLM', 'AI Agents', 'Natural Language Processing'],
    meta: 'PTP · Smart Village',
    image: web4,

    github: 'https://github.com/demo/englisphere-ai',
    liveDemo: 'https://englisphere-ai-demo.example.com',
  },

  {
    title: 'Draya',
    track: 'AI & Intelligent Systems',
    domains: ['UI & UX Design'],
    program: 'PTP',
    branch: 'Smart Village',
    category: 'EdTech & Intelligent Learning',
    description:
      'Draya is an AI-powered learning platform that acts as an intelligent teaching assistant. It helps educators generate curriculum-aware exams, evaluate student performance, identify learning gaps, and provide personalized recommendations for students while giving parents AI-generated progress reports.',
    technologies: ['Angular', '.NET', 'SQL Server', 'AI', 'LLM', 'RAG'],
    meta: 'PTP · Smart Village',
    image: web1,

    github: 'https://github.com/demo/draya',
    liveDemo: 'https://draya-demo.example.com',
  },

  {
    title: 'HomePal',
    track: 'AI & Intelligent Systems',
    domains: ['Web & UI', 'AI & Machine Learning'],
    program: 'PTP',
    branch: 'Smart Village',
    category: 'Smart Home & Grocery',
    description:
      'HomePal is an AI-powered household and grocery operations manager tailored for Egyptian families. It combines multimodal receipt and pantry scanning, supermarket offer comparison, and budget-aware multi-agent meal planning to combat food waste and grocery inflation.',
    technologies: ['React', 'Node.js', 'AI Agents', 'Computer Vision', 'OCR', 'LLM'],
    meta: 'PTP · Smart Village',
    image: mobile1,

    github: 'https://github.com/demo/homepal',
    liveDemo: 'https://homepal-demo.example.com',
  },

  {
    title: 'Requra.AI',
    track: 'AI & Intelligent Systems',
    domains: ['Web & UI', 'AI & Machine Learning'],
    program: 'PTP',
    branch: 'Smart Village',
    category: 'Requirements Engineering',
    description:
      'Requra.AI is an evidence-grounded requirements engineering platform that transforms unstructured project inputs—including documents, meeting transcripts, and audio—into clear, reviewable specifications. Using agentic AI, it extracts and classifies requirements, generates user stories and acceptance criteria, produces executive summaries, and links every output to its source evidence.',
    technologies: ['React', '.NET', 'Python', 'LLM', 'RAG', 'AI Agents', 'Jira'],
    meta: 'PTP · Smart Village',
    image: mobile2,

    github: 'https://github.com/demo/requra-ai',
    liveDemo: 'https://requra-ai-demo.example.com',
  },

  {
    title: 'Salasel',
    track: 'AI & Intelligent Systems',
    domains: ['Mobile & Cross-Platform', 'AI & Machine Learning'],
    program: 'PTP',
    branch: 'Smart Village',
    category: 'AI Procurement',
    description:
      'Salasel is an AI-powered procurement management platform that automates the purchasing process for SME retailers and pharmacies by connecting merchants directly with wholesale distributors. Merchants can manage inventory using Arabic voice or text while AI extracts data, drafts purchase orders, and recommends suppliers based on price, speed, and availability.',
    technologies: ['Flutter', 'React', 'Node.js', 'AI', 'NLP', 'Arabic Voice AI'],
    meta: 'PTP · Smart Village',
    image: mobile3,

    github: 'https://github.com/demo/salasel',
    liveDemo: 'https://salasel-demo.example.com',
  },

  {
    title: 'FeedInsight',
    track: 'AI & Intelligent Systems',
    domains: ['Web & UI', 'UI & UX Design', 'AI & Machine Learning'],
    program: 'PTP',
    branch: 'Smart Village',
    category: 'Product Intelligence',
    description:
      'FeedInsight is an AI-powered product intelligence platform that helps product teams collect, analyze, and manage customer feedback. It identifies trends, detects duplicate issues, prioritizes feature requests, generates developer-ready backlog items, and integrates with Jira.',
    technologies: ['React', '.NET', 'SQL Server', 'AI', 'NLP', 'Jira'],
    meta: 'PTP · Smart Village',
    image: web2,

    github: 'https://github.com/demo/feedinsight',
    liveDemo: 'https://feedinsight-demo.example.com',
  },

  {
    title: 'Hakeem',
    track: 'AI & Intelligent Systems',
    domains: ['Mobile & Cross-Platform', 'Web & UI', 'Healthcare Tech'],
    program: 'PTP',
    branch: 'Smart Village',
    category: 'HealthTech',
    description:
      'Hakeem is a secure patient-owned medical history organizer that transforms scattered medical documents into a structured and easy-to-review Medical CV. Patients can upload prescriptions, lab reports, scans, and clinical notes, review AI-extracted information, manage reminders, and generate a source-grounded Medical CV that they can keep private, download, or share.',
    technologies: ['React', 'Node.js', 'AI', 'OCR', 'LLM', 'RAG'],
    meta: 'PTP · Smart Village',
    image: web3,

    github: 'https://github.com/demo/hakeem',
    liveDemo: 'https://hakeem-demo.example.com',
  },

  {
    title: 'HaqQi',
    track: 'AI & Intelligent Systems',
    domains: ['Web & UI', 'UI & UX Design', 'Mobile & Cross-Platform', 'AI & Machine Learning'],
    program: 'PTP',
    branch: 'Smart Village',
    category: 'LegalTech & Consumer Rights',
    description:
      'HaqQi is an AI-powered web and mobile platform that helps consumers prepare legally grounded complaints. Users can describe their issue using text or images, after which the platform identifies the complaint category, retrieves relevant laws from official Egyptian sources, explains consumer rights in simple language, and generates a professional complaint letter ready for PDF export.',
    technologies: ['React', 'Flutter', 'Python', 'LLM', 'RAG', 'OCR'],
    meta: 'PTP · Smart Village',
    image: web4,

    github: 'https://github.com/demo/haqqi',
    liveDemo: 'https://haqqi-demo.example.com',
  },

  {
    title: 'Life Admin Autopilot',
    track: 'AI & Intelligent Systems',
    domains: ['Web & UI', 'UI & UX Design', 'AI & Machine Learning'],
    program: 'PTP',
    branch: 'Smart Village',
    category: 'AI Personal Assistant',
    description:
      'Life Admin Autopilot is an AI agent with an app that turns everyday life administration—bills, renewals, warranties, and appointments—into handled tasks from a single sentence or photo. It extracts information, checks the user’s schedule, creates tasks, provides reminders, and answers questions grounded in the user’s own tasks and documents.',
    technologies: ['React', 'Node.js', 'LLM', 'AI Agents', 'OCR', 'RAG'],
    meta: 'PTP · Smart Village',
    image: web1,

    github: 'https://github.com/demo/life-admin-autopilot',
    liveDemo: 'https://life-admin-autopilot-demo.example.com',
  },

  {
    title: 'Wakeel AI',
    track: 'AI & Intelligent Systems',
    domains: ['Web & UI', 'Mobile & Cross-Platform', 'AI & Machine Learning'],
    program: 'PTP',
    branch: 'Smart Village',
    category: 'HR & LegalTech',
    description:
      'Wakeel AI is an AI-powered digital HR and legal officer for Egyptian SMEs. It provides Arabic and English HR and legal assistance, generates legally compliant PDF documents, uses RAG over labor laws and company policies, and supports company-specific knowledge, statutory calculators, document generation, JWT/RBAC, encryption, and audit logging.',
    technologies: ['Flutter', 'React', '.NET', 'LLM', 'RAG', 'AI Agents', 'JWT', 'RBAC'],
    meta: 'PTP · Smart Village',
    image: web2,

    github: 'https://github.com/demo/wakeel-ai',
    liveDemo: 'https://wakeel-ai-demo.example.com',
  },

  {
    title: 'SentinelAI',
    track: 'AI & Intelligent Systems',
    domains: ['Web & UI', 'AI & Machine Learning'],
    program: 'PTP',
    branch: 'Smart Village',
    category: 'AI Cybersecurity',
    description:
      'SentinelAI is an autonomous multi-agent security auditing system that runs as a CI/CD step at pull-request time. It connects findings across code, dependencies, and infrastructure into cross-layer exploit paths. Security knowledge is grounded through RAG, while adversarial Red/Blue agent debate helps reduce false positives before producing a prioritized, cited draft audit for human review.',
    technologies: [
      'Python',
      'AI Agents',
      'RAG',
      'LLM',
      'Cybersecurity',
      'CI/CD',
      'OWASP',
      'MITRE ATT&CK',
    ],
    meta: 'PTP · Smart Village',
    image: mobile2,

    github: 'https://github.com/demo/sentinel-ai',
    liveDemo: 'https://sentinel-ai-demo.example.com',
  },

  {
    title: 'Codify',
    track: 'AI & Intelligent Systems',
    domains: ['Web & UI', 'UI & UX Design', 'AI & Machine Learning'],
    program: 'PTP',
    branch: 'Smart Village',
    category: 'AI-Powered EdTech',
    description:
      'Codify is an AI-powered programming learning platform designed to help students improve their problem-solving and coding skills through interactive programming challenges. Students can solve problems in supported programming languages, submit their code, receive execution results, and get AI-generated hints and feedback. Instructors can monitor student progress through analytics.',
    technologies: ['React', 'Node.js', 'AI', 'Code Execution', 'LLM', 'Analytics'],
    meta: 'PTP · Smart Village',
    image: web4,

    github: 'https://github.com/demo/codify',
    liveDemo: 'https://codify-demo.example.com',
  },
];

export const journeyStages = [
  {
    number: '1',
    title: 'Problem Discovery',
    description: 'Direct interviews with enterprise stakeholders and sovereign agencies.',
    output: 'Output: RFC Document',
    active: false,
    color: 'teal',
  },
  {
    number: '2',
    title: 'Architectural Blueprint',
    description: 'C4 models, distributed consensus choice, and database partitioning plans.',
    output: 'Output: ADR & Threat Model',
    active: false,
    color: 'teal',
  },
  {
    number: '3',
    title: 'Sprint Alpha',
    description: 'Core computational kernel, schemas, and API contracts implementation.',
    output: 'Output: Passing CI/CD',
    active: false,
    color: 'teal',
  },
  {
    number: '4',
    title: 'Resilience Testing',
    description: 'Chaos monkey experiments, simulated network partitions, and memory leak traces.',
    output: 'Std: >85% Branch Cov.',
    active: false,
    color: 'teal',
  },
  {
    number: '5',
    title: 'Load Stress HIL',
    description: 'Vegeta & k6 load injections verifying P99 sub-30ms latency thresholds.',
    output: 'P99 Latency Validated',
    active: false,
    color: 'teal',
  },
  {
    number: '6',
    title: 'Live CTO Defense',
    description: '90-minute live oral architectural defense before external enterprise CTO juries.',
    output: 'Public Academic Jury',
    active: true,
    color: 'red',
  },
  {
    number: '7',
    title: 'Production Ship',
    description: 'Open source publication, IP handover, or startup spinout incorporation.',
    output: '100% Student IP',
    active: false,
    color: 'green',
  },
];

export const industryFeatures = [
  {
    number: '01',
    title: 'Real Problem Statements',
    description:
      'No contrived textbook problems. Challenges are submitted directly by tech leaders and sovereign ministries.',
    color: 'red',
  },
  {
    number: '02',
    title: 'Principal Mentorship',
    description:
      'Every squad receives weekly code & architectural reviews with senior and principal engineers from global tech firms.',
    color: 'teal',
  },
  {
    number: '03',
    title: 'Production Rigor',
    description:
      'Mandatory telemetry, security vulnerability scans, dynamic stress tests, and automated rollback scripts.',
    color: 'navy',
  },
  {
    number: '04',
    title: '100% Student IP',
    description:
      'System Development retains 0% royalties. All intellectual property remains wholly owned by the student squad.',
    color: 'green',
  },
];

export const projectCategories = [
  'All Projects',
  'Web & UI',
  'UI & UX Design',
  'Mobile & Cross-Platform',
  'Healthcare Tech',
  'AI & Machine Learning',
];
