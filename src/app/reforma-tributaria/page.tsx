import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/seo/Breadcrumb'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Reforma Tributária 2024/2025 — Guia Completo para Empresas',
  description:
    'Entenda o impacto da Reforma Tributária Brasileira (EC 132/2023) na sua empresa. IBS, CBS, Split Payment, Imposto Seletivo e Simples Nacional. Guia completo com consultoria especializada.',
  alternates: { canonical: 'https://resultadocontabil.com/reforma-tributaria' },
  openGraph: {
    title: 'Reforma Tributária — Guia Completo para Empresas',
    description:
      'IBS, CBS, Split Payment e Imposto Seletivo: o que muda na sua empresa. Consultoria especializada em Bento Gonçalves e Porto Alegre — RS.',
    url: 'https://resultadocontabil.com/reforma-tributaria',
  },
}

const subpages = [
  { href: '/reforma-tributaria/empresas', title: 'Impacto nas Empresas', desc: 'Como a reforma afeta o dia a dia das empresas brasileiras de todos os portes.' },
  { href: '/reforma-tributaria/simples-nacional', title: 'Simples Nacional', desc: 'O que muda para MEI e empresas do Simples Nacional com a EC 132/2023.' },
  { href: '/reforma-tributaria/ibs-cbs', title: 'IBS e CBS', desc: 'Entenda o que são o Imposto sobre Bens e Serviços e a Contribuição sobre Bens e Serviços.' },
  { href: '/reforma-tributaria/split-payment', title: 'Split Payment', desc: 'Como o pagamento fracionado pode afetar o fluxo de caixa das empresas.' },
  { href: '/reforma-tributaria/imposto-seletivo', title: 'Imposto Seletivo', desc: 'Quais setores serão afetados pelo novo imposto sobre produtos prejudiciais à saúde.' },
  { href: '/reforma-tributaria/impactos-no-varejo', title: 'Impacto no Varejo', desc: 'Análise setorial: como o comércio varejista será afetado pela reforma.' },
  { href: '/reforma-tributaria/impactos-na-industria', title: 'Impacto na Indústria', desc: 'O que muda para o setor industrial com a unificação dos tributos.' },
  { href: '/reforma-tributaria/impactos-nos-servicos', title: 'Impacto nos Serviços', desc: 'Prestadores de serviços terão aumento de carga tributária? Entenda.' },
  { href: '/reforma-tributaria/planejamento-tributario', title: 'Planejamento Tributário', desc: 'Como se preparar agora para a transição até 2033.' },
  { href: '/reforma-tributaria/consultoria', title: 'Consultoria', desc: 'Diagnóstico personalizado do impacto da reforma na sua empresa.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é a Reforma Tributária Brasileira?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Reforma Tributária Brasileira (EC 132/2023) é a maior mudança no sistema de impostos do Brasil desde 1988. Ela substitui 5 tributos (PIS, COFINS, IPI, ICMS e ISS) por 2 novos: o IBS (gerido por estados e municípios) e a CBS (federal), além de criar o Imposto Seletivo. A transição ocorre entre 2026 e 2033.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quando começa a Reforma Tributária?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Reforma Tributária começa oficialmente em 2026, com a implementação gradual do IBS e CBS. O período de transição se estende até 2033, quando o novo sistema estará completamente implantado.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é o IBS e a CBS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O IBS (Imposto sobre Bens e Serviços) é administrado por estados e municípios e substitui o ICMS e o ISS. A CBS (Contribuição sobre Bens e Serviços) é federal e substitui o PIS e a COFINS. Ambos funcionam com o princípio de destino e não-cumulatividade plena.',
      },
    },
    {
      '@type': 'Question',
      name: 'O Simples Nacional acaba com a Reforma Tributária?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. O Simples Nacional continua existindo, mas haverá adaptações. As empresas do Simples poderão optar por recolher o IBS e CBS de forma separada para transferir créditos tributários aos seus clientes, o que pode ser vantajoso dependendo do perfil dos clientes.',
      },
    },
  ],
}

