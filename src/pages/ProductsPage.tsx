import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { Illustration } from '../components/Illustration'
import { Seo } from '../components/Seo'
import {
  CATEGORY_META,
  CATEGORY_ORDER,
  SITE_SEO,
  getProductsByCategory,
  products,
} from '../data/products'
import { ILLUSTRATIONS } from '../components/Illustration'

const advantages = [
  {
    title: '12+ Integrated Platforms',
    body: 'Covering HR, CRM, operations, retail, learning, and AI — all under one roof.',
  },
  {
    title: 'Multi-Deployment',
    body: 'SaaS, PaaS, mobile, and desktop — deploy wherever your business demands.',
  },
  {
    title: 'AI-Powered Core',
    body: 'Intelligent automation embedded across HRMS, learning, and development workflows.',
  },
]

export function ProductsPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <Seo
        title={SITE_SEO.productsTitle}
        description={SITE_SEO.productsDescription}
        keywords={SITE_SEO.keywords}
        path="/products"
      />

      <section className="relative overflow-hidden pb-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-[#f59e0b]/10 blur-3xl" />
        </div>

        <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-sm font-semibold text-accent">ZyrOps Technologies</p>
            <h1 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-6xl text-balance">
              Complete Enterprise SaaS Suite
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg text-pretty">
              {products.length} integrated platforms. One unified ecosystem. Built
              for the enterprise of tomorrow.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#catalog"
                className="inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-white"
              >
                Browse platforms
              </a>
              <Link
                to="/#contact"
                className="inline-flex h-12 items-center rounded-full border border-line bg-surface px-6 text-sm font-semibold text-ink"
              >
                Talk to sales
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[28px] border border-line bg-surface p-6 shadow-[0_24px_60px_-40px_rgba(20,20,20,0.3)] sm:p-8">
              <Illustration
                src={ILLUSTRATIONS.dashboard}
                alt="ZyrOps enterprise SaaS suite illustration"
                className="mx-auto max-h-64 object-contain"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold text-accent">The ZyrOps Advantage</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl text-balance">
              One ecosystem. Every deployment path.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {advantages.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="h-full rounded-[24px] border border-line bg-bg p-6">
                  <h3 className="text-lg font-bold tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="border-t border-line bg-bg py-16 sm:py-24">
        <div className="container-page space-y-16">
          {CATEGORY_ORDER.map((category) => {
            const meta = CATEGORY_META[category]
            const items = getProductsByCategory(category)
            if (!items.length) return null
            return (
              <div key={category}>
                <Reveal>
                  <p className="text-sm font-semibold text-accent">{meta.label}</p>
                  <h2 className="mt-2 font-display text-3xl tracking-tight text-ink sm:text-4xl">
                    {meta.label}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                    {meta.blurb}
                  </p>
                </Reveal>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {items.map((product, i) => (
                    <Reveal key={product.slug} delay={Math.min(i * 0.04, 0.16)}>
                      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                        <Link
                          to={`/products/${product.slug}`}
                          className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-line bg-surface"
                        >
                          <div className="flex h-40 items-center justify-center bg-warm/40 px-5">
                            <Illustration
                              src={product.illustration}
                              alt={`${product.name} illustration`}
                              className="max-h-32 object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex flex-1 flex-col p-5 sm:p-6">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                              {product.categoryLabel}
                            </p>
                            <h3 className="mt-2 text-xl font-bold tracking-tight" translate="no">
                              {product.name}
                            </h3>
                            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                              {product.summary}
                            </p>
                            <span className="mt-5 text-sm font-semibold text-ink/70 transition-colors group-hover:text-accent">
                              View product →
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold text-accent">Deployment flexibility</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl text-balance">
              Built for every enterprise environment
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              {[
                'SaaS: cloud-based access with zero infrastructure overhead',
                'PaaS: deep custom integrations for enterprise systems',
                'Mobile & desktop: native apps for major platforms',
                'Security & scale: enterprise-grade from day one',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[24px] border border-line bg-bg p-6">
              <p className="text-sm font-semibold text-ink">ZyrOps EcoSystem partners</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Payment Gateway', 'Meta', 'NVIDIA', 'OpenAI', 'Cursor'].map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink/80"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                A fully integrated ecosystem connected to the world&apos;s most
                powerful technology partners.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
