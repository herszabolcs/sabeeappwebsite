import { Container } from '../ui/Container'

export function LogoCloud() {
  const partners = [
    'Booking.com',
    'Airbnb',
    'Expedia',
    'Hostelworld',
    'Stripe',
    'Xero',
  ]

  return (
    <section className="border-y border-border bg-white py-12">
      <Container>
        <p className="text-center text-sm font-medium text-ink-muted">
          Trusted by 6,000+ hoteliers · Integrated with leading hospitality platforms
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-sm font-semibold tracking-wide text-stone-400 uppercase"
            >
              {partner}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}
