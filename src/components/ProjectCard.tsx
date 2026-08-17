import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../types/portfolio'
import { ProjectVisual } from './ProjectVisual'

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return (
    <article className="project-card">
      <button type="button" className="project-card__visual" aria-label={`View ${project.title} case study`} onClick={() => onOpen(project)}>
        <ProjectVisual accent={project.accent} label={project.label} title={project.title} compact />
      </button>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.category}</span>
          {project.isPlaceholder && <span className="placeholder-tag">Placeholder</span>}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list" aria-label="Tools used">
          {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
        <button type="button" className="text-link" onClick={() => onOpen(project)}>
          View case study <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}
