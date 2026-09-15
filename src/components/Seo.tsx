import { useEffect } from 'react'
import { SITE_SEO } from '../data/products'

type Props = {
  title?: string
  description?: string
  keywords?: string[]
  path?: string
  noIndex?: boolean
  type?: 'website' | 'article'
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function Seo({
  title,
  description,
  keywords,
  path = '/',
  noIndex = false,
  type = 'website',
}: Props) {
  useEffect(() => {
    const fullTitle = title || SITE_SEO.defaultTitle
    const desc = description || SITE_SEO.defaultDescription
    const keys = [...new Set([...(keywords || []), ...SITE_SEO.keywords])].join(', ')
    const url = `${SITE_SEO.siteUrl}${path === '/' ? '/' : path}`
    const image = SITE_SEO.ogImage

    document.title = fullTitle
    upsertMeta('name', 'description', desc)
    upsertMeta('name', 'keywords', keys)
    upsertMeta('name', 'author', SITE_SEO.legalName)
    upsertMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    upsertMeta('name', 'googlebot', noIndex ? 'noindex, nofollow' : 'index, follow')
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', desc)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:site_name', SITE_SEO.siteName)
    upsertMeta('property', 'og:locale', SITE_SEO.locale)
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:image:alt', `${SITE_SEO.legalName} — enterprise SaaS suite`)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', desc)
    upsertMeta('name', 'twitter:image', image)

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url

    upsertJsonLd('zyrops-org-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE_SEO.siteUrl}/#organization`,
      name: SITE_SEO.siteName,
      legalName: SITE_SEO.legalName,
      url: SITE_SEO.siteUrl,
      logo: `${SITE_SEO.siteUrl}/zyropsfull.png`,
      image: image,
      email: SITE_SEO.email,
      telephone: SITE_SEO.phone,
      description: SITE_SEO.defaultDescription,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_SEO.address.street,
        addressLocality: SITE_SEO.address.locality,
        addressRegion: SITE_SEO.address.region,
        addressCountry: SITE_SEO.address.country,
      },
      sameAs: [SITE_SEO.siteUrl],
    })

    upsertJsonLd('zyrops-website-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_SEO.siteUrl}/#website`,
      name: SITE_SEO.siteName,
      alternateName: SITE_SEO.legalName,
      url: SITE_SEO.siteUrl,
      description: SITE_SEO.defaultDescription,
      publisher: { '@id': `${SITE_SEO.siteUrl}/#organization` },
      inLanguage: 'en-IN',
    })

    upsertJsonLd('zyrops-webpage-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: fullTitle,
      description: desc,
      isPartOf: { '@id': `${SITE_SEO.siteUrl}/#website` },
      about: { '@id': `${SITE_SEO.siteUrl}/#organization` },
      inLanguage: 'en-IN',
    })
  }, [title, description, keywords, path, noIndex, type])

  return null
}
