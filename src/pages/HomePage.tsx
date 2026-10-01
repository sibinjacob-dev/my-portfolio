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
  MessageCircle,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
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

const processSteps = [
  { title: 'Discover', detail: 'Understand the system, audience, requirements, and priorities.', icon: MessageCircle },
  { title: 'Plan', detail: 'Define a practical approach, scope, milestones, and success criteria.', icon: ClipboardCheck },
  { title: 'Build', detail: 'Implement carefully with reliability, clarity, and maintainability in mind.', icon: Code2 },
  { title: 'Validate', detail: 'Review behaviour, performance, accessibility, and operational readiness.', icon: CheckCircle2 },
  { title: 'Launch', detail: 'Deploy with monitoring, documentation, and clear ownership.', icon: Rocket },
  { title: 'Improve', detail: 'Learn from feedback and operational signals to refine the solution.', icon: Headphones },
]

const strengths = [
  { title: 'Reliability mindset', text: 'I design for visibility, resilience, and predictable operation.', icon: ShieldCheck },
  { title: 'Automation first', text: 'I reduce repetitive work with scripts, pipelines, and reusable tooling.', icon: Zap },
  { title: 'Cloud perspective', text: 'I work across AWS, GCP, IBM Cloud, containers, and infrastructure as code.', icon: Layers3 },
  { title: 'Clear communication', text: 'I make scope, progress, technical decisions, and risks easy to understand.', icon: MessageCircle },
  { title: 'Technical + creative', text: 'I combine systems thinking with useful, responsive interface design.', icon: Lightbulb },
  { title: 'Ownership', text: 'I stay engaged from investigation and delivery through support and improvement.', icon: Handshake },
]

