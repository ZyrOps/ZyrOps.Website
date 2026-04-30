import {
  ArrowLeft,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Network,
  TerminalSquare,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl, brand, jsonLdScript } from "../../lib/seo";
import { getCareerJob } from "../careers-api";

export const dynamic = "force-dynamic";

type Params = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;

  try {
    const job = await getCareerJob(id);

    return {
      title: `${job.title} | Careers`,
      description: job.description || `Apply for ${job.title} at ZyrOps LLP.`,
      alternates: {
        canonical: absoluteUrl(`/careers/${id}`),
      },
      openGraph: {
        title: `${job.title} | Careers at ZyrOps`,
        description: job.description || `Apply for ${job.title} at ZyrOps LLP.`,
        url: absoluteUrl(`/careers/${id}`),
        type: "website",
      },
    };
  } catch {
    return {
      title: "Careers | ZyrOps",
    };
  }
}

function normalizedList(value: string[] | string | undefined) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (!value) return [];
  return value
    .split(/\r?\n|•|-/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export default async function CareerDetailPage({ params }: Params) {
  const { id } = await params;
  let job;

  try {
    job = await getCareerJob(id);
  } catch {
    notFound();
  }

  const requirements = normalizedList(job.requirements);
  const responsibilities = normalizedList(job.responsibilities);
  const jobSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description || `${job.title} at ${brand.legalName}`,
    datePosted: job.posted_on || job.created_at || new Date().toISOString(),
    employmentType: job.employment_type || undefined,
    hiringOrganization: {
      "@type": "Organization",
      name: brand.legalName,
      sameAs: absoluteUrl("/"),
      logo: absoluteUrl("/logo.png"),
    },
    jobLocation: job.location
      ? {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: job.location,
            addressRegion: brand.region,
            addressCountry: brand.country,
          },
        }
      : undefined,
    url: absoluteUrl(`/careers/${id}`),
  };

  return (
    <main className="site-shell careers-shell" data-theme="dark">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jobSchema) }} />
      <nav className="nav contact-nav">
        <Link href="/" className="brand" aria-label="ZyrOps home">
          <span>
            <Image src="/logo.png" alt="" width={34} height={34} priority />
          </span>
          <strong>ZyrOps</strong>
        </Link>
        <div className="nav-links">
          <Link href="/#services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="nav-actions">
          <Link href="/careers" className="launch-link">
            <ArrowLeft />
            Careers
          </Link>
        </div>
      </nav>

      <article className="career-detail">
        <header className="career-detail-hero">
          <p className="hero-kicker">{job.department || "ZyrOps Careers"}</p>
          <h1>{job.title}</h1>
          <span>{job.description || "A live role from the ZyrOps HRMS careers board."}</span>
          <div className="careers-job-meta">
            {job.location ? (
              <span>
                <MapPin />
                {job.location}
              </span>
            ) : null}
            {job.employment_type ? <span>{job.employment_type}</span> : null}
            {job.experience ? <span>{job.experience}</span> : null}
            {job.salary_range ? <span>{job.salary_range}</span> : null}
          </div>
          <div className="contact-actions">
            {job.apply_url ? (
              <a href={job.apply_url} target="_blank" rel="noreferrer">
                <BriefcaseBusiness />
                Apply for Role
                <ExternalLink />
              </a>
            ) : (
              <a href={`mailto:${brand.email}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}>
                <TerminalSquare />
                Apply by Email
              </a>
            )}
            <Link href="/careers">
              <ArrowLeft />
              All Roles
            </Link>
          </div>
        </header>

        <div className="career-detail-grid">
          <section>
            <div className="section-heading">
              <p>Responsibilities</p>
              <h2>What this role owns.</h2>
            </div>
            <div className="career-list-panel">
              {responsibilities.length ? (
                responsibilities.map((item) => (
                  <p key={item}>
                    <CheckCircle2 />
                    {item}
                  </p>
                ))
              ) : (
                <p>
                  <CheckCircle2 />
                  Role responsibilities will be shared during the hiring conversation.
                </p>
              )}
            </div>
          </section>

          <section>
            <div className="section-heading">
              <p>Requirements</p>
              <h2>What helps you succeed.</h2>
            </div>
            <div className="career-list-panel">
              {requirements.length ? (
                requirements.map((item) => (
                  <p key={item}>
                    <CheckCircle2 />
                    {item}
                  </p>
                ))
              ) : (
                <p>
                  <CheckCircle2 />
                  Bring evidence of practical work, clear communication, and ownership.
                </p>
              )}
            </div>
          </section>
        </div>
      </article>

      <footer className="footer contact-footer">
        <div className="footer-grain" aria-hidden />
        <p>Careers</p>
        <h2>Bring proof of work and ownership.</h2>
        <div className="footer-actions">
          <Link href="/careers">
            <BriefcaseBusiness />
            Open roles
          </Link>
          <Link href="/site-map">
            <Network />
            Site map
          </Link>
        </div>
        <span className="footer-location">Kozhikode and Wayanad, Kerala</span>
      </footer>
    </main>
  );
}
