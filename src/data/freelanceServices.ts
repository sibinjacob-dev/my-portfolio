import {
  Brush,
  Code2,
  Globe2,
  LifeBuoy,
  Megaphone,
  PanelTop,
  Search,
  ServerCog,
  Share2,
} from 'lucide-react'
import type { Service } from '../types/portfolio'

// Update descriptions and deliverables to match your exact freelance packages and pricing.
export const freelanceServices: Service[] = [
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Clear, purposeful visual assets tailored to your message and audience.',
    deliverables: ['Digital artwork', 'Print-ready exports', 'Editable source files'],
    icon: Brush,
  },
  {
    id: 'website-design',
    title: 'Website Design',
    description: 'Responsive interface design with a clean hierarchy and considered user journey.',
    deliverables: ['Page layouts', 'Responsive design', 'Design handoff'],
    icon: PanelTop,
  },
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Fast, accessible websites built for maintainability across phones and desktops.',
    deliverables: ['Frontend build', 'Content setup', 'Launch support'],
    icon: Code2,
  },
  {
    id: 'hosting',
    title: 'Domain & Hosting',
    description: 'Practical guidance and setup from domain registration through production launch.',
    deliverables: ['DNS setup', 'SSL configuration', 'Deployment'],
    icon: ServerCog,
  },
  {
    id: 'seo',
    title: 'Search Optimisation',
    description: 'Solid technical foundations that help search engines understand your website.',
    deliverables: ['Technical review', 'On-page setup', 'Performance guidance'],
    icon: Search,
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    description: 'Ongoing updates, troubleshooting, backups, and technical support after launch.',
    deliverables: ['Content updates', 'Health checks', 'Issue support'],
    icon: LifeBuoy,
  },
  {
    id: 'social-creatives',
    title: 'Social Media Creatives',
    description: 'Cohesive campaign visuals sized and prepared for the channels you use.',
    deliverables: ['Post designs', 'Story formats', 'Campaign variants'],
    icon: Share2,
  },
  {
    id: 'promotional-design',
    title: 'Promotional Design',
    description: 'Posters, notices, invitations, banners, and promotional communication.',
    deliverables: ['Print and digital sizes', 'Revision round', 'Final exports'],
    icon: Megaphone,
  },
  {
    id: 'consultation',
    title: 'Technical Consultation',
    description: 'Straightforward help choosing a practical web, hosting, or digital setup.',
    deliverables: ['Discovery call', 'Recommendations', 'Action plan'],
    icon: Globe2,
  },
]
