export type CareerJob = {
  id: number
  title: string
  location: string | null
  employment_type: string | null
  created_at: string
  apply_url: string
  description?: string | null
  responsibilities?: string | null
  requirements?: string | null
  updated_at?: string
}

export type CareerTenant = {
  id: number
  name: string
}

type JobsResponse = {
  success: boolean
  message?: string
  data?: {
    tenant: CareerTenant
    jobs: CareerJob[]
  }
}

type JobResponse = {
  success: boolean
  message?: string
  data?: {
    tenant: CareerTenant
    job: CareerJob
  }
}

const BASE_URL = import.meta.env.VITE_HRMS_BASE_URL || 'https://hrms.zyrops.com'
const TENANT_ID = import.meta.env.VITE_HRMS_TENANT_ID || '9'
const API_KEY = import.meta.env.VITE_HRMS_API_KEY || ''

function headers(): HeadersInit {
  return {
    'X-HRMS-API-Key': API_KEY,
    Accept: 'application/json',
  }
}

export async function fetchJobs(): Promise<{
  tenant: CareerTenant
  jobs: CareerJob[]
}> {
  const url = `${BASE_URL}/api/public/careers/jobs.php?tenant_id=${encodeURIComponent(TENANT_ID)}`
  const res = await fetch(url, { headers: headers() })
  const json = (await res.json()) as JobsResponse

  if (!res.ok || !json.success || !json.data) {
    throw new Error(json.message || 'Failed to load jobs')
  }

  return {
    tenant: json.data.tenant,
    jobs: json.data.jobs ?? [],
  }
}

export async function fetchJob(id: string | number): Promise<{
  tenant: CareerTenant
  job: CareerJob
}> {
  const url = `${BASE_URL}/api/public/careers/job.php?tenant_id=${encodeURIComponent(TENANT_ID)}&id=${encodeURIComponent(String(id))}`
  const res = await fetch(url, { headers: headers() })
  const json = (await res.json()) as JobResponse

  if (!res.ok || !json.success || !json.data?.job) {
    throw new Error(json.message || 'Failed to load job')
  }

  return {
    tenant: json.data.tenant,
    job: json.data.job,
  }
}

export function formatEmploymentType(value: string | null | undefined): string {
  if (!value) return ''
  return value
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export function formatPostedDate(value: string | null | undefined): string {
  if (!value) return ''
  const date = new Date(value.replace(' ', 'T') + 'Z')
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)
}
