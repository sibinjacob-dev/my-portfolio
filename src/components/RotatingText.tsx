import { useEffect, useState } from 'react'

export function RotatingText({ items }: { items: string[] }) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const interval = window.setInterval(() => {
      setVisible(false)
      window.setTimeout(() => {
        setIndex((current) => (current + 1) % items.length)
        setVisible(true)
      }, 220)
    }, 2800)
    return () => window.clearInterval(interval)
  }, [items.length])

  return (
    <span className={`rotating-text ${visible ? 'rotating-text--visible' : ''}`} aria-live="polite">
      {items[index]}
    </span>
  )
}
