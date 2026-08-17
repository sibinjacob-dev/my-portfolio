import type { Experience } from '../types/portfolio'

// Resume-sourced career history. Review dates and add measurable achievements when available.
export const professionalExperience: Experience[] = [
  {
    id: 'equifax-current',
    company: 'Equifax',
    role: 'Site Reliability Engineer',
    dates: 'Jun 2025 — Present',
    location: 'Trivandrum, Kerala',
    description:
      'Current Site Reliability Engineering position, as listed in the supplied resume.',
    responsibilities: [
      'Detailed responsibilities for this current role can be added after the next resume update.',
    ],
    achievements: [],
    technologies: ['Site Reliability Engineering', 'Cloud Operations', 'Observability'],
    logoText: 'EQ',
  },
  {
    id: 'ibm',
    company: 'IBM India Private Limited',
    role: 'Site Reliability Engineer',
    dates: 'Feb 2024 — Jun 2025',
    location: 'Kochi, Kerala',
    product: 'IBM Planning Analytics',
    description:
      'Reliability operations for IBM Planning Analytics, a cloud-based financial planning and analysis platform.',
    responsibilities: [
      'Monitored system performance and availability, responded to incidents, and supported root-cause analysis.',
      'Investigated customer requests and reported issues to reduce business impact.',
      'Developed automation to improve deployment efficiency, reliability, and operational scalability.',
      'Supported capacity planning, performance optimisation, on-call response, and scheduled maintenance.',
    ],
    achievements: [],
    technologies: ['IBM Cloud', 'Monitoring', 'Automation', 'Incident Management', 'On-call'],
    logoText: 'IBM',
  },
  {
    id: 'ptec',
    company: 'Product Technology & Engineering Center (PTEC)',
    role: 'Developer II — Software Engineering',
    dates: 'Aug 2022 — Feb 2024',
    location: 'Trivandrum, Kerala',
    product: 'Equifax Risk Decisioning InterConnect',
    description:
      'Site Reliability Engineering for a risk-decisioning platform, through the UST subsidiary PTEC.',
    responsibilities: [
      'Managed and optimised AWS and GCP infrastructure for availability, performance, and scalability.',
      'Improved infrastructure-as-code, configuration management, deployment, and operational automation.',
      'Participated in incident response, post-incident analysis, and preventive reliability work.',
      'Maintained monitoring and observability systems and supported disaster-recovery practices.',
    ],
    achievements: [],
    technologies: ['AWS', 'GCP', 'Terraform', 'Jenkins', 'Ansible', 'Docker', 'Kubernetes'],
    logoText: 'PT',
  },
  {
    id: 'ust',
    company: 'UST',
    role: 'Software Engineering & Operations Roles',
    dates: 'Nov 2018 — Jul 2022',
    location: 'Trivandrum, Kerala',
    product: 'Anthem CBS · Equifax GCS · Equifax InterConnect',
    description:
      'Progressed from process operations into software engineering and site reliability responsibilities across enterprise accounts.',
    responsibilities: [
      'Configured healthcare benefits and analysed contract requirements for Anthem Commercial Business Solutions.',
      'Monitored legacy systems, batch jobs, critical file transfers, and production incidents for Equifax GCS.',
      'Built and scheduled shell scripts and contributed automation ideas and requirements to the RPA team.',
      'Moved into reliability work covering cloud infrastructure, observability, incident response, and automation.',
    ],
    achievements: [
      'Contributed automation ideas and coordinated process requirements that enabled automation of selected operational areas.',
    ],
    technologies: ['Shell scripting', 'Salesforce', 'Monitoring', 'Incident response', 'RPA coordination'],
    logoText: 'UST',
  },
]
