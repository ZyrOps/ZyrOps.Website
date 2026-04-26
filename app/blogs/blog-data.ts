export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  hashtags: string[];
  author: string;
  postedOn: string;
  updatedOn: string;
  readTime: string;
  poster: string;
  posterAlt: string;
  featured?: boolean;
  sections: {
    heading: string;
    body: string[];
    image?: string;
    imageAlt?: string;
  }[];
  comments: {
    name: string;
    postedOn: string;
    message: string;
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-saas-from-idea-to-operations",
    title: "AI SaaS from idea to stable operations",
    excerpt:
      "A practical ZyrOps playbook for turning an AI SaaS concept into a tenant-aware, monitored, supportable production system.",
    category: "AI SaaS",
    hashtags: ["AI", "SaaS", "Operations", "ProductEngineering"],
    author: "ZyrOps Engineering",
    postedOn: "2026-04-26",
    updatedOn: "2026-04-26",
    readTime: "6 min read",
    poster: "/blog/ai-saas-ops.svg",
    posterAlt: "AI SaaS operations dashboard visual",
    featured: true,
    sections: [
      {
        heading: "The gap between a demo and a business system",
        body: [
          "Most SaaS ideas fail in the space between the first working demo and the first reliable operating workflow. The product needs authentication, tenant boundaries, audit trails, admin controls, support visibility, billing readiness, deployment pipelines, and observability before it can carry real customer work.",
          "ZyrOps treats AI as an operational layer, not a decorative feature. The agent should route decisions, summarize context, detect exceptions, and reduce manual effort while keeping humans in control of approval paths.",
        ],
      },
      {
        heading: "What we build first",
        body: [
          "We start with the smallest workflow that proves value: a real user, a real input, a real decision, and a measurable operational result. From there, we add data models, permissions, reports, and support hooks around that workflow.",
          "This keeps the system useful from the beginning and prevents the platform from becoming a collection of disconnected screens.",
        ],
        image: "/blog/ai-saas-ops.svg",
        imageAlt: "AI SaaS system blocks and dashboard illustration",
      },
      {
        heading: "How AI belongs in the workflow",
        body: [
          "AI should work where the business already has friction: lead scoring, ticket triage, attendance exceptions, payroll checks, stock alerts, route history, customer summaries, and operational follow-ups.",
          "The goal is not to replace the operator. The goal is to give the operator cleaner context, faster decisions, and fewer repetitive steps.",
        ],
      },
    ],
    comments: [
      {
        name: "Operations Lead",
        postedOn: "2026-04-26",
        message: "The tenant boundary and support visibility checklist is exactly what most early SaaS builds miss.",
      },
    ],
  },
  {
    slug: "hr-crm-pos-ai-suite-for-growing-businesses",
    title: "Why HRMS, CRM, and POS need one AI operating mindset",
    excerpt:
      "ZyroHR, ZyroCRM, and ZyroPOS solve different problems, but the winning pattern is the same: clean records, fast workflows, and AI-assisted decisions.",
    category: "Products",
    hashtags: ["ZyroHR", "ZyroCRM", "ZyroPOS", "BusinessSoftware"],
    author: "ZyrOps Product Team",
    postedOn: "2026-04-25",
    updatedOn: "2026-04-26",
    readTime: "5 min read",
    poster: "/blog/hr-crm-pos.svg",
    posterAlt: "HRMS CRM POS product suite visual",
    featured: true,
    sections: [
      {
        heading: "Different departments, same operational problem",
        body: [
          "HR teams lose time on attendance exceptions, payroll approvals, employee records, and leave trails. Sales teams lose time on lead follow-ups, account history, and pipeline ownership. Retail teams lose time on stock mismatches, billing speed, and reports.",
          "The product names are different, but the operating pattern is the same: capture the event, clean the record, route the next action, and make the result visible.",
        ],
      },
      {
        heading: "Where AI helps without adding noise",
        body: [
          "In ZyroHR, AI can surface attendance anomalies and workforce signals. In ZyroCRM, it can prioritize leads and suggest follow-ups. In ZyroPOS, it can highlight stock movement, pricing issues, and reporting patterns.",
          "The useful AI feature is the one that reduces a decision burden inside an existing workflow.",
        ],
        image: "/blog/hr-crm-pos.svg",
        imageAlt: "Cards representing HR CRM and POS systems",
      },
      {
        heading: "The ZyrOps product principle",
        body: [
          "A business tool should be fast for daily use, understandable for managers, and traceable when something goes wrong. We design SaaS products around that principle before adding advanced automation.",
        ],
      },
    ],
    comments: [
      {
        name: "Retail Founder",
        postedOn: "2026-04-25",
        message: "POS intelligence around stock movement would be useful for multi-shop operators.",
      },
    ],
  },
  {
    slug: "choosing-rust-golang-python-for-backend-systems",
    title: "Rust, GoLang, or Python: choosing the backend for the job",
    excerpt:
      "A practical comparison of Rust, GoLang, and Python for production APIs, integrations, dashboards, automation, and data-backed systems.",
    category: "Engineering",
    hashtags: ["Rust", "GoLang", "Python", "Backend"],
    author: "ZyrOps Engineering",
    postedOn: "2026-04-24",
    updatedOn: "2026-04-26",
    readTime: "7 min read",
    poster: "/blog/backend-stack.svg",
    posterAlt: "Rust GoLang Python backend stack visual",
    sections: [
      {
        heading: "The best backend language is a delivery decision",
        body: [
          "A backend is not chosen by popularity alone. It is chosen by the workflow, latency requirements, team skill, integration needs, deployment environment, and the cost of maintaining the system over time.",
          "ZyrOps uses Rust, GoLang, and Python because each fits a different operational shape.",
        ],
      },
      {
        heading: "Where each stack fits",
        body: [
          "Rust is strong for performance-sensitive services, strict correctness, and low-level reliability. GoLang is strong for network services, APIs, workers, and operational simplicity. Python is strong for AI workflows, automation, data tasks, Django, Flask, and fast integration-heavy builds.",
          "For many products, the right answer is not one language. It is a clean boundary between services where each language does its best work.",
        ],
        image: "/blog/backend-stack.svg",
        imageAlt: "Backend engineering stack visual with Rust GoLang and Python",
      },
      {
        heading: "What matters after launch",
        body: [
          "Monitoring, logs, error handling, migrations, rollback paths, and support visibility decide whether a backend survives production. Language choice matters, but operational discipline matters more.",
        ],
      },
    ],
    comments: [
      {
        name: "Backend Developer",
        postedOn: "2026-04-24",
        message: "The mixed-service boundary point is important for teams that force one language everywhere.",
      },
    ],
  },
  {
    slug: "ai-support-and-enterprise-employee-tracking",
    title: "AI support and enterprise employee tracking need shared visibility",
    excerpt:
      "Support desks and field tracking systems both depend on trustworthy signals, clean escalation paths, and traceable operational history.",
    category: "Operations",
    hashtags: ["ZyroSupport", "CipherTrak", "AI", "FieldTeams"],
    author: "ZyrOps Operations",
    postedOn: "2026-04-23",
    updatedOn: "2026-04-26",
    readTime: "5 min read",
    poster: "/blog/support-tracking.svg",
    posterAlt: "Support and field tracking visual",
    sections: [
      {
        heading: "Support and tracking are both signal problems",
        body: [
          "A support desk receives customer signals: tickets, messages, escalations, SLA deadlines, and knowledge gaps. A field tracking system receives workforce signals: attendance trails, route history, visit records, and location movement.",
          "Both systems fail when signals are scattered or impossible to trust.",
        ],
      },
      {
        heading: "AI can reduce triage work",
        body: [
          "In ZyroSupport, AI can classify tickets, suggest knowledge base answers, and identify urgent escalations. In CipherTrak, it can surface route anomalies, missed visits, and unusual attendance patterns.",
          "The shared outcome is faster visibility for managers and fewer manual checks for operators.",
        ],
        image: "/blog/support-tracking.svg",
        imageAlt: "Map pin and support tracking illustration",
      },
      {
        heading: "Human control still matters",
        body: [
          "AI should recommend, summarize, and route. Human managers still need audit trails, override controls, and clean reporting when the decision affects customers, employees, or payroll.",
        ],
      },
    ],
    comments: [
      {
        name: "Service Manager",
        postedOn: "2026-04-23",
        message: "Shared visibility between support and field teams is useful for service businesses.",
      },
    ],
  },
];

export const blogCategories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];
export const blogTags = Array.from(new Set(blogPosts.flatMap((post) => post.hashtags))).sort();

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string) {
  const current = getBlogPost(slug);
  if (!current) return [];

  return blogPosts
    .filter((post) => post.slug !== slug)
    .map((post) => ({
      post,
      score:
        (post.category === current.category ? 3 : 0) +
        post.hashtags.filter((tag) => current.hashtags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ post }) => post);
}

