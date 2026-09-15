import { useEffect } from 'react'
import { SITE_SEO } from '../data/products'

type Props = {
  title?: string
  description?: string
  keywords?: string[]
  path?: string
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

export function Seo({ title, description, keywords, path = '/' }: Props) {
  useEffect(() => {
    const fullTitle = title || SITE_SEO.defaultTitle
    const desc = description || SITE_SEO.defaultDescription
    const keys = [...(keywords || []), ...SITE_SEO.keywords].join(', ')
    const url = `${SITE_SEO.siteUrl}${path}`

    document.title = fullTitle
    upsertMeta('name', 'description', desc)
    upsertMeta('name', 'keywords', keys)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', desc)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', SITE_SEO.siteName)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', desc)

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [title, description, keywords, path])

  return null
}
