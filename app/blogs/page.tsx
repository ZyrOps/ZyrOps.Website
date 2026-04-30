import { ArrowLeft, Network, Rss, TerminalSquare } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import BlogList from "./blog-list";
import { blogCategories, blogPosts, blogTags } from "./blog-data";
import { absoluteUrl } from "../lib/seo";

export const metadata: Metadata = {
  title: "Blog | ZyrOps Engineering Notes",
  description:
    "Read ZyrOps blogs on AI SaaS, HRMS, CRM, POS, backend engineering, mobile apps, support systems, and enterprise operations.",
  alternates: {
    canonical: absoluteUrl("/blogs"),
    types: {
      "application/rss+xml": absoluteUrl("/rss.xml"),
    },
  },
  openGraph: {
    title: "Blog | ZyrOps Engineering Notes",
    description:
      "Practical articles from ZyrOps on AI-powered SaaS products, software engineering, and operational systems.",
    url: absoluteUrl("/blogs"),
    type: "website",
    images: [{ url: "/blog/ai-saas-ops.svg", width: 1200, height: 720, alt: "ZyrOps blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | ZyrOps Engineering Notes",
    description: "AI SaaS, backend, mobile, product, and operations engineering notes from ZyrOps.",
    images: ["/blog/ai-saas-ops.svg"],
  },
};

export default function BlogsPage() {
  return (
    <main className="site-shell blog-shell" data-theme="dark">
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
          <Link href="/" className="launch-link">
            <ArrowLeft />
            Home
          </Link>
        </div>
      </nav>

      <section id="blog-list" className="blog-list-section blog-list-section--first">
        <BlogList posts={blogPosts} categories={blogCategories} tags={blogTags} />
      </section>

      <footer className="footer contact-footer">
        <div className="footer-grain" aria-hidden />
        <p>Ready to Read?</p>
        <h2>Use the public map or RSS feed to follow every ZyrOps article.</h2>
        <div className="footer-actions">
          <Link href="/site-map">
            <Network />
            Site map
          </Link>
          <a href="/rss.xml">
            <Rss />
            RSS feed
          </a>
          <Link href="/contact">
            <TerminalSquare />
            Contact
          </Link>
        </div>
        <span className="footer-location">Kozhikode and Wayanad, Kerala</span>
      </footer>
    </main>
  );
}
