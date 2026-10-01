import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  ExternalLink,
  Handshake,
  Headphones,
  Layers3,
  Lightbulb,
  MapPin,
  MessageCircle,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
  Zap,
} from 'lucide-react'
import { useEffect } from 'react'
import { Reveal } from '../components/Reveal'
import { RotatingText } from '../components/RotatingText'
import { SectionHeading } from '../components/SectionHeading'
import { freelanceServices } from '../data/freelanceServices'
import { personalInformation } from '../data/personalInformation'
import { socialLinks } from '../data/socialLinks'
import { technicalSkills } from '../data/technicalSkills'
import type { PortfolioView } from '../types/navigation'

const processSteps = [
  { title: 'Discuss', detail: 'Requirements, audience, scope, and priorities.', icon: MessageCircle },
  { title: 'Plan', detail: 'Approach, timeline, deliverables, and quotation.', icon: ClipboardCheck },
  { title: 'Design', detail: 'Visual direction, layout, and content hierarchy.', icon: Palette },
  { title: 'Develop', detail: 'Responsive build with quality checks throughout.', icon: Code2 },
  { title: 'Review', detail: 'Focused feedback rounds and agreed revisions.', icon: CheckCircle2 },
  { title: 'Launch', detail: 'Domain, hosting, deployment, and final checks.', icon: Rocket },
  { title: 'Support', detail: 'Maintenance, updates, and technical help.', icon: Headphones },
]

const reasons = [
  { title: 'Technical foundation', text: 'Systems thinking shapes practical, resilient solutions.', icon: ShieldCheck },
  { title: 'Clear communication', text: 'Scope, progress, feedback, and decisions stay visible.', icon: MessageCircle },
  { title: 'Creative + practical', text: 'Visual decisions support the message and the user journey.', icon: Lightbulb },
  { title: 'Responsive by default', text: 'Every interface is considered across mobile, tablet, and desktop.', icon: Layers3 },
  { title: 'Search-aware builds', text: 'Semantic structure, performance, and technical SEO are built in.', icon: Target },
  { title: 'Launch support', text: 'Domain, hosting, SSL, and deployment are part of the conversation.', icon: Rocket },
  { title: 'Long-term care', text: 'Maintenance and troubleshooting remain available after launch.', icon: Wrench },
  { title: 'Thoughtful detail', text: 'Small interaction and content choices receive the same care as big ones.', icon: Sparkles },
]

interface HomePageProps {
  view: Exclude<PortfolioView, 'gateway'>
  onNavigate: (view: PortfolioView) => void
}

