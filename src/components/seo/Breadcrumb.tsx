import Link from 'next/link'
import { JsonLd } from './JsonLd'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: 'Início', href: '/' }, ...items]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://resultadocontabil.com${item.href}` } : {}),
    })),
  }

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ol className="breadcrumb-list">
          {allItems.map((item, i) => (
            <li key={i} className="breadcrumb-item">
              {i < allItems.length - 1 ? (
                <>
                  {item.href ? (
                    <Link href={item.href} className="breadcrumb-link">
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  <span className="breadcrumb-sep" aria-hidden="true"> / </span>
                </>
              ) : (
                <span aria-current="page" className="breadcrumb-current">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
