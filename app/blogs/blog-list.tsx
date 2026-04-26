"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogPost } from "./blog-data";

export default function BlogList({
  posts,
  categories,
  tags,
}: {
  posts: BlogPost[];
  categories: string[];
  tags: string[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [activeTag, setActiveTag] = useState("All");

  const filteredPosts = useMemo(() => {
    const search = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesSearch =
        !search ||
        [post.title, post.excerpt, post.category, post.author, ...post.hashtags]
          .join(" ")
          .toLowerCase()
          .includes(search);
      const matchesCategory = category === "All" || post.category === category;
      const matchesTag = activeTag === "All" || post.hashtags.includes(activeTag);

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [activeTag, category, posts, query]);

  function resetFilters() {
    setQuery("");
    setCategory("All");
    setActiveTag("All");
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
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              className={category === item ? "is-active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="blog-tag-filter" aria-label="Hashtag filters">
          <button
            type="button"
            className={activeTag === "All" ? "is-active" : ""}
            onClick={() => setActiveTag("All")}
          >
            #All
          </button>
          {tags.map((tag) => (
            <button
              type="button"
              key={tag}
              className={activeTag === tag ? "is-active" : ""}
              onClick={() => setActiveTag(tag)}
            >
              #{tag}
            </button>
          ))}
        </div>
      </section>

      <section className="blog-results">
        <div className="blog-results__meta">
          <p>
            Showing <strong>{filteredPosts.length}</strong> of <strong>{posts.length}</strong> posts
          </p>
          {(query || category !== "All" || activeTag !== "All") && (
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
                className={`blog-card${post.featured ? " is-featured" : ""}`}
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
                    {post.hashtags.slice(0, 4).map((tag) => (
                      <span key={tag}>#{tag}</span>
                    ))}
                  </div>
                  <div className="blog-card__footer">
                    <span>Posted by {post.author}</span>
                    <time dateTime={post.postedOn}>{post.postedOn}</time>
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

