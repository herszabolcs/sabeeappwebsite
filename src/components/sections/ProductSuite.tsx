import {
  CreditCard,
  Globe,
  LayoutDashboard,
  Puzzle,
  RefreshCw,
  Smartphone,
  type LucideIcon,
} from 'lucide-react'
import { products } from '../../data/content'
import { Container } from '../ui/Container'

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Globe,
  RefreshCw,
  CreditCard,
  Smartphone,
  Puzzle,
}

export function ProductSuite() {
  return (
    <section id="product" className="section-padding">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-brand-600 uppercase">
            The SabeeApp Suite
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl">
            Everything your property needs,{' '}
            <span className="italic">in one place</span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            From reservations to payments to guest check-in — replace fragmented tools
            with a single cloud platform built for modern hospitality.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = iconMap[product.icon]
            return (
              <article
                key={product.title}
                className="group rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{product.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {product.description}
                </p>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
