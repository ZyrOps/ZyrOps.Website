import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { Illustration, ILLUSTRATIONS } from './Illustration'

const platforms = [
  {
    title: 'Connected product platforms',
    body: 'ZyroHR, ZyroCRM, ZyroPOS, ZyroLearn, and more — connected operational platforms that improve efficiency, visibility, and decision-making across the organization.',
    to: '/products',
    cta: 'See the ecosystem',
    image: ILLUSTRATIONS.dashboard,
    alt: 'Operational dashboard illustration',
  },
  {
    title: 'Custom enterprise systems',
    body: 'Tailored operational ecosystems built with cloud-native architecture, AI automation, and enterprise engineering — designed around your goals, not the other way around.',
    href: '#services',
    cta: 'Explore engineering',
    image: ILLUSTRATIONS.building,
    alt: 'Building digital platforms illustration',
  },
]

export function Platforms() {
  return (
    <section id="platforms" className="py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-accent">Market category</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl text-balance">
            Operational Intelligence Engineering
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg text-pretty">
            We are not a software agency or IT services provider. We design
            intelligent, scalable operational ecosystems that combine software,
            automation, cloud architecture, and data-driven insight into one
            unified business platform.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {platforms.map((item, i) => {
            const className =
              'group flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-surface shadow-[0_20px_50px_-36px_rgba(20,20,20,0.35)]'
            const inner = (
              <>
                <div className="border-b border-line bg-warm/50 px-6 py-8 sm:px-8">
                  <Illustration src={item.image} alt={item.alt} className="mx-auto max-h-56 object-contain" />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-2xl font-bold tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base text-pretty">
                    {item.body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors group-hover:text-ink">
                    {item.cta}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </>
            )

            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                  {'to' in item && item.to ? (
                    <Link to={item.to} className={className}>
                      {inner}
                    </Link>
                  ) : (
                    <a href={item.href} className={className}>
                      {inner}
                    </a>
                  )}
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
