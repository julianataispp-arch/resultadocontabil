import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import { JsonLd } from '@/components/seo/JsonLd'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1B2A5E',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://resultadocontabil.com'),
  title: {
    default: 'Resultado Contábil — Contabilidade Digital para Prestadores de Serviços',
    template: '%s | Resultado Contábil',
  },
  description:
    'Contabilidade digital para prestadores de serviços e profissionais liberais no Simples Nacional. Especialistas em PGFN, Reforma Tributária e cálculos trabalhistas. Bento Gonçalves e Porto Alegre — RS.',
  keywords: [
    'contabilidade digital',
    'prestadores de serviços',
    'simples nacional',
    'PGFN 2025',
    'reforma tributária',
    'contabilidade bento gonçalves',
    'contador porto alegre',
    'cálculos trabalhistas',
    'IBS CBS',
    'recuperação tributária',
  ],
  authors: [{ name: 'Resultado Contábil' }],
  creator: 'Resultado Contábil',
  publisher: 'Resultado Contábil',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://resultadocontabil.com',
    siteName: 'Resultado Contábil',
    title: 'Resultado Contábil — Contabilidade Digital para Prestadores de Serviços',
    description:
      'Especialistas em prestadores de serviços e profissionais liberais. Gestão fiscal, PGFN e Reforma Tributária.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resultado Contábil' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resultado Contábil — Contabilidade Digital',
    description: 'Contabilidade digital para prestadores de serviços. PGFN, Reforma Tributária e mais.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'googleb9643da58a936512',
  },
  alternates: {
    canonical: 'https://resultadocontabil.com',
  },
}

// Schema.org — LocalBusiness + Organization + WebSite
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'Resultado Contábil',
  description:
    'Contabilidade digital especializada para prestadores de serviços e profissionais liberais no Simples Nacional.',
  url: 'https://resultadocontabil.com',
  telephone: '+55-51-9327-4218',
  email: 'atendimento@resultadocontabil.com',
  priceRange: 'R$ 79 - R$ 350/mês',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bento Gonçalves',
    addressRegion: 'RS',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -29.1706,
    longitude: -51.5086,
  },
  areaServed: [
    { '@type': 'City', name: 'Bento Gonçalves' },
    { '@type': 'City', name: 'Porto Alegre' },
    { '@type': 'State', name: 'Rio Grande do Sul' },
    { '@type': 'Country', name: 'Brasil' },
  ],
  serviceType: [
    'Contabilidade Digital',
    'Consultoria Tributária',
    'Recuperação Tributária',
    'Planejamento Tributário',
    'Transação PGFN',
    'Cálculos Trabalhistas',
    'Departamento Pessoal',
    'eSocial Doméstico',
  ],
  sameAs: ['https://wa.me/555193274218'],
  openingHours: 'Mo-Fr 08:00-18:00',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-51-9327-4218',
    email: 'atendimento@resultadocontabil.com',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Resultado Contábil',
  url: 'https://resultadocontabil.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://resultadocontabil.com/blog?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className="font-jakarta antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
