import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Code2,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Handshake,
  Headphones,
  Layers3,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  Phone,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Wrench,
  Zap,
} from 'lucide-react'
import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectModal } from '../components/ProjectModal'
import { ProjectVisual } from '../components/ProjectVisual'
import { Reveal } from '../components/Reveal'
import { RotatingText } from '../components/RotatingText'
import { SectionHeading } from '../components/SectionHeading'
import { achievements } from '../data/achievements'
import { certifications } from '../data/certifications'
import { education } from '../data/education'
import { freelanceServices } from '../data/freelanceServices'
import { personalInformation } from '../data/personalInformation'
import { portfolioProjects, projectCategories } from '../data/portfolioProjects'
import { professionalExperience } from '../data/professionalExperience'
import { socialLinks } from '../data/socialLinks'
import { technicalSkills } from '../data/technicalSkills'
import { testimonials } from '../data/testimonials'
import type { Project, ProjectCategory } from '../types/portfolio'
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
  { title: 'Technical foundation', text: 'Production experience shapes practical, resilient solutions.', icon: ShieldCheck },
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
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectCategory>('All')
  const [contactService, setContactService] = useState('Website Design & Development')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const title = view === 'professional'
      ? 'Sibin Jacob — Site Reliability Engineer'
      : 'Sibin Jacob — Independent Web & Creative Services'
    const description = view === 'professional'
      ? 'Professional portfolio of Sibin Jacob, a Site Reliability Engineer experienced in cloud operations, observability, automation, and incident response.'
      : 'Independent creative services by Sibin Jacob, including website design, development, visual design, hosting, SEO, and maintenance.'
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${window.location.origin}/${view}`)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${window.location.origin}/${view}`)
  }, [view])

  const visibleProjects = useMemo(
    () => activeCategory === 'All' ? portfolioProjects : portfolioProjects.filter((project) => project.category === activeCategory),
    [activeCategory],
  )
  const heroSocialLinks = socialLinks.filter(({ label }) =>
    isProfessional ? ['LinkedIn', 'Email'].includes(label) : ['Email', 'WhatsApp', 'Instagram'].includes(label),
  )
  const linkedInUrl = socialLinks.find(({ label }) => label === 'LinkedIn')?.href ?? '#'

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = `Portfolio enquiry — ${form.get('service')}`
    const body = [
      `Name: ${form.get('name')}`,
      `Email: ${form.get('email')}`,
      `Phone: ${form.get('phone') || 'Not provided'}`,
      `Service: ${form.get('service')}`,
      `Budget: ${form.get('budget')}`,
      `Preferred contact: ${form.get('contactMethod')}`,
      '',
      'Project details:',
      form.get('description'),
    ].join('\n')
    window.location.href = `mailto:${personalInformation.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <section id="home" className={`hero section-anchor ${isProfessional ? 'hero--professional' : 'hero--freelance'}`}>
        <div className="hero-noise" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="availability"><span />{isProfessional ? 'Professional career portfolio' : 'Independent creative services'}</p>
            <h1>{isProfessional ? <>Engineering reliable<br /><em>production systems.</em></> : <>Creative work,<br /><em>independently built.</em></>}</h1>
            <div className="role-line">
              <span>{isProfessional ? `${personalInformation.firstName} Jacob —` : 'Focused freelance practice —'}</span>
              <RotatingText items={isProfessional ? personalInformation.roles.professional : personalInformation.roles.freelance} />
            </div>
            <p className="hero-intro">{isProfessional ? personalInformation.professionalIntro : personalInformation.freelanceIntro}</p>
            <div className="hero-actions">
              {isProfessional ? <>
                <a href="#career" className="button button--primary">View experience <ArrowDownRight size={18} /></a>
                <a href={personalInformation.resumePath} download className="button button--secondary"><Download size={18} />Download resume</a>
                <a href="#contact" className="button button--ghost">Professional contact <ArrowRight size={18} /></a>
              </> : <>
                <a href="#services" className="button button--primary">Explore services <ArrowDownRight size={18} /></a>
                <a href="#portfolio" className="button button--secondary">View sample work <ArrowRight size={18} /></a>
                <a href="#contact" className="button button--ghost">Request a quote <ArrowRight size={18} /></a>
              </>}
            </div>
            <div className="hero-socials" aria-label="Social links">
              <span>{isProfessional ? 'Professional links' : 'Creative enquiries'}</span><i aria-hidden="true" />
              {heroSocialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label}><Icon size={18} /></a>
              ))}
            </div>
          </div>

          {isProfessional ? <div className="hero-portrait-wrap" aria-label="Profile photograph placeholder">
            <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
            <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
            <div className="hero-portrait">
              <img src={personalInformation.profileImage} alt="Sibin Jacob profile photograph placeholder" width="620" height="760" />
              <div className="portrait-label"><span>Based in</span><strong>Kerala, India</strong></div>
            </div>
            <div className="floating-note floating-note--top"><Zap size={17} /><span>Reliability first</span></div>
            <div className="floating-note floating-note--bottom"><ShieldCheck size={17} /><span>Operations with ownership</span></div>
          </div> : <div className="freelance-hero-art" aria-label="Creative services overview">
            <div className="freelance-art-card freelance-art-card--main"><span>Independent studio</span><strong>Websites that feel<br />clear & considered.</strong><small>DESIGN / BUILD / LAUNCH</small></div>
            <div className="freelance-art-card freelance-art-card--design"><Palette size={22} /><span>Visual design</span></div>
            <div className="freelance-art-card freelance-art-card--web"><Code2 size={22} /><span>Web development</span></div>
            <div className="freelance-art-grid" aria-hidden="true" />
          </div>}
        </div>
        <div className="container hero-footnote"><span>01</span><p>Scroll to explore</p><i /></div>
        <button type="button" className="path-corner-switch" onClick={() => onNavigate(isProfessional ? 'freelance' : 'professional')}>
          Looking for {isProfessional ? 'creative services' : 'my professional career'}? <ArrowRight size={15} />
        </button>
      </section>

      {isProfessional && <>
      <section id="about" className="section section-anchor about-section">
        <div className="container">
          <Reveal>
            <div className="about-grid">
              <SectionHeading eyebrow="Professional profile" title="Reliability work grounded in ownership." />
              <div className="about-copy">
                <p className="lead-copy">My professional career centres on site reliability, cloud operations, observability, automation, and incident response across enterprise environments.</p>
                <p>I approach operational problems by understanding the failure mode, reducing ambiguity, improving visibility, and building repeatable solutions that are easier for teams to operate.</p>
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

      <section id="career" className="section section--tinted section-anchor">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Professional career"
              title="A career built around dependable operations."
              description="Resume-sourced experience across enterprise reliability, cloud infrastructure, monitoring, automation, and incident response."
            />
          </Reveal>
          <div className="career-timeline">
            {professionalExperience.map((experience, index) => (
              <Reveal key={experience.id} delay={index * 60}>
                <article className="career-card">
                  <div className="career-marker"><span>{experience.logoText}</span></div>
                  <div className="career-card__main">
                    <div className="career-card__header">
                      <div>
                        <p className="career-date">{experience.dates}</p>
                        <h3>{experience.role}</h3>
                        <p className="career-company">{experience.company}</p>
                      </div>
                      <span className="location-pill"><MapPin size={14} />{experience.location}</span>
                    </div>
                    {experience.product && <p className="product-line"><span>Product / account</span>{experience.product}</p>}
                    <p>{experience.description}</p>
                    <details className="career-details">
                      <summary>Responsibilities & highlights <ChevronRight size={17} /></summary>
                      <ul>
                        {experience.responsibilities.map((item) => <li key={item}><Check size={15} />{item}</li>)}
                        {experience.achievements.map((item) => <li key={item}><Award size={15} />{item}</li>)}
                      </ul>
                    </details>
                    <div className="tag-list">{experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section section-anchor">
        <div className="container">
          <Reveal>
            <div className="section-heading-row">
              <SectionHeading eyebrow="Technical skills" title="Tools for reliable, scalable work." description="Experience labels replace arbitrary percentage scores and can be updated in one data file." />
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
                    <a href="#contact" className="text-link" onClick={() => setContactService(service.title)}>Request a quote <ArrowRight size={16} /></a>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section section-anchor">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow="Selected work" title="A place for work that speaks clearly." description="Sample entries below demonstrate the finished portfolio system. Every one is labelled until real work and approved case studies replace it." />
          </Reveal>
          <div className="project-filters" role="group" aria-label="Filter portfolio projects">
            {projectCategories.map((category) => (
              <button key={category} type="button" className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}>{category}</button>
            ))}
          </div>
          <div className="projects-grid" aria-live="polite">
            {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} onOpen={setSelectedProject} />)}
          </div>
        </div>
      </section>

      <section className="section featured-case-section">
        <div className="container">
          <Reveal>
            <div className="featured-case">
              <div className="featured-case__visual">
                <ProjectVisual accent={portfolioProjects[1].accent} label="CASE / TEMPLATE" title="Featured case study template" />
              </div>
              <div className="featured-case__copy">
                <p className="eyebrow"><span />Featured case-study layout</p>
                <span className="placeholder-tag">Placeholder content</span>
                <h2>Show the thinking behind the finished work.</h2>
                <p>This reusable detail page is ready for the client problem, your role, process, challenges, solution, before-and-after assets, and verified results.</p>
                <div className="featured-points">
                  <span><strong>01</strong>Context & objective</span>
                  <span><strong>02</strong>Process & decisions</span>
                  <span><strong>03</strong>Solution & results</span>
                </div>
                <button type="button" className="button button--primary" onClick={() => setSelectedProject(portfolioProjects[1])}>Explore the template <ArrowUpRight size={17} /></button>
              </div>
            </div>
          </Reveal>
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
              <p>Professional operations experience brings structure and ownership. Creative practice keeps the work human, useful, and visually clear.</p>
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

      <section id="testimonials" className="section testimonials-section section-anchor">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Client notes" title="Space reserved for honest feedback." description="These cards are structural examples only—not real endorsements." /></Reveal>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <Reveal key={`${testimonial.name}-${index}`} delay={index * 70}>
                <article className="testimonial-card">
                  <div className="testimonial-top"><span className="placeholder-tag">Placeholder testimonial</span><div aria-label={`${testimonial.rating} out of 5 stars`}>{Array.from({ length: testimonial.rating }).map((_, star) => <Star key={star} size={14} fill="currentColor" />)}</div></div>
                  <blockquote>“{testimonial.review}”</blockquote>
                  <div className="testimonial-person"><span>{testimonial.name.slice(0, 2).toUpperCase()}</span><div><strong>{testimonial.name}</strong><small>{testimonial.company} · {testimonial.projectType}</small></div></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      </>}

      {isProfessional && <section id="resume" className="section resume-section section-anchor">
        <div className="container">
          <Reveal>
            <div className="resume-header">
              <div><p className="eyebrow"><span />Resume</p><h2>Professional snapshot.</h2><p>Site Reliability Engineer with experience across enterprise cloud operations, production monitoring, automation, incident response, infrastructure management, and operational support.</p></div>
              <a href={personalInformation.resumePath} download className="button button--light"><Download size={18} />Download PDF</a>
            </div>
          </Reveal>
          <div className="resume-grid">
            <Reveal>
              <article className="resume-column">
                <div className="resume-column__title"><FileText size={20} /><h3>Experience</h3></div>
                {professionalExperience.map((item) => (
                  <div className="resume-item" key={item.id}><span>{item.dates}</span><strong>{item.role}</strong><small>{item.company}</small></div>
                ))}
              </article>
            </Reveal>
            <Reveal delay={70}>
              <article className="resume-column">
                <div className="resume-column__title"><GraduationCap size={21} /><h3>Education & training</h3></div>
                {education.map((item) => (
                  <div className="resume-item" key={item.qualification}><span>{item.dates}</span><strong>{item.qualification}</strong><small>{item.institution}<br />{item.university}</small></div>
                ))}
                {certifications.map((item) => (
                  <div className="resume-item" key={item.name}><span>{item.date} · {item.type}</span><strong>{item.name}</strong><small>{item.issuer}</small></div>
                ))}
              </article>
            </Reveal>
            <Reveal delay={140}>
              <article className="resume-column">
                <div className="resume-column__title"><Award size={20} /><h3>Skills & achievements</h3></div>
                <div className="resume-skill-cloud">{technicalSkills.flatMap((group) => group.skills).slice(0, 18).map((skill) => <span key={skill.name}>{skill.name}</span>)}</div>
                {achievements.map((item) => <div className="achievement" key={item.title}><Award size={17} /><div><strong>{item.title}</strong><p>{item.description}</p></div></div>)}
              </article>
            </Reveal>
          </div>
        </div>
      </section>}

      {isProfessional ? <section id="contact" className="section professional-contact-section section-anchor">
        <div className="container professional-contact">
          <Reveal>
            <div>
              <SectionHeading eyebrow="Professional contact" title="Connect about reliability engineering." />
              <p>For employment opportunities, professional networking, or conversations about site reliability and cloud operations, contact me through email or LinkedIn.</p>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <div className="professional-contact-card">
              <p>Professional enquiries</p>
              <a href={`mailto:${personalInformation.email}`}><span><Mail size={20} /></span><div><small>Email</small><strong>{personalInformation.email}</strong></div><ArrowUpRight size={17} /></a>
              <a href={linkedInUrl} target="_blank" rel="noreferrer"><span><ExternalLink size={20} /></span><div><small>LinkedIn</small><strong>/in/sibinjacob</strong></div><ArrowUpRight size={17} /></a>
              <a href={personalInformation.resumePath} download><span><FileText size={20} /></span><div><small>Resume</small><strong>Download professional resume</strong></div><Download size={17} /></a>
              <button type="button" onClick={() => onNavigate('freelance')}>Looking for independent creative services? <ArrowRight size={16} /></button>
            </div>
          </Reveal>
        </div>
      </section> : <section id="contact" className="section contact-section section-anchor">
        <div className="container contact-grid">
          <Reveal>
            <div className="contact-copy">
              <SectionHeading eyebrow="Start a conversation" title="Have something useful to build?" />
              <p>Share the essentials below. Submitting opens your email app with the project details pre-filled—no data is stored by this website.</p>
              <div className="contact-details">
                <a href={`mailto:${personalInformation.email}`}><span><Mail size={19} /></span><div><small>Email</small><strong>{personalInformation.email}</strong></div></a>
                <a href={`tel:${personalInformation.phone.replace(/\s/g, '')}`}><span><Phone size={19} /></span><div><small>Phone</small><strong>{personalInformation.phone}</strong></div></a>
                <div><span><MapPin size={19} /></span><div><small>Location</small><strong>{personalInformation.location}</strong></div></div>
              </div>
              <a href={`https://wa.me/${personalInformation.whatsappNumber}?text=${encodeURIComponent('Hi Sibin, I would like to discuss a project.')}`} target="_blank" rel="noreferrer" className="button button--whatsapp"><MessageCircle size={18} />Start on WhatsApp <ExternalLink size={14} /></a>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-row">
                <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
                <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
              </div>
              <div className="form-row">
                <label>Phone <small>(optional)</small><input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" /></label>
                <label>Service required<select name="service" value={contactService} onChange={(event) => setContactService(event.target.value)}>{freelanceServices.map((service) => <option key={service.id}>{service.title}</option>)}</select></label>
              </div>
              <div className="form-row">
                <label>Budget range<select name="budget" defaultValue="To be discussed"><option>To be discussed</option><option>Under ₹15,000</option><option>₹15,000 – ₹40,000</option><option>₹40,000 – ₹80,000</option><option>Above ₹80,000</option></select></label>
                <label>Preferred contact<select name="contactMethod" defaultValue="Email"><option>Email</option><option>Phone</option><option>WhatsApp</option></select></label>
              </div>
              <label>Project description<textarea name="description" rows={5} placeholder="What are you looking to create, and when do you need it?" required /></label>
              <div className="form-footer"><p><ShieldCheck size={15} />Your details stay in your email app.</p><button className="button button--primary" type="submit">Prepare email <Send size={17} /></button></div>
            </form>
          </Reveal>
        </div>
      </section>}
      {!isProfessional && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  )
}
