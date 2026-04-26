import {
  ArrowLeft,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  DatabaseZap,
  ExternalLink,
  LineChart,
  LockKeyhole,
  MapPinned,
  Rocket,
  Smartphone,
  TerminalSquare,
  UsersRound,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const productDetails = {
  zyrohr: {
    name: "ZyroHR",
    eyebrow: "AI-powered HRMS",
    headline: "Run people operations without payroll and attendance chaos.",
    description:
      "ZyroHR brings attendance, payroll approvals, employee records, leave workflows, and AI-assisted HR decisions into one operational platform.",
    metrics: ["Attendance", "Payroll", "Approvals", "Employee records"],
    capabilities: [
      "AI-assisted attendance exception detection",
      "Payroll-ready approval trails",
      "Employee self-service and profile management",
      "Leave, shift, and compliance workflow visibility",
    ],
    workflow: ["Capture attendance", "Resolve exceptions", "Approve payroll", "Track workforce signals"],
    icon: UsersRound,
  },
  zyrocrm: {
    name: "ZyroCRM",
    eyebrow: "AI-powered CRM",
    headline: "Convert leads into accountable customer workflows.",
    description:
      "ZyroCRM manages leads, pipelines, accounts, follow-ups, customer history, and AI sales assistance for teams that need clear ownership.",
    metrics: ["Leads", "Pipeline", "Follow-ups", "Accounts"],
    capabilities: [
      "AI lead scoring and prioritization",
      "Pipeline stage automation",
      "Smart follow-up prompts and reminders",
      "Customer timeline and account history",
    ],
    workflow: ["Capture lead", "Score opportunity", "Move pipeline", "Close and retain"],
    icon: LineChart,
  },
  zyropos: {
    name: "ZyroPOS",
    eyebrow: "AI-powered point of sale",
    headline: "Fast billing, clean inventory, and retail intelligence.",
    description:
      "ZyroPOS connects billing, shop pricing, inventory, stock movement, reports, and AI-powered sales insights for retail counters.",
    metrics: ["Billing", "Inventory", "Reports", "Pricing"],
    capabilities: [
      "Counter-speed checkout workflows",
      "Inventory and stock intelligence",
      "Invoice, mini-print, and reporting flows",
      "Shop pricing, product, and category controls",
    ],
    workflow: ["Select products", "Bill customer", "Update stock", "Review reports"],
    icon: DatabaseZap,
  },
  ciphertrak: {
    name: "CipherTrak",
    eyebrow: "Enterprise employee tracking",
    headline: "Know where field work happens and when it moves.",
    description:
      "CipherTrak gives enterprises field employee tracking, attendance trails, route history, visit records, and operational visibility.",
    metrics: ["Field teams", "Routes", "Visits", "Visibility"],
    capabilities: [
      "Field attendance and location trails",
      "Route and visit history",
      "Enterprise visibility dashboards",
      "Operational alerts and team movement records",
    ],
    workflow: ["Assign route", "Track visits", "Verify activity", "Review field performance"],
    icon: MapPinned,
  },
} as const;

type ProductSlug = keyof typeof productDetails;

export function generateStaticParams() {
  return Object.keys(productDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = productDetails[slug as ProductSlug];

  if (!product) {
    return {
      title: "Product | ZyrOps",
    };
  }

  return {
    title: `${product.name} | ZyrOps Products`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productDetails[slug as ProductSlug];

  if (!product) {
    notFound();
  }

  const Icon = product.icon;

  return (
    <main className="site-shell product-detail-shell" data-theme="dark">
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
          <Link href="/#support">Support</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="nav-actions">
          <Link href="/products" className="launch-link">
            <ArrowLeft />
            Products
          </Link>
        </div>
      </nav>

      <section className="product-detail-hero">
        <div className="hero-noise" aria-hidden />
        <div className="product-detail-orb" aria-hidden />
        <div className="product-detail-copy">
          <p className="hero-kicker">{product.eyebrow}</p>
          <h1>{product.name}</h1>
          <h2>{product.headline}</h2>
          <span>{product.description}</span>
          <div className="contact-actions">
            <Link href="/contact">
              <Rocket />
              Discuss {product.name}
            </Link>
            <a href="#capabilities">
              <BrainCircuit />
              View Capabilities
            </a>
          </div>
        </div>

        <aside className="product-detail-console">
          <div className="console-top">
            <TerminalSquare />
            {product.name.toUpperCase()}_OPS.RUN
          </div>
          <Icon className="product-detail-console__icon" />
          <div className="detail-metric-grid">
            {product.metrics.map((metric) => (
              <span key={metric}>{metric}</span>
            ))}
          </div>
          <div className="console-agent">
            <Bot />
            AI workflow layer active
          </div>
        </aside>
      </section>

      <section className="agentic-ticker contact-ticker" aria-label={`${product.name} workflow`}>
        <div>
          {[...product.workflow, ...product.workflow].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section id="capabilities" className="product-detail-section">
        <div className="section-heading">
          <p>Capabilities</p>
          <h2>Built for daily operational use, not demo screens.</h2>
        </div>
        <div className="detail-capability-grid">
          {product.capabilities.map((capability) => (
            <article className="detail-capability-card" key={capability}>
              <CheckCircle2 />
              <h3>{capability}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="product-detail-section detail-workflow-section">
        <div className="section-heading">
          <p>Workflow</p>
          <h2>Clear steps from input to operational visibility.</h2>
        </div>
        <div className="detail-workflow">
          {product.workflow.map((step, index) => (
            <article key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
              {index === 0 ? <Clock3 /> : index === product.workflow.length - 1 ? <LockKeyhole /> : <Smartphone />}
            </article>
          ))}
        </div>
      </section>

      <footer className="footer contact-footer">
        <div className="footer-grain" aria-hidden />
        <p>Ready to Operate?</p>
        <h2>Bring {product.name} into your business workflow.</h2>
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
        </div>
        <span className="footer-location">Kozhikode and Wayanad, Kerala</span>
      </footer>
    </main>
  );
}
