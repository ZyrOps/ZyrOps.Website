import { Link } from 'react-router-dom'

const productLinks = [
  { href: '/#platforms', label: 'Platforms' },
  { to: '/products', label: 'Products' },
  { href: '/#beliefs', label: 'Beliefs' },
  { to: '/careers', label: 'Careers' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contact', label: 'Contact' },
]

const legalLinks = [
  { to: '/privacy', label: 'Privacy Notice' },
  { to: '/cookies', label: 'Cookies' },
  { to: '/data-rights', label: 'Data Rights' },
  { to: '/terms', label: 'Terms' },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg py-12">
      <div className="container-page flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Link to="/" className="inline-flex items-center">
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
          <p className="mt-4 max-w-sm text-xs leading-relaxed text-muted">
            Personal data is processed under India&apos;s Digital Personal Data Protection Act,
            2023.{' '}
            <Link to="/privacy" className="font-semibold text-ink underline-offset-2 hover:underline">
              Read our Privacy Notice
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {productLinks.map((link) =>
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
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {legalLinks.map((link) => (
              <Link key={link.to} to={link.to} className="transition-colors hover:text-ink">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="container-page mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} ZyrOps Technologies LLP</p>
        <p>
          <Link to="/data-rights" className="transition-colors hover:text-ink">
            Privacy contact: hello@zyrops.com
          </Link>
        </p>
      </div>
    </footer>
  )
}
