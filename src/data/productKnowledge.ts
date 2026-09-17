export type ProductKnowledgeEntry = {
  repo: string
  web: string
  mobile: string | null
  modules?: string[]
  coreFeatures: string[]
  aiFeatures: string[]
  notes: string[]
}

export const PRODUCT_KNOWLEDGE: Record<string, ProductKnowledgeEntry> = {
  zyrohr: {
    repo: 'ZyrOps.HRMS',
    web: 'ZyroHR web platform',
    mobile: 'ZyroHR mobile app for employee and manager self-service',
    modules: [
      'Employee lifecycle and self-service',
      'Attendance, leave, and payroll workflows',
      'AI recruitment and resume processing',
      'AI HR chatbot and employee support',
      'Performance analysis and workforce insights',
    ],
    coreFeatures: [
      'Employee management',
      'Attendance tracking',
      'Leave and approval workflows',
      'Payroll coordination',
      'Task and recruitment workflows',
    ],
    aiFeatures: [
      'Autonomous HR workflow assistance',
      'AI recruitment, resume collection, and candidate processing',
      'AI HR chatbot for employee questions and requests',
      'Employee performance analysis and workforce insights',
      'Automated follow-ups and repetitive HR task handling',
    ],
    notes: ['Web and mobile access', 'Multi-tenant architecture', 'Role-based access control', 'Operational reporting'],
  },
  zyrocrm: {
    repo: 'ZyrOps.CRM.Web + ZyrOps.CRM.Mobile',
    web: 'ZyroCRM web CRM',
    mobile: 'ZyrOps.CRM.Mobile (Flutter Android app)',
    coreFeatures: [
      'Lead and deal management',
      'Telecaller and sales pipeline workflows',
      'Manage callbacks, meetings, products, and follow-ups',
      'Closed sales tracking and organization routing',
      'Offline call outcome syncing',
    ],
    aiFeatures: ['Outbound workflow assistance', 'Sales pipeline intelligence', 'Call analytics and outcomes'],
    notes: ['Role-aware workspace', 'Dynamic appointment questions', 'Call logging and CRM timeline'],
  },
  zyrofleet: {
    repo: 'ZyrOps.ZyroField.Web',
    web: 'ZyroField web platform',
    mobile: 'ZyroFleet mobile app for field crews, drivers, and operational updates',
    modules: [
      'Fleet dashboard and dispatch overview',
      'Route planning and driver assignment',
      'Live tracking and missed visit monitoring',
      'Pickup, delivery, return, and settlement workflows',
      'Sales and profit/loss reporting',
    ],
    coreFeatures: [
      'Crew allocation and field worker management',
      'Evening attendance and work logging',
      'Piece-rate output and commissions',
      'Field asset tracking and reconciliation',
      'Payroll generation and operational dashboarding',
    ],
    aiFeatures: ['Operational reporting assistance', 'Performance insights', 'Workflow automation'],
    notes: ['Field operations', 'Contract-based crew management', 'Payroll and incentives tracking'],
  },
  zyrofee: {
    repo: 'ZyrOps.ZyroFee.Web',
    web: 'ZyroFee web platform',
    mobile: 'ZyroFee mobile app for fee payments, updates, and institutional workflows',
    coreFeatures: [
      'Fee collection',
      'Tenant and user management',
      'Module permissions and access control',
      'Settings and notifications',
      'Superadmin controls',
    ],
    aiFeatures: ['Automation for reminders and fee operations', 'Operational reporting'],
    notes: ['Multi-tenant SaaS', 'Audit-friendly admin controls', 'SaaS admin console'],
  },
  zyropos: {
    repo: 'NomadsCipher.POS',
    web: 'Multi-tenant ZyroPOS web platform',
    mobile: 'Flutter retail app for store and counter operations',
    modules: [
      'Retail and hospitality POS',
      'Stock and branch management',
      'Daily collection and settlement',
      'Invoice, return, and reporting workflows',
      'Table and QR ordering flows',
    ],
    coreFeatures: [
      'POS counter operations for multiple business types',
      'Inventory, stock movement, and branch rules',
      'GST, Tally, and financial settlement workflows',
      'Sales, refunds, and invoice generation',
      'Multi-tenant admin and role-based controls',
    ],
    aiFeatures: ['Operational dashboards', 'Inventory and sales intelligence', 'Workflow automation'],
    notes: ['Supports retail, cafe, restaurant, salon, and supermarket models', 'Branch-based operations and centralized reporting', 'Built as a multi-tenant SaaS'],
  },
  zyrostudio: {
    repo: 'NomadsCipher.POS/print_design',
    web: 'ZyroStudio design and print operations workspace',
    mobile: 'Web-first client and delivery tracking workflow',
    modules: [
      'Portfolio and job intake',
      'Production schedule and work-order tracking',
      'Delivery, transfer, and billing queue management',
      'Support and customer issue handling',
      'Van transfer and fulfilment controls',
    ],
    coreFeatures: [
      'Print and design project intake',
      'Production scheduling and capacity planning',
      'Work order tracking and delivery coordination',
      'Van transfer and fulfillment visibility',
      'Billing and support workflow management',
    ],
    aiFeatures: ['Production workflow visibility', 'Scheduling assistance', 'Operational support automation'],
    notes: ['Creative production system', 'Studio operations and fulfillment', 'Transforms classic print workflow into managed production pipeline'],
  },
  zyromart: {
    repo: 'ZyrOps.POS.ZyroWear.Mobile',
    web: 'Supermarket retail POS workflows',
    mobile: 'ZyroMart mobile app for retail billing and store operations',
    coreFeatures: [
      'Counter-ready billing',
      'Barcode-driven sales',
      'Inventory sync and reporting',
      'Store-level sales analytics',
    ],
    aiFeatures: ['Sales trend visibility', 'Inventory intelligence'],
    notes: ['Retail checkout', 'Supermarket operations', 'Fast transaction flow'],
  },
  zyrolearn: {
    repo: 'ZyrOps.ZyroLearn.Mobile',
    web: 'Learning platform with enterprise onboarding workflows',
    mobile: 'ZyroLearn mobile app (Flutter / Android)',
    coreFeatures: [
      'Course delivery',
      'Assessment and onboarding',
      'Learning progress tracking',
      'Mobile-first training experiences',
    ],
    aiFeatures: ['AI-assisted course creation', 'Assessment monitoring', 'Learning intelligence'],
    notes: ['Android assessment support', 'Training and onboarding', 'Employee learning workflows'],
  },
  zyrosign: {
    repo: 'ZyrOps.ZyroSign.Web',
    web: 'ZyroSign web platform',
    mobile: 'ZyroSign mobile app for document signing and approvals',
    coreFeatures: [
      'Digital document signing',
      'Approval workflows',
      'Paperless operation handling',
      'Document compliance and audit readiness',
    ],
    aiFeatures: ['Workflow automation', 'Document process acceleration'],
    notes: ['Secure approvals', 'Paperless operations', 'Compliance-focused workflow'],
  },
  zyromail: {
    repo: 'ZyrOps.ZyroMail.Web',
    web: 'ZyroMail webmail client',
    mobile: 'ZyroMail mobile app for business email access',
    coreFeatures: [
      'IMAP/SMTP mailbox access',
      'Employee login via ZyroHR credentials',
      'Organization email access',
      'Mailbox integration with Hostinger',
    ],
    aiFeatures: ['Inbox organization support', 'Workflow assistance'],
    notes: ['Hosted webmail', 'IMAP/SMTP support', 'Business communications'],
  },
  zyroagent: {
    repo: 'Zyrops.ZyroAgent',
    web: 'ZyroAgent control plane dashboard',
    mobile: 'ZyroAgent mobile app for operational monitoring and approvals',
    coreFeatures: [
      'Ticket intake and product triage',
      'Lifecycle state machine',
      'Issue audit trails',
      'Repository and environment routing',
      'Admin console and API control',
    ],
    aiFeatures: [
      'Autonomous bug triage',
      'AI-driven remediation orchestration',
      'Runner-based production verification',
    ],
    notes: ['Execution plane + control plane', 'GitHub-based workflow', 'Production guardrails'],
  },
}
