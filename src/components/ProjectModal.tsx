import { CheckCircle2, ExternalLink, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { Project } from '../types/portfolio'
import { ProjectVisual } from './ProjectVisual'

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return createPortal(
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button ref={closeButtonRef} type="button" className="modal-close" onClick={onClose} aria-label="Close case study"><X size={20} /></button>
        <div className="project-modal__hero">
          <div className="project-modal__heading">
            <p className="eyebrow"><span />{project.category}</p>
            {project.isPlaceholder && <span className="placeholder-tag">Case-study placeholder</span>}
            <h2 id="project-modal-title">{project.title}</h2>
            <p>{project.description}</p>
            <dl>
              <div><dt>Client</dt><dd>{project.client}</dd></div>
              <div><dt>Role</dt><dd>{project.caseStudy.role}</dd></div>
              <div><dt>Tools</dt><dd>{project.tools.join(', ')}</dd></div>
            </dl>
          </div>
          <ProjectVisual accent={project.accent} label={project.label} title={project.title} compact />
        </div>
        <div className="project-modal__content">
          <section><p>01 / Problem</p><h3>What needed to change.</h3><div>{project.caseStudy.problem}</div></section>
          <section><p>02 / Objective</p><h3>What success should mean.</h3><div>{project.caseStudy.objective}</div></section>
          <section className="project-modal__process"><p>03 / Process</p><h3>How the work takes shape.</h3><ol>{project.caseStudy.process.map((step, index) => <li key={step}><span>{index + 1}</span>{step}</li>)}</ol></section>
          <div className="modal-before-after"><div>Before image placeholder</div><div style={{ '--project-accent': project.accent } as React.CSSProperties}>After image placeholder</div></div>
          <section><p>04 / Challenge</p><h3>Constraints to solve.</h3><div>{project.caseStudy.challenges}</div></section>
          <section><p>05 / Solution</p><h3>The chosen approach.</h3><div>{project.caseStudy.solution}</div></section>
          <section className="modal-results"><CheckCircle2 size={25} /><div><p>06 / Verified result</p><h3>{project.caseStudy.results}</h3></div></section>
          {project.liveUrl && <a className="button button--primary" href={project.liveUrl} target="_blank" rel="noreferrer">View live project <ExternalLink size={16} /></a>}
        </div>
      </section>
    </div>,
    document.body,
  )
}
