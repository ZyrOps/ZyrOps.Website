import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { Illustration, ILLUSTRATIONS } from '../components/Illustration'
import { Seo } from '../components/Seo'
import {
  fetchJobs,
  formatEmploymentType,
  formatPostedDate,
  type CareerJob,
  type CareerTenant,
} from '../lib/careersApi'

export function CareersPage() {
  const [jobs, setJobs] = useState<CareerJob[]>([])
  const [tenant, setTenant] = useState<CareerTenant | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchJobs()
        if (cancelled) return
        setJobs(data.jobs)
        setTenant(data.tenant)
      } catch (err) {
        if (cancelled) return
        setError(err instanceof Error ? err.message : 'Failed to load jobs')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="pt-28 sm:pt-32">
      <Seo
        title="Careers — Join ZyrOps | Operational Intelligence Engineering"
        description="Explore open roles at ZyrOps Technologies. Engineer intelligent operational ecosystems with clarity, reliability, and measurable outcomes."
        keywords={['ZyrOps careers', 'enterprise SaaS jobs', 'software engineering jobs Kerala']}
        path="/careers"
      />

      <section className="relative overflow-hidden pb-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#f59e0b]/10 blur-3xl" />
        </div>

        <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-sm font-semibold text-accent">Careers</p>
            <h1 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-6xl text-balance">
              Engineer better. Grow with us.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg text-pretty">
              Join a team that engineers intelligent operational ecosystems —
              with quiet confidence, precise engineering, and a focus on
              measurable outcomes.
            </p>
            {tenant ? (
              <p className="mt-4 text-sm text-muted">
                Open roles at{' '}
                <span className="font-semibold text-ink" translate="no">
                  {tenant.name}
                </span>
              </p>
            ) : null}
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[28px] border border-line bg-surface p-6 shadow-[0_24px_60px_-40px_rgba(20,20,20,0.3)] sm:p-8">
              <Illustration
                src={ILLUSTRATIONS.engineering}
                alt="Engineering team illustration"
                className="mx-auto max-h-64 object-contain"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="open-roles" className="border-t border-line bg-surface py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-accent">Open roles</p>
              <h2 className="mt-2 font-display text-3xl tracking-tight text-ink sm:text-4xl">
                Current openings
              </h2>
            </div>
            {!loading && !error ? (
              <p className="text-sm text-muted tabular-nums">
                {jobs.length} {jobs.length === 1 ? 'role' : 'roles'}
              </p>
            ) : null}
          </Reveal>

          {loading ? (
            <div className="space-y-4" aria-busy="true" aria-live="polite">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-28 animate-pulse rounded-[20px] border border-line bg-bg"
                />
              ))}
            </div>
          ) : null}

          {error ? (
            <div
              className="rounded-[20px] border border-red-200 bg-red-50 px-5 py-6 text-sm text-red-700"
              role="alert"
            >
              {error}
            </div>
          ) : null}

          {!loading && !error && jobs.length === 0 ? (
            <div className="rounded-[20px] border border-line bg-bg px-6 py-14 text-center">
              <p className="font-display text-2xl tracking-tight text-ink">
                No open roles right now
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm text-muted">
                Check back soon, or email{' '}
                <a href="mailto:hello@zyrops.com" className="font-medium text-ink underline-offset-2 hover:underline">
                  hello@zyrops.com
                </a>{' '}
                with your profile.
              </p>
            </div>
          ) : null}

          {!loading && !error && jobs.length > 0 ? (
            <ul className="space-y-4">
              {jobs.map((job, i) => (
                <Reveal key={job.id} delay={Math.min(i * 0.04, 0.2)} as="li">
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-[20px] border border-line bg-bg p-5 sm:p-6"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <Link
                          to={`/careers/${job.id}`}
                          className="text-xl font-bold tracking-tight text-ink transition-colors hover:text-accent"
                        >
                          {job.title}
                        </Link>
                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                          {job.location ? <span>{job.location}</span> : null}
                          {job.location && job.employment_type ? (
                            <span aria-hidden="true">•</span>
                          ) : null}
                          {job.employment_type ? (
                            <span>{formatEmploymentType(job.employment_type)}</span>
                          ) : null}
                          {job.created_at ? (
                            <>
                              <span aria-hidden="true">•</span>
                              <span>Posted {formatPostedDate(job.created_at)}</span>
                            </>
                          ) : null}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2.5">
                        <Link
                          to={`/careers/${job.id}`}
                          className="inline-flex h-11 items-center rounded-full border border-line bg-surface px-5 text-sm font-semibold text-ink transition-colors hover:border-ink/20"
                        >
                          View role
                        </Link>
                        <a
                          href={job.apply_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
                        >
                          Apply
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </ul>
          ) : null}
        </div>
      </section>
    </div>
  )
}
