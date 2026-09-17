const SITE_URL = 'https://zyrops.com'

const productMeta = {
  zyrohr: {
    title: 'ZyroHR — AI-Powered Enterprise HRMS | ZyrOps',
    description: 'ZyroHR is an AI-powered HRMS with attendance, payroll, leave, and workforce management for growing enterprises.',
    h1: 'ZyroHR',
  },
  zyrocrm: {
    title: 'ZyroCRM — Enterprise CRM & Pipeline Platform | ZyrOps',
    description: 'ZyroCRM is an enterprise CRM for lead management, sales pipelines, follow-ups, and stronger client engagement across teams.',
    h1: 'ZyroCRM',
  },
  zyrobiz: {
    title: 'ZyroBiz — Stock & Attendance Operations Software | ZyrOps',
    description: 'ZyroBiz integrates stock and attendance management so businesses can streamline everyday operations with clearer control.',
    h1: 'ZyroBiz',
  },
  zyrofee: {
    title: 'ZyroFee — Automated School & College Fee Collection | ZyrOps',
    description: 'ZyroFee is an automated fee collection platform for schools, colleges, and educational institutions of every size.',
    h1: 'ZyroFee',
  },
  zyrofleet: {
    title: 'ZyroFleet — Real-Time Fleet Management Software | ZyrOps',
    description: 'ZyroFleet provides real-time fleet management and tracking for logistics teams and field operations.',
    h1: 'ZyroFleet',
  },
  zyrotrak: {
    title: 'ZyroTrak — Employee Productivity Monitoring Software | ZyrOps',
    description: 'ZyroTrak monitors employee productivity with actionable insights and reporting for clearer operational decisions.',
    h1: 'ZyroTrak',
  },
  zyrosign: {
    title: 'ZyroSign — Secure Digital Document Signing | ZyrOps',
    description: 'ZyroSign is a secure digital signature platform for paperless, compliant, and instant document approvals.',
    h1: 'ZyroSign',
  },
  zyromail: {
    title: 'ZyroMail — Enterprise Email Platform | ZyrOps',
    description: 'ZyroMail is an enterprise-grade email solution built for reliability, security, and organizational scale.',
    h1: 'ZyroMail',
  },
  zyromart: {
    title: 'ZyroMart — Supermarket POS & Inventory Software | ZyrOps',
    description: 'ZyroMart is a supermarket POS platform with inventory sync, barcode scanning, and retail reporting.',
    h1: 'ZyroMart',
  },
  zyropos: {
    title: 'ZyroPOS — Multi-Business Retail POS Platform | ZyrOps',
    description: 'ZyroPOS is a flexible multi-business POS platform with integrated identity service for retail businesses of every scale.',
    h1: 'ZyroPOS',
  },
  zyrolearn: {
    title: 'ZyroLearn — AI-Powered Enterprise LMS | ZyrOps',
    description: 'ZyroLearn is an AI-powered LMS for automated course creation, assessment monitoring, and enterprise-scale learning.',
    h1: 'ZyroLearn',
  },
  zyrostudio: {
    title: 'ZyroStudio — Print & Design Business Operations | ZyrOps',
    description: 'ZyroStudio manages print and design business operations from client briefs to production workflows.',
    h1: 'ZyroStudio',
  },
  zyrofms: {
    title: 'ZyroFMS — Enterprise Facility Management System | ZyrOps',
    description: 'ZyroFMS is a facility management system for physical spaces, assets, and maintenance operations.',
    h1: 'ZyroFMS',
  },
  zyroagent: {
    title: 'ZyroAgent — Autonomous AI for Development Operations | ZyrOps',
    description: 'ZyroAgent is a fully autonomous AI operations agent for complex development tasks, with AI touchpoints across the ZyrOps suite.',
    h1: 'ZyroAgent',
  },
}

