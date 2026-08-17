import type { ReactNode } from 'react'
import type { PortfolioView } from '../types/navigation'
import { Footer } from './Footer'
import { Header } from './Header'

interface LayoutProps {
  children: ReactNode
  view: PortfolioView
  onNavigate: (view: PortfolioView) => void
}

export function Layout({ children, view, onNavigate }: LayoutProps) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header view={view} onNavigate={onNavigate} />
      <main id="main-content">{children}</main>
      <Footer view={view} onNavigate={onNavigate} />
    </>
  )
}
