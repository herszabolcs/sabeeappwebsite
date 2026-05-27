import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between lg:h-[4.5rem]">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">
            S
          </div>
          <span className="text-lg font-semibold tracking-tight">SabeeApp</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" href="https://app.sabeeapp.com">
            Log in
          </Button>
          <Button size="sm" href="#demo">
            Book a demo
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ink-muted hover:bg-stone-100 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-border bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm text-ink-muted hover:bg-stone-50 hover:text-ink"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
              <Button variant="secondary" href="https://app.sabeeapp.com">
                Log in
              </Button>
              <Button href="#demo">Book a demo</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
