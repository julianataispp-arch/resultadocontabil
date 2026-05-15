import Link from 'next/link'

const services = [
  { label: 'Consultoria Tributária', href: '/consultoria-tributaria' },
  { label: 'Recuperação Tributária', href: '/recuperacao-tributaria' },
  { label: 'Planejamento Tributário', href: '/planejamento-tributario' },
  { label: 'Transação PGFN', href: '/transacao-pgfn' },
  { label: 'Simples Nacional', href: '/simples-nacional' },
  { label: 'Cálculos Trabalhistas', href: '/calculos-trabalhistas' },
  { label: 'Contabilidade Doméstica', href: '/contabilidade-domestica' },
]

const reformaTributaria = [
  { label: 'IBS e CBS', href: '/reforma-tributaria/ibs-cbs' },
  { label: 'Split Payment', href: '/reforma-tributaria/split-payment' },
  { label: 'Simples Nacional', href: '/reforma-tributaria/simples-nacional' },
  { label: 'Impacto nas Empresas', href: '/reforma-tributaria/empresas' },
  { label: 'Consultoria RT', href: '/reforma-tributaria/consultoria' },
]

const blog = [
  { label: 'Blog', href: '/blog' },
  { label: 'Reforma Tributária', href: '/blog/reforma-tributaria' },
  { label: 'PGFN', href: '/blog/pgfn' },
  { label: 'Simples Nacional', href: '/blog/simples-nacional' },
  { label: 'Trabalhista', href: '/blog/trabalhista' },
]

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Marca */}
          <div className="footer-brand">
            <Link href="/" aria-label="Resultado Contábil — Voltar para home">
              <img src="/logo-white.svg" alt="Resultado Contábil" width={180} height={44} loading="lazy" />
            </Link>
            <p>
              Contabilidade digital para prestadores de serviços e profissionais liberais no Simples
              Nacional. Adaptado à EC 132/2023.
            </p>
            <address className="footer-contact" style={{ fontStyle: 'normal' }}>
              <Link
                href="https://wa.me/555193274218"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-wa"
                aria-label="WhatsApp: +55 51 9327-4218"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                +55 51 9327-4218
              </Link>
              <a href="mailto:atendimento@resultadocontabil.com" className="footer-email">
                atendimento@resultadocontabil.com
              </a>
              <span className="footer-location">
                📍 Bento Gonçalves, RS — Atendimento em todo o Brasil
              </span>
            </address>
          </div>

          {/* Serviços */}
          <nav aria-label="Serviços">
            <h4>Serviços</h4>
            <ul role="list">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Reforma Tributária */}
          <nav aria-label="Reforma Tributária">
            <h4>Reforma Tributária</h4>
            <ul role="list">
              {reformaTributaria.map((r) => (
                <li key={r.href}>
                  <Link href={r.href}>{r.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Blog */}
          <nav aria-label="Blog e conteúdo">
            <h4>Conteúdo</h4>
            <ul role="list">
              {blog.map((b) => (
                <li key={b.href}>
                  <Link href={b.href}>{b.label}</Link>
                </li>
              ))}
              <li><Link href="/sobre">Sobre nós</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Resultado Contábil. Todos os direitos reservados.</p>
          <p>Adaptado à EC 132/2023 · Reforma Tributária Brasileira</p>
          <nav aria-label="Links legais">
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
            <Link href="/termos-de-uso">Termos de Uso</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
