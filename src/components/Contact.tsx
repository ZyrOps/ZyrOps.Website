import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'
import { Illustration, ILLUSTRATIONS } from './Illustration'
import { products } from '../data/products'

const QUERY_TYPES = [
  { value: 'product', label: 'Product inquiry' },
  { value: 'engineering', label: 'Custom engineering / services' },
  { value: 'support', label: 'Technical support' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'demo', label: 'Demo / pricing' },
] as const

const fieldClass =
  'mt-2 w-full rounded-2xl border border-line bg-surface px-4 py-3.5 text-sm outline-none transition-[border-color,box-shadow] duration-200 focus:border-accent focus:shadow-[0_0_0_3px_rgba(163,87,253,0.18)]'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [queryType, setQueryType] = useState<(typeof QUERY_TYPES)[number]['value']>('product')
  const [productSlug, setProductSlug] = useState('')

  const productOptions = useMemo(
    () => [...products].sort((a, b) => a.name.localeCompare(b.name)),
    [],
  )

  const showProductField =
    queryType === 'product' || queryType === 'support' || queryType === 'demo'

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      queryType: String(data.get('queryType') || ''),
      product: String(data.get('product') || ''),
      message: String(data.get('message') || ''),
      company: String(data.get('company') || ''),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = (await res.json()) as { success?: boolean; message?: string }

      if (!res.ok || !json.success) {
        throw new Error(json.message || 'Failed to send message')
      }

      setSent(true)
      form.reset()
      setQueryType('product')
      setProductSlug('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line bg-surface py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-sm font-semibold text-accent">Contact & support</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl text-balance">
            Product questions, services, or support — route it clearly
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted text-pretty">
            Choose a query type and related product so we can respond with the
            right specialist. For instant answers, use{' '}
            <strong className="font-semibold text-ink">ZyroAssist</strong> in the
            corner — ChatGPT-style help grounded in ZyrOps products.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              ['Product inquiry', 'ZyroHR, POS, CRM, LMS, and more'],
              ['Custom services', 'Enterprise systems & integrations'],
              ['Technical support', 'Access, setup, and platform help'],
              ['AI assistant', 'Ask ZyroAssist anytime on this site'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-line bg-bg p-4">
                <p className="text-sm font-semibold text-ink">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-2 text-base text-muted">
            <a href="mailto:hello@zyrops.com" className="block transition-colors hover:text-ink">
              hello@zyrops.com
            </a>
            <a href="tel:+919488766222" className="block transition-colors hover:text-ink">
              +91 94887 66222
            </a>
            <p className="pt-2 text-sm leading-relaxed">
              Uthradam Building, Kuttikattoor, Calicut
            </p>
          </div>

          <div className="mt-8 max-w-sm">
            <Illustration
              src={ILLUSTRATIONS.collaboration}
              alt="Collaboration and support illustration"
              className="max-h-40 object-contain"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="relative rounded-[28px] border border-line bg-bg p-6 shadow-[0_24px_60px_-40px_rgba(20,20,20,0.3)] sm:p-8"
            noValidate={false}
          >
            {sent ? (
              <div className="flex min-h-[320px] flex-col justify-center" role="status" aria-live="polite">
                <p className="font-display text-3xl tracking-tight text-ink">Message received</p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                  Thanks — we emailed our team and sent you a confirmation. We
                  typically reply within one business day. For something urgent,
                  email hello@zyrops.com.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false)
                    setError(null)
                  }}
                  className="mt-6 inline-flex h-11 w-fit items-center rounded-full border border-line bg-surface px-5 text-sm font-semibold text-ink"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Honeypot */}
                <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-muted">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      placeholder="Your name…"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-muted">
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      spellCheck={false}
                      required
                      placeholder="you@company.com…"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="queryType" className="text-sm font-medium text-muted">
                    Query type
                  </label>
                  <select
                    id="queryType"
                    name="queryType"
                    required
                    value={queryType}
                    onChange={(e) =>
                      setQueryType(e.target.value as (typeof QUERY_TYPES)[number]['value'])
                    }
                    className={`${fieldClass} appearance-none`}
                  >
                    {QUERY_TYPES.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {showProductField ? (
                  <div>
                    <label htmlFor="product" className="text-sm font-medium text-muted">
                      Related product
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={productSlug}
                      onChange={(e) => setProductSlug(e.target.value)}
                      className={`${fieldClass} appearance-none`}
                      required={queryType === 'product' || queryType === 'support'}
                    >
                      <option value="">Select a product…</option>
                      {productOptions.map((p) => (
                        <option key={p.slug} value={p.slug}>
                          {p.name} — {p.categoryLabel}
                        </option>
                      ))}
                      <option value="multiple">Multiple / not sure</option>
                      <option value="custom">Custom enterprise system</option>
                    </select>
                    {productSlug && productSlug !== 'multiple' && productSlug !== 'custom' ? (
                      <p className="mt-2 text-xs text-muted">
                        <Link
                          to={`/products/${productSlug}`}
                          className="font-semibold text-accent hover:underline"
                        >
                          View {productOptions.find((p) => p.slug === productSlug)?.name} page
                        </Link>
                      </p>
                    ) : null}
                  </div>
                ) : null}

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-muted">
                    {queryType === 'support' ? 'Support details' : 'Your message'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder={
                      queryType === 'support'
                        ? 'What issue are you seeing, and which environment (SaaS / mobile / desktop)?…'
                        : queryType === 'engineering'
                          ? 'What system do you need engineered?…'
                          : 'Tell us about your use case or question…'
                    }
                    className={`${fieldClass} resize-y`}
                  />
                </div>

                {error ? (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                    {error}
                  </div>
                ) : null}

                <div className="rounded-2xl border border-accent/20 bg-soft/60 p-4">
                  <p className="text-sm font-semibold text-ink">Need an instant answer?</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Open <span className="font-semibold text-ink">Ask ZyroAssist</span> (bottom
                    right) for ChatGPT-style product and service help — then send this form if
                    you want a human follow-up by email.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-ink text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85 disabled:opacity-60"
                >
                  {sending ? 'Sending securely…' : 'Send message'}
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
