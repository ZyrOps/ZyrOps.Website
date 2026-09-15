import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ZyroMark } from './ZyroMark'
import {
  QUICK_PROMPTS,
  answerFromKnowledge,
} from '../lib/supportKnowledge'

type ChatMessage = {
  id: string
  role: 'assistant' | 'user'
  text: string
  links?: { label: string; href: string }[]
}

const STORAGE_KEY = 'zyrops-support-chat-v1'

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

const welcome: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  text: "Hi — I'm ZyroAssist, the ZyrOps AI helper. Ask about products, custom engineering, pricing, or support. I can answer instantly, and you can talk to a human anytime.",
  links: [
    { label: 'Products', href: '/products' },
    { label: 'Contact', href: '/#contact' },
  ],
}

export function SupportChat() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([welcome])
  const listRef = useRef<HTMLDivElement>(null)
  const inputId = useId()
  const reduce = useReducedMotion()

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as ChatMessage[]
      if (Array.isArray(parsed) && parsed.length) setMessages(parsed)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  }, [messages])

  useEffect(() => {
    if (!open) return
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing, open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function pushAssistant(text: string, links?: ChatMessage['links']) {
    setMessages((prev) => [
      ...prev,
      { id: uid(), role: 'assistant', text, links },
    ])
  }

  async function respond(question: string) {
    setTyping(true)
    await new Promise((r) => setTimeout(r, reduce ? 0 : 450 + Math.min(question.length * 8, 500)))
    const result = answerFromKnowledge(question)
    setTyping(false)
    pushAssistant(result.reply, result.links)
  }

  async function send(text: string) {
    const question = text.trim()
    if (!question || typing) return
    setInput('')
    setMessages((prev) => [...prev, { id: uid(), role: 'user', text: question }])
    await respond(question)
  }

  return (
    <>
      <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        <AnimatePresence>
          {open ? (
            <motion.div
              role="dialog"
              aria-modal="false"
              aria-label="ZyroAssist AI support chat"
              initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-[min(34rem,calc(100svh-6.5rem))] w-[min(24rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-[24px] border border-line bg-surface shadow-[0_24px_80px_-24px_rgba(20,20,20,0.45)]"
            >
              <div className="flex items-center justify-between border-b border-line bg-ink px-4 py-3 text-white">
                <div className="flex items-center gap-3">
                  <ZyroMark className="h-8 w-8" />
                  <div>
                    <p className="text-sm font-semibold">ZyroAssist</p>
                    <p className="text-[11px] text-white/60">AI support · products & services</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close support chat"
                >
                  ×
                </button>
              </div>

              <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto overscroll-contain bg-bg p-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-ink text-white'
                          : 'border border-line bg-surface text-ink'
                      }`}
                    >
                      <p className="whitespace-pre-wrap text-pretty">{msg.text}</p>
                      {msg.links?.length ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {msg.links.map((link) =>
                            link.href.startsWith('/#') || link.href.startsWith('http') ? (
                              <a
                                key={link.href}
                                href={link.href}
                                className="rounded-full border border-line bg-bg px-2.5 py-1 text-xs font-semibold text-accent"
                              >
                                {link.label}
                              </a>
                            ) : (
                              <Link
                                key={link.href}
                                to={link.href}
                                className="rounded-full border border-line bg-bg px-2.5 py-1 text-xs font-semibold text-accent"
                                onClick={() => setOpen(false)}
                              >
                                {link.label}
                              </Link>
                            ),
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}

                {typing ? (
                  <div className="flex justify-start" aria-live="polite">
                    <div className="rounded-2xl border border-line bg-surface px-3.5 py-2.5 text-sm text-muted">
                      ZyroAssist is thinking…
                    </div>
                  </div>
                ) : null}
              </div>

              {!messages.some((m) => m.role === 'user') ? (
                <div className="flex flex-wrap gap-2 border-t border-line bg-surface px-3 py-3">
                  {QUICK_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => send(prompt)}
                      className="rounded-full border border-line bg-bg px-3 py-1.5 text-left text-xs font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              ) : null}

              <form
                className="border-t border-line bg-surface p-3"
                onSubmit={(e) => {
                  e.preventDefault()
                  void send(input)
                }}
              >
                <label htmlFor={inputId} className="sr-only">
                  Ask ZyroAssist
                </label>
                <div className="flex items-end gap-2">
                  <textarea
                    id={inputId}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    rows={2}
                    placeholder="Ask about ZyroHR, POS, pricing…"
                    className="max-h-28 min-h-[2.75rem] flex-1 resize-none rounded-2xl border border-line bg-bg px-3 py-2.5 text-sm outline-none transition-[border-color,box-shadow] duration-200 focus:border-accent focus:shadow-[0_0_0_3px_rgba(163,87,253,0.18)]"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        void send(input)
                      }
                    }}
                  />
                  <button
                    type="submit"
                    disabled={typing || !input.trim()}
                    className="inline-flex h-11 shrink-0 items-center rounded-full bg-ink px-4 text-sm font-semibold text-white transition-opacity hover:opacity-85 disabled:opacity-50"
                  >
                    Send
                  </button>
                </div>
                <div className="mt-2 flex items-center justify-between gap-2 text-[11px] text-muted">
                  <span>AI answers from ZyrOps product knowledge</span>
                  <a
                    href="/#contact"
                    className="font-semibold text-accent hover:underline"
                    onClick={() => setOpen(false)}
                  >
                    Talk to a human
                  </a>
                </div>
              </form>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-14 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white shadow-[0_16px_40px_-16px_rgba(20,20,20,0.55)] transition-transform duration-200 hover:scale-[1.02]"
          aria-expanded={open}
          aria-controls={undefined}
          aria-label={open ? 'Close ZyroAssist' : 'Open ZyroAssist AI support'}
        >
          <ZyroMark className="h-6 w-6" />
          <span className="pr-0.5">{open ? 'Close' : 'Ask ZyroAssist'}</span>
        </button>
      </div>
    </>
  )
}
