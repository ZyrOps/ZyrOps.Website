import { Link, useParams } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { Illustration } from '../components/Illustration'
import { Seo } from '../components/Seo'
import { getProduct, products } from '../data/products'

const productUseCases: Record<string, { audience: string[]; useCases: string[] }> = {
  zyrohr: {
    audience: ['HR teams', 'Operations leaders', 'Multi-location workforces'],
    useCases: [
      'Automate attendance, leave, payroll, and employee lifecycle workflows.',
      'Give managers real-time visibility into workforce compliance and approval status.',
      'Reduce repetitive HR admin with self-service tools and AI-assisted support.',
    ],
  },
  zyrocrm: {
    audience: ['Sales teams', 'Account managers', 'Customer success leaders'],
    useCases: [
      'Track leads, follow-ups, and sales pipelines without scattered spreadsheets.',
      'Keep customer history and next actions visible across the entire revenue team.',
      'Improve conversion with clearer pipeline visibility and faster follow-up cycles.',
    ],
  },
  zyrofleet: {
    audience: ['Logistics teams', 'Dispatch managers', 'Field operations leaders'],
    useCases: [
      'Monitor live vehicle movement, route performance, and delivery status in one view.',
      'Coordinate dispatch, driver movement, and operational coverage across locations.',
      'Reduce delays and improve operational decisions with real-time fleet insights.',
    ],
  },
  zyrolearn: {
    audience: ['L&D teams', 'Training managers', 'Enterprise learning programs'],
    useCases: [
      'Create and manage employee training programs with AI-assisted course workflows.',
      'Track learner progress, assessments, and compliance across departments.',
      'Scale onboarding and continuous learning across locations without complexity.',
    ],
  },
  zyropos: {
    audience: ['Retail operators', 'Multi-store managers', 'Business owners'],
    useCases: [
      'Support faster checkout across stores with one flexible POS workflow.',
      'Track sales, stock, and billing across different retail formats from one platform.',
      'Improve retail operations with clearer reporting and lower manual overhead.',
    ],
  },
}

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProduct(slug) : undefined

  if (!product) {
    return (
      <div className="container-page py-32">
        <Seo title="Product not found — ZyrOps" path="/products" />
        <h1 className="font-display text-4xl tracking-tight">Product not found</h1>
        <p className="mt-4 text-muted">This product page does not exist.</p>
        <Link to="/products" className="mt-8 inline-flex text-sm font-semibold text-accent">
          ← Back to products
        </Link>
      </div>
    )
  }

  const related = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  ).slice(0, 3)

  return (
    <div className="pt-28 sm:pt-32">
      <Seo
        title={product.seoTitle}
        description={product.seoDescription}
        keywords={product.keywords}
        path={`/products/${product.slug}`}
      />

      <section className="pb-16 sm:pb-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Link
              to="/products"
              className="inline-flex text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              ← All products
            </Link>
            <p className="mt-6 text-sm font-semibold text-accent">{product.categoryLabel}</p>
            <h1
              className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-6xl text-balance"
              translate="no"
            >
              {product.name}
            </h1>
            <p className="mt-4 text-lg font-medium text-ink/80">{product.tagline}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted text-pretty">
              {product.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/#contact"
                className="inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-white"
              >
                {product.ctaLabel || `Talk about ${product.name}`}
              </Link>
              <Link
                to="/products"
                className="inline-flex h-12 items-center rounded-full border border-line bg-surface px-6 text-sm font-semibold text-ink"
              >
                View suite
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[28px] border border-line bg-surface p-6 shadow-[0_24px_60px_-40px_rgba(20,20,20,0.3)] sm:p-8">
              <Illustration
                src={product.illustration}
                alt={`${product.name} product illustration`}
                className="mx-auto max-h-72 object-contain"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              What {product.name} delivers
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {product.highlights.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <article className="rounded-[20px] border border-line bg-bg p-5">
                  <p className="text-sm font-semibold text-ink">{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-bg py-16 sm:py-20">
        <div className="container-page space-y-10">
          {product.features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.04}>
              <div className="grid gap-4 border-b border-line pb-10 md:grid-cols-[0.9fr_1.1fr]">
                <h3 className="text-xl font-bold tracking-tight text-ink">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted sm:text-base text-pretty">
                  {feature.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {productUseCases[product.slug] ? (
        <section className="border-t border-line bg-surface py-16 sm:py-20">
          <div className="container-page grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div>
                <p className="text-sm font-semibold text-accent">Built for real business workflows</p>
                <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
                  Operational value for teams that scale
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
                  {product.name} helps organizations move faster by connecting people,
                  process, and operational visibility into one practical workflow.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-[22px] border border-line bg-bg p-5">
                  <h3 className="text-lg font-bold tracking-tight text-ink">Who it serves</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {productUseCases[product.slug].audience.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[22px] border border-line bg-bg p-5">
                  <h3 className="text-lg font-bold tracking-tight text-ink">Common use cases</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {productUseCases[product.slug].useCases.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {related.length ? (
        <section className="border-t border-line bg-surface py-16 sm:py-20">
          <div className="container-page">
            <Reveal>
              <h2 className="font-display text-3xl tracking-tight text-ink">Related platforms</h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/products/${item.slug}`}
                  className="rounded-[20px] border border-line bg-bg p-5 transition-colors hover:border-accent/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {item.categoryLabel}
                  </p>
                  <p className="mt-2 font-bold text-ink" translate="no">
                    {item.name}
                  </p>
                  <p className="mt-2 text-sm text-muted line-clamp-2">{item.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  )
}
