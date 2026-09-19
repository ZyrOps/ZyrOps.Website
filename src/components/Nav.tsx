import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'
const homeLinks = [
  { href: '/#platforms', label: 'Platforms' },
  { href: '/products', label: 'Products' },
  { href: '/#beliefs', label: 'Beliefs' },
  { href: '/careers', label: 'Careers' },
  { href: '/#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
          scrolled || open
            ? 'border-b border-line/80 bg-bg/85 shadow-[0_8px_30px_-18px_rgba(20,20,20,0.25)] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-page flex h-[4.25rem] items-center justify-between">
          <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
            <img
              src="/zyropsfull.png"
              alt="ZyrOps"
              width={120}
              height={28}
              className="h-7 w-auto object-contain"
              decoding="async"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {homeLinks.map((link) =>
              link.href.startsWith('/#') || link.href === '/' ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 hover:text-ink ${
                      isActive ? 'text-ink' : 'text-muted'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              to="/products"
              className="hidden rounded-full border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-ink/20 sm:inline-flex"
            >
              Products
            </Link>
            <a
              href="/#contact"
              className="hidden rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85 md:inline-flex"
            >
              Talk to sales
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface lg:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3 w-3.5" aria-hidden="true">
                <span className={`absolute inset-x-0 top-0 h-px bg-ink transition-transform duration-200 ${open ? 'translate-y-[5px] rotate-45' : ''}`} />
                <span className={`absolute inset-x-0 top-[5px] h-px bg-ink transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
                <span className={`absolute inset-x-0 top-[10px] h-px bg-ink transition-transform duration-200 ${open ? '-translate-y-[5px] -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open
        ? createPortal(
            <div id={menuId} className="fixed inset-0 z-40 bg-bg pt-[4.25rem] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
              <nav className="container-page flex flex-col py-6" aria-label="Mobile">
                {homeLinks.map((link) =>
                  link.href.startsWith('/#') ? (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="border-b border-line py-4 text-xl font-semibold"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="border-b border-line py-4 text-xl font-semibold"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
                <a
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white"
                >
                  Talk to sales
                </a>
              </nav>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}
