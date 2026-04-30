"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogOption, BlogPostSummary } from "./blog-api";

export default function BlogList({
  posts,
  categories,
  tags,
}: {
  posts: BlogPostSummary[];
  categories: BlogOption[];
  tags: BlogOption[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [activeTag, setActiveTag] = useState("all");

  const filteredPosts = useMemo(() => {
    const search = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesSearch =
        !search ||
        [post.title, post.excerpt, post.category, post.author, ...post.tags]
          .join(" ")
          .toLowerCase()
          .includes(search);
      const matchesCategory = category === "all" || post.categorySlug === category;
      const matchesTag = activeTag === "all" || post.tagSlugs.includes(activeTag);

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [activeTag, category, posts, query]);

  function resetFilters() {
    setQuery("");
    setCategory("all");
    setActiveTag("all");
  }

  return (
    <>
      <section className="blog-controls" aria-label="Blog search and filters">
        <label className="blog-search">
          <Search />
          <span>Search blogs</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search AI, SaaS, Rust, CRM, POS..."
          />
        </label>
        <div className="blog-filter-row" aria-label="Category filters">
          <SlidersHorizontal />
          <button type="button" className={category === "all" ? "is-active" : ""} onClick={() => setCategory("all")}>
            All
          </button>
          {categories.map((item) => (
            <button
              type="button"
              key={item.slug}
              className={category === item.slug ? "is-active" : ""}
              onClick={() => setCategory(item.slug)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="blog-tag-filter" aria-label="Hashtag filters">
          <button
            type="button"
            className={activeTag === "all" ? "is-active" : ""}
            onClick={() => setActiveTag("all")}
          >
            #All
          </button>
          {tags.map((tag) => (
            <button
              type="button"
              key={tag.slug}
              className={activeTag === tag.slug ? "is-active" : ""}
              onClick={() => setActiveTag(tag.slug)}
            >
              #{tag.name}
            </button>
          ))}
        </div>
      </section>

      <section className="blog-results">
        <div className="blog-results__meta">
          <p>
            Showing <strong>{filteredPosts.length}</strong> of <strong>{posts.length}</strong> posts
          </p>
          {(query || category !== "all" || activeTag !== "all") && (
            <button type="button" onClick={resetFilters}>
              <X />
              Clear filters
            </button>
          )}
        </div>

        {filteredPosts.length ? (
          <div className="blog-card-grid">
            {filteredPosts.map((post, index) => (
              <Link
                href={`/blogs/${post.slug}`}
                className={`blog-card${index === 0 ? " is-featured" : ""}`}
                key={post.slug}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="blog-card__image">
                  <Image src={post.poster} alt={post.posterAlt} fill sizes="(max-width: 920px) 100vw, 50vw" />
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <div className="blog-card__tags">
                    {post.tags.slice(0, 4).map((tag) => (
                      <span key={tag}>#{tag}</span>
                    ))}
                  </div>
                  <div className="blog-card__footer">
                    <span>Posted by {post.author}</span>
                    {post.publishedAt ? <time dateTime={post.publishedAt}>{post.publishedAt}</time> : null}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="blog-empty">
            <h2>No posts matched that filter.</h2>
            <p>Try a broader query like AI, SaaS, mobile, backend, CRM, POS, or operations.</p>
            <button type="button" onClick={resetFilters}>
              Reset blog filters
            </button>
          </div>
        )}
      </section>
    </>
  );
}
