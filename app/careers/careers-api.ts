const HRMS_BASE_URL = "https://hrms.zyrops.com";
const HRMS_TENANT_ID = "9";
const HRMS_API_KEY = process.env.HRMS_CAREERS_API_KEY;

export type CareerJob = {
  id: string;
  title: string;
  location?: string;
  employment_type?: string;
  department?: string;
  experience?: string;
  salary_range?: string;
  description?: string;
  responsibilities?: string[] | string;
  requirements?: string[] | string;
  apply_url?: string;
  status?: string;
  posted_on?: string;
  created_at?: string;
  updated_at?: string;
};

type CareersApiResponse = {
  success?: boolean;
  message?: string;
  data?: {
    tenant?: {
      id?: number | string;
      name?: string;
    };
    jobs?: unknown[];
    job?: unknown;
  };
};

function toText(value: unknown) {
  if (typeof value === "number") return String(value);
  return typeof value === "string" ? value.trim() : "";
}

function toList(value: unknown) {
  if (Array.isArray(value)) {
    return value.map((item) => toText(item)).filter(Boolean);
  }

  const text = toText(value);
  if (!text) return [];

  return text
    .split(/\r?\n|•|-/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeJob(value: unknown): CareerJob | null {
  if (!value || typeof value !== "object") return null;

  const raw = value as Record<string, unknown>;
  const id = toText(raw.id) || toText(raw.job_id) || toText(raw.uuid);
  const title = toText(raw.title) || toText(raw.job_title) || toText(raw.name);

  if (!id || !title) return null;

  return {
    id,
    title,
    location: toText(raw.location),
    employment_type: toText(raw.employment_type) || toText(raw.type),
    department: toText(raw.department),
    experience: toText(raw.experience) || toText(raw.experience_level),
    salary_range: toText(raw.salary_range) || toText(raw.salary),
    description: toText(raw.description) || toText(raw.summary),
    responsibilities: toList(raw.responsibilities),
    requirements: toList(raw.requirements),
    apply_url: toText(raw.apply_url),
    status: toText(raw.status),
    posted_on: toText(raw.posted_on) || toText(raw.posted_at),
    created_at: toText(raw.created_at),
    updated_at: toText(raw.updated_at),
  };
}

async function requestCareersApi(path: "jobs.php" | "job.php", params?: Record<string, string>) {
  if (!HRMS_API_KEY) {
    throw new Error("HRMS_CAREERS_API_KEY is not configured");
  }

  const url = new URL(`/api/public/careers/${path}`, HRMS_BASE_URL);
  url.searchParams.set("tenant_id", HRMS_TENANT_ID);

  Object.entries(params ?? {}).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const response = await fetch(url, {
    headers: {
      "X-HRMS-API-Key": HRMS_API_KEY,
    },
    cache: "no-store",
  });

  const json = (await response.json()) as CareersApiResponse;

  if (!response.ok || !json.success) {
    throw new Error(json.message || `HRMS careers API returned ${response.status}`);
  }

  return json;
}

export async function getCareerJobs() {
  const json = await requestCareersApi("jobs.php");
  const jobs = (json.data?.jobs ?? []).map(normalizeJob).filter((job): job is CareerJob => Boolean(job));

  return {
    tenantName: json.data?.tenant?.name ? String(json.data.tenant.name) : "ZyrOps LLP",
    jobs,
  };
}

export async function getCareerJob(id: string) {
  const json = await requestCareersApi("job.php", { id });
  const job = normalizeJob(json.data?.job);

  if (!job) {
    throw new Error("Job not found");
  }

  return job;
}
