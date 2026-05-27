import { testimonials } from '../../data/content'
import { Container } from '../ui/Container'

export function Testimonials() {
  return (
    <section className="section-padding bg-brand-50/50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-brand-600 uppercase">
            Customer stories
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            Empowering 6,000+ hoteliers worldwide
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="flex flex-col rounded-2xl border border-border bg-white p-6"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-ink-muted">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="mt-0.5 text-xs text-ink-muted">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
