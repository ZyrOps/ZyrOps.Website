import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'

export type SolutionPageData = {
  slug: string
  title: string
  heading: string
  description: string
  intro: string
  audience: string[]
  features: string[]
  cta: string
  related: { label: string; href: string }[]
}

const solutionData: Record<string, SolutionPageData> = {
  'hrms-software': {
    slug: 'hrms-software',
    title: 'HRMS Software for Attendance, Payroll and Employee Management | ZyrOps',
    heading: 'HRMS software for smarter workforce operations',
    description:
      'Manage attendance, payroll, leave, and employee records in one HRMS platform built for modern operations teams.',
    intro:
      'ZyrOps HRMS software gives growing organizations a practical way to manage workforce records, attendance, payroll, approvals, and employee self-service without manual admin bottlenecks.',
    audience: ['HR teams', 'Operations leaders', 'Multi-location businesses'],
    features: [
      'Attendance tracking and overtime workflows',
      'Leave, approvals, and payroll coordination',
      'Centralized employee records and self-service access',
      'Faster reporting for workforce and compliance visibility',
    ],
    cta: 'Book a HRMS demo',
    related: [
      { label: 'ZyroHR', href: '/products/zyrohr' },
      { label: 'ZyroCRM', href: '/products/zyrocrm' },
      { label: 'ZyroLearn', href: '/products/zyrolearn' },
    ],
  },
  'retail-pos-software': {
    slug: 'retail-pos-software',
    title: 'Retail POS Software for Supermarkets and Multi-Store Operations | ZyrOps',
    heading: 'Retail POS software for faster checkout and better control',
    description:
      'Modern POS software for supermarkets and multi-store retail teams that need faster checkout and clearer inventory visibility.',
    intro:
      'ZyrOps retail POS solutions help stores process transactions more quickly, keep stock aligned with sales, and give managers better operational visibility across counter and inventory workflows.',
    audience: ['Retail stores', 'Supermarkets', 'Multi-location operators'],
    features: [
      'Fast checkout and barcode-driven billing',
      'Inventory and sales visibility across outlets',
      'Store-level reporting and operational insights',
      'Support for growing retail operations with less friction',
    ],
    cta: 'Talk to a retail POS specialist',
    related: [
      { label: 'ZyroPOS', href: '/products/zyropos' },
      { label: 'ZyroMart', href: '/products/zyromart' },
      { label: 'ZyroHR', href: '/products/zyrohr' },
    ],
  },
}

export function SolutionPage({ slug }: { slug: string }) {
  const page = solutionData[slug]

  if (!page) {
    return (
      <div className="container-page py-32">
        <Seo title="Solution not found | ZyrOps" path="/solutions" />
        <h1 className="font-display text-4xl">Solution not found</h1>
        <Link to="/products" className="mt-6 inline-flex text-sm font-semibold text-accent">
          Back to products
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-28 sm:pt-32">
      <Seo title={page.title} description={page.description} path={`/solutions/${page.slug}`} />

      <section className="container-page pb-16 sm:pb-20">
        <p className="text-sm font-semibold text-accent">ZyrOps solutions</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight text-ink sm:text-6xl text-balance">
          {page.heading}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
          {page.intro}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/#contact"
            className="inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-white"
          >
            {page.cta}
          </Link>
          <Link
            to="/products"
            className="inline-flex h-12 items-center rounded-full border border-line bg-surface px-6 text-sm font-semibold text-ink"
          >
            View all platforms
          </Link>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-accent">Who it helps</p>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {page.audience.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-accent">Key features</p>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {page.features.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <p className="text-sm font-semibold text-accent">Related products</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {page.related.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="rounded-[20px] border border-line bg-bg p-5 text-sm font-semibold text-ink transition-colors hover:border-accent/40"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
