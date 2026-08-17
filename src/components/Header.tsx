import { ArrowRight, Download, Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { personalInformation } from '../data/personalInformation'
import { useTheme } from '../context/ThemeContext'
import type { PortfolioView } from '../types/navigation'

const professionalNavigation = [
  { label: 'Overview', id: 'home' },
  { label: 'Profile', id: 'about' },
  { label: 'Experience', id: 'career' },
  { label: 'Skills', id: 'skills' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
]

const freelanceNavigation = [
  { label: 'Overview', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'portfolio' },
  { label: 'Process', id: 'process' },
  { label: 'Why me', id: 'why-me' },
  { label: 'Contact', id: 'contact' },
]

interface HeaderProps {
  view: PortfolioView
  onNavigate: (view: PortfolioView) => void
}

export function Header({ view, onNavigate }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigation = view === 'professional' ? professionalNavigation : freelanceNavigation

  useEffect(() => {
    if (view === 'gateway') return

    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.2, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [navigation, view])

  const selectView = (nextView: PortfolioView) => {
    setOpen(false)
    onNavigate(nextView)
  }

  return (
    <header className="site-header">
      <div className="header-shell">
        <button type="button" className="brand" aria-label="Return to portfolio selection" onClick={() => selectView('gateway')}>
          <span className="brand-mark">SJ</span>
          <span className="brand-name">Sibin Jacob<small>{view === 'professional' ? 'Professional career' : view === 'freelance' ? 'Independent creative work' : 'Choose a portfolio'}</small></span>
        </button>

        {view === 'gateway' ? (
          <nav className={`desktop-nav gateway-nav ${open ? 'mobile-nav--open' : ''}`} aria-label="Choose a portfolio">
            <button type="button" className="path-nav-link" onClick={() => selectView('professional')}>Professional career <ArrowRight size={14} /></button>
            <button type="button" className="path-nav-link" onClick={() => selectView('freelance')}>Creative services <ArrowRight size={14} /></button>
          </nav>
        ) : (
          <nav className={`desktop-nav ${open ? 'mobile-nav--open' : ''}`} aria-label={`${view} portfolio navigation`}>
            {navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? 'active' : ''} aria-current={activeSection === item.id ? 'location' : undefined} onClick={() => setOpen(false)}>{item.label}</a>
            ))}
            {view === 'professional' ? (
              <a className="button button--primary nav-resume" href={personalInformation.resumePath} download><Download size={16} />Resume</a>
            ) : (
              <a className="button button--primary nav-resume" href="#contact">Enquire <ArrowRight size={15} /></a>
            )}
            <button type="button" className="portfolio-switch" onClick={() => selectView(view === 'professional' ? 'freelance' : 'professional')}>
              Switch to {view === 'professional' ? 'creative' : 'professional'}
            </button>
          </nav>
        )}

        <div className="header-actions">
          <button className="icon-button" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-button menu-button" type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-label="Toggle navigation menu">
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  )
}
