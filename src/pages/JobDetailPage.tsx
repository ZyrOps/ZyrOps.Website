import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import {
  fetchJob,
  formatEmploymentType,
  formatPostedDate,
  type CareerJob,
} from '../lib/careersApi'

function RichText({ value }: { value: string }) {
  const looksLikeHtml = /<\/?[a-z][\s\S]*>/i.test(value)
  if (looksLikeHtml) {
    return (
      <div
        className="prose-careers text-sm leading-relaxed text-muted [&_a]:text-accent [&_li]:my-1 [&_p]:my-3 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-5"
        dangerouslySetInnerHTML={{ __html: value }}
      />
    )
  }

  return (
    <p className="whitespace-pre-wrap text-sm leading-relaxed text-muted text-pretty">
      {value}
    </p>
  )
}

export function JobDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [job, setJob] = useState<CareerJob | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    let cancelled = false

    ;(async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchJob(id)
        if (cancelled) return
        setJob(data.job)
        document.title = `${data.job.title} — Careers — ZyrOps`
      } catch (err) {
        if (cancelled) return
        setError(err instanceof Error ? err.message : 'Failed to load job')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()

    return () => {
      cancelled = true
      document.title = 'ZyrOps — Engineering Intelligence. Empowering Growth.'
    }
  }, [id])

  return (
    <div className="pt-28 sm:pt-32">
      <section className="pb-20 sm:pb-28">
        <div className="container-page max-w-3xl">
          <Reveal>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              ← All roles
            </Link>
          </Reveal>

          {loading ? (
            <div className="mt-8 space-y-4" aria-busy="true">
              <div className="h-10 w-2/3 animate-pulse rounded-xl bg-warm" />
              <div className="h-5 w-1/2 animate-pulse rounded-lg bg-warm" />
              <div className="mt-8 h-40 animate-pulse rounded-2xl bg-warm" />
            </div>
          ) : null}

          {error ? (
            <div className="mt-8 rounded-[20px] border border-red-200 bg-red-50 px-5 py-6 text-sm text-red-700" role="alert">
              {error}
            </div>
          ) : null}

          {!loading && job ? (
            <Reveal delay={0.05} className="mt-8">
              <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl text-balance">
                {job.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                {job.location ? <span>{job.location}</span> : null}
                {job.location && job.employment_type ? <span aria-hidden="true">•</span> : null}
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

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={job.apply_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-white transition-opacity hover:opacity-85"
                >
                  Apply now
                </a>
                <Link
                  to="/careers"
                  className="inline-flex h-12 items-center rounded-full border border-line bg-surface px-6 text-sm font-semibold text-ink"
                >
                  Back to careers
                </Link>
              </div>

              <div className="mt-12 space-y-10 border-t border-line pt-10">
                {job.description ? (
                  <section>
                    <h2 className="text-lg font-bold tracking-tight text-ink">About the role</h2>
                    <div className="mt-4">
                      <RichText value={job.description} />
                    </div>
                  </section>
                ) : null}

                {job.responsibilities ? (
                  <section>
                    <h2 className="text-lg font-bold tracking-tight text-ink">Responsibilities</h2>
                    <div className="mt-4">
                      <RichText value={job.responsibilities} />
                    </div>
                  </section>
                ) : null}

                {job.requirements ? (
                  <section>
                    <h2 className="text-lg font-bold tracking-tight text-ink">Requirements</h2>
                    <div className="mt-4">
                      <RichText value={job.requirements} />
                    </div>
                  </section>
                ) : null}

                {!job.description && !job.responsibilities && !job.requirements ? (
                  <section className="rounded-[20px] border border-line bg-bg p-6">
                    <p className="text-sm leading-relaxed text-muted">
                      Full role details are available on the application form. Click Apply now to
                      continue.
                    </p>
                  </section>
                ) : null}
              </div>
            </Reveal>
          ) : null}
        </div>
      </section>
    </div>
  )
}
