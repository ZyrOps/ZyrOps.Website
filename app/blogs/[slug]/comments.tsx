"use client";

import { MessageSquareText, Send } from "lucide-react";
import { useState } from "react";

type Comment = {
  name: string;
  postedOn: string;
  message: string;
};

export default function BlogComments({ initialComments }: { initialComments: Comment[] }) {
  const [comments, setComments] = useState(initialComments);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function submitComment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedMessage) return;

    setComments((current) => [
      {
        name: trimmedName,
        message: trimmedMessage,
        postedOn: "Just now",
      },
      ...current,
    ]);
    setName("");
    setMessage("");
  }

  return (
    <section className="blog-comments" aria-label="Blog comments">
      <div className="blog-comments__header">
        <MessageSquareText />
        <div>
          <p>Discussion</p>
          <h2>Comments</h2>
        </div>
      </div>

      <div className="blog-comment-panel">
        <form className="blog-comment-form" onSubmit={submitComment}>
          <label className="blog-comment-field blog-comment-field--name">
            <span>Name</span>
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" required />
          </label>
          <label className="blog-comment-field blog-comment-field--message">
            <span>Comment</span>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Add a useful question, note, or implementation detail."
              rows={4}
              required
            />
          </label>
          <button type="submit">
            <Send />
            Post Comment
          </button>
        </form>
      </div>

      <div className="blog-comment-list">
        {comments.map((comment, index) => (
          <article key={`${comment.name}-${comment.postedOn}-${index}`}>
            <div>
              <strong>{comment.name}</strong>
              <span>{comment.postedOn}</span>
            </div>
            <p>{comment.message}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
