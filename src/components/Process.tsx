import { Reveal } from './Reveal'
import { Illustration, ILLUSTRATIONS } from './Illustration'

const steps = [
  {
    n: '01',
    title: 'Understand before building',
    body: 'We listen first — mapping goals, constraints, and the operations that must stay clear and reliable.',
  },
  {
    n: '02',
    title: 'Engineer outcomes, not just software',
    body: 'Solutions are designed for visibility, automation, and measurable business impact — not feature lists.',
  },
  {
    n: '03',
    title: 'Partner for continuous evolution',
    body: 'Innovation is a mindset. We improve continuously so systems keep pace with growth.',
  },
]

export function Process() {
  return (
    <section id="process" className="border-t border-line bg-bg py-24 sm:py-32">
      <div className="container-page">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <p className="text-sm font-semibold text-accent">How we partner</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl text-balance">
              Solve before selling. Deliver consistently.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted text-pretty">
              Every interaction reflects quiet confidence, engineering precision,
              and a commitment to meaningful business outcomes.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <Illustration
              src={ILLUSTRATIONS.agreement}
              alt="Partnership agreement illustration"
              className="mx-auto max-h-48 object-contain lg:ml-auto"
            />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <article className="h-full rounded-[24px] border border-line bg-surface p-6 sm:p-7">
                <span className="text-xs font-semibold tabular-nums text-accent">{step.n}</span>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
