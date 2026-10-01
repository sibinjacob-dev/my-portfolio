import { ArrowUp, ArrowUpRight, MapPin } from 'lucide-react'
import { freelanceServices } from '../data/freelanceServices'
import { personalInformation } from '../data/personalInformation'
import { socialLinks } from '../data/socialLinks'

const exploreLinks = ['Profile', 'Skills', 'Services', 'Approach', 'Contact']

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div className="footer-intro"><a className="brand brand--footer" href="#home"><span className="brand-mark">SJ</span><span className="brand-name">Sibin Jacob</span></a><p>Reliability engineering, cloud operations, automation, web technology, and visual communication.</p><span className="footer-contact"><MapPin size={16} />{personalInformation.location}</span></div>
    <div><h2 className="footer-heading">Explore</h2><div className="footer-links">{exploreLinks.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}<ArrowUpRight size={13} /></a>)}</div></div>
    <div><h2 className="footer-heading">Capabilities</h2><div className="footer-links">{freelanceServices.slice(0, 5).map((service) => <a key={service.id} href="#services">{service.title}</a>)}</div></div>
    <div><h2 className="footer-heading">Connect</h2><div className="footer-socials">{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={18} /><span>{label}</span></a>)}</div></div>
  </div><div className="container footer-bottom"><p>© {new Date().getFullYear()} Sibin Jacob.</p><a className="back-to-top" href="#home">Back to top <ArrowUp size={15} /></a></div></footer>
}
