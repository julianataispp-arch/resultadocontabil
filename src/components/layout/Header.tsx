'use client'
import Link from 'next/link'
import { useState } from 'react'

const navigation = [
  { label: 'Serviços', href: '/servicos' },
  {
    label: 'Tributário',
    href: '/consultoria-tributaria',
    children: [
      { label: 'Consultoria Tributária', href: '/consultoria-tributaria' },
      { label: 'Recuperação Tributária', href: '/recuperacao-tributaria' },
      { label: 'Planejamento Tributário', href: '/planejamento-tributario' },
      { label: 'Defesa Fiscal', href: '/defesa-fiscal' },
      { label: 'Transação PGFN', href: '/transacao-pgfn', highlight: true },
      { label: 'Simples Nacional', href: '/simples-nacional' },
    ],
  },
  { label: 'Trabalhista', href: '/trabalhista' },
  { label: 'Reforma Tributária', href: '/reforma-tributaria' },
  { label: 'Blog', href: '/blog' },
  { label: 'Planos', href: '/planos' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <nav className="nav" role="navigation" aria-label="Menu principal">
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo" aria-label="Resultado Contábil — Página inicial">
            <img
              src="/logo.svg"
              alt="Resultado Contábil"
              width={200}
              height={52}
              loading="eager"
            />
          </Link>

          {/* Desktop nav */}
          <ul className="nav-links" role="list">
            {navigation.map((item) => (
              <li key={item.href} className="nav-item">
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="nav-dropdown" role="list">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`nav-dropdown-link${(child as { highlight?: boolean }).highlight ? ' nav-dropdown-link--highlight' : ''}`}
                        >
                          {child.label}
                          {(child as { highlight?: boolean }).highlight && (
                            <span className="nav-badge">Prazo: 29/05</span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="nav-cta">
            <Link
              href="https://wa.me/555193274218"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp btn--sm"
              aria-label="Falar pelo WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </Link>
            <Link href="/contato" className="btn btn--navy btn--sm">
              Diagnóstico Grátis
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div id="mobile-menu" className="nav-mobile">
            <ul role="list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nav-mobile-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="nav-mobile-sub">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="nav-mobile-sublink"
                            onClick={() => setMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="nav-mobile-ctas">
              <Link
                href="https://wa.me/555193274218"
                target="_blank"
                className="btn btn--whatsapp"
                onClick={() => setMenuOpen(false)}
              >
                WhatsApp
              </Link>
              <Link href="/contato" className="btn btn--navy" onClick={() => setMenuOpen(false)}>
                Diagnóstico Grátis
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
