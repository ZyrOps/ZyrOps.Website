import { Reveal } from './Reveal'
import { Illustration, ILLUSTRATIONS } from './Illustration'

export function Safety() {
  return (
    <section className="border-t border-line bg-surface py-24 sm:py-32">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-[28px] border border-line bg-bg p-6 sm:p-8">
            <Illustration
              src={ILLUSTRATIONS.secure}
              alt="Secure systems illustration"
              className="mx-auto max-h-72 object-contain"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-sm font-semibold text-accent">Brand promise</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl text-balance">
            Clarity, security, scalability, and measurable impact
          </h2>
          <ul className="mt-8 space-y-5">
            {[
              ['Security is a responsibility', 'Trust begins with protecting data, systems, and people — by design.'],
              ['Reliability at scale', 'Platforms engineered to perform consistently as operations grow.'],
              ['Customer success defines ours', 'Technology has value only when it creates measurable outcomes.'],
            ].map(([title, body]) => (
              <li key={title} className="border-t border-line pt-5">
                <p className="font-semibold text-ink">{title}</p>
                <p className="mt-1 text-sm text-muted">{body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
