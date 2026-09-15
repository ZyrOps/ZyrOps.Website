import { Reveal } from './Reveal'
import { Illustration, ILLUSTRATIONS } from './Illustration'

const beliefs = [
  {
    title: 'Intelligence over complexity',
    body: 'Technology should reduce complexity, not create it.',
  },
  {
    title: 'Engineering over improvisation',
    body: 'Every challenge has a better solution — built with logic, structure, and purpose.',
  },
  {
    title: 'Automation over repetition',
    body: 'Automation should amplify human capability, not replace it.',
  },
  {
    title: 'Insight over assumption',
    body: 'Data should empower every decision with clarity and confidence.',
  },
  {
    title: 'Partnership over projects',
    body: 'Long-term partnerships create lasting value for every organization we serve.',
  },
  {
    title: 'Enterprise-grade for everyone',
    body: 'Every organization, regardless of size, deserves secure, scalable technology.',
  },
]

export function Beliefs() {
  return (
    <section id="beliefs" className="border-t border-line bg-bg py-24 sm:py-32">
      <div className="container-page">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <p className="text-sm font-semibold text-accent">Brand belief</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl text-balance">
              Technology should quietly become the engine that powers progress
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted text-pretty">
              Businesses do not struggle because they lack software. They
              struggle because systems are disconnected, data is fragmented, and
              operations cannot keep pace with growth.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Illustration
              src={ILLUSTRATIONS.growth}
              alt="Growth analytics illustration"
              className="mx-auto max-h-56 object-contain lg:ml-auto"
            />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i * 0.04, 0.2)}>
              <article className="h-full rounded-[24px] border border-line bg-surface p-6">
                <h3 className="text-lg font-bold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