export function HomePage({ view, onNavigate }: HomePageProps) {
  const isProfessional = view === 'professional'

  useEffect(() => {
    const title = view === 'professional'
      ? 'Sibin Jacob — Site Reliability Engineer'
      : 'Sibin Jacob — Independent Web & Creative Services'
    const description = view === 'professional'
      ? 'Technical profile of Sibin Jacob, highlighting site reliability, cloud operations, observability, automation, and incident response skills.'
      : 'Independent creative services by Sibin Jacob, including website design, development, visual design, hosting, SEO, and maintenance.'
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${window.location.origin}/${view}`)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${window.location.origin}/${view}`)
  }, [view])

  const heroSocialLinks = socialLinks.filter(({ label }) =>
    isProfessional ? ['LinkedIn', 'GitHub'].includes(label) : ['LinkedIn', 'Instagram'].includes(label),
  )
  const linkedInUrl = socialLinks.find(({ label }) => label === 'LinkedIn')?.href ?? '#'

  return (
    <>
      <section id="home" className={`hero section-anchor ${isProfessional ? 'hero--professional' : 'hero--freelance'}`}>
        <div className="hero-noise" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="availability"><span />{isProfessional ? 'Technical skills profile' : 'Independent creative services'}</p>
            <h1>{isProfessional ? <>Skills for reliable<br /><em>modern systems.</em></> : <>Creative work,<br /><em>independently built.</em></>}</h1>
            <div className="role-line">
              <span>{isProfessional ? `${personalInformation.firstName} Jacob —` : 'Focused freelance practice —'}</span>
              <RotatingText items={isProfessional ? personalInformation.roles.professional : personalInformation.roles.freelance} />
            </div>
            <p className="hero-intro">{isProfessional ? personalInformation.professionalIntro : personalInformation.freelanceIntro}</p>
            <div className="hero-actions">
              {isProfessional ? <>
                <a href="#skills" className="button button--primary">Explore my skills <ArrowDownRight size={18} /></a>
                <a href="#about" className="button button--secondary">View profile <ArrowRight size={18} /></a>
                <a href="#contact" className="button button--ghost">Get in touch <ArrowRight size={18} /></a>
              </> : <>
                <a href="#services" className="button button--primary">Explore services <ArrowDownRight size={18} /></a>
                <a href="#process" className="button button--secondary">How I work <ArrowRight size={18} /></a>
                <a href="#contact" className="button button--ghost">Request a quote <ArrowRight size={18} /></a>
              </>}
            </div>
            <div className="hero-socials" aria-label="Social links">
              <span>{isProfessional ? 'Connect with me' : 'Creative enquiries'}</span><i aria-hidden="true" />
              {heroSocialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label}><Icon size={18} /></a>
              ))}
            </div>
          </div>

          {isProfessional ? <div className="freelance-hero-art" aria-label="Technical skills overview">
            <div className="freelance-art-card freelance-art-card--main"><span>Technical profile</span><strong>Reliable systems.<br />Clear operations.</strong><small>CLOUD / SRE / AUTOMATION</small></div>
            <div className="freelance-art-card freelance-art-card--design"><Zap size={22} /><span>Observability</span></div>
            <div className="freelance-art-card freelance-art-card--web"><ShieldCheck size={22} /><span>Cloud & DevOps</span></div>
            <div className="freelance-art-grid" aria-hidden="true" />
          </div> : <div className="freelance-hero-art" aria-label="Creative services overview">
            <div className="freelance-art-card freelance-art-card--main"><span>Independent studio</span><strong>Websites that feel<br />clear & considered.</strong><small>DESIGN / BUILD / LAUNCH</small></div>
            <div className="freelance-art-card freelance-art-card--design"><Palette size={22} /><span>Visual design</span></div>
            <div className="freelance-art-card freelance-art-card--web"><Code2 size={22} /><span>Web development</span></div>
            <div className="freelance-art-grid" aria-hidden="true" />
          </div>}
        </div>
        <div className="container hero-footnote"><span>01</span><p>Scroll to explore</p><i /></div>
        <button type="button" className="path-corner-switch" onClick={() => onNavigate(isProfessional ? 'freelance' : 'professional')}>
          Looking for {isProfessional ? 'creative services' : 'my technical profile'}? <ArrowRight size={15} />
        </button>
      </section>

      {isProfessional && <>
      <section id="about" className="section section-anchor about-section">
        <div className="container">
          <Reveal>
            <div className="about-grid">
              <SectionHeading eyebrow="Technical profile" title="A practical skill set for dependable systems." />
              <div className="about-copy">
                <p className="lead-copy">My strengths span site reliability, cloud infrastructure, observability, automation, containers, scripting, and web technologies.</p>
                <p>I enjoy understanding complex systems, improving visibility, removing repetitive work, and creating solutions that are clear, resilient, and easier to operate.</p>
                <div className="about-principles">
                  <span><ShieldCheck size={18} /> Dependable by design</span>
                  <span><Sparkles size={18} /> Clear over complicated</span>
                  <span><Handshake size={18} /> Collaborative throughout</span>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="stats-grid">
            {personalInformation.professionalStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 70}>
                <div className="stat-card"><strong>{stat.value}</strong><span>{stat.label}</span><small>{stat.note}</small></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section section--tinted section-anchor">
        <div className="container">
          <Reveal>
            <div className="section-heading-row">
              <SectionHeading eyebrow="Technical skills" title="Tools for reliable, scalable work." description="A focused view of the platforms, practices, and technologies I use to solve technical problems." />
              <p className="skill-legend"><span /> Advanced / Experienced <i /> Working knowledge</p>
            </div>
          </Reveal>
          <div className="skills-grid">
            {technicalSkills.map((group, index) => (
              <Reveal key={group.category} delay={(index % 3) * 60}>
                <article className="skill-card">
                  <div className="skill-card__number">0{index + 1}</div>
                  <h3>{group.category}</h3>
                  <p>{group.description}</p>
                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <div key={skill.name}><span>{skill.name}</span><small data-level={skill.level}>{skill.level}</small></div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      </>}

      {!isProfessional && <>
      <section id="services" className="section services-section section-anchor">
        <div className="container">
          <Reveal>
            <div className="services-heading">
              <SectionHeading eyebrow="Freelance services" title="From first idea to a confident launch." description="Flexible support for businesses that need one dependable partner across design, development, hosting, and ongoing care." />
              <a href="#contact" className="circle-link" aria-label="Start a project"><ArrowUpRight size={26} /></a>
            </div>
          </Reveal>
          <div className="services-grid">
            {freelanceServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Reveal key={service.id} delay={(index % 3) * 50}>
                  <article className="service-card">
                    <div className="service-card__top"><span className="service-icon"><Icon size={23} /></span><span className="service-number">{String(index + 1).padStart(2, '0')}</span></div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul>{service.deliverables.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
                    <a href="#contact" className="text-link">Request a quote <ArrowRight size={16} /></a>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section id="process" className="section section--tinted process-section section-anchor">
        <div className="container">
          <Reveal><SectionHeading eyebrow="How I work" title="A clear path from brief to launch." align="center" /></Reveal>
          <div className="process-grid">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <Reveal key={step.title} delay={index * 45}>
                  <article className="process-step">
                    <span className="process-index">{String(index + 1).padStart(2, '0')}</span>
                    <div className="process-icon"><Icon size={20} /></div>
                    <h3>{step.title}</h3><p>{step.detail}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section id="why-me" className="section section-anchor">
        <div className="container why-grid">
          <Reveal>
            <div className="why-intro">
              <SectionHeading eyebrow="Why work with me" title="One perspective across technology and design." />
              <p>A strong operations mindset brings structure and ownership. Creative practice keeps the work human, useful, and visually clear.</p>
              <a href="#contact" className="button button--secondary">Talk about your project <ArrowRight size={17} /></a>
            </div>
          </Reveal>
          <div className="reasons-grid">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <Reveal key={reason.title} delay={(index % 2) * 50}>
                  <article className="reason-card"><Icon size={20} /><div><h3>{reason.title}</h3><p>{reason.text}</p></div></article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      </>}

      {isProfessional ? <section id="contact" className="section professional-contact-section section-anchor">
        <div className="container professional-contact">
          <Reveal>
            <div>
              <SectionHeading eyebrow="Let's connect" title="Talk technology, reliability, and better systems." />
              <p>Connect through LinkedIn for conversations about site reliability, cloud infrastructure, automation, observability, or web technology.</p>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <div className="professional-contact-card">
              <p>Connect with me</p>
              <a href={linkedInUrl} target="_blank" rel="noreferrer"><span><ExternalLink size={20} /></span><div><small>LinkedIn</small><strong>/in/sibinjacob</strong></div><ArrowUpRight size={17} /></a>
              <button type="button" onClick={() => onNavigate('freelance')}>Looking for independent creative services? <ArrowRight size={16} /></button>
            </div>
          </Reveal>
        </div>
      </section> : <section id="contact" className="section contact-section section-anchor">
        <div className="container contact-grid">
          <Reveal>
            <div className="contact-copy">
              <SectionHeading eyebrow="Start a conversation" title="Have something useful to build?" />
              <p>To reduce spam, direct email and phone details are not published here. Send a message through LinkedIn to discuss a project.</p>
              <div className="contact-details">
                <div><span><MapPin size={19} /></span><div><small>Location</small><strong>{personalInformation.location}</strong></div></div>
              </div>
              <a href={linkedInUrl} target="_blank" rel="noreferrer" className="button button--primary">Message on LinkedIn <ExternalLink size={14} /></a>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="professional-contact-card">
              <p>Private contact</p>
              <a href={linkedInUrl} target="_blank" rel="noreferrer"><span><ExternalLink size={20} /></span><div><small>LinkedIn</small><strong>Send a direct message</strong></div><ArrowUpRight size={17} /></a>
              <p>Your contact details can be exchanged privately after connecting.</p>
            </div>
          </Reveal>
        </div>
      </section>}
    </>
  )
}
