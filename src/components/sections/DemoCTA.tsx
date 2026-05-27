import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { isSupabaseConfigured, submitDemoRequest } from '../../lib/supabase'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function DemoCTA() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    setStatus('loading')
    setErrorMessage('')

    try {
      await submitDemoRequest({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        property_name: (formData.get('property_name') as string) || undefined,
        room_count: (formData.get('room_count') as string) || undefined,
        message: (formData.get('message') as string) || undefined,
      })
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      )
    }
  }

  return (
    <section id="demo" className="section-padding">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 text-white sm:p-12 lg:p-14">
              <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
                Ready to simplify your operations?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-100">
                Book a personalised demo and see how SabeeApp can transform your
                property — from reservations to guest check-out.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-brand-100">
                {[
                  'Free trial for all new customers',
                  'Live in days with dedicated onboarding',
                  'Multilingual support in 8 languages',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-brand-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 sm:p-12 lg:p-14">
              {status === 'success' ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Thank you!</h3>
                  <p className="mt-2 text-sm text-ink-muted">
                    We&apos;ll be in touch shortly to schedule your demo.
                  </p>
                  <Button
                    variant="secondary"
                    className="mt-6"
                    onClick={() => setStatus('idle')}
                  >
                    Submit another request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-semibold">Book a free demo</h3>

                  {!isSupabaseConfigured && (
                    <p className="rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
                      Supabase is not configured yet. Add your credentials to{' '}
                      <code className="font-mono">.env</code> to enable form
                      submissions.
                    </p>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium">Name *</span>
                      <input
                        name="name"
                        required
                        className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-medium">Email *</span>
                      <input
                        name="email"
                        type="email"
                        required
                        className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                        placeholder="you@hotel.com"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium">Property name</span>
                      <input
                        name="property_name"
                        className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                        placeholder="Hotel name"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-medium">Room count</span>
                      <select
                        name="room_count"
                        className="mt-1.5 w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select range
                        </option>
                        <option value="1-9">1–9 units</option>
                        <option value="10-19">10–19 units</option>
                        <option value="20-49">20–49 units</option>
                        <option value="50-99">50–99 units</option>
                        <option value="100+">100+ units</option>
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-sm font-medium">Message</span>
                    <textarea
                      name="message"
                      rows={3}
                      className="mt-1.5 w-full resize-none rounded-xl border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                      placeholder="Tell us about your property..."
                    />
                  </label>

                  {status === 'error' && (
                    <p className="text-sm text-red-600">{errorMessage}</p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === 'loading' || !isSupabaseConfigured}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Request demo'
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
