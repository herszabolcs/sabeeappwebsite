import { steps } from '../../data/content'
import { Container } from '../ui/Container'

export function HowItWorks() {
  return (
    <section className="section-padding">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-brand-600 uppercase">
            How it works
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            From setup to growth in days, not months
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-8 hidden w-px bg-border lg:left-1/2 lg:block" />

          <div className="space-y-12">
            {steps.map((item, i) => (
              <article
                key={item.step}
                className={`relative grid items-center gap-6 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className={`${i % 2 === 1 ? 'lg:text-right' : ''}`}>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white lg:hidden">
                    {item.step}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold lg:mt-0">{item.title}</h3>
                  <p className="mt-2 text-ink-muted">{item.description}</p>
                </div>

                <div className="hidden lg:flex lg:items-center lg:justify-center">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-200 bg-brand-50 text-lg font-bold text-brand-700">
                    {item.step}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
