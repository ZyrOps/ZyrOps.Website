import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  ExternalLink,
  MessageSquareText,
  PenLine,
  TerminalSquare,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogComments from "./comments";
import { blogPosts, getBlogPost, getRelatedPosts } from "../blog-data";
import { absoluteUrl, brand, jsonLdScript } from "../../lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

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
    },
    authors: [{ name: post.author, url: absoluteUrl("/blogs") }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: absoluteUrl(`/blogs/${post.slug}`),
      type: "article",
      publishedTime: post.postedOn,
      modifiedTime: post.updatedOn,
      authors: [post.author],
      tags: post.hashtags,
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
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(`/blogs/${post.slug}`)}#blogposting`,
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.poster),
    datePublished: post.postedOn,
    dateModified: post.updatedOn,
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
    keywords: post.hashtags.join(", "),
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
              <time dateTime={post.postedOn}>
                <CalendarDays />
                {post.postedOn}
              </time>
              <span>
                <Clock3 />
                {post.readTime}
              </span>
            </div>
            <div className="blog-card__tags">
              {post.hashtags.map((tag) => (
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
          </aside>

          <div className="blog-article-content">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.image ? (
                  <figure>
                    <Image src={section.image} alt={section.imageAlt ?? section.heading} width={1200} height={720} />
                    <figcaption>{section.imageAlt ?? section.heading}</figcaption>
                  </figure>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </article>

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

      <div id="comments">
        <BlogComments initialComments={post.comments} />
      </div>
    </main>
  );
}

