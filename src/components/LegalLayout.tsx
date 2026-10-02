import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from './Seo'

const legalNav = [
  { to: '/privacy', label: 'Privacy Notice' },
  { to: '/cookies', label: 'Cookie Policy' },
  { to: '/data-rights', label: 'Data Rights & Grievance' },
  { to: '/terms', label: 'Terms of Use' },
]

type LegalLayoutProps = {
  title: string
  description: string
  path: string
  heading: string
  updated: string
  children: ReactNode
}

export function LegalLayout({
  title,
  description,
  path,
  heading,
  updated,
  children,
}: LegalLayoutProps) {
  return (
    <div className="pt-28 sm:pt-32">
      <Seo title={title} description={description} path={path} />

      <section className="border-b border-line bg-surface">
        <div className="container-page py-12 sm:py-16">
          <p className="text-sm font-semibold text-accent">Legal · DPDP Act, 2023</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight text-ink sm:text-5xl text-balance">
            {heading}
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: {updated}</p>
          <nav
            aria-label="Legal pages"
            className="mt-8 flex flex-wrap gap-2"
          >
            {legalNav.map((item) => {
              const active = item.to === path
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`inline-flex h-9 items-center rounded-full border px-4 text-xs font-semibold transition-colors ${
                    active
                      ? 'border-ink bg-ink text-white'
                      : 'border-line bg-bg text-muted hover:text-ink'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </section>

      <article className="container-page max-w-3xl py-12 sm:py-16">
        <div className="legal-prose space-y-8 text-sm leading-relaxed text-muted [&_a]:font-semibold [&_a]:text-accent [&_a]:underline-offset-2 hover:[&_a]:underline [&_h2]:font-display [&_h2]:text-2xl [&_h2]:tracking-tight [&_h2]:text-ink [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-ink [&_li]:mt-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>

        <div className="mt-12 rounded-[20px] border border-line bg-surface p-5 sm:p-6">
          <p className="text-sm font-semibold text-ink">Privacy contact</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Questions about how we process personal data? Email{' '}
            <a href="mailto:hello@zyrops.com?subject=Privacy%20%2F%20DPDP%20query" className="font-semibold text-accent underline-offset-2 hover:underline">
              hello@zyrops.com
            </a>{' '}
            with the subject “Privacy / DPDP”, or use our{' '}
            <Link to="/data-rights" className="font-semibold text-accent underline-offset-2 hover:underline">
              Data Rights &amp; Grievance
            </Link>{' '}
            page.
          </p>
        </div>
      </article>
    </div>
  )
}
