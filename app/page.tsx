"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import {
  Bot,
  BrainCircuit,
  Cpu,
  ExternalLink,
  Globe2,
  Layers3,
  LifeBuoy,
  MonitorCog,
  Phone,
  Rocket,
  ShieldCheck,
  Smartphone,
  TerminalSquare,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ComponentType, SVGProps } from "react";
import type { Mesh } from "three";

gsap.registerPlugin(ScrollTrigger);

type ThemeMode = "dark" | "light";

type Service = {
  title: string;
  description: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  size: "wide" | "tall" | "normal";
};

const services: Service[] = [
  {
    title: "Custom SaaS Systems",
    description:
      "Tenant-aware portals, AI workflows, billing-ready modules, admin surfaces, analytics, and deployment pipelines.",
    label: "Agentic product teams",
    icon: Layers3,
    size: "wide",
  },
  {
    title: "Programming & Backend",
    description:
      "Production systems in Rust, GoLang, Python, Django, Flask, APIs, integrations, and data-backed services.",
    label: "Rust // Go // Python",
    icon: MonitorCog,
    size: "tall",
  },
  {
    title: "Mobile App Delivery",
    description:
      "Flutter, Android, and iOS applications with API parity, release builds, store readiness, and telemetry.",
    label: "Android // iOS // Flutter",
    icon: Smartphone,
    size: "normal",
  },
  {
    title: "Web Frameworks",
    description:
      "React, Next.js, Angular, modern frontend systems, dashboards, customer portals, and landing experiences.",
    label: "React // Next // Angular",
    icon: BrainCircuit,
    size: "normal",
  },
  {
    title: "Desktop Applications",
    description:
      "Desktop tools, operational utilities, local device workflows, printer stacks, and offline-ready business apps.",
    label: "Desktop operations",
    icon: Globe2,
    size: "normal",
  },
  {
    title: "Hardware & OS Layer",
    description:
      "Windows/Linux support, device fleets, peripheral integration, field recovery, and OS-level troubleshooting.",
    label: "Last-mile reliability",
    icon: Cpu,
    size: "wide",
  },
];

const stack = [
  "Rust",
  "GoLang",
  "Python",
  "AI Agents",
  "React",
  "Next.js",
  "Angular",
  "Django",
  "Flask",
  "Flutter",
  "Android",
  "iOS",
  "Desktop Apps",
  "Postgres",
  "Linux",
];

const products = [
  {
    name: "ZyroHR",
    eyebrow: "AI-powered HRMS",
    title:
      "Human resource platform for attendance, payroll, approvals, employee records, and AI-assisted workforce decisions.",
    points: ["Attendance intelligence", "Payroll-ready approvals", "Employee self-service"],
    device: "phone",
  },
  {
    name: "ZyroCRM",
    eyebrow: "AI-powered CRM",
    title:
      "Customer relationship platform for leads, pipelines, follow-ups, account history, and AI sales assistance.",
    points: ["Lead scoring", "Pipeline automation", "Smart follow-up prompts"],
    device: "dashboard",
  },
  {
    name: "ZyroPOS",
    eyebrow: "AI-powered point of sale",
    title:
      "Retail billing, inventory, pricing, reporting, and shop workflows built for fast counters and clean operations.",
    points: ["Counter-speed checkout", "Inventory intelligence", "Billing and reports"],
    device: "laptop",
  },
  {
    name: "ZyroSupport",
    eyebrow: "AI-powered support",
    title:
      "Support desk platform for tickets, customer conversations, escalation paths, SLA visibility, and AI triage.",
    points: ["AI ticket triage", "SLA tracking", "Knowledge suggestions"],
    device: "dashboard",
  },
  {
    name: "ZyroBooks",
    eyebrow: "Accounting platform",
    title:
      "Accounts, invoices, expenses, ledgers, payments, and financial reports with AI-assisted bookkeeping flows.",
    points: ["Invoice workflows", "Expense control", "Financial reporting"],
    device: "laptop",
  },
  {
    name: "CipherTrak",
    eyebrow: "Enterprise employee tracking",
    title:
      "Enterprise workforce tracking system for field teams, attendance trails, location history, and operational visibility.",
    points: ["Field tracking", "Route and visit history", "Enterprise visibility"],
    device: "phone",
  },
];

function GlassSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock, pointer }) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    mesh.rotation.x = pointer.y * 0.22 + clock.elapsedTime * 0.08;
    mesh.rotation.y = pointer.x * 0.36 + clock.elapsedTime * 0.12;
    const pulse = 1 + Math.sin(clock.elapsedTime * 1.4) * 0.035;
    mesh.scale.setScalar(pulse + Math.abs(pointer.x) * 0.045);
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.05, 9]} />
        <meshStandardMaterial
          color="#B86CFF"
          metalness={0.46}
          roughness={0.18}
          emissive="#4C169B"
          emissiveIntensity={0.34}
          transparent
          opacity={0.58}
        />
      </mesh>
      <mesh scale={2.18}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.12} />
      </mesh>
      <pointLight position={[3, 3, 4]} intensity={5} color="#ffffff" />
      <pointLight position={[-4, -2, 1]} intensity={2.8} color="#8A3FFC" />
    </group>
  );
}

