"use client";

import { BriefcaseBusiness, ExternalLink, MapPin, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { CareerJob } from "./careers-api";

type CareersBoardProps = {
  jobs: CareerJob[];
  apiError?: string;
};

function uniqueOptions(jobs: CareerJob[], key: keyof CareerJob) {
  return Array.from(new Set(jobs.map((job) => String(job[key] || "").trim()).filter(Boolean))).sort((a, b) =>
    a.localeCompare(b),
  );
}

function jobSearchText(job: CareerJob) {
  return [job.title, job.department, job.location, job.employment_type, job.experience, job.description]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function jobDate(job: CareerJob) {
  const raw = job.posted_on || job.updated_at || job.created_at || "";
  const time = raw ? new Date(raw).getTime() : 0;
  return Number.isFinite(time) ? time : 0;
}

function metaLine(job: CareerJob) {
  return [job.location, job.employment_type, job.experience].filter(Boolean).join(" / ");
}

export function CareersBoard({ jobs, apiError = "" }: CareersBoardProps) {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("all");
  const [employmentType, setEmploymentType] = useState("all");
  const [sort, setSort] = useState("newest");

  const departments = useMemo(() => uniqueOptions(jobs, "department"), [jobs]);
  const employmentTypes = useMemo(() => uniqueOptions(jobs, "employment_type"), [jobs]);

  const filteredJobs = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return jobs
      .filter((job) => {
        if (department !== "all" && job.department !== department) return false;
        if (employmentType !== "all" && job.employment_type !== employmentType) return false;
        if (needle && !jobSearchText(job).includes(needle)) return false;
        return true;
      })
      .sort((a, b) => {
        if (sort === "title") return a.title.localeCompare(b.title);
        if (sort === "department") return (a.department || "").localeCompare(b.department || "");
        return jobDate(b) - jobDate(a);
      });
  }, [department, employmentType, jobs, query, sort]);

  return (
    <section className="career-board" aria-labelledby="careers-title">
      <div className="career-board__header">
        <div>
          <p>Careers</p>
          <h1 id="careers-title">Open positions</h1>
        </div>
        <span>{jobs.length} role{jobs.length === 1 ? "" : "s"}</span>
      </div>

      <div className="career-board__tools" aria-label="Career filters">
        <label className="career-search">
          <Search />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search roles"
          />
        </label>

        <label>
          <span>Department</span>
          <select value={department} onChange={(event) => setDepartment(event.target.value)}>
            <option value="all">All departments</option>
            {departments.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Type</span>
          <select value={employmentType} onChange={(event) => setEmploymentType(event.target.value)}>
            <option value="all">All types</option>
            {employmentTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Sort</span>
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="newest">Newest first</option>
            <option value="title">Title A-Z</option>
            <option value="department">Department A-Z</option>
          </select>
        </label>
      </div>

      {apiError ? (
        <div className="career-board__empty">
          <h2>Unable to load jobs.</h2>
          <p>{apiError}</p>
        </div>
      ) : filteredJobs.length ? (
        <div className="career-card-grid">
          {filteredJobs.map((job) => (
            <article className="career-card" key={job.id}>
              <Link className="career-card__main" href={`/careers/${encodeURIComponent(job.id)}`}>
                <div className="career-card__icon">
                  <BriefcaseBusiness />
                </div>
                <div>
                  <span>{job.department || "ZyrOps"}</span>
                  <h2>{job.title}</h2>
                  {metaLine(job) ? (
                    <p>
                      <MapPin />
                      {metaLine(job)}
                    </p>
                  ) : null}
                </div>
              </Link>
              <div className="career-card__actions">
                <Link href={`/careers/${encodeURIComponent(job.id)}`}>Details</Link>
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
        <div className="career-board__empty">
          <h2>{jobs.length ? "No roles match the selected filters." : "No active openings right now."}</h2>
          <p>{jobs.length ? "Try a different search or filter." : "Published jobs from HRMS will appear here automatically."}</p>
        </div>
      )}
    </section>
  );
}
