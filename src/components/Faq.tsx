import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Reveal } from './Reveal'

const faqs = [
  {
    q: 'What is Operational Intelligence Engineering?',
    a: 'It is the discipline of designing intelligent, scalable operational ecosystems that combine software, automation, cloud architecture, and data-driven insights into one unified business platform — not isolated applications.',
  },
  {
    q: 'Is ZyrOps a software development agency?',
    a: 'No. ZyrOps is positioned as an Operational Intelligence Company. We engineer connected platforms and long-term technology partnerships focused on measurable business outcomes.',
  },
  {
    q: 'What products are in the ZyrOps ecosystem?',
    a: 'Our ecosystem includes ZyroPOS for retail operations, CipherTrak for workforce intelligence, ZyroHR for people operations, plus CRM, support, finance platforms, and custom enterprise systems.',
  },
  {
    q: 'Where is ZyrOps located?',
    a: 'ZyrOps is at Uthradam Building, Kuttikattoor, Calicut. You can also reach us at hello@zyrops.com or +91 94887 66222.',
  },
  {
    q: 'How do we start working together?',
    a: 'Share a short brief at hello@zyrops.com or call +91 94887 66222. We listen first, understand the business, then recommend the clearest path forward.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()
  const reduce = useReducedMotion()

  return (
    <section id="faq" className="border-t border-line bg-bg py-24 sm:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <p className="text-sm font-semibold text-accent">Clarity first</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl text-balance">
            Straight answers. No buzzwords.
          </h2>
        </Reveal>

        <div>
          {faqs.map((item, i) => {
            const isOpen = open === i
            const panelId = `${baseId}-p-${i}`
            const btnId = `${baseId}-b-${i}`
            return (
              <Reveal key={item.q} delay={Math.min(i * 0.04, 0.12)}>
                <div className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      id={btnId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="text-base font-semibold tracking-tight text-ink sm:text-lg">
                        {item.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-lg transition-transform duration-200 ${isOpen ? 'rotate-45 bg-ink text-white' : 'bg-surface text-muted'}`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-12 text-sm leading-relaxed text-muted">{item.a}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