function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 42 }} dpr={[1, 1.75]}>
      <ambientLight intensity={0.65} />
      <GlassSphere />
    </Canvas>
  );
}

function StickyServiceVisual({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      className="sticky-service-visual__item"
      initial={false}
      animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="sticky-service-icon">
        <Icon />
      </div>
      <span>{String(index + 1).padStart(2, "0")}</span>
    </motion.div>
  );
}

function StickyServiceMarker({
  service,
  index,
  active,
}: {
  service: Service;
  index: number;
  active: boolean;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      className={`sticky-service-marker${active ? " is-active" : ""}`}
      animate={{ opacity: active ? 1 : 0.52, scale: active ? 1 : 0.96 }}
      transition={{ duration: 0.28 }}
    >
      <span>{String(index + 1).padStart(2, "0")}</span>
      <Icon />
      <strong>{service.title}</strong>
    </motion.div>
  );
}

function StickyServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progressScale = useTransform(scrollYProgress, [0, 1], [0.04, 1]);
  const activeService = services[activeServiceIndex] ?? services[0];

  return (
    <section id="services" ref={sectionRef} className="sticky-services-section">
      <div className="sticky-services-layout">
        <aside className="sticky-services-left">
          <div className="sticky-services-panel">
            <div className="sticky-services-panel__copy">
              <p>Services We Provide</p>
              <motion.h2
                key={`${activeService.title}-title`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              >
                {activeService.title}
              </motion.h2>
              <motion.span
                key={`${activeService.title}-description`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.24, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                {activeService.description}
              </motion.span>
            </div>
            <div className="sticky-services-stage" aria-hidden>
              <StickyServiceVisual service={activeService} index={activeServiceIndex} />
              <div className="sticky-services-orbit" />
            </div>
            <div className="sticky-services-map" aria-label="Active service">
              <StickyServiceMarker
                key={activeService.title}
                service={activeService}
                index={activeServiceIndex}
                active
              />
            </div>
            <div className="sticky-services-progress" aria-hidden>
              <motion.span style={{ scaleX: progressScale }} />
            </div>
          </div>
        </aside>

        <div className="sticky-services-right">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                className="service-step-card"
                key={service.title}
                initial={{ opacity: 0.28, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.55 }}
                onViewportEnter={() => setActiveServiceIndex(index)}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="service-step-card__meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon />
                </div>
                <p>{service.label}</p>
                <h3>{service.title}</h3>
                <span>{service.description}</span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DeviceMockup({ device, name }: { device: string; name: string }) {
  if (device === "phone") {
    return (
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="mini-chart bars" />
          <div className="employee-row active" />
          <div className="employee-row" />
          <div className="employee-row short" />
          <div className="approval-pill">Approved</div>
        </div>
      </div>
    );
  }

  if (device === "dashboard") {
    return (
      <div className="dashboard-frame">
        <div className="dash-sidebar" />
        <div className="dash-main">
          <div className="dash-line strong" />
          <div className="dash-line" />
          <div className="dash-grid">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="trace-panel">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="laptop-frame" aria-label={`${name} product mockup`}>
      <div className="laptop-screen">
        <div className="pos-sidebar" />
        <div className="pos-grid">
          {Array.from({ length: 9 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
        <div className="receipt-panel">
          <b />
          <i />
          <i />
          <button>Bill</button>
        </div>
      </div>
      <div className="laptop-base" />
    </div>
  );
}

export default function Home() {
  const rootRef = useRef<HTMLElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const words = useMemo(() => ["Zero", "to", "Operations"], []);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
    });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        ".letter",
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.035,
          ease: "power4.out",
          delay: 0.25,
        }
      );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        })
        .to(".zero-word", { scale: 8, autoAlpha: 0, yPercent: -24, ease: "none" }, 0)
        .fromTo(
          ".operations-word",
          { scale: 1.9, autoAlpha: 0.18, yPercent: 18 },
          { scale: 1, autoAlpha: 1, yPercent: 0, ease: "none" },
          0
        )
        .to(".hero-sphere", { yPercent: -22, scale: 0.78, ease: "none" }, 0);

      const track = trackRef.current;
      const productSection = productsRef.current;
      if (track && productSection) {
        const media = gsap.matchMedia();

        media.add("(min-width: 921px)", () => {
          const distance = () => track.scrollWidth - window.innerWidth + 64;
          const tween = gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: productSection,
              start: "top top",
              end: () => `+=${distance()}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          });

          return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
            gsap.set(track, { clearProps: "transform" });
          };
        });
      }
    }, rootRef);

    return () => context.revert();
  }, []);

  function switchTheme(nextTheme: ThemeMode) {
    if (nextTheme === theme) return;
    const wipe = wipeRef.current;
    const root = rootRef.current;

    if (!wipe || !root) {
      setTheme(nextTheme);
      return;
    }

    wipe.dataset.mode = nextTheme;
    gsap.set(wipe, { clipPath: "inset(0 100% 0 0)" });
    gsap
      .timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => {
          gsap.set(wipe, { clipPath: "inset(0 0 0 100%)" });
        },
      })
      .to(wipe, {
        clipPath: "inset(0 0% 0 0)",
        duration: 0.42,
        onComplete: () => setTheme(nextTheme),
      })
      .to(wipe, { clipPath: "inset(0 0 0 100%)", duration: 0.42 });
  }

  return (
    <main ref={rootRef} className="site-shell" data-theme={theme}>
      <div ref={wipeRef} className="theme-wipe" aria-hidden />
      <nav className="nav">
        <a href="#hero" className="brand" aria-label="ZyrOps home">
          <span>
            <Image src="/logo.png" alt="" width={34} height={34} priority />
          </span>
          <strong>ZyrOps</strong>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <Link href="/products">Products</Link>
          <a href="#support">Support</a>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="nav-actions">
          <div className="theme-switch" aria-label="Theme switcher">
            <button
              type="button"
              aria-pressed={theme === "dark"}
              onClick={() => switchTheme("dark")}
            >
              Dev
            </button>
            <button
              type="button"
              aria-pressed={theme === "light"}
              onClick={() => switchTheme("light")}
            >
              Ops
            </button>
          </div>
          <Link href="/contact" className="launch-link">
            <Rocket />
            Launch Project
          </Link>
        </div>
      </nav>

      <section id="hero" ref={heroRef} className="hero-section">
        <div className="hero-noise" aria-hidden />
        <p className="hero-kicker">Kinetic product engineering for serious operators</p>
        <h1 aria-label="Zero to Operations">
          {words.map((word) => (
            <span className="hero-word" key={word}>
              {word.split("").map((letter, index) => (
                <span className="letter-wrap" key={`${word}-${letter}-${index}`}>
                  <span className="letter">{letter}</span>
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p className="hero-copy">
          ZyrOps builds AI-powered SaaS tools, web platforms, backend systems, desktop
          applications, and Android/iOS mobile apps with serious engineering depth.
        </p>
        <div className="hero-actions">
          <Link href="/contact">Start a Build</Link>
          <Link href="/products">View Products</Link>
        </div>
        <div className="hero-sphere" aria-hidden>
          <HeroCanvas />
        </div>
        <div className="scroll-transform" aria-hidden>
          <span className="zero-word">ZERO</span>
          <span className="operations-word">OPERATIONS</span>
        </div>
      </section>

      <section className="agentic-ticker" aria-label="Technology stack">
        <div>
          {[...stack, ...stack].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <StickyServicesSection />

      <section id="products" ref={productsRef} className="products-section">
        <aside className="product-rail" aria-hidden>
          {products.map((product) => (
            <span key={product.name} />
          ))}
        </aside>
        <div ref={trackRef} className="product-track">
          {products.map((product, index) => (
            <article className="product-panel" key={product.name}>
              <div className="product-copy">
                <p>{product.eyebrow}</p>
                <h2>{product.name}</h2>
                <h3>{product.title}</h3>
                <ul>
                  {product.points.map((point) => (
                    <li key={point}>
                      <ShieldCheck />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.div
                className="product-device"
                initial={{ opacity: 0, y: 80, rotateX: 8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: false, amount: 0.45 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              >
                <DeviceMockup device={product.device} name={product.name} />
              </motion.div>
            </article>
          ))}
        </div>
      </section>

      <section id="support" className="section support-section">
        <div className="support-panel agent">
          <Bot />
          <p>AI Agentic Support</p>
          <h2>Agents read signals, route work, and surface the next action before queues pile up.</h2>
          <div className="data-viz">
            <span style={{ height: "62%" }} />
            <span style={{ height: "88%" }} />
            <span style={{ height: "46%" }} />
            <span style={{ height: "72%" }} />
            <span style={{ height: "94%" }} />
          </div>
        </div>
        <div className="support-panel human">
          <LifeBuoy />
          <p>Human Support</p>
          <h2>When judgment matters, operators step in with context, ownership, and calm escalation.</h2>
          <div className="people-row" aria-label="Support specialists">
            <span>A</span>
            <span>Z</span>
            <span>O</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grain" aria-hidden />
        <p>Ready to Operate?</p>
        <h2>Bring the messy idea. ZyrOps will turn it into a production system.</h2>
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
