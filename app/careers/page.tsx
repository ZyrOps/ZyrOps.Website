import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { absoluteUrl } from "../lib/seo";
import { CareersBoard } from "./CareersBoard";
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

      <CareersBoard jobs={jobs} apiError={apiError} />
    </main>
  );
}
