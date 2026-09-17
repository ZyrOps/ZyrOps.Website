import { motion, useReducedMotion } from 'framer-motion'
import { Illustration, ILLUSTRATIONS } from './Illustration'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-[#f59e0b]/10 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-[#0d9488]/10 blur-3xl" />
      </div>

      <div className="container-page relative grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-muted backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            HRMS, CRM, POS, LMS, fleet and AI platforms
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[clamp(2.75rem,7vw,5.25rem)] leading-[1.02] tracking-tight text-ink text-balance"
          >
            Enterprise software for
            <span className="block text-muted">smarter operations.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg text-pretty"
          >
            ZyrOps builds intelligent HR, CRM, retail, learning, fleet, productivity,
            and AI platforms that help organizations automate repetitive work,
            reduce operational friction, and scale with more visibility.
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-4 text-sm font-medium tracking-wide text-ink/70"
          >
            Engineer Better. Operate Smarter. Grow Further.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
            >
              Start a conversation
            </a>
            <a href="/products" className="inline-flex h-12 items-center rounded-full border border-line bg-surface px-6 text-sm font-semibold text-ink transition-colors duration-200 hover:border-ink/20">
              Explore the ecosystem
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="rounded-[28px] border border-line bg-surface p-6 shadow-[0_30px_80px_-40px_rgba(20,20,20,0.35)] sm:p-8">
            <div className="float-soft">
              <Illustration
                src={ILLUSTRATIONS.vision}
                alt="Visionary technology illustration for intelligent operations"
                priority
                className="mx-auto max-w-md"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
