import { ILLUSTRATIONS } from '../components/Illustration'

export type ProductCategory =
  | 'core'
  | 'operations'
  | 'retail'
  | 'learning'
  | 'creative'
  | 'ai'

export type Product = {
  slug: string
  name: string
  tagline: string
  category: ProductCategory
  categoryLabel: string
  summary: string
  description: string
  highlights: string[]
  features: { title: string; body: string }[]
  keywords: string[]
  seoTitle: string
  seoDescription: string
  illustration: string
  ctaLabel?: string
}

export const CATEGORY_ORDER: ProductCategory[] = [
  'core',
  'operations',
  'retail',
  'learning',
  'creative',
  'ai',
]

export const CATEGORY_META: Record<
  ProductCategory,
  { label: string; blurb: string }
> = {
  core: {
    label: 'Core Business Solutions',
    blurb: 'HR, CRM, operations, and fee platforms that run the business day to day.',
  },
  operations: {
    label: 'Operations & Productivity',
    blurb: 'Fleet, productivity, signing, and enterprise mail — built for reliable execution.',
  },
  retail: {
    label: 'Retail & Commerce',
    blurb: 'Flexible POS technology for supermarkets and multi-format retail.',
  },
  learning: {
    label: 'Learning & Development',
    blurb: 'AI-powered LMS for course creation, assessments, and enterprise scale.',
  },
  creative: {
    label: 'Creative & Facilities',
    blurb: 'Design-business operations and facility management for physical infrastructure.',
  },
  ai: {
    label: 'AI-Powered Innovation',
    blurb: 'Autonomous agents and intelligent automation across the ZyrOps suite.',
  },
}

