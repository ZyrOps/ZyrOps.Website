import { ArrowLeft, ExternalLink, Network } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, brand, indexableRoutes } from "../lib/seo";

const routeLabels: Record<string, string> = {
  "/": "ZyrOps home",
  "/products": "Products",
  "/blogs": "Blogs",
  "/careers": "Careers",
  "/site-map": "Site map",
  "/blogs/ai-saas-from-idea-to-operations": "AI SaaS from idea to stable operations",
  "/blogs/hr-crm-pos-ai-suite-for-growing-businesses": "HR, CRM, and POS AI suite",
  "/blogs/choosing-rust-golang-python-for-backend-systems": "Rust, GoLang, or Python backend systems",
  "/blogs/ai-support-and-enterprise-employee-tracking": "AI support and enterprise employee tracking",
  "/contact": "Contact",
  "/products/zyrohr": "ZyroHR",
  "/products/zyrocrm": "ZyroCRM",
  "/products/zyropos": "ZyroPOS",
  "/products/ciphertrak": "CipherTrak",
};

const routeDescriptions: Record<string, string> = {
  "/": "Company overview, services, products, support, and contact paths.",
  "/products": "ZyrOps SaaS products for HR, CRM, POS, support, accounting, and field tracking.",
  "/blogs": "Engineering and operations articles from the ZyrOps team.",
  "/careers": "Open roles from the ZyrOps HRMS careers board.",
  "/site-map": "Plain HTML crawl map for important public pages.",
  "/blogs/ai-saas-from-idea-to-operations": "Building AI SaaS products from demo to production operations.",
  "/blogs/hr-crm-pos-ai-suite-for-growing-businesses": "Why HRMS, CRM, and POS need one operating mindset.",
  "/blogs/choosing-rust-golang-python-for-backend-systems": "Choosing Rust, GoLang, or Python for production backend systems.",
  "/blogs/ai-support-and-enterprise-employee-tracking": "Shared visibility for AI support and field workforce tracking.",
  "/contact": "Email, phone, social links, and project intake details.",
  "/products/zyrohr": "AI-powered HRMS for attendance, payroll, approvals, and employee records.",
  "/products/zyrocrm": "AI-powered CRM for leads, pipelines, accounts, and follow-ups.",
  "/products/zyropos": "Point-of-sale platform for billing, inventory, pricing, and retail reports.",
  "/products/ciphertrak": "Enterprise employee tracking for field routes, visits, and attendance trails.",
};

export const metadata: Metadata = {
  title: "Site Map",
  description:
    "A crawlable site map for ZyrOps public pages, including products, blogs, and contact pages.",
  alternates: {
    canonical: absoluteUrl("/site-map"),
  },
  openGraph: {
    title: "Site Map | ZyrOps",
    description: "A crawlable site map for important ZyrOps public pages.",
    url: absoluteUrl("/site-map"),
    type: "website",
  },
};

function routeGroup(path: string) {
  if (path.startsWith("/blogs/")) return "Blog Articles";
  if (path.startsWith("/products/")) return "Product Pages";
  return "Core Pages";
}

export default function SiteMapPage() {
  const groups = indexableRoutes.reduce<Record<string, typeof indexableRoutes>>((acc, route) => {
    const group = routeGroup(route.path);
    acc[group] = [...(acc[group] ?? []), route];
    return acc;
  }, {});

  return (
    <main className="site-shell site-map-shell" data-theme="dark">
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

      <section className="site-map-hero">
        <p className="hero-kicker">Public page index</p>
        <h1>Site map</h1>
        <span>
          A direct crawl path to every important ZyrOps page currently intended for search indexing.
        </span>
      </section>

      <section className="site-map-groups" aria-label="ZyrOps public pages">
        {Object.entries(groups).map(([group, routes]) => (
          <div className="site-map-group" key={group}>
            <div className="section-heading">
              <p>{group}</p>
              <h2>{group === "Core Pages" ? "Main public pages." : group === "Product Pages" ? "Product landing pages." : "Published articles."}</h2>
            </div>
            <div className="site-map-grid">
              {routes.map((route) => (
                <Link href={route.path} className="site-map-card" key={route.path}>
                  <Network />
                  <span>{routeLabels[route.path] ?? route.path}</span>
                  <p>{routeDescriptions[route.path] ?? absoluteUrl(route.path)}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <footer className="footer contact-footer">
        <div className="footer-grain" aria-hidden />
        <p>Ready to Operate?</p>
        <h2>Start from any public ZyrOps page.</h2>
        <div className="footer-actions">
          <a href={`mailto:${brand.email}`}>
            <ExternalLink />
            {brand.email}
          </a>
          <Link href="/products">
            <Network />
            Products
          </Link>
          <Link href="/blogs">
            <Network />
            Blogs
          </Link>
          <Link href="/careers">
            <Network />
            Careers
          </Link>
          <Link href="/contact">
            <Network />
            Contact
          </Link>
        </div>
        <span className="footer-location">Kozhikode and Wayanad, Kerala</span>
      </footer>
    </main>
  );
}
