import { Check } from 'lucide-react'
import { pricingFeatures, pricingTiers } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-brand-600 uppercase">
            Transparent pricing
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            Plans that scale with your property
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Fixed monthly subscription. No expensive license fees. Free trial for all
            new customers.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <article
              key={tier.units}
              className={`relative rounded-2xl border p-6 transition-shadow hover:shadow-lg ${
                i === 2
                  ? 'border-brand-300 bg-brand-50/30 shadow-md shadow-brand-600/10'
                  : 'border-border bg-white'
              }`}
            >
              {i === 2 && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-0.5 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <p className="text-sm text-ink-muted">{tier.units} rentable units</p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">
                  €{tier.price}
                </span>
                <span className="text-sm text-ink-muted">/month</span>
              </div>
              <ul className="mt-6 space-y-2.5">
                {pricingFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check size={16} className="shrink-0 text-brand-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-ink-muted">
            Optional add-ons not included. Need 180+ units?{' '}
            <a href="#demo" className="font-medium text-brand-600 hover:underline">
              Contact us for custom pricing
            </a>
          </p>
          <Button className="mt-6" size="lg" href="#demo">
            Start your free trial
          </Button>
        </div>
      </Container>
    </section>
  )
}
