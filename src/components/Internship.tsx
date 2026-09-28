import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'
import { Illustration, ILLUSTRATIONS } from './Illustration'

const highlights = [
  {
    title: 'Learn in-demand skills',
    body: 'Build practical skills across ZyrOps Technologies domains — from SaaS platforms to custom enterprise systems.',
  },
  {
    title: 'Stay current with trends',
    body: 'Upgrade your toolkit with modern engineering practices, AI-assisted workflows, and the latest product trends.',
  },
  {
    title: 'Learn from experts',
    body: 'Work alongside experienced engineers and product teams who mentor you through real delivery challenges.',
  },
  {
    title: 'Real projects, hands-on',
    body: 'Contribute to live projects with hands-on experience — not simulations — across roles at ZyrOps and partner companies.',
  },
]

type Props = {
  /** Primary CTA — usually careers open roles */
  careersTo?: string
  /** Secondary CTA — contact / interest form */
  formTo?: string
}

export function Internship({
  careersTo = '/careers',
  formTo = '/#contact',
}: Props) {
  const careersIsHash = careersTo.startsWith('#')
  const formIsHash = formTo.startsWith('#') || formTo.startsWith('/#')

  return (
    <section id="internship" className="border-t border-line bg-bg py-16 sm:py-24">
      <div className="container-page">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-sm font-semibold text-accent">Internship</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl text-balance">
              Learn skills. Ship real work. Grow with ZyrOps.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted text-pretty">
              Our internship program gives you hands-on experience across
              domains from ZyrOps Technologies — learn from experts on real
              projects, stay current with the latest trends, and open doors to
              roles at ZyrOps and partner companies.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[28px] border border-line bg-surface p-6 shadow-[0_24px_60px_-40px_rgba(20,20,20,0.3)] sm:p-8">
              <Illustration
                src={ILLUSTRATIONS.developer}
                alt="Developer learning and building illustration"
                className="mx-auto max-h-56 object-contain"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i * 0.04, 0.16)}>
              <article className="h-full rounded-[24px] border border-line bg-surface p-6">
                <h3 className="text-lg font-bold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 rounded-[24px] border border-line bg-surface p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="text-lg font-bold tracking-tight text-ink">
                Ready for an opportunity?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">
                Check the careers page for open roles, or fill the form to get
                an opportunity to work with ZyrOps and ZyrOps partner companies
                in various roles.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              {careersIsHash ? (
                <a
                  href={careersTo}
                  className="inline-flex h-11 items-center rounded-full border border-line bg-bg px-5 text-sm font-semibold text-ink transition-colors hover:border-ink/20"
                >
                  View open roles
                </a>
              ) : (
                <Link
                  to={careersTo}
                  className="inline-flex h-11 items-center rounded-full border border-line bg-bg px-5 text-sm font-semibold text-ink transition-colors hover:border-ink/20"
                >
                  View careers
                </Link>
              )}
              {formIsHash ? (
                <a
                  href={formTo}
                  className="inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
                >
                  Fill the form
                </a>
              ) : (
                <Link
                  to={formTo}
                  className="inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
                >
                  Fill the form
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
