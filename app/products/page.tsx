import {
  ArrowLeft,
  Bot,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  ExternalLink,
  Laptop,
  MonitorCog,
  Network,
  Rocket,
  Smartphone,
  TerminalSquare,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "../lib/seo";

const products = [
  {
    name: "ZyroHR",
    href: "/products/zyrohr",
    eyebrow: "AI-powered HRMS",
    description:
      "Attendance, payroll, approvals, employee records, and workforce intelligence for growing teams.",
    points: ["Attendance intelligence", "Payroll workflows", "Employee self-service"],
  },
  {
    name: "ZyroCRM",
    href: "/products/zyrocrm",
    eyebrow: "AI-powered CRM",
    description:
      "Lead pipelines, customer history, follow-up automation, account tracking, and AI sales assistance.",
    points: ["Lead scoring", "Pipeline visibility", "Smart follow-ups"],
  },
  {
    name: "ZyroPOS",
    href: "/products/zyropos",
    eyebrow: "AI-powered point of sale",
    description:
      "Retail billing, inventory, pricing, reporting, and shop operations for fast counter workflows.",
    points: ["Fast checkout", "Inventory intelligence", "Billing reports"],
  },
  {
    name: "ZyroSupport",
    href: "",
    eyebrow: "AI-powered support",
    description:
      "Ticketing, customer conversations, SLA tracking, escalation paths, and AI triage for support teams.",
    points: ["AI ticket triage", "SLA tracking", "Knowledge suggestions"],
  },
  {
    name: "ZyroBooks",
    href: "",
    eyebrow: "Accounting platform",
    description:
      "Invoices, expenses, ledgers, payments, reports, and AI-assisted bookkeeping workflows.",
    points: ["Invoice flows", "Expense control", "Financial reports"],
  },
  {
    name: "CipherTrak",
    href: "/products/ciphertrak",
    eyebrow: "Enterprise employee tracking",
    description:
      "Field workforce tracking, attendance trails, route history, visits, and enterprise visibility.",
    points: ["Field tracking", "Route history", "Enterprise visibility"],
  },
];

const services = [
  {
    icon: MonitorCog,
    title: "Custom WebApp Development",
    description:
      "React, Next.js, Angular, Django, Flask, Rust, GoLang, and Python platforms built for real workflows.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Android, iOS, and Flutter applications with production APIs, release builds, and mobile-first UX.",
  },
  {
    icon: Laptop,
    title: "Desktop App Development",
    description:
      "Desktop applications for macOS, Windows, and Linux with local workflows, device integrations, and offline use cases.",
  },
];

const stack = ["Rust", "GoLang", "Python", "React", "Next.js", "Angular", "Django", "Flask", "Flutter"];

export const metadata: Metadata = {
  title: "Products | ZyrOps SaaS Tools",
  description:
    "Explore ZyrOps AI-powered SaaS products for HRMS, CRM, point of sale, support, accounting, and enterprise employee tracking.",
  alternates: {
    canonical: absoluteUrl("/products"),
  },
  openGraph: {
    title: "Products | ZyrOps SaaS Tools",
    description:
      "ZyroHR, ZyroCRM, ZyroPOS, ZyroSupport, ZyroBooks, and CipherTrak: AI-powered SaaS products from ZyrOps.",
    url: absoluteUrl("/products"),
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Products | ZyrOps SaaS Tools",
    description: "AI-powered SaaS tools for HR, CRM, POS, support, accounting, and field tracking.",
  },
};

export default function ProductsPage() {
  return (
    <main className="site-shell product-page-shell" data-theme="dark">
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
          <Link href="/#support">Support</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="nav-actions">
          <Link href="/" className="launch-link">
            <ArrowLeft />
            Home
          </Link>
        </div>
      </nav>

      <section className="product-page-hero">
        <div className="hero-noise" aria-hidden />
        <div className="product-hero-orbit" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div className="product-page-copy">
          <p className="hero-kicker">AI-powered SaaS suite</p>
          <h1>Products built for operating businesses.</h1>
          <span>
            ZyrOps ships SaaS tools for HR, CRM, point of sale, support, accounting, and
            enterprise employee tracking with AI assistance built into the workflow layer.
          </span>
          <div className="contact-actions">
            <Link href="/contact">
              <Rocket />
              Launch a Product
            </Link>
            <a href="#suite">
              <Boxes />
              View Suite
            </a>
          </div>
        </div>
        <div className="product-console" aria-hidden>
          <div className="console-top">
            <TerminalSquare />
            ZYROPS_PRODUCTS.RUN
          </div>
          <div className="console-grid">
            {products.map((product) => (
              <span key={product.name}>{product.name}</span>
            ))}
          </div>
          <div className="console-agent">
            <Bot />
            AI operating layer active
          </div>
        </div>
      </section>

      <section className="agentic-ticker contact-ticker" aria-label="Technology stack">
        <div>
          {[...stack, ...stack].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section id="suite" className="suite-section">
        <div className="section-heading">
          <p>Product Suite</p>
          <h2>Six SaaS tools under one operating mindset.</h2>
        </div>
        <div className="suite-grid">
          {products.map((product, index) => {
            const content = (
              <>
                <div className="suite-card__top">
                  <BrainCircuit />
                  <span>{product.eyebrow}</span>
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <ul>
                  {product.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 />
                      {point}
                    </li>
                  ))}
                </ul>
                {product.href ? <span className="suite-card__cta">Open product</span> : null}
              </>
            );

            return product.href ? (
              <Link
                className="suite-card"
                href={product.href}
                key={product.name}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                {content}
              </Link>
            ) : (
              <article className="suite-card" key={product.name} style={{ animationDelay: `${index * 70}ms` }}>
                {content}
              </article>
            );
          })}
        </div>
      </section>

      <section className="product-services-section">
        <div className="section-heading">
          <p>Services</p>
          <h2>When a SaaS product is not enough, we build the system around it.</h2>
        </div>
        <div className="product-service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="product-service-card" key={service.title}>
                <Icon />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <footer className="footer contact-footer">
        <div className="footer-grain" aria-hidden />
        <p>Ready to Operate?</p>
        <h2>Pick a product or ask us to build the missing platform.</h2>
        <div className="footer-actions">
          <a href="mailto:hello@zyrops.com">
            <TerminalSquare />
            hello@zyrops.com
          </a>
          <a href="tel:+919488766222">
            <Smartphone />
            +91 9488766222
          </a>
          <a href="https://www.instagram.com/zyropsllp" target="_blank" rel="noreferrer">
            <ExternalLink />
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/zyrops-llp" target="_blank" rel="noreferrer">
            <ExternalLink />
            LinkedIn
          </a>
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
