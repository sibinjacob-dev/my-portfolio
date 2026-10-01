import type { LucideIcon } from 'lucide-react'

export type SkillLevel = 'Advanced' | 'Experienced' | 'Working Knowledge' | 'Currently Learning'

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

