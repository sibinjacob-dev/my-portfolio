import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const navigation = [
  { label: 'Overview', id: 'home' }, { label: 'Profile', id: 'about' }, { label: 'Skills', id: 'skills' },
  { label: 'Capabilities', id: 'services' }, { label: 'Approach', id: 'approach' }, { label: 'Contact', id: 'contact' },
]

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  useEffect(() => {
    const sections = navigation.map(({ id }) => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section))
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target.id) setActiveSection(visible.target.id)
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, .2, .5] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  return <header className="site-header"><div className="header-shell">
    <a className="brand" href="#home" aria-label="Sibin Jacob — back to top"><span className="brand-mark">SJ</span><span className="brand-name">Sibin Jacob<small>Technology & creative profile</small></span></a>
    <nav className={`desktop-nav ${open ? 'mobile-nav--open' : ''}`} aria-label="Portfolio navigation">
      {navigation.map((item) => <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? 'active' : ''} aria-current={activeSection === item.id ? 'location' : undefined} onClick={() => setOpen(false)}>{item.label}</a>)}
      <a className="button button--primary nav-resume" href="#contact">Connect <ArrowRight size={15} /></a>
    </nav>
    <div className="header-actions"><button className="icon-button" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button><button className="icon-button menu-button" type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-label="Toggle navigation menu">{open ? <X size={21} /> : <Menu size={21} />}</button></div>
  </div></header>
}