export function HomePage() {
  const linkedInUrl = socialLinks.find(({ label }) => label === 'LinkedIn')?.href ?? '#'

  useEffect(() => {
    const title = 'Sibin Jacob — Site Reliability Engineer & Web Creator'
    const description = 'Sibin Jacob’s portfolio covering site reliability engineering, cloud operations, observability, automation, web development, and visual design.'
    const pageUrl = new URL(import.meta.env.BASE_URL, window.location.origin).href
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', pageUrl)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', pageUrl)
  }, [])

  return (
    <>
      <section id="home" className="hero hero--professional section-anchor">
        <div className="hero-noise" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="availability"><span />Engineering, cloud, automation & creative technology</p>
            <h1>Building reliable systems<br /><em>and useful digital experiences.</em></h1>
            <div className="role-line">
              <span>{personalInformation.name} —</span>
              <RotatingText items={['Site Reliability Engineer', 'Cloud & DevOps Professional', 'Web & Visual Creator']} />
            </div>
            <p className="hero-intro">I combine production engineering, cloud operations, observability, and automation with practical web development and visual design.</p>
            <div className="hero-actions">
              <a href="#skills" className="button button--primary">Explore my skills <ArrowDownRight size={18} /></a>
              <a href="#skills" className="button button--secondary">Explore skills <ArrowRight size={18} /></a>
              <a href="#contact" className="button button--ghost">Connect <ArrowRight size={18} /></a>
            </div>
            <div className="hero-socials" aria-label="Social links">
              <span>Find me online</span><i aria-hidden="true" />
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={18} /></a>
              ))}
            </div>
          </div>
          <div className="freelance-hero-art" aria-label="Technical and creative capabilities">
            <div className="freelance-art-card freelance-art-card--main"><span>Technology & design</span><strong>Reliable systems.<br />Useful experiences.</strong><small>CLOUD / SRE / WEB</small></div>
            <div className="freelance-art-card freelance-art-card--design"><Palette size={22} /><span>Visual design</span></div>
            <div className="freelance-art-card freelance-art-card--web"><ShieldCheck size={22} /><span>Cloud & reliability</span></div>
            <div className="freelance-art-grid" aria-hidden="true" />
          </div>
        </div>
        <div className="container hero-footnote"><span>01</span><p>Scroll to explore</p><i /></div>
      </section>

      <section id="about" className="section section-anchor about-section">
        <div className="container">
          <Reveal>
            <div className="about-grid">
              <SectionHeading eyebrow="Profile" title="Engineering depth with a creative edge." />
              <div className="about-copy">
                <p className="lead-copy">I bring more than seven years of experience across technology, with strengths in reliability engineering, cloud infrastructure, observability, automation, and modern web technologies.</p>
                <p>My profile combines systems thinking with creative problem-solving, clear communication, responsive design, and a focus on dependable delivery.</p>
                <div className="about-principles">
                  <span><ShieldCheck size={18} /> Dependable by design</span>
                  <span><Sparkles size={18} /> Clear over complicated</span>
                  <span><Handshake size={18} /> Collaborative throughout</span>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="stats-grid">
            <Reveal><div className="stat-card"><strong>7+</strong><span>Years in technology</span><small>Operations, engineering, and SRE</small></div></Reveal>
            <Reveal delay={70}><div className="stat-card"><strong>3</strong><span>Cloud platforms</span><small>AWS, GCP, and IBM Cloud</small></div></Reveal>
            <Reveal delay={140}><div className="stat-card"><strong>30+</strong><span>Tools & technologies</span><small>Infrastructure, delivery, data, and web</small></div></Reveal>
            <Reveal delay={210}><div className="stat-card"><strong>2</strong><span>Connected disciplines</span><small>Reliable systems and digital experiences</small></div></Reveal>
          </div>
        </div>
      </section>

      <section id="skills" className="section section--tinted section-anchor">
        <div className="container">
          <Reveal><div className="section-heading-row"><SectionHeading eyebrow="Technical skills" title="A broad toolkit for modern systems." description="Capabilities across reliability, infrastructure, observability, automation, containers, programming, and the web." /><p className="skill-legend"><span /> Advanced / Experienced</p></div></Reveal>
          <div className="skills-grid">
            {technicalSkills.map((group, index) => (
              <Reveal key={group.category} delay={(index % 3) * 60}>
                <article className="skill-card"><div className="skill-card__number">0{index + 1}</div><h3>{group.category}</h3><p>{group.description}</p><div className="skill-list">{group.skills.map((skill) => <div key={skill.name}><span>{skill.name}</span><small data-level={skill.level}>{skill.level}</small></div>)}</div></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section section--tinted services-section section-anchor">
        <div className="container">
          <Reveal><div className="services-heading"><SectionHeading eyebrow="Creative & web capabilities" title="From idea to a dependable launch." description="Practical support across website design, development, visual communication, hosting, SEO, and ongoing care." /><a href="#contact" className="circle-link" aria-label="Connect"><ArrowUpRight size={26} /></a></div></Reveal>
          <div className="services-grid">
            {freelanceServices.map((service, index) => {
              const Icon = service.icon
              return <Reveal key={service.id} delay={(index % 3) * 50}><article className="service-card"><div className="service-card__top"><span className="service-icon"><Icon size={23} /></span><span className="service-number">{String(index + 1).padStart(2, '0')}</span></div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.deliverables.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul><a href="#contact" className="text-link">Discuss this capability <ArrowRight size={16} /></a></article></Reveal>
            })}
          </div>
        </div>
      </section>

      <section id="approach" className="section process-section section-anchor">
        <div className="container">
          <Reveal><SectionHeading eyebrow="How I work" title="A clear path from problem to improvement." align="center" /></Reveal>
          <div className="process-grid">{processSteps.map((step, index) => { const Icon = step.icon; return <Reveal key={step.title} delay={index * 45}><article className="process-step"><span className="process-index">{String(index + 1).padStart(2, '0')}</span><div className="process-icon"><Icon size={20} /></div><h3>{step.title}</h3><p>{step.detail}</p></article></Reveal> })}</div>
        </div>
      </section>

      <section id="strengths" className="section section-anchor">
        <div className="container why-grid">
          <Reveal><div className="why-intro"><SectionHeading eyebrow="What I bring" title="One perspective across technology and design." /><p>Production discipline keeps solutions dependable. Creative thinking keeps them clear, useful, and human.</p><a href="#contact" className="button button--secondary">Connect with me <ArrowRight size={17} /></a></div></Reveal>
          <div className="reasons-grid">{strengths.map((strength, index) => { const Icon = strength.icon; return <Reveal key={strength.title} delay={(index % 2) * 50}><article className="reason-card"><Icon size={20} /><div><h3>{strength.title}</h3><p>{strength.text}</p></div></article></Reveal> })}</div>
        </div>
      </section>

      <section id="contact" className="section professional-contact-section section-anchor">
        <div className="container professional-contact">
          <Reveal><div><SectionHeading eyebrow="Let's connect" title="Talk reliability, cloud, automation, or the web." /><p>To reduce spam, direct email and phone details are not published. Connect with me through LinkedIn to start a conversation.</p></div></Reveal>
          <Reveal delay={70}><div className="professional-contact-card"><p>Connect privately</p><a href={linkedInUrl} target="_blank" rel="noreferrer"><span><ExternalLink size={20} /></span><div><small>LinkedIn</small><strong>/in/sibinjacob</strong></div><ArrowUpRight size={17} /></a><p>Contact details can be exchanged privately after connecting.</p></div></Reveal>
        </div>
      </section>
    </>
  )
}
