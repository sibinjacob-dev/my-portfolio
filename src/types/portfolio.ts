import type { LucideIcon } from 'lucide-react'

export type SkillLevel = 'Advanced' | 'Experienced' | 'Working Knowledge' | 'Currently Learning'

export interface Experience {
  id: string
  company: string
  role: string
  dates: string
  location: string
  product?: string
  description: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
  logoText: string
}

export interface SkillGroup {
  category: string
  description: string
  skills: Array<{ name: string; level: SkillLevel }>
}

export interface Service {
  id: string
  title: string
  description: string
  deliverables: string[]
  icon: LucideIcon
}

export type ProjectCategory =
  | 'Professional Projects'
  | 'Websites'
  | 'Graphic Designs'
  | 'Posters'
  | 'Branding'
  | 'SEO Projects'
  | 'Personal Projects'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  description: string
  client: string
  tools: string[]
  accent: string
  label: string
  isPlaceholder: boolean
  liveUrl?: string
  githubUrl?: string
  caseStudy: {
    problem: string
    objective: string
    role: string
    process: string[]
    challenges: string
    solution: string
    results: string
  }
}

export interface Testimonial {
  name: string
  company: string
  projectType: string
  review: string
  rating: number
  isPlaceholder: boolean
}
