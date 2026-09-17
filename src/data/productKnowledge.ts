export type ProductKnowledgeEntry = {
  repo: string
  web: string
  mobile: string | null
  coreFeatures: string[]
  aiFeatures: string[]
  notes: string[]
}

export const PRODUCT_KNOWLEDGE: Record<string, ProductKnowledgeEntry> = {
  zyrohr: {
    repo: 'ZyrOps.HRMS',
    web: 'ZyroHR web platform',
    mobile: 'Available via mobile-friendly HR workflows; dedicated app not yet published',
    coreFeatures: [
      'Employee management',
      'Attendance tracking',
      'Leave and approval workflows',
      'Payroll coordination',
      'Task and recruitment workflows',
    ],
    aiFeatures: ['Virtual HR assistant', 'AI-assisted support for repetitive queries', 'Workflow automation'],
    notes: ['Multi-tenant architecture', 'Role-based access control', 'Operational reporting'],
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
    mobile: 'Crew and field operations mobile workflows via web-first field tooling',
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
    mobile: 'Not currently published as a dedicated mobile app',
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
    repo: 'ZyrOps.POS.ZyroWear.Mobile',
    web: 'ZyroWear web-backed POS workflows',
    mobile: 'ZyroWear Android app (Flutter)',
    coreFeatures: [
      'POS counter operations',
      'Dashboard and sales visibility',
      'Inventory management',
      'GST and Tally integration',
      'Retail sales processing',
    ],
    aiFeatures: ['Operational dashboards', 'Inventory and sales intelligence'],
    notes: ['Native Android app', 'Multi-tenant retail workflows', 'Sales and inventory tracking'],
  },
  zyromart: {
    repo: 'ZyrOps.POS.ZyroWear.Mobile',
    web: 'Supermarket retail POS workflows',
    mobile: 'Android retail app',
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
    mobile: 'Browser-first signing; mobile-friendly workflows',
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
    mobile: 'Webmail-first access; mobile browser friendly',
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
    mobile: 'Not a consumer mobile app; automation runner for product operations',
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
