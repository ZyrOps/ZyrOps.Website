import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { ILLUSTRATIONS, Illustration } from './Illustration'
import { products } from '../data/products'

const featured = products.filter((p) =>
  ['zyrohr', 'zyrocrm', 'zyropos', 'zyrolearn', 'zyrofleet', 'zyroagent'].includes(p.slug),
)

export function Products() {
  return (
    <section id="products" className="border-t border-line bg-bg py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-accent">Enterprise SaaS platforms</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl text-balance">
              HRMS, CRM, POS, LMS, fleet and AI software for modern operations.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg text-pretty">
              Covering workforce management, sales automation, retail checkout,
              employee learning, fleet tracking, and AI-powered operations — all
              deployable as SaaS, mobile, desktop, or custom enterprise workflows.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex h-11 shrink-0 items-center rounded-full border border-line bg-surface px-5 text-sm font-semibold text-ink transition-colors hover:border-ink/20"
          >
            View all products →
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {featured.map((product, i) => (
            <Reveal key={product.slug} delay={Math.min(i * 0.05, 0.2)}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
                <Link
                  to={`/products/${product.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-line bg-surface"
                >
                  <div className="flex h-44 items-center justify-center bg-warm/40 px-6">
                    <Illustration
                      src={product.illustration || ILLUSTRATIONS.dashboard}
                      alt={`${product.name} illustration`}
                      className="max-h-36 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
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
                      Explore →
                    </span>
                  </div>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
