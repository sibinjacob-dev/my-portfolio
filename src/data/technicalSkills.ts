import type { SkillGroup } from '../types/portfolio'

// Technical capabilities grouped for presentation. Adjust proficiency labels as your skills evolve.
export const technicalSkills: SkillGroup[] = [
  {
    category: 'Site Reliability Engineering',
    description: 'Keeping production systems observable, resilient, and ready for change.',
    skills: [
      { name: 'Incident response', level: 'Advanced' },
      { name: 'Root-cause analysis', level: 'Experienced' },
      { name: 'On-call operations', level: 'Experienced' },
      { name: 'Capacity planning', level: 'Experienced' },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    description: 'Operating and automating infrastructure across major cloud platforms.',
    skills: [
      { name: 'AWS', level: 'Experienced' },
      { name: 'GCP', level: 'Experienced' },
      { name: 'IBM Cloud', level: 'Experienced' },
      { name: 'Terraform', level: 'Experienced' },
    ],
  },
  {
    category: 'Observability & Operations',
    description: 'Turning operational signals into faster diagnosis and better reliability.',
    skills: [
      { name: 'Datadog', level: 'Experienced' },
      { name: 'Kibana', level: 'Experienced' },
      { name: 'AppDynamics', level: 'Experienced' },
      { name: 'Instana', level: 'Experienced' },
      { name: 'PagerDuty', level: 'Experienced' },
    ],
  },
  {
    category: 'Automation & Delivery',
    description: 'Reducing repeat work through reliable pipelines, tooling, and scripts.',
    skills: [
      { name: 'Jenkins', level: 'Experienced' },
      { name: 'Ansible', level: 'Experienced' },
      { name: 'Rundeck', level: 'Experienced' },
      { name: 'Bash', level: 'Advanced' },
      { name: 'Groovy', level: 'Experienced' },
      { name: 'Python', level: 'Experienced' },
    ],
  },
  {
    category: 'Containers & Data',
    description: 'Packaging services and working with operational data stores.',
    skills: [
      { name: 'Docker', level: 'Experienced' },
      { name: 'Kubernetes', level: 'Experienced' },
      { name: 'MySQL', level: 'Experienced' },
      { name: 'PostgreSQL', level: 'Experienced' },
    ],
  },
  {
    category: 'Web & Collaboration',
    description: 'Building for the web and collaborating across distributed teams.',
    skills: [
      { name: 'HTML & CSS', level: 'Experienced' },
      { name: 'JavaScript', level: 'Experienced' },
      { name: 'PHP', level: 'Experienced' },
      { name: 'Git', level: 'Experienced' },
      { name: 'Jira & ServiceNow', level: 'Experienced' },
    ],
  },
]
