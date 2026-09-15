import { Reveal } from './Reveal'
import { Illustration, ILLUSTRATIONS } from './Illustration'

export function Agents() {
  return (
    <section id="agents" className="border-t border-line bg-ink py-24 text-white sm:py-32">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-sm font-semibold text-[#a5b4fc]">AI that amplifies people</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl text-balance">
            Automation should amplify human capability — not replace it
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/60 text-pretty">
            ZyrOps agents triage signals, reduce repetition, and surface the next
            clear action. Operators stay in control when judgment, trust, and
            accountability matter.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ['Clarity', 'Replace assumption with insight'],
              ['Speed', 'Respond faster to operational change'],
              ['Trust', 'Guardrails keep actions aligned'],
              ['Partnership', 'Humans own the final call'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-1 text-sm text-white/50">{body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-10">
            <Illustration
              src={ILLUSTRATIONS.agent}
              alt="AI agent illustration"
              className="mx-auto max-h-80 object-contain brightness-110"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
