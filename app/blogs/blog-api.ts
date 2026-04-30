const BLOGS_BASE_URL = "https://blogs.zyrops.com";
const BLOGS_REVALIDATE_SECONDS = 120;
const FALLBACK_POSTER = "/blog/ai-saas-ops.svg";

type ApiAuthor = {
  name?: string;
};

type ApiCategory = {
  name?: string;
  slug?: string;
};

type ApiTag = {
  name?: string;
  slug?: string;
};

type ApiMedia = {
  thumbnail_url?: string | null;
  banner_url?: string | null;
  video_url?: string | null;
};

type ApiPost = {
  id?: number;
  title?: string;
  slug?: string;
  excerpt?: string;
  author?: ApiAuthor;
  category?: ApiCategory | null;
  tags?: ApiTag[];
  media?: ApiMedia;
  reading_time_minutes?: number;
  published_at?: string | null;
  updated_at?: string | null;
  url?: string;
  api_url?: string;
  content_html?: string;
  seo?: {
    meta_title?: string;
    meta_description?: string;
    canonical_url?: string;
  };
};

type ApiListResponse<T> = {
  ok?: boolean;
  data?: T;
  message?: string;
  error?: string | {
    message?: string;
    status?: number;
  };
};

export type BlogPostSummary = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  category: string;
  categorySlug: string;
  tags: string[];
  tagSlugs: string[];
  poster: string;
  posterAlt: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  url?: string;
};

export type BlogPostDetail = BlogPostSummary & {
  contentHtml: string;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
};

export type BlogOption = {
  name: string;
  slug: string;
};

function toText(value: unknown) {
  if (typeof value === "number") return String(value);
  return typeof value === "string" ? value.trim() : "";
}

function normalizeUrl(value: unknown) {
  const raw = toText(value);
  if (!raw) return "";

  if (raw.startsWith("http://blogs.zyrops.com/")) {
    return raw.replace("http://blogs.zyrops.com/", "https://blogs.zyrops.com/");
  }

  return raw;
}

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function sanitizeContentHtml(value: string) {
  return value
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/\son[a-z]+\s*=\s*(['"]).*?\1/gi, "")
    .replace(/\s(href|src)\s*=\s*(['"])\s*javascript:.*?\2/gi, "");
}

function apiErrorMessage(json: ApiListResponse<unknown>, fallback: string) {
  if (json.message) return json.message;
  if (typeof json.error === "string") return json.error;
  if (json.error?.message) return json.error.message;
  return fallback;
}

function normalizeOption(value: unknown): BlogOption | null {
  if (!value || typeof value !== "object") return null;

  const raw = value as Record<string, unknown>;
  const name = toText(raw.name) || toText(raw.title) || toText(raw.slug);
  const slug = toText(raw.slug) || name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  if (!name || !slug) return null;

  return { name, slug };
}

function normalizePost(value: unknown): BlogPostSummary | null {
  if (!value || typeof value !== "object") return null;

  const raw = value as ApiPost;
  const id = Number(raw.id || 0);
  const title = toText(raw.title);
  const slug = toText(raw.slug);

  if (!id || !title || !slug) return null;

  const category = normalizeOption(raw.category) || { name: "Blog", slug: "blog" };
  const tags = (raw.tags || []).map(normalizeOption).filter((tag): tag is BlogOption => Boolean(tag));
  const poster = normalizeUrl(raw.media?.banner_url) || normalizeUrl(raw.media?.thumbnail_url) || FALLBACK_POSTER;
  const publishedAt = toText(raw.published_at) || toText(raw.updated_at) || "";

  return {
    id,
    title,
    slug,
    excerpt: toText(raw.excerpt) || stripHtml(toText(raw.content_html)).slice(0, 180),
    author: toText(raw.author?.name) || "ZyrOps",
    category: category.name,
    categorySlug: category.slug,
    tags: tags.map((tag) => tag.name),
    tagSlugs: tags.map((tag) => tag.slug),
    poster,
    posterAlt: `${title} cover image`,
    readTime: raw.reading_time_minutes ? `${raw.reading_time_minutes} min read` : "ZyrOps blog",
    publishedAt,
    updatedAt: toText(raw.updated_at) || publishedAt,
    url: normalizeUrl(raw.url),
  };
}

function normalizePostDetail(value: unknown): BlogPostDetail | null {
  const summary = normalizePost(value);
  if (!summary || !value || typeof value !== "object") return null;

  const raw = value as ApiPost;

  return {
    ...summary,
    contentHtml: sanitizeContentHtml(toText(raw.content_html)),
    seoTitle: toText(raw.seo?.meta_title),
    seoDescription: toText(raw.seo?.meta_description),
    canonicalUrl: normalizeUrl(raw.seo?.canonical_url),
  };
}

async function requestBlogApi<T>(path: string, params?: Record<string, string | number | undefined>) {
  const url = new URL(`/public/api/${path}`, BLOGS_BASE_URL);

  Object.entries(params || {}).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      url.searchParams.set(key, String(value));
    }
  });

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
    next: {
      revalidate: BLOGS_REVALIDATE_SECONDS,
    },
  });

  const body = await response.text();
  const contentType = response.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json") || body.trim().startsWith("{");

  if (!isJson) {
    throw new Error(`ZyroBlogs API returned ${response.status || "an unexpected response"}.`);
  }

  const json = JSON.parse(body) as ApiListResponse<T>;

  if (!response.ok || !json.ok) {
    throw new Error(apiErrorMessage(json, `ZyroBlogs API returned ${response.status}`));
  }

  return json.data as T;
}

export async function getBlogPosts(params?: {
  page?: number;
  limit?: number;
  q?: string;
  category?: string;
  tag?: string;
}) {
  const data = await requestBlogApi<unknown[]>("posts.php", {
    page: params?.page || 1,
    limit: params?.limit || 50,
    q: params?.q,
    category: params?.category,
    tag: params?.tag,
  });

  return (data || []).map(normalizePost).filter((post): post is BlogPostSummary => Boolean(post));
}

export async function searchBlogPosts(params?: { q?: string; page?: number; limit?: number }) {
  const data = await requestBlogApi<unknown[]>("search.php", {
    page: params?.page || 1,
    limit: params?.limit || 50,
    q: params?.q,
  });

  return (data || []).map(normalizePost).filter((post): post is BlogPostSummary => Boolean(post));
}

export async function getBlogPost(slug: string) {
  const data = await requestBlogApi<unknown>("post.php", { slug });
  return normalizePostDetail(data);
}

export async function getBlogCategories() {
  const data = await requestBlogApi<unknown[]>("categories.php");
  return (data || []).map(normalizeOption).filter((item): item is BlogOption => Boolean(item));
}

export async function getBlogTags(limit = 100) {
  const data = await requestBlogApi<unknown[]>("tags.php", { limit });
  return (data || []).map(normalizeOption).filter((item): item is BlogOption => Boolean(item));
}
