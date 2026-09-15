import { Reveal } from './Reveal'
import { Illustration, ILLUSTRATIONS } from './Illustration'

const snippet = `// Operational Intelligence Engineering
const ecosystem = await zyrops.engineer({
  architecture: "cloud-native",
  intelligence: ["automation", "visibility", "ai"],
  outcomes: ["clarity", "security", "scale"],
});

await ecosystem.partner({ horizon: "long-term" });`

export function Stack() {
  return (
    <section id="stack" className="border-t border-line bg-surface py-24 sm:py-32">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-sm font-semibold text-accent">Engineering DNA</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl text-balance">
            Think like an engineer. Create like a designer. Lead like a strategist.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted text-pretty">
            High-performance systems in Rust, Go, and Python. Cross-platform
            experiences with Flutter. Secure-by-design platforms that scale with
            business growth.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted">
            {[
              'AI-first operational thinking',
              'Cloud-native architecture from day one',
              'Secure-by-design engineering',
              'Tailored enterprise solutions — not one-size-fits-all',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08} className="space-y-5">
          <div className="overflow-hidden rounded-[24px] border border-line bg-ink shadow-[0_24px_60px_-30px_rgba(20,20,20,0.45)]">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-xs text-white/40">zyrops.engineer.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 text-[12px] leading-relaxed text-[#c7d2fe] sm:text-[13px]">
              <code>{snippet}</code>
            </pre>
          </div>
          <div className="rounded-[24px] border border-line bg-bg p-5">
            <Illustration
              src={ILLUSTRATIONS.innovative}
              alt="Innovation illustration"
              className="mx-auto max-h-44 object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
