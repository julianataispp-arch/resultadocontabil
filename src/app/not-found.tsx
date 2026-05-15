import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página não encontrada (404)',
  description: 'A página que você procurou não existe. Explore nossos serviços de contabilidade digital.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="error-page">
      <div className="container container--narrow" style={{ textAlign: 'center', padding: '80px 5%' }}>
        <div className="error-code" aria-hidden="true">404</div>
        <h1>Página não encontrada</h1>
        <p>
          A página que você procurou não existe ou foi movida. Se você chegou aqui por um link
          antigo, nossas páginas foram reorganizadas para melhorar sua experiência.
        </p>

        <div className="error-links">
          <h2>Acesse diretamente:</h2>
          <nav aria-label="Links principais">
            <ul>
              <li><Link href="/">← Voltar para a home</Link></li>
              <li><Link href="/servicos">Nossos serviços</Link></li>
              <li><Link href="/transacao-pgfn">Transação PGFN 11/2025</Link></li>
              <li><Link href="/reforma-tributaria">Reforma Tributária</Link></li>
              <li><Link href="/planos">Planos e preços</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contato">Fale conosco</Link></li>
            </ul>
          </nav>
        </div>

        <Link
          href="https://wa.me/555193274218"
          target="_blank"
          className="btn btn--whatsapp"
        >
          Falar pelo WhatsApp →
        </Link>
      </div>
    </div>
  )
}
