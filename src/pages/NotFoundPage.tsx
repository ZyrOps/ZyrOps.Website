import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Illustration, ILLUSTRATIONS } from '../components/Illustration'
import { Seo } from '../components/Seo'

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/careers', label: 'Careers' },
  { to: '/#contact', label: 'Contact', hash: true },
]

export function NotFoundPage() {
  const reduce = useReducedMotion()

  return (
    <div className="relative overflow-hidden pt-28 sm:pt-32">
      <Seo
        title="Page not found — ZyrOps"
        description="This page doesn’t exist. It may have been moved, removed, or never existed."
        path="/404"
        noIndex
      />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -right-16 top-32 h-80 w-80 rounded-full bg-[#f59e0b]/10 blur-3xl" />
      </div>

      <section className="container-page relative grid min-h-[70svh] items-center gap-12 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:pb-32">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">404</p>
          <h1 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-6xl text-balance">
            This page doesn’t exist
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg text-pretty">
            It may have been moved, removed, or never existed. Head home, browse products, or
            reach out — we’ll get you back on track.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/"
              className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
            >
              Back to home
            </Link>
            <Link
              to="/products"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-surface px-6 text-sm font-semibold text-ink transition-colors duration-200 hover:border-ink/20"
            >
              Explore products
            </Link>
          </div>

          <nav className="mt-10 flex flex-wrap gap-x-5 gap-y-2" aria-label="Helpful links">
            {links.map((link) =>
              link.hash ? (
                <a
                  key={link.to}
                  href={link.to}
                  className="text-sm font-medium text-muted transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-muted transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="rounded-[28px] border border-line bg-surface p-6 shadow-[0_30px_80px_-40px_rgba(20,20,20,0.35)] sm:p-8">
            <div className="float-soft">
              <Illustration
                src={ILLUSTRATIONS.notFound}
                alt="Illustration of a missing page"
                priority
                className="mx-auto max-h-80 object-contain"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
