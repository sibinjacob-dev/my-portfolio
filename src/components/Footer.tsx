import { ArrowUp, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { personalInformation } from '../data/personalInformation'
import { freelanceServices } from '../data/freelanceServices'
import { socialLinks } from '../data/socialLinks'
import type { PortfolioView } from '../types/navigation'

interface FooterProps {
  view: PortfolioView
  onNavigate: (view: PortfolioView) => void
}

export function Footer({ view, onNavigate }: FooterProps) {
  const isProfessional = view === 'professional'
  const isGateway = view === 'gateway'
  const exploreLinks = isProfessional
    ? ['Profile', 'Experience', 'Skills', 'Resume', 'Contact']
    : ['Services', 'Portfolio', 'Process', 'Why-me', 'Contact']
  const visibleSocialLinks = socialLinks.filter(({ label }) => {
    if (isGateway) return label === 'Email'
    return isProfessional
      ? ['LinkedIn', 'Email', 'GitHub'].includes(label)
      : ['Email', 'WhatsApp', 'Instagram'].includes(label)
  })

  return (
    <footer className={`site-footer ${isGateway ? 'site-footer--gateway' : ''}`}>
      <div className="container footer-grid">
        <div className="footer-intro">
          <button type="button" className="brand brand--footer" onClick={() => onNavigate('gateway')}><span className="brand-mark">SJ</span><span className="brand-name">Sibin Jacob</span></button>
          <p>{isProfessional ? 'Site Reliability Engineering, cloud operations, observability, and automation.' : isGateway ? 'Two distinct portfolios for two different audiences.' : 'Independent websites, design, hosting, SEO, and ongoing support.'}</p>
          <a className="footer-contact" href={`mailto:${personalInformation.email}`}><Mail size={16} />{personalInformation.email}</a>
          <span className="footer-contact"><MapPin size={16} />{personalInformation.location}</span>
        </div>
        <div>
          <h2 className="footer-heading">{isGateway ? 'Choose a path' : 'Explore'}</h2>
          <div className="footer-links">
            {isGateway ? (
              <><button type="button" onClick={() => onNavigate('professional')}>Professional career <ArrowUpRight size={13} /></button><button type="button" onClick={() => onNavigate('freelance')}>Creative services <ArrowUpRight size={13} /></button></>
            ) : exploreLinks.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item.replace('-', ' ')}<ArrowUpRight size={13} /></a>)}
          </div>
        </div>
        <div>
          <h2 className="footer-heading">{isGateway ? 'Portfolio boundaries' : isProfessional ? 'Professional focus' : 'Services'}</h2>
          <div className="footer-links">
            {isGateway
              ? <><span>Career: employment and engineering</span><span>Creative: independent client services</span></>
              : isProfessional
              ? ['Site Reliability Engineering', 'Cloud operations', 'Observability', 'Automation', 'Incident response'].map((item) => <span key={item}>{item}</span>)
              : freelanceServices.slice(0, 5).map((service) => <a key={service.id} href="#services">{service.title}</a>)}
          </div>
        </div>
        <div>
          <h2 className="footer-heading">Connect</h2>
          <div className="footer-socials">
            {visibleSocialLinks.map(({ label, href, icon: Icon, placeholder }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={`${label}${placeholder ? ' — link placeholder' : ''}`} title={placeholder ? `${label} link to be added` : label}>
                <Icon size={18} /><span>{label}{placeholder ? ' *' : ''}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Sibin Jacob.</p>
        <p className="placeholder-note">* Social link placeholder</p>
        {!isGateway && <a className="back-to-top" href="#home">Back to top <ArrowUp size={15} /></a>}
      </div>
    </footer>
  )
}
