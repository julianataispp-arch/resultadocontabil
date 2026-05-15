import type { Metadata } from 'next'

const BASE_URL = 'https://resultadocontabil.com'
const SITE_NAME = 'Resultado Contábil'
const DEFAULT_OG_IMAGE = '/og-image.png'

interface PageMetaOptions {
  title: string
  description: string
  path: string
  ogTitle?: string
  ogDescription?: string
  ogType?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  noindex?: boolean
}

export function generatePageMetadata(options: PageMetaOptions): Metadata {
  const {
    title,
    description,
    path,
    ogTitle,
    ogDescription,
    ogType = 'website',
    publishedTime,
    modifiedTime,
    noindex = false,
  } = options

  const canonicalUrl = `${BASE_URL}${path}`

  return {
    title,
    description,
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: ogTitle || title,
      description: ogDescription || description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: 'pt_BR',
      type: ogType,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle || title,
      description: ogDescription || description,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

// Builders de Schema.org
export function buildServiceSchema(opts: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      '@type': 'AccountingService',
      name: SITE_NAME,
      url: BASE_URL,
      telephone: '+55-51-9327-4218',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bento Gonçalves',
        addressRegion: 'RS',
        addressCountry: 'BR',
      },
    },
    areaServed: { '@type': 'Country', name: 'Brasil' },
  }
}

export function buildFaqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export function buildBreadcrumbSchema(items: { label: string; href?: string }[]) {
  const allItems = [{ label: 'Início', href: '/' }, ...items]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  }
}

export function buildArticleSchema(opts: {
  headline: string
  description: string
  publishedAt: string
  updatedAt: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    author: { '@type': 'Organization', name: SITE_NAME, url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.svg` },
    },
    datePublished: opts.publishedAt,
    dateModified: opts.updatedAt,
    url: `${BASE_URL}${opts.path}`,
    inLanguage: 'pt-BR',
  }
}
