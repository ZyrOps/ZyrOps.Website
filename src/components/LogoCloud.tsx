const logos = [
  'AI-first operations',
  'Cloud-native',
  'Secure-by-design',
  'Rust',
  'Go',
  'Python',
  'Flutter',
  'React',
  'Enterprise engineering',
  'Real-time visibility',
]

export function LogoCloud() {
  const loop = [...logos, ...logos]

  return (
    <section className="border-y border-line bg-surface/70 py-10" aria-label="Capabilities">
      <p className="container-page mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        Intelligence That Moves Business Forward
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent sm:w-28" />
        <div className="marquee flex w-max gap-3 px-4">
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex shrink-0 items-center rounded-full border border-line bg-bg px-5 py-2.5 text-sm font-medium text-ink/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
