import { ArrowRight, Play } from 'lucide-react'
import { awards, stats } from '../../data/content'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Hero() {
  return (
    <section className="mesh-gradient relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-brand-200/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-accent-400/10 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <Badge>Built for independent & boutique hotels</Badge>

          <h1 className="mt-6 font-serif text-5xl leading-[1.08] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            All-in-one hotel management,{' '}
            <span className="italic text-brand-600">beautifully unified</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted text-balance">
            Cloud PMS, Channel Manager, Booking Engine, SabeePay, and Smart Solutions —
            one platform that keeps every team in sync and every guest delighted.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" href="#demo">
              Book a free demo
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" size="lg" href="#product">
              <Play size={18} />
              Explore the suite
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-muted">
            {awards.map((award) => (
              <span key={award} className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-brand-400" />
                {award}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-brand-200/40 to-transparent blur-2xl" />
          <div className="glass relative overflow-hidden rounded-2xl shadow-2xl shadow-stone-900/10">
            <div className="flex items-center gap-2 border-b border-stone-200/80 bg-stone-50/80 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400/80" />
                <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>
              <div className="mx-auto rounded-md bg-white px-4 py-1 text-xs text-ink-muted">
                app.sabeeapp.com
              </div>
            </div>
            <div className="grid gap-px bg-stone-200/60 p-px sm:grid-cols-4">
              <div className="col-span-1 hidden bg-white p-4 sm:block">
                <div className="space-y-3">
                  {['Dashboard', 'Reservations', 'Housekeeping', 'Reports', 'Settings'].map(
                    (item, i) => (
                      <div
                        key={item}
                        className={`rounded-lg px-3 py-2 text-xs font-medium ${
                          i === 0
                            ? 'bg-brand-50 text-brand-700'
                            : 'text-ink-muted'
                        }`}
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className="col-span-3 bg-white p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-ink-muted">Today&apos;s overview</p>
                    <p className="text-lg font-semibold">Grand Boutique Hotel</p>
                  </div>
                  <div className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                    87% occupancy
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { label: 'Arrivals', value: '12' },
                    { label: 'Departures', value: '8' },
                    { label: 'In-house', value: '34' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-stone-100 bg-stone-50/50 p-3"
                    >
                      <p className="text-xs text-ink-muted">{stat.label}</p>
                      <p className="mt-1 text-2xl font-semibold">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 h-24 rounded-xl bg-gradient-to-r from-brand-50 via-brand-100/50 to-accent-400/10" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-semibold tracking-tight text-brand-700 lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
