import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  ExternalLink,
  MessageSquareText,
  Network,
  PenLine,
  TerminalSquare,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogComments from "./comments";
import { getBlogPost, getBlogPosts } from "../blog-api";
import { absoluteUrl, brand, jsonLdScript } from "../../lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  let post: Awaited<ReturnType<typeof getBlogPost>> = null;

  try {
    post = await getBlogPost(slug);
  } catch {
    post = null;
  }

  if (!post) {
    return {
      title: "Blog | ZyrOps",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: absoluteUrl(`/blogs/${post.slug}`),
      types: {
        "application/rss+xml": absoluteUrl("/rss.xml"),
      },
    },
    authors: [{ name: post.author, url: absoluteUrl("/blogs") }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: absoluteUrl(`/blogs/${post.slug}`),
      type: "article",
      publishedTime: post.publishedAt || undefined,
      modifiedTime: post.updatedAt || undefined,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: post.poster, width: 1200, height: 720, alt: post.posterAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.poster],
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post: Awaited<ReturnType<typeof getBlogPost>> = null;

  try {
    post = await getBlogPost(slug);
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  let relatedPosts: Awaited<ReturnType<typeof getBlogPosts>> = [];

  try {
    relatedPosts = (await getBlogPosts({ category: post.categorySlug, limit: 4 })).filter((item) => item.slug !== slug);
  } catch {
    relatedPosts = [];
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(`/blogs/${post.slug}`)}#blogposting`,
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.poster),
    datePublished: post.publishedAt || undefined,
    dateModified: post.updatedAt || post.publishedAt || undefined,
    author: {
      "@type": "Organization",
      name: post.author,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: brand.legalName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/blogs/${post.slug}`),
    keywords: post.tags.join(", "),
  };

  return (
    <main className="site-shell blog-detail-shell" data-theme="dark">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(articleSchema) }} />
      <nav className="nav contact-nav">
        <Link href="/" className="brand" aria-label="ZyrOps home">
          <span>
            <Image src="/logo.png" alt="" width={34} height={34} priority />
          </span>
          <strong>ZyrOps</strong>
        </Link>
        <div className="nav-links">
          <Link href="/#services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="nav-actions">
          <Link href="/blogs" className="launch-link">
            <ArrowLeft />
            Blogs
          </Link>
        </div>
      </nav>

      <article className="blog-article">
        <header className="blog-article-hero">
          <div className="blog-article-hero__copy">
            <p className="hero-kicker">{post.category}</p>
            <h1>{post.title}</h1>
            <span>{post.excerpt}</span>
            <div className="blog-article-meta">
              <span>
                <PenLine />
                {post.author}
              </span>
              {post.publishedAt ? (
                <time dateTime={post.publishedAt}>
                  <CalendarDays />
                  {post.publishedAt}
                </time>
              ) : null}
              <span>
                <Clock3 />
                {post.readTime}
              </span>
            </div>
            <div className="blog-card__tags">
              {post.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          </div>
          <div className="blog-article-hero__image">
            <Image src={post.poster} alt={post.posterAlt} fill priority sizes="(max-width: 920px) 100vw, 48vw" />
          </div>
        </header>

        <div className="blog-article-layout">
          <aside className="blog-article-sidebar">
            <p>Article tools</p>
            <a href="#comments">
              <MessageSquareText />
              Comments
            </a>
            <Link href="/contact">
              <TerminalSquare />
              Discuss this
            </Link>
            <a href={brand.linkedin} target="_blank" rel="noreferrer">
              <ExternalLink />
              LinkedIn
            </a>
            <Link href="/site-map">
              <Network />
              Site map
            </Link>
          </aside>

          <div className="blog-article-content">
            {post.contentHtml ? (
              <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            ) : (
              <section>
                <p>{post.excerpt}</p>
              </section>
            )}
          </div>
        </div>
      </article>

      {relatedPosts.length ? (
        <section className="related-blog-section">
          <div className="section-heading">
            <p>Related reading</p>
            <h2>More ZyrOps notes for builders and operators.</h2>
          </div>
          <div className="related-blog-grid">
            {relatedPosts.map((related) => (
              <Link href={`/blogs/${related.slug}`} className="related-blog-card" key={related.slug}>
                <Image src={related.poster} alt={related.posterAlt} width={420} height={252} />
                <span>{related.category}</span>
                <h3>{related.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <div id="comments">
        <BlogComments initialComments={[]} />
      </div>
    </main>
  );
}
