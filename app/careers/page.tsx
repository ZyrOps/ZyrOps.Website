import {
  ArrowLeft,
  BriefcaseBusiness,
  Building2,
  ExternalLink,
  MapPin,
  Network,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, brand } from "../lib/seo";
import { getCareerJobs } from "./careers-api";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore open roles at ZyrOps LLP across software engineering, SaaS operations, product delivery, and business systems.",
  alternates: {
    canonical: absoluteUrl("/careers"),
  },
  openGraph: {
    title: "Careers | ZyrOps",
    description: "Open roles at ZyrOps LLP for people who build and operate production software systems.",
    url: absoluteUrl("/careers"),
    type: "website",
  },
};

function jobMeta(job: Awaited<ReturnType<typeof getCareerJobs>>["jobs"][number]) {
  return [job.location, job.employment_type, job.department].filter(Boolean).join(" / ");
}

export default async function CareersPage() {
  let jobs: Awaited<ReturnType<typeof getCareerJobs>>["jobs"] = [];
  let apiError = "";

  try {
    const result = await getCareerJobs();
    jobs = result.jobs;
  } catch (error) {
    apiError = error instanceof Error ? error.message : "Unable to load careers right now.";
  }

  return (
    <main className="site-shell careers-shell" data-theme="dark">
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
          <Link href="/" className="launch-link">
            <ArrowLeft />
            Home
          </Link>
        </div>
      </nav>

      <section className="careers-hero">
        <div className="hero-noise" aria-hidden />
        <div className="careers-orbit" aria-hidden />
        <div className="careers-copy">
          <p className="hero-kicker">Careers at ZyrOps</p>
          <h1>Build systems that stay alive after launch.</h1>
          <span>
            Join a team working across SaaS products, backend engineering, mobile apps, support systems,
            and operational software for real business workflows.
          </span>
          <div className="contact-actions">
            <a href="#open-roles">
              <BriefcaseBusiness />
              Open Roles
            </a>
            <Link href="/contact">
              <TerminalSquare />
              Talk to ZyrOps
            </Link>
          </div>
        </div>

        <aside className="careers-command">
          <div className="command-header">
            <Sparkles />
            <span>ZYROPS_CAREERS.RUN</span>
          </div>
          <div className="command-lines">
            <p>
              <b>01</b> Product engineering
            </p>
            <p>
              <b>02</b> SaaS operations
            </p>
            <p>
              <b>03</b> Client delivery
            </p>
            <p>
              <b>04</b> Support visibility
            </p>
          </div>
          <div className="command-status">
            <Building2 />
            {jobs.length ? `${jobs.length} role${jobs.length === 1 ? "" : "s"} open` : "Hiring board synced"}
          </div>
        </aside>
      </section>

      <section id="open-roles" className="careers-roles-section">
        <div className="section-heading">
          <p>Open Roles</p>
          <h2>{jobs.length ? "Current openings from ZyrOps HRMS." : "No active openings right now."}</h2>
        </div>

        {apiError ? (
          <div className="careers-empty">
            <TerminalSquare />
            <h3>Careers feed is temporarily unavailable.</h3>
            <p>{apiError}</p>
            <a href={`mailto:${brand.email}?subject=Careers%20at%20ZyrOps`}>Email careers interest</a>
          </div>
        ) : jobs.length ? (
          <div className="careers-job-grid">
            {jobs.map((job) => (
              <article className="careers-job-card" key={job.id}>
                <div className="careers-job-card__top">
                  <BriefcaseBusiness />
                  <span>{job.department || "ZyrOps Team"}</span>
                </div>
                <h3>{job.title}</h3>
                <p>{job.description || "A live role from the ZyrOps HRMS careers board."}</p>
                <div className="careers-job-meta">
                  {job.location ? (
                    <span>
                      <MapPin />
                      {job.location}
                    </span>
                  ) : null}
                  {job.employment_type ? <span>{job.employment_type}</span> : null}
                  {job.experience ? <span>{job.experience}</span> : null}
                </div>
                <div className="careers-job-actions">
                  <Link href={`/careers/${encodeURIComponent(job.id)}`}>View Role</Link>
                  {job.apply_url ? (
                    <a href={job.apply_url} target="_blank" rel="noreferrer">
                      Apply
                      <ExternalLink />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="careers-empty">
            <Sparkles />
            <h3>The ZyrOps hiring board is synced, but no roles are published.</h3>
            <p>
              You can still send a short note with your stack, portfolio, and the kind of systems you want
              to build.
            </p>
            <a href={`mailto:${brand.email}?subject=Careers%20at%20ZyrOps`}>Email careers interest</a>
          </div>
        )}
      </section>

      <footer className="footer contact-footer">
        <div className="footer-grain" aria-hidden />
        <p>Careers</p>
        <h2>Work on production systems with operational depth.</h2>
        <div className="footer-actions">
          <a href={`mailto:${brand.email}?subject=Careers%20at%20ZyrOps`}>
            <TerminalSquare />
            {brand.email}
          </a>
          <Link href="/site-map">
            <Network />
            Site map
          </Link>
          <Link href="/contact">
            <TerminalSquare />
            Contact
          </Link>
        </div>
        <span className="footer-location">Kozhikode and Wayanad, Kerala</span>
      </footer>
    </main>
  );
}