export function getPageSeo(pathname = '/') {
  const safePath = String(pathname || '/').split('?')[0].split('#')[0]
  const normalizedPath = safePath === '' ? '/' : safePath.replace(/\/+$/, '') || '/'

  if (normalizedPath === '/') {
    return {
      title: 'ZyrOps Technologies LLP — Complete Enterprise SaaS Suite | Operational Intelligence',
      description: 'ZyrOps Technologies LLP builds integrated enterprise SaaS platforms — HRMS, CRM, POS, LMS, fleet, productivity, and AI — one unified operational intelligence ecosystem.',
      h1: 'ZyrOps',
      canonical: `${SITE_URL}/`,
      keywords: 'ZyrOps Technologies LLP, enterprise SaaS suite India, operational intelligence, HRMS CRM POS LMS, ZyroHR, ZyroCRM, ZyroPOS, ZyroLearn, ZyroAgent',
    }
  }

  if (normalizedPath === '/products') {
    return {
      title: 'Enterprise SaaS Products — HRMS, CRM, POS, LMS & AI | ZyrOps Technologies LLP',
      description: 'Explore the full ZyrOps product suite: ZyroHR, ZyroCRM, ZyroPOS, ZyroLearn, ZyroAgent, and more — integrated platforms for modern operations.',
      h1: 'Complete Enterprise SaaS Suite',
      canonical: `${SITE_URL}/products`,
      keywords: 'enterprise SaaS products, HRMS software, CRM software, POS software, LMS platform, AI operations platform',
    }
  }

  if (normalizedPath === '/careers') {
    return {
      title: 'Careers — Join ZyrOps Technologies LLP | Operational Intelligence Engineering',
      description: 'Explore open roles at ZyrOps Technologies LLP. Engineer intelligent operational ecosystems with clarity, reliability, and measurable outcomes.',
      h1: 'Engineer better. Grow with us.',
      canonical: `${SITE_URL}/careers`,
      keywords: 'ZyrOps careers, software engineering jobs Kerala, enterprise SaaS jobs, operational intelligence engineering',
    }
  }

  const productMatch = normalizedPath.match(/^\/products\/([^/]+)$/)
  if (productMatch && productMeta[productMatch[1]]) {
    const item = productMeta[productMatch[1]]
    return {
      title: item.title,
      description: item.description,
      h1: item.h1,
      canonical: `${SITE_URL}/products/${productMatch[1]}`,
      keywords: `${item.h1}, ${item.description}`,
    }
  }

  const solutionMeta = {
    '/solutions/hrms-software': {
      title: 'HRMS Software for Attendance, Payroll and Employee Management | ZyrOps',
      description: 'Manage attendance, payroll, leave, and employee records in one HRMS platform built for modern enterprise operations.',
      h1: 'HRMS software for smarter workforce operations',
    },
    '/solutions/retail-pos-software': {
      title: 'Retail POS Software for Supermarkets and Multi-Store Operations | ZyrOps',
      description: 'Modern POS software for supermarkets and multi-store retail teams that need faster checkout and clearer inventory visibility.',
      h1: 'Retail POS software for faster checkout and better control',
    },
  }

  if (solutionMeta[normalizedPath]) {
    const item = solutionMeta[normalizedPath]
    return {
      title: item.title,
      description: item.description,
      h1: item.h1,
      canonical: `${SITE_URL}${normalizedPath}`,
      keywords: `${item.h1}, ${item.description}`,
    }
  }

  const careersMatch = normalizedPath.match(/^\/careers\/([^/]+)$/)
  if (careersMatch) {
    return {
      title: 'Career Opportunity — ZyrOps Technologies LLP',
      description: 'Discover a role at ZyrOps Technologies LLP and help build intelligent operational platforms for growing businesses.',
      h1: 'Career opportunity',
      canonical: `${SITE_URL}/careers/${careersMatch[1]}`,
      keywords: 'ZyrOps jobs, software engineering career, enterprise SaaS careers',
    }
  }

  return {
    title: 'ZyrOps Technologies LLP — Complete Enterprise SaaS Suite | Operational Intelligence',
    description: 'ZyrOps Technologies LLP builds integrated enterprise SaaS platforms — HRMS, CRM, POS, LMS, fleet, productivity, and AI — one unified operational intelligence ecosystem.',
    h1: 'ZyrOps',
    canonical: `${SITE_URL}${normalizedPath}`,
    keywords: 'ZyrOps, enterprise SaaS suite, operational intelligence',
  }
}
