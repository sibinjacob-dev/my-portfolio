import { BriefcaseBusiness, Camera, CodeXml, Mail, MessageCircle } from 'lucide-react'

// Replace placeholder social URLs before launch. LinkedIn, email, and WhatsApp come from the supplied resume.
export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sibinjacob', icon: BriefcaseBusiness, placeholder: false },
  { label: 'Email', href: 'mailto:sibinjacob169@gmail.com', icon: Mail, placeholder: false },
  { label: 'WhatsApp', href: 'https://wa.me/919447782170', icon: MessageCircle, placeholder: false },
  { label: 'GitHub', href: '#contact', icon: CodeXml, placeholder: true },
  { label: 'Instagram', href: '#contact', icon: Camera, placeholder: true },
]
