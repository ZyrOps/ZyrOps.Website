import { Link } from 'react-router-dom'
import { ZyroMark } from './ZyroMark'

const links = [
  { href: '/#platforms', label: 'Platforms' },
  { to: '/products', label: 'Products' },
  { href: '/#beliefs', label: 'Beliefs' },
  { to: '/careers', label: 'Careers' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg py-12">
      <div className="container-page flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link to="/" className="inline-flex items-center gap-2.5">
            <ZyroMark className="h-7 w-7" />
            <img
              src="/zyropsfull.png"
              alt="ZyrOps"
              width={110}
              height={26}
              className="h-6 w-auto object-contain"
              decoding="async"
            />
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Engineering Intelligence. Empowering Growth.
          </p>
          <p className="mt-2 text-xs text-muted/80">
            Intelligence That Moves Business Forward.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {links.map((link) =>
            'to' in link && link.to ? (
              <Link key={link.to} to={link.to} className="transition-colors hover:text-ink">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            ),
          )}
        </nav>
      </div>
      <div className="container-page mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} ZyrOps LLP</p>
        <p>Engineer Better. Operate Smarter. Grow Further.</p>
      </div>
    </footer>
  )
}
