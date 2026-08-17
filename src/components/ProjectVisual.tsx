interface ProjectVisualProps {
  accent: string
  label: string
  title: string
  compact?: boolean
}

export function ProjectVisual({ accent, label, title, compact = false }: ProjectVisualProps) {
  return (
    <div
      className={`project-visual ${compact ? 'project-visual--compact' : ''}`}
      style={{ '--project-accent': accent } as React.CSSProperties}
      role="img"
      aria-label={`Placeholder visual for ${title}`}
    >
      <div className="project-visual__grid" />
      <div className="project-visual__orb" />
      <div className="project-visual__window">
        <span /><span /><span />
      </div>
      <p>{label}</p>
      <small>Replace with project image</small>
    </div>
  )
}
