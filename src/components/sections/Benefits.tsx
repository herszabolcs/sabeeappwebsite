import { benefits } from '../../data/content'
import { Container } from '../ui/Container'

export function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-stone-950 text-white">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold tracking-wide text-brand-400 uppercase">
              Why hoteliers choose SabeeApp
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl">
              Stay calm, connected, and{' '}
              <span className="italic text-brand-400">in control</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-400">
              Whether you&apos;re juggling last-minute bookings or coordinating
              housekeeping, SabeeApp keeps every department aligned in real time.
            </p>

            <blockquote className="mt-10 border-l-2 border-brand-500 pl-6">
              <p className="font-serif text-2xl leading-snug italic text-stone-200">
                &ldquo;With SabeeApp we reduced check-in time from 15 minutes to only
                3 minutes.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-stone-500">
                — Florin Apart Hotel, peak-season operations
              </footer>
            </blockquote>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, i) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-stone-800 bg-stone-900/50 p-6"
              >
                <span className="text-xs font-medium text-brand-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