export const products: Product[] = [
  {
    slug: 'zyrohr',
    name: 'ZyroHR',
    tagline: 'Intelligent workforce management',
    category: 'core',
    categoryLabel: 'HRMS',
    summary:
      'Full-featured HRMS with a virtual HR assistant and AI chatbot for intelligent workforce management.',
    description:
      'ZyroHR helps organizations manage attendance, payroll, leave, employee records, and HR workflows in one connected platform. AI-assisted support reduces repetitive HR work while keeping people in control of critical decisions.',
    highlights: [
      'Virtual HR assistant & AI chatbot',
      'Attendance, payroll & leave workflows',
      'Employee self-service and approvals',
    ],
    features: [
      {
        title: 'Unified people operations',
        body: 'Centralize employee records, attendance, leave, and payroll approvals in one secure HRMS.',
      },
      {
        title: 'AI-assisted HR support',
        body: 'Virtual HR assistant and chatbot help teams resolve common requests faster.',
      },
      {
        title: 'Workforce visibility',
        body: 'Give leaders clearer insight into workforce signals without spreadsheet chaos.',
      },
    ],
    keywords: [
      'enterprise HRMS software',
      'AI HRMS platform',
      'workforce management software',
      'HRIS with AI chatbot',
      'payroll and attendance software',
      'employee self service portal',
      'virtual HR assistant',
    ],
    seoTitle: 'ZyroHR — AI-Powered Enterprise HRMS | ZyrOps',
    seoDescription:
      'ZyroHR is an AI-powered HRMS with virtual HR assistant, attendance, payroll, leave, and workforce management for growing enterprises.',
    illustration: ILLUSTRATIONS.demo,
  },
  {
    slug: 'zyrocrm',
    name: 'ZyroCRM',
    tagline: 'Pipeline growth with stronger engagement',
    category: 'core',
    categoryLabel: 'CRM',
    summary:
      'End-to-end customer relationship management built to grow pipelines and strengthen client engagement.',
    description:
      'ZyroCRM gives sales and account teams a clear view of leads, pipelines, follow-ups, and account history — so relationships stay organized and revenue workflows stay visible.',
    highlights: [
      'Lead and pipeline management',
      'Follow-up automation',
      'Client engagement history',
    ],
    features: [
      {
        title: 'End-to-end pipeline control',
        body: 'Track leads from first contact through close with structured stages and ownership.',
      },
      {
        title: 'Stronger client engagement',
        body: 'Keep account history, notes, and next actions in one place for every stakeholder.',
      },
      {
        title: 'Sales visibility',
        body: 'Help teams prioritize follow-ups and forecast with clearer operational insight.',
      },
    ],
    keywords: [
      'enterprise CRM software',
      'sales CRM platform',
      'pipeline management software',
      'customer relationship management system',
      'CRM for growing businesses',
      'lead management software',
      'sales follow up automation',
    ],
    seoTitle: 'ZyroCRM — Enterprise CRM & Pipeline Platform | ZyrOps',
    seoDescription:
      'ZyroCRM is an enterprise CRM for lead management, sales pipelines, follow-ups, and stronger client engagement across teams.',
    illustration: ILLUSTRATIONS.data,
  },
  {
    slug: 'zyrobiz',
    name: 'ZyroBiz',
    tagline: 'Stock and attendance in one flow',
    category: 'core',
    categoryLabel: 'Business operations',
    summary:
      'Integrated stock and attendance management for streamlined day-to-day business operations.',
    description:
      'ZyroBiz connects inventory and attendance into a practical operations layer for businesses that need simple control over stock movement and workforce presence every day.',
    highlights: [
      'Integrated stock management',
      'Attendance tracking',
      'Day-to-day operations clarity',
    ],
    features: [
      {
        title: 'Stock control',
        body: 'Track inventory movement with clearer day-to-day operational visibility.',
      },
      {
        title: 'Attendance management',
        body: 'Keep workforce presence aligned with daily business operations.',
      },
      {
        title: 'Operational simplicity',
        body: 'Reduce fragmented tools by managing stock and attendance together.',
      },
    ],
    keywords: [
      'stock management software',
      'attendance and inventory system',
      'small business operations software',
      'inventory attendance management',
      'business operations platform',
    ],
    seoTitle: 'ZyroBiz — Stock & Attendance Operations Software | ZyrOps',
    seoDescription:
      'ZyroBiz integrates stock and attendance management so businesses can streamline everyday operations with clearer control.',
    illustration: ILLUSTRATIONS.product,
  },
  {
    slug: 'zyrofee',
    name: 'ZyroFee',
    tagline: 'Automated fee collection for education',
    category: 'core',
    categoryLabel: 'Education finance',
    summary:
      'Automated fee collection platform purpose-built for educational institutions of all sizes.',
    description:
      'ZyroFee helps schools, colleges, and training institutions automate fee collection, reminders, and payment tracking — reducing manual follow-ups and improving cash-flow clarity.',
    highlights: [
      'Automated fee collection',
      'Built for educational institutions',
      'Payment tracking and reminders',
    ],
    features: [
      {
        title: 'Purpose-built for education',
        body: 'Collect tuition and institutional fees with workflows designed for campuses.',
      },
      {
        title: 'Automation over repetition',
        body: 'Reduce manual chasing with structured collection and reminder flows.',
      },
      {
        title: 'Financial visibility',
        body: 'Give administrators clearer insight into payments, dues, and status.',
      },
    ],
    keywords: [
      'school fee collection software',
      'education fee management system',
      'automated tuition payment platform',
      'college fee management software',
      'institution fee collection SaaS',
    ],
    seoTitle: 'ZyroFee — Automated School & College Fee Collection | ZyrOps',
    seoDescription:
      'ZyroFee is an automated fee collection platform for schools, colleges, and educational institutions of every size.',
    illustration: ILLUSTRATIONS.codegen,
  },
  {
    slug: 'zyrofleet',
    name: 'ZyroFleet',
    tagline: 'Real-time fleet visibility',
    category: 'operations',
    categoryLabel: 'Fleet management',
    summary:
      'Real-time fleet management and tracking for logistics and field operations.',
    description:
      'ZyroFleet gives logistics and field teams live visibility into vehicles, routes, and operational status — helping organizations coordinate movement with greater control.',
    highlights: [
      'Real-time fleet tracking',
      'Logistics and field operations',
      'Operational route visibility',
    ],
    features: [
      {
        title: 'Live fleet tracking',
        body: 'Monitor vehicles and field assets with real-time operational awareness.',
      },
      {
        title: 'Logistics coordination',
        body: 'Support dispatch and field teams with clearer movement visibility.',
      },
      {
        title: 'Operational control',
        body: 'Reduce uncertainty across distributed fleet and field workflows.',
      },
    ],
    keywords: [
      'fleet management software',
      'real-time vehicle tracking',
      'logistics fleet tracking system',
      'field operations fleet software',
      'enterprise fleet management SaaS',
    ],
    seoTitle: 'ZyroFleet — Real-Time Fleet Management Software | ZyrOps',
    seoDescription:
      'ZyroFleet provides real-time fleet management and tracking for logistics teams and field operations.',
    illustration: ILLUSTRATIONS.cloud,
  },
  {
    slug: 'zyrotrak',
    name: 'ZyroTrak',
    tagline: 'Productivity with actionable insight',
    category: 'operations',
    categoryLabel: 'Productivity',
    summary:
      'Employee productivity monitoring with actionable insights and reporting.',
    description:
      'ZyroTrak helps organizations understand productivity patterns with clear reporting — supporting better coaching, planning, and operational improvement without unnecessary complexity.',
    highlights: [
      'Productivity monitoring',
      'Actionable insights',
      'Operational reporting',
    ],
    features: [
      {
        title: 'Workforce productivity signals',
        body: 'See patterns that help managers coach teams with clearer evidence.',
      },
      {
        title: 'Actionable reporting',
        body: 'Turn activity data into decisions instead of raw noise.',
      },
      {
        title: 'Operational improvement',
        body: 'Support continuous improvement across teams and workflows.',
      },
    ],
    keywords: [
      'employee productivity monitoring software',
      'workforce productivity analytics',
      'employee activity reporting tool',
      'productivity insights platform',
      'enterprise productivity software',
    ],
    seoTitle: 'ZyroTrak — Employee Productivity Monitoring Software | ZyrOps',
    seoDescription:
      'ZyroTrak monitors employee productivity with actionable insights and reporting for clearer operational decisions.',
    illustration: ILLUSTRATIONS.analytics,
  },
  {
    slug: 'zyrosign',
    name: 'ZyroSign',
    tagline: 'Paperless signing, instantly',
    category: 'operations',
    categoryLabel: 'Digital signature',
    summary:
      'Secure digital document signing — paperless, compliant, and instant.',
    description:
      'ZyroSign enables secure digital signatures so teams can approve documents faster while maintaining trust, compliance, and a clear audit trail.',
    highlights: [
      'Secure digital signatures',
      'Paperless document workflows',
      'Instant, compliant approvals',
    ],
    features: [
      {
        title: 'Secure e-sign workflows',
        body: 'Collect signatures digitally with security and accountability built in.',
      },
      {
        title: 'Faster approvals',
        body: 'Replace paper delays with instant, trackable signing experiences.',
      },
      {
        title: 'Operational compliance',
        body: 'Keep document approvals organized and ready for review.',
      },
    ],
    keywords: [
      'digital signature software',
      'electronic document signing platform',
      'secure e-sign SaaS',
      'paperless contract signing',
      'enterprise digital signature solution',
    ],
    seoTitle: 'ZyroSign — Secure Digital Document Signing | ZyrOps',
    seoDescription:
      'ZyroSign is a secure digital signature platform for paperless, compliant, and instant document approvals.',
    illustration: ILLUSTRATIONS.agreement,
  },
  {
    slug: 'zyromail',
    name: 'ZyroMail',
    tagline: 'Enterprise email you can trust',
    category: 'operations',
    categoryLabel: 'Enterprise email',
    summary:
      'Enterprise-grade email solution built for reliability, security, and scale.',
    description:
      'ZyroMail delivers reliable enterprise email for organizations that need secure communication at scale without sacrificing operational simplicity.',
    highlights: [
      'Enterprise-grade reliability',
      'Security-focused messaging',
      'Built to scale with teams',
    ],
    features: [
      {
        title: 'Reliable business email',
        body: 'Keep organizational communication stable as teams and workloads grow.',
      },
      {
        title: 'Security-minded design',
        body: 'Protect business communication with enterprise-grade safeguards.',
      },
      {
        title: 'Operational scale',
        body: 'Support distributed teams with email infrastructure ready for growth.',
      },
    ],
    keywords: [
      'enterprise email solution',
      'secure business email platform',
      'corporate email hosting SaaS',
      'scalable enterprise mail system',
      'business email for organizations',
    ],
    seoTitle: 'ZyroMail — Enterprise Email Platform | ZyrOps',
    seoDescription:
      'ZyroMail is an enterprise-grade email solution built for reliability, security, and organizational scale.',
    illustration: ILLUSTRATIONS.chat,
  },
  {
    slug: 'zyromart',
    name: 'ZyroMart',
    tagline: 'POS built for supermarket retail',
    category: 'retail',
    categoryLabel: 'Supermarket POS',
    summary:
      'Purpose-built POS for supermarkets with inventory sync, barcode scanning, and reporting.',
    description:
      'ZyroMart is designed for supermarket environments where counter speed, inventory sync, barcode workflows, and reporting must work together every day.',
    highlights: [
      'Supermarket POS workflows',
      'Inventory sync & barcode scanning',
      'Retail reporting',
    ],
    features: [
      {
        title: 'Counter-ready POS',
        body: 'Support fast checkout flows designed for supermarket operations.',
      },
      {
        title: 'Inventory sync',
        body: 'Keep stock and sales aligned with barcode-driven workflows.',
      },
      {
        title: 'Retail reporting',
        body: 'Give managers clearer insight into sales and inventory performance.',
      },
    ],
    keywords: [
      'supermarket POS software',
      'barcode POS system',
      'retail inventory sync POS',
      'grocery store point of sale',
      'supermarket billing software',
    ],
    seoTitle: 'ZyroMart — Supermarket POS & Inventory Software | ZyrOps',
    seoDescription:
      'ZyroMart is a supermarket POS platform with inventory sync, barcode scanning, and retail reporting.',
    illustration: ILLUSTRATIONS.dashboard,
  },
  {
    slug: 'zyropos',
    name: 'ZyroPOS',
    tagline: 'Flexible POS for every retail format',
    category: 'retail',
    categoryLabel: 'Multi-retail POS',
    summary:
      'Multi-business type POS with integrated identity service — adaptable across retail segments.',
    description:
      'ZyroPOS brings powerful, flexible point-of-sale technology to retail businesses of every scale — from single counters to multi-format retail environments — with integrated identity service support.',
    highlights: [
      'Multi-business retail POS',
      'Integrated identity service',
      'Adaptable across retail segments',
    ],
    features: [
      {
        title: 'Flexible retail POS',
        body: 'Adapt checkout and retail workflows across different business types.',
      },
      {
        title: 'Identity-aware operations',
        body: 'Use integrated identity services to support secure retail workflows.',
      },
      {
        title: 'Enterprise retail readiness',
        body: 'Scale from single outlets to multi-format retail environments.',
      },
    ],
    keywords: [
      'multi business POS software',
      'retail point of sale system',
      'enterprise POS platform',
      'cloud POS for retail',
      'identity integrated POS',
      'multi format retail billing software',
    ],
    seoTitle: 'ZyroPOS — Multi-Business Retail POS Platform | ZyrOps',
    seoDescription:
      'ZyroPOS is a flexible multi-business POS platform with integrated identity service for retail businesses of every scale.',
    illustration: ILLUSTRATIONS.demo,
  },
  {
    slug: 'zyrolearn',
    name: 'ZyroLearn',
    tagline: 'AI-powered learning at enterprise scale',
    category: 'learning',
    categoryLabel: 'LMS',
    summary:
      'LMS with AI course creation, automated assessment monitoring, and enterprise scalability.',
    description:
      'ZyroLearn helps organizations create courses and assessments faster with AI, monitor learner performance with smart proctoring analytics, and scale learning across departments and locations.',
    highlights: [
      'AI-powered course creation',
      'Automated assessment monitoring',
      'Enterprise learner scalability',
    ],
    features: [
      {
        title: 'AI course generation',
        body: 'Auto-generate courses and assessments to reduce content development time.',
      },
      {
        title: 'Smart assessment monitoring',
        body: 'Use proctoring and analytics for real-time learner performance insight.',
      },
      {
        title: 'Enterprise scale',
        body: 'Support thousands of concurrent learners across units and locations.',
      },
    ],
    keywords: [
      'enterprise LMS software',
      'AI course creation platform',
      'corporate learning management system',
      'automated assessment monitoring LMS',
      'AI powered elearning platform',
      'scalable corporate training software',
    ],
    seoTitle: 'ZyroLearn — AI-Powered Enterprise LMS | ZyrOps',
    seoDescription:
      'ZyroLearn is an AI-powered LMS for automated course creation, assessment monitoring, and enterprise-scale learning.',
    illustration: ILLUSTRATIONS.vision,
  },
  {
    slug: 'zyrostudio',
    name: 'ZyroStudio',
    tagline: 'Operations for print & design businesses',
    category: 'creative',
    categoryLabel: 'Design operations',
    summary:
      'A comprehensive platform for managing print and design business operations — from client briefs to production workflows.',
    description:
      'ZyroStudio gives creative and print businesses an operational backbone — connecting client briefs, production workflows, and delivery so studios can scale with clarity.',
    highlights: [
      'Client brief to production flow',
      'Print & design operations',
      'Scalable creative business backbone',
    ],
    features: [
      {
        title: 'Brief-to-production workflows',
        body: 'Organize creative jobs from intake through production with clearer ownership.',
      },
      {
        title: 'Print business operations',
        body: 'Support design and print teams with practical operational structure.',
      },
      {
        title: 'Scale with clarity',
        body: 'Give creative businesses the systems needed to grow without chaos.',
      },
    ],
    keywords: [
      'print shop management software',
      'design studio operations platform',
      'creative business workflow software',
      'print production management system',
      'design agency operations SaaS',
    ],
    seoTitle: 'ZyroStudio — Print & Design Business Operations | ZyrOps',
    seoDescription:
      'ZyroStudio manages print and design business operations from client briefs to production workflows.',
    illustration: ILLUSTRATIONS.building,
  },
  {
    slug: 'zyrofms',
    name: 'ZyroFMS',
    tagline: 'Facility management that stays efficient',
    category: 'creative',
    categoryLabel: 'Facilities',
    summary:
      'Facility Management System for physical spaces, assets, and maintenance operations.',
    description:
      'ZyroFMS streamlines administration of physical spaces, assets, and maintenance so enterprise infrastructure stays organized and operating efficiently.',
    highlights: [
      'Space and asset administration',
      'Maintenance operations',
      'Enterprise facility efficiency',
    ],
    features: [
      {
        title: 'Facility administration',
        body: 'Manage spaces and assets with clearer operational structure.',
      },
      {
        title: 'Maintenance workflows',
        body: 'Keep upkeep organized so infrastructure issues are handled promptly.',
      },
      {
        title: 'Operational efficiency',
        body: 'Help facilities teams protect uptime across enterprise environments.',
      },
    ],
    keywords: [
      'facility management system software',
      'enterprise FMS platform',
      'asset and maintenance management software',
      'facilities operations SaaS',
      'building maintenance management system',
    ],
    seoTitle: 'ZyroFMS — Enterprise Facility Management System | ZyrOps',
    seoDescription:
      'ZyroFMS is a facility management system for physical spaces, assets, and maintenance operations.',
    illustration: ILLUSTRATIONS.secure,
  },
  {
    slug: 'zyroagent',
    name: 'ZyroAgent',
    tagline: 'Autonomous AI for development operations',
    category: 'ai',
    categoryLabel: 'AI operations',
    summary:
      'Fully autonomous AI for development operations — self-directing and self-executing.',
    description:
      "ZyroAgent is ZyrOps' flagship AI investment — an autonomous operations agent capable of executing complex development tasks end-to-end, supported by AI touchpoints across HR, chat, and learning platforms.",
    highlights: [
      'Fully autonomous AI agent',
      'End-to-end development operations',
      'AI touchpoints across the suite',
    ],
    features: [
      {
        title: 'Autonomous execution',
        body: 'Self-directing workflows that move complex development tasks forward with less manual orchestration.',
      },
      {
        title: 'Suite-wide intelligence',
        body: 'Works alongside virtual HR assistance, smart chat, and AI course creation across platforms.',
      },
      {
        title: 'Human-centered control',
        body: 'Amplifies capability while keeping accountability and oversight with operators.',
      },
    ],
    keywords: [
      'autonomous AI agent for development',
      'AI operations agent SaaS',
      'enterprise AI automation platform',
      'AI development operations software',
      'autonomous software operations agent',
    ],
    seoTitle: 'ZyroAgent — Autonomous AI for Development Operations | ZyrOps',
    seoDescription:
      'ZyroAgent is a fully autonomous AI operations agent for complex development tasks, with AI touchpoints across the ZyrOps suite.',
    illustration: ILLUSTRATIONS.agent,
    ctaLabel: 'Talk about ZyroAgent',
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category)
}

export const SITE_SEO = {
  siteName: 'ZyrOps',
  siteUrl: 'https://zyrops.com',
  defaultTitle: 'ZyrOps — Complete Enterprise SaaS Suite | Operational Intelligence',
  defaultDescription:
    'ZyrOps Technologies offers 12+ integrated enterprise SaaS platforms spanning HRMS, CRM, POS, LMS, fleet, productivity, and AI — one unified ecosystem.',
  keywords: [
    'enterprise SaaS suite',
    'operational intelligence engineering',
    'integrated enterprise software platform',
    'AI powered business operations software',
    'HRMS CRM POS LMS suite',
    'multi deployment SaaS PaaS mobile desktop',
    'enterprise digital transformation platform',
    'ZyrOps Technologies',
    'unified business operations ecosystem',
  ],
}
