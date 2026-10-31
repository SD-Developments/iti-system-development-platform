// Projects feature data.

// Dynamic data: provided by the API (see docs/API.md); empty until it is connected.
export const projects = [];

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

// Dynamic data: provided by the API (see docs/API.md); empty until it is connected.
export const projectCategories = ['All Projects'];
