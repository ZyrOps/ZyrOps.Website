import { products } from '../data/products'

export type SupportIntent =
  | 'product'
  | 'engineering'
  | 'pricing'
  | 'support'
  | 'careers'
  | 'general'

export type KnowledgeHit = {
  title: string
  body: string
  href?: string
  tags: string[]
}

const brandAnswers: KnowledgeHit[] = [
  {
    title: 'What ZyrOps does',
    body: 'ZyrOps is an Operational Intelligence Engineering company. We engineer intelligent operational ecosystems — connected SaaS platforms and custom enterprise systems — that simplify complexity, automate workflows, and help organizations scale with confidence.',
    href: '/#platforms',
    tags: ['zyrops', 'who', 'what', 'company', 'about', 'operational intelligence'],
  },
  {
    title: 'Product suite',
    body: 'The ZyrOps suite includes ZyroHR, ZyroCRM, ZyroBiz, ZyroFee, ZyroFleet, ZyroTrak, ZyroSign, ZyroMail, ZyroMart, ZyroPOS, ZyroLearn, ZyroStudio, ZyroFMS, and ZyroAgent — covering HR, CRM, retail, learning, operations, and AI.',
    href: '/products',
    tags: ['products', 'suite', 'platforms', 'ecosystem', 'list', 'all products'],
  },
  {
    title: 'Custom engineering',
    body: 'Beyond products, ZyrOps designs custom enterprise systems with cloud-native architecture, AI automation, and secure-by-design engineering in Rust, Go, Python, Flutter, and modern web stacks.',
    href: '/#services',
    tags: ['custom', 'engineering', 'development', 'build', 'services', 'enterprise'],
  },
  {
    title: 'Pricing & demos',
    body: 'Pricing depends on products, users, and deployment (SaaS, PaaS, mobile, or desktop). Share your use case in the contact form and our team will recommend a clear next step — usually within one business day.',
    href: '/#contact',
    tags: ['pricing', 'price', 'cost', 'demo', 'quote', 'plan'],
  },
  {
    title: 'Support & contact',
    body: 'Email hello@zyrops.com or call +91 94887 66222. Visit us at Uthradam Building, Kuttikattoor, Calicut. For product questions, use this assistant or the contact form with your product selected so we can route your query correctly.',
    href: '/#contact',
    tags: ['support', 'help', 'contact', 'email', 'phone', 'human', 'address', 'location', 'office', 'calicut'],
  },
  {
    title: 'Careers',
    body: 'Open roles are listed on the Careers page and synced from ZyroHR. You can view roles and apply directly from there.',
    href: '/careers',
    tags: ['career', 'careers', 'job', 'jobs', 'hiring', 'internship'],
  },
  {
    title: 'Deployment options',
    body: 'ZyrOps supports SaaS, PaaS, mobile, and desktop deployments — so teams can run cloud-first, hybrid, or environment-specific setups with enterprise-grade security and scale.',
    href: '/products',
    tags: ['saas', 'paas', 'deploy', 'deployment', 'cloud', 'mobile', 'desktop'],
  },
]

const productHits: KnowledgeHit[] = products.map((p) => ({
  title: p.name,
  body: `${p.summary} ${p.description}`,
  href: `/products/${p.slug}`,
  tags: [
    p.name.toLowerCase(),
    p.slug,
    p.categoryLabel.toLowerCase(),
    ...p.keywords.map((k) => k.toLowerCase()),
    ...p.highlights.map((h) => h.toLowerCase()),
  ],
}))

const knowledge: KnowledgeHit[] = [...brandAnswers, ...productHits]

function tokenize(input: string): string[] {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s+/.-]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 1)
}

export function detectIntent(message: string): SupportIntent {
  const text = message.toLowerCase()
  if (/(career|job|hiring|intern)/.test(text)) return 'careers'
  if (/(price|pricing|cost|quote|demo)/.test(text)) return 'pricing'
  if (/(support|bug|issue|help|error|login)/.test(text)) return 'support'
  if (/(custom|engineer|develop|build|api|integrat)/.test(text)) return 'engineering'
  if (/(product|zyro|hrms|crm|pos|lms|fleet|agent)/.test(text)) return 'product'
  return 'general'
}

export function answerFromKnowledge(message: string): {
  reply: string
  links: { label: string; href: string }[]
  intent: SupportIntent
} {
  const tokens = tokenize(message)
  const intent = detectIntent(message)

  const scored = knowledge
    .map((item) => {
      const hay = `${item.title} ${item.body} ${item.tags.join(' ')}`.toLowerCase()
      let score = 0
      for (const token of tokens) {
        if (hay.includes(token)) score += token.length > 4 ? 2 : 1
      }
      for (const tag of item.tags) {
        if (message.toLowerCase().includes(tag)) score += 3
      }
      return { item, score }
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)

  if (!scored.length) {
    return {
      intent,
      reply:
        "I'm not fully sure yet. I can help with ZyrOps products, custom engineering, pricing/demos, careers, or general support. Try asking about a product like ZyroHR or ZyroPOS — or choose Talk to a human and we'll follow up.",
      links: [
        { label: 'Browse products', href: '/products' },
        { label: 'Contact team', href: '/#contact' },
      ],
    }
  }

  const top = scored.slice(0, 2).map((s) => s.item)
  const primary = top[0]
  const secondary = top[1]

  let reply = primary.body
  if (secondary && secondary.title !== primary.title) {
    reply += `\n\nYou may also want ${secondary.title}: ${secondary.body.slice(0, 140)}…`
  }

  if (intent === 'pricing') {
    reply +=
      '\n\nIf you share company size and the products you need, our team can send a tailored recommendation.'
  }

  const links = top
    .filter((t) => t.href)
    .map((t) => ({ label: t.title, href: t.href as string }))

  return { reply, links, intent }
}

export const QUICK_PROMPTS = [
  'What products does ZyrOps offer?',
  'Tell me about ZyroHR',
  'Do you build custom enterprise systems?',
  'How do pricing and demos work?',
  'I need technical support',
]