export default function ReformaTributariaPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <div className="container">
        <Breadcrumb items={[{ label: 'Reforma Tributária' }]} />
      </div>

      {/* Hero */}
      <section className="hub-hero">
        <div className="container">
          <div className="hub-hero__badge">EC 132/2023 — Vigência a partir de 2026</div>
          <h1>
            Reforma Tributária Brasileira:<br />
            <strong>O que muda na sua empresa?</strong>
          </h1>
          <p className="hub-hero__sub">
            A maior mudança tributária da história do Brasil substitui 5 tributos por um novo sistema.
            Entenda o impacto do <strong>IBS, CBS, Split Payment e Imposto Seletivo</strong> e prepare
            sua empresa para a transição até 2033.
          </p>
          <Link
            href="https://wa.me/555193274218?text=Quero%20entender%20o%20impacto%20da%20Reforma%20Tributária%20na%20minha%20empresa"
            target="_blank"
            className="btn btn--primary"
          >
            Solicitar Diagnóstico Tributário →
          </Link>
        </div>
      </section>

      {/* Visão geral rápida */}
      <section className="section section--white">
        <div className="container">
          <h2>A Reforma em 4 pontos essenciais</h2>
          <div className="overview-grid">
            <div className="overview-card">
              <h3>🔄 O que muda</h3>
              <p>PIS, COFINS, IPI, ICMS e ISS são substituídos por IBS e CBS. Transição entre 2026 e 2033.</p>
            </div>
            <div className="overview-card">
              <h3>📊 Princípio do destino</h3>
              <p>O imposto passa a ser cobrado no local de consumo, não mais na origem da produção.</p>
            </div>
            <div className="overview-card">
              <h3>💳 Split Payment</h3>
              <p>O imposto é recolhido automaticamente no momento do pagamento, impactando o caixa das empresas.</p>
            </div>
            <div className="overview-card">
              <h3>✅ Não-cumulatividade plena</h3>
              <p>Crédito sobre todos os insumos, eliminando a "tributação em cascata".</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hub de subpáginas */}
      <section className="section section--gray">
        <div className="container">
          <h2>Explore todos os temas da Reforma Tributária</h2>
          <p className="section-sub">
            Conteúdo especializado para você entender cada aspecto da reforma e tomar decisões estratégicas.
          </p>
          <div className="hub-grid">
            {subpages.map((page) => (
              <Link key={page.href} href={page.href} className="hub-card">
                <h3>{page.title}</h3>
                <p>{page.desc}</p>
                <span className="hub-card__cta">Ler mais →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--white" aria-labelledby="faq-rt">
        <div className="container container--narrow">
          <h2 id="faq-rt">Perguntas frequentes sobre a Reforma Tributária</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>O que é a Reforma Tributária Brasileira?</summary>
              <div className="faq-answer">
                <p>
                  A Reforma Tributária (EC 132/2023) é a maior mudança no sistema tributário do Brasil.
                  Ela substitui 5 tributos (PIS, COFINS, IPI, ICMS e ISS) por 2 novos impostos —
                  o IBS e a CBS — além de criar o Imposto Seletivo. A transição ocorre entre 2026 e 2033.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Quando a Reforma Tributária começa a valer?</summary>
              <div className="faq-answer">
                <p>
                  A implementação começa em 2026. O período de transição se estende até 2033, quando
                  o novo sistema estará completamente implantado e os tributos antigos serão extintos.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary>O Simples Nacional acaba com a Reforma?</summary>
              <div className="faq-answer">
                <p>
                  Não. O Simples Nacional continua, mas empresas poderão optar por recolher IBS e CBS
                  separadamente para transferir créditos tributários aos clientes — o que pode ser
                  vantajoso dependendo do perfil dos clientes da empresa.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--navy">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <h2>Prepare sua empresa para a Reforma Tributária</h2>
          <p>
            Faça um diagnóstico personalizado e saiba exatamente o que muda na sua empresa,
            quanto vai pagar e como se planejar para a transição.
          </p>
          <Link
            href="/reforma-tributaria/consultoria"
            className="btn btn--primary"
          >
            Solicitar Diagnóstico →
          </Link>
        </div>
      </section>
    </>
  )
}
