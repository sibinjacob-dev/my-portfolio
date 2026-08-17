import { useCallback, useEffect, useState } from 'react'
import { Layout } from './components/Layout'
import { GatewayPage } from './pages/GatewayPage'
import { HomePage } from './pages/HomePage'
import type { PortfolioView } from './types/navigation'

function getViewFromPath(): PortfolioView {
  const path = window.location.pathname.replace(/\/+$/, '')
  if (path === '/professional') return 'professional'
  if (path === '/freelance') return 'freelance'
  return 'gateway'
}

export default function App() {
  const [view, setView] = useState<PortfolioView>(getViewFromPath)

  useEffect(() => {
    const handlePopState = () => setView(getViewFromPath())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((nextView: PortfolioView) => {
    const path = nextView === 'gateway' ? '/' : `/${nextView}`
    window.history.pushState({}, '', path)
    setView(nextView)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <Layout view={view} onNavigate={navigate}>
      {view === 'gateway'
        ? <GatewayPage onNavigate={navigate} />
        : <HomePage view={view} onNavigate={navigate} />}
    </Layout>
  )
}
