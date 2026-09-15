import { Reveal } from './Reveal'
import { Illustration, ILLUSTRATIONS } from './Illustration'

const features = [
  {
    eyebrow: '01 · AI-first thinking',
    title: 'Automation that amplifies human capability',
    body: 'We use AI to remove repetition and surface clearer decisions — so people focus on judgment, strategy, and growth.',
    image: ILLUSTRATIONS.decisions,
    alt: 'Business decisions illustration',
    reverse: false,
  },
  {
    eyebrow: '02 · Cloud-native architecture',
    title: 'Built to scale from day one',
    body: 'Every platform is designed for secure, cloud-native growth — so operations stay reliable as the organization expands.',
    image: ILLUSTRATIONS.cloud,
    alt: 'Cloud hosting illustration',
    reverse: true,
  },
  {
    eyebrow: '03 · High-performance engineering',
    title: 'Systems engineered for reliability',
    body: 'High-performance backends in Rust, Go, and Python. Cross-platform experiences with Flutter. Secure-by-design by default.',
    image: ILLUSTRATIONS.programming,
    alt: 'Programming illustration',
    reverse: false,
  },
  {
    eyebrow: '04 · Real-time visibility',
    title: 'Insight over assumption',
    body: 'When teams have real-time visibility and intelligent automation, they respond faster, collaborate better, and operate with confidence.',
    image: ILLUSTRATIONS.analytics,
    alt: 'Analytics illustration',
    reverse: true,
  },
]

export function FeatureBands() {
  return (
    <section id="services" className="border-t border-line bg-surface py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold text-accent">How we engineer</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl text-balance">
            Connected platforms — not isolated applications
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted text-pretty">
            Software alone does not solve fragmented operations. Intelligent
            systems do. Every solution is built to create operational clarity.
          </p>
        </Reveal>

        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
          {features.map((feature) => (
            <Reveal key={feature.title} delay={0.04}>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={feature.reverse ? 'lg:order-2' : ''}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {feature.eyebrow}
                  </p>
                  <h3 className="mt-4 font-display text-3xl tracking-tight text-ink sm:text-4xl text-balance">
                    {feature.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted text-pretty">
                    {feature.body}
                  </p>
                </div>
                <div
                  className={`rounded-[28px] border border-line bg-bg p-6 sm:p-8 ${feature.reverse ? 'lg:order-1' : ''}`}
                >
                  <Illustration
                    src={feature.image}
                    alt={feature.alt}
                    className="mx-auto max-h-72 object-contain"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
