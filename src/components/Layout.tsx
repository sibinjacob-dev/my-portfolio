import type { ReactNode } from 'react'
import { Coffee } from 'lucide-react'
import { Footer } from './Footer'
import { Header } from './Header'

interface LayoutProps { children: ReactNode }

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">{children}</main>
      <a
        className="coffee-button"
        href="https://www.buymeacoffee.com/sibinjacob"
        target="_blank"
        rel="noreferrer"
        aria-label="Support Sibin on Buy Me a Coffee"
      >
        <Coffee size={18} />
        <span>Buy me a coffee</span>
      </a>
      <Footer />
    </>
  )
}
