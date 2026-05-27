import { Container } from '../ui/Container'

const footerLinks = {
  Product: [
    { label: 'PMS', href: '#product' },
    { label: 'Booking Engine', href: '#product' },
    { label: 'Channel Manager', href: '#product' },
    { label: 'SabeePay', href: '#product' },
    { label: 'Smart Solutions', href: '#product' },
  ],
  Company: [
    { label: 'About', href: 'https://www.sabeeapp.com/about-us' },
    { label: 'Careers', href: 'https://www.sabeeapp.com/careers' },
    { label: 'Contact', href: 'https://www.sabeeapp.com/contact' },
    { label: 'Knowledge Base', href: 'https://www.sabeeapp.com/knowledge-base' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: 'https://www.sabeeapp.com/privacy-policy' },
    { label: 'Terms of Service', href: 'https://www.sabeeapp.com/terms-of-service' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-stone-950 text-stone-400">
      <Container className="section-padding !py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-sm font-bold text-white">
                S
              </div>
              <span className="text-lg font-semibold text-white">SabeeApp</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              All-in-one cloud hotel management for independent and boutique properties.
              PMS, distribution, payments, and guest experience — unified.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white">{title}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-800 pt-8 sm:flex-row">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SabeeApp. All rights reserved.
          </p>
          <p className="text-sm">Built for hoteliers, by hoteliers.</p>
        </div>
      </Container>
    </footer>
  )
}
