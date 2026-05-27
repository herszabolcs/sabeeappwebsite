import { ArrowUpRight } from 'lucide-react'
import { integrations } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Integrations() {
  return (
    <section id="integrations" className="section-padding bg-stone-950 text-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wide text-brand-400 uppercase">
              Integrations
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              Connect with the tools you already use
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-400">
              Extend SabeeApp with 50+ verified integrations for pricing, distribution,
              access, accounting, and payments — or build custom connections via Open API.
            </p>
            <Button
              className="mt-8"
              variant="secondary"
              href="https://www.sabeeapp.com/marketplace"
            >
              Explore marketplace
              <ArrowUpRight size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {integrations.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-xl border border-stone-800 bg-stone-900/60 px-4 py-5 text-sm font-medium text-stone-300 transition-colors hover:border-brand-700 hover:bg-stone-900"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
