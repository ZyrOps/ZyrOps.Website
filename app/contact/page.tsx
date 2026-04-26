import {
  ArrowLeft,
  Bot,
  CalendarClock,
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Rocket,
  Send,
  TerminalSquare,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, brand } from "../lib/seo";

const intakeItems = [
  "SaaS or internal platform build",
  "Rust, GoLang, Python, Django, or Flask backend",
  "React, Next.js, Angular, or dashboard frontend",
  "Flutter, Android, iOS, or desktop application",
];

const contactStack = [
  "Rust",
  "GoLang",
  "Python",
  "React",
  "Next.js",
  "Angular",
  "Django",
  "Flask",
  "Flutter",
  "Android",
  "iOS",
  "Desktop Apps",
];

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@zyrops.com",
    href: "mailto:hello@zyrops.com?subject=Launch%20Project%20with%20ZyrOps",
  },
  {
    icon: Phone,
    label: "Call",
    value: "+91 9488766222",
    href: "tel:+919488766222",
  },
  {
    icon: CalendarClock,
    label: "Response",
    value: "Same business day",
    href: "mailto:hello@zyrops.com?subject=Schedule%20a%20ZyrOps%20Call",
  },
  {
    icon: ExternalLink,
    label: "Instagram",
    value: "@zyropsllp",
    href: "https://www.instagram.com/zyropsllp",
    external: true,
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "ZyrOps LLP",
    href: "https://www.linkedin.com/company/zyrops-llp",
    external: true,
  },
];

export const metadata: Metadata = {
  title: "Contact ZyrOps | Launch Project",
  description:
    "Contact ZyrOps LLP in Kozhikode and Wayanad, Kerala to launch a SaaS, web, backend, desktop, Android, iOS, or AI-powered operations platform project.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
  openGraph: {
    title: "Contact ZyrOps | Launch Project",
    description:
      "Send a project brief to ZyrOps for SaaS, web, backend, mobile, desktop, and AI-powered operations engineering.",
    url: absoluteUrl("/contact"),
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact ZyrOps | Launch Project",
    description: `Contact ${brand.legalName} for software and SaaS delivery from Kozhikode and Wayanad.`,
  },
};

export default function ContactPage() {
  return (
    <main className="site-shell contact-shell" data-theme="dark">
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

      <section className="contact-hero">
        <div className="hero-noise" aria-hidden />
        <div className="contact-orb" aria-hidden />
        <div className="contact-copy">
          <p className="hero-kicker">Project intake / Operator handoff</p>
          <h1>Tell us what needs to ship.</h1>
          <span>
            Send the messy version: product goal, users, deadline, tech stack, current blocker,
            or the system that keeps breaking. ZyrOps will turn it into an execution path.
          </span>
          <div className="contact-actions">
            <a href="mailto:hello@zyrops.com?subject=Launch%20Project%20with%20ZyrOps">
              <Rocket />
              Launch by Email
            </a>
            <a href="#contact-form">
              <MessageSquareText />
              Use Intake Form
            </a>
          </div>
        </div>

        <aside className="contact-command">
          <div className="command-header">
            <TerminalSquare />
            <span>ZYROPS_INTAKE.RUN</span>
          </div>
          <div className="command-lines">
            <p>
              <b>01</b> Capture scope
            </p>
            <p>
              <b>02</b> Map constraints
            </p>
            <p>
              <b>03</b> Estimate delivery path
            </p>
            <p>
              <b>04</b> Start execution
            </p>
          </div>
          <div className="command-status">
            <Bot />
            Agentic triage active
          </div>
        </aside>
      </section>

      <section className="agentic-ticker contact-ticker" aria-label="Technology stack">
        <div>
          {[...contactStack, ...contactStack].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section className="contact-grid">
        <div className="contact-panel contact-form-panel" id="contact-form">
          <p>Start the conversation</p>
          <h2>Project brief</h2>
          <form
            action="mailto:hello@zyrops.com"
            method="post"
            encType="text/plain"
            className="contact-form"
          >
            <label>
              Name
              <input name="name" placeholder="Your name" required suppressHydrationWarning />
            </label>
            <label>
              Work email
              <input
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                suppressHydrationWarning
              />
            </label>
            <label>
              Project type
              <select
                name="project_type"
                defaultValue="SaaS / Web Platform"
                suppressHydrationWarning
              >
                <option>SaaS / Web Platform</option>
                <option>React / Next.js / Angular Web App</option>
                <option>Rust / GoLang / Python Backend</option>
                <option>Django / Flask Platform</option>
                <option>Mobile App</option>
                <option>Desktop Application</option>
                <option>AI Agentic Support</option>
                <option>Hardware / OS Support</option>
              </select>
            </label>
            <label>
              What should ZyrOps build or fix?
              <textarea
                name="message"
                placeholder="Share the goal, timeline, users, tech stack, and blockers."
                rows={6}
                required
                suppressHydrationWarning
              />
            </label>
            <button type="submit">
              <Send />
              Send Brief
            </button>
          </form>
        </div>

        <div className="contact-panel contact-info-panel">
          <p>Direct channels</p>
          <h2>Reach the ops desk.</h2>
          <div className="channel-list">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  href={channel.href}
                  key={channel.label}
                  className="channel-card"
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noreferrer" : undefined}
                >
                  <Icon />
                  <span>{channel.label}</span>
                  <strong>{channel.value}</strong>
                </a>
              );
            })}
          </div>
          <div className="location-card">
            <MapPin />
            <span>Locations: Kozhikode and Wayanad, Kerala. Remote-first delivery for global teams.</span>
          </div>
        </div>
      </section>

      <section className="contact-checklist">
        <div>
          <p>What to include</p>
          <h2>Useful details make the first reply sharper.</h2>
        </div>
        <ul>
          {intakeItems.map((item) => (
            <li key={item}>
              <CheckCircle2 />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer contact-footer">
        <div className="footer-grain" aria-hidden />
        <p>Ready to Operate?</p>
        <h2>Send the brief. We will map the build path.</h2>
        <div className="footer-actions">
          <a href="mailto:hello@zyrops.com">
            <TerminalSquare />
            hello@zyrops.com
          </a>
          <a href="tel:+919488766222">
            <Phone />
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
