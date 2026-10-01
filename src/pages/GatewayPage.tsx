import { ArrowRight, BriefcaseBusiness, Code2, Palette, ServerCog, ShieldCheck, Sparkles } from 'lucide-react'
import { useEffect } from 'react'
import type { PortfolioView } from '../types/navigation'

export function GatewayPage({ onNavigate }: { onNavigate: (view: PortfolioView) => void }) {
  useEffect(() => {
    const title = 'Sibin Jacob — Skills & Creative Portfolio'
    const description = 'Explore Sibin Jacob’s technical skills profile or independent web and creative services portfolio.'
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', window.location.origin)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', window.location.origin)
  }, [])

  return (
    <section className="gateway-page">
      <div className="gateway-glow gateway-glow--one" aria-hidden="true" />
      <div className="gateway-glow gateway-glow--two" aria-hidden="true" />
      <div className="container gateway-content">
        <div className="gateway-intro">
          <p className="eyebrow"><span />Sibin Jacob</p>
          <h1>One profile.<br /><em>Two areas of focus.</em></h1>
          <p>Explore my technical capabilities or view my independent creative work and services.</p>
        </div>

        <div className="gateway-cards">
          <button type="button" className="gateway-card gateway-card--professional" onClick={() => onNavigate('professional')}>
            <div className="gateway-card__top"><span className="gateway-card__icon"><BriefcaseBusiness size={24} /></span><span>Technical capabilities and strengths</span></div>
            <div>
              <p>Technical profile</p>
              <h2>Site Reliability<br />Engineering</h2>
              <div className="gateway-tags"><span><ShieldCheck size={14} />Reliability</span><span><ServerCog size={14} />Cloud operations</span></div>
            </div>
            <span className="gateway-card__cta">Explore technical skills <ArrowRight size={18} /></span>
          </button>

          <button type="button" className="gateway-card gateway-card--freelance" onClick={() => onNavigate('freelance')}>
            <div className="gateway-card__top"><span className="gateway-card__icon"><Sparkles size={24} /></span><span>For clients & independent projects</span></div>
            <div>
              <p>Independent creative services</p>
              <h2>Web & Visual<br />Design</h2>
              <div className="gateway-tags"><span><Code2 size={14} />Websites</span><span><Palette size={14} />Graphic design</span></div>
            </div>
            <span className="gateway-card__cta">Enter creative portfolio <ArrowRight size={18} /></span>
          </button>
        </div>

        <p className="gateway-note"><span aria-hidden="true" />Choose the area most relevant to you. You can switch paths at any time.</p>
      </div>
    </section>
  )
}
