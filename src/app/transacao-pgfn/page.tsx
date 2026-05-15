import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/seo/Breadcrumb'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Transação PGFN — Regularize sua Dívida Tributária com até 100% de Desconto',
  description:
    'Regularize débitos inscritos na Dívida Ativa da União pelo Edital PGFN 11/2025. Descontos de até 100% em multas e juros. Parcelamento em até 133x. Prazo: 29/05/2026. Fale com especialistas.',
  alternates: { canonical: 'https://resultadocontabil.com/transacao-pgfn' },
  openGraph: {
    title: 'Transação PGFN — Regularize sua Dívida com até 100% de Desconto',
    description:
      'Edital PGFN nº 11/2025: regularize dívidas tributárias federais com descontos de até 100% em multas e juros. Prazo: 29/05/2026.',
    url: 'https://resultadocontabil.com/transacao-pgfn',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Transação PGFN — Regularização de Dívida Ativa',
  description:
    'Assessoria especializada para regularização de débitos inscritos em Dívida Ativa da União via Edital PGFN nº 11/2025, com descontos de até 100% em multas e juros.',
  provider: {
    '@type': 'AccountingService',
    name: 'Resultado Contábil',
    url: 'https://resultadocontabil.com',
    telephone: '+55-51-9327-4218',
  },
  areaServed: { '@type': 'Country', name: 'Brasil' },
  url: 'https://resultadocontabil.com/transacao-pgfn',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é o Edital PGFN 11/2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O Edital PGFN nº 11/2025 é um programa da Procuradoria-Geral da Fazenda Nacional que permite às empresas regularizar débitos inscritos em Dívida Ativa da União com descontos de até 100% em multas e juros, além de parcelamento em até 133 meses. O prazo de adesão é 29/05/2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais débitos podem ser incluídos na Transação PGFN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Podem ser incluídos débitos inscritos em Dívida Ativa da União, como IRPJ, CSLL, PIS, COFINS, IPI e contribuições previdenciárias. É necessário análise individual de cada caso.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual o prazo para aderir ao Edital PGFN 11/2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O prazo de adesão ao Edital PGFN nº 11/2025 encerra em 29 de maio de 2026. Após esse prazo, os débitos voltam à cobrança normal sem os descontos oferecidos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como a Resultado Contábil pode ajudar na Transação PGFN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nossa equipe realiza o levantamento completo dos débitos inscritos na Dívida Ativa, análise das modalidades de transação disponíveis, simulação dos descontos aplicáveis e toda a burocracia de adesão ao programa. Os honorários são cobrados apenas sobre os descontos obtidos.',
      },
    },
  ],
}

export default function TransacaoPgfnPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Urgency Bar */}
      <div className="urgency-bar" role="alert">
        <p>
          ⚠️ <strong>Prazo: 29/05/2026</strong> — Edital PGFN 11/2025 encerra em breve.{' '}
          <Link href="https://wa.me/555193274218" target="_blank" className="urgency-cta">
            Consultar agora →
          </Link>
        </p>
      </div>

      <article>
        {/* Breadcrumb */}
        <div className="container">
          <Breadcrumb items={[{ label: 'Transação PGFN' }]} />
        </div>

        {/* Hero */}
        <section className="service-hero service-hero--red">
          <div className="container">
            <div className="service-hero__badge">
              <span className="dot dot--red" aria-hidden="true" />
              Prazo: 29/05/2026
            </div>
            <h1>
              Transação PGFN: Regularize sua Dívida Tributária com até{' '}
              <strong>100% de Desconto em Multas e Juros</strong>
            </h1>
            <p className="service-hero__sub">
              O Edital PGFN nº 11/2025 permite que empresas regularizem débitos inscritos em Dívida
              Ativa da União com condições excepcionais. Parcelamento em até{' '}
              <strong>133 vezes</strong>. Nossa equipe cuida de todo o processo — e os honorários são
              cobrados somente sobre os descontos obtidos.
            </p>

            <div className="hero-benefits">
              <div className="benefit-tag">✓ Até 100% desconto em multas</div>
              <div className="benefit-tag">✓ Até 100% desconto em juros</div>
              <div className="benefit-tag">✓ Parcelamento em até 133x</div>
              <div className="benefit-tag">✓ Honorários só sobre desconto</div>
            </div>

            <div className="hero-ctas">
              <Link
                href="https://wa.me/555193274218?text=Quero%20regularizar%20minha%20dívida%20PGFN"
                target="_blank"
                className="btn btn--primary"
              >
                <span>Falar com Especialista</span>
              </Link>
              <Link href="#como-funciona" className="btn btn--ghost">
                Como funciona →
              </Link>
            </div>
          </div>
        </section>

        {/* O que é */}
        <section id="como-funciona" className="section section--white">
          <div className="container container--narrow">
            <h2>O que é o Edital PGFN nº 11/2025?</h2>
            <p>
              A Procuradoria-Geral da Fazenda Nacional (PGFN) lançou o <strong>Edital nº 11/2025</strong>,
              um programa especial de regularização fiscal que oferece condições excepcionais para
              empresas que possuem débitos inscritos em Dívida Ativa da União.
            </p>
            <p>
              Por meio da <strong>transação tributária</strong>, é possível obter descontos de até
              100% sobre multas e juros, reduzindo significativamente o valor total da dívida e
              permitindo o parcelamento do saldo restante em até 133 meses.
            </p>

            <div className="info-grid">
              <div className="info-card">
                <div className="info-card__icon">📅</div>
                <h3>Prazo de Adesão</h3>
                <p>29 de maio de 2026</p>
              </div>
              <div className="info-card">
                <div className="info-card__icon">💰</div>
                <h3>Desconto Máximo</h3>
                <p>100% em multas e juros</p>
              </div>
              <div className="info-card">
                <div className="info-card__icon">📋</div>
                <h3>Parcelamento</h3>
                <p>Até 133 meses</p>
              </div>
              <div className="info-card">
                <div className="info-card__icon">🏢</div>
                <h3>Abrangência</h3>
                <p>Dívida Ativa da União</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quem pode */}
        <section className="section section--gray">
          <div className="container container--narrow">
            <h2>Quem pode aderir à Transação PGFN?</h2>
            <p>
              Podem aderir empresas de qualquer porte e regime tributário que possuam débitos
              inscritos na Dívida Ativa da União. Confira os principais perfis:
            </p>
            <ul className="check-list">
              <li>Microempresas e Empresas de Pequeno Porte (EPP)</li>
              <li>Empresas do Simples Nacional com dívidas na Dívida Ativa</li>
              <li>Empresas do Lucro Presumido e Lucro Real</li>
              <li>Profissionais liberais com empresa aberta (CNPJ)</li>
              <li>Empresas com autuações fiscais inscritas em dívida ativa</li>
              <li>MEI com débitos federais</li>
            </ul>
            <p>
              <strong>Atenção:</strong> nem todo débito tributário está na Dívida Ativa. É necessário
              uma consulta especializada para verificar sua situação e identificar os débitos elegíveis.
            </p>
          </div>
        </section>

        {/* Como funciona o processo */}
        <section className="section section--white">
          <div className="container container--narrow">
            <h2>Como funciona o processo de adesão?</h2>
            <ol className="step-list">
              <li>
                <strong>Levantamento de débitos</strong> — Consultamos sua situação junto à PGFN e
                identificamos todos os débitos inscritos em Dívida Ativa.
              </li>
              <li>
                <strong>Análise das modalidades</strong> — Avaliamos qual modalidade de transação
                oferece as melhores condições para o seu perfil.
              </li>
              <li>
                <strong>Simulação de desconto</strong> — Calculamos o valor exato da redução de
                multas e juros aplicável ao seu caso.
              </li>
              <li>
                <strong>Negociação e adesão</strong> — Conduzimos todo o processo de negociação com
                a PGFN e formalizamos a transação no prazo.
              </li>
              <li>
                <strong>Acompanhamento</strong> — Monitoramos o cumprimento das parcelas e
                garantimos a regularidade fiscal da empresa.
              </li>
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--gray" aria-labelledby="faq-heading">
          <div className="container container--narrow">
            <h2 id="faq-heading">Perguntas Frequentes sobre a Transação PGFN</h2>
            <div className="faq-list">
              <details className="faq-item">
                <summary>O que é o Edital PGFN 11/2025?</summary>
                <div className="faq-answer">
                  <p>
                    O Edital PGFN nº 11/2025 é um programa da Procuradoria-Geral da Fazenda Nacional
                    que permite regularizar débitos inscritos em Dívida Ativa da União com descontos
                    de até 100% em multas e juros, além de parcelamento em até 133 meses. O prazo
                    de adesão é 29/05/2026.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary>Quais débitos podem ser incluídos na transação?</summary>
                <div className="faq-answer">
                  <p>
                    Podem ser incluídos débitos de IRPJ, CSLL, PIS, COFINS, IPI, contribuições
                    previdenciárias e outros tributos federais inscritos em Dívida Ativa. É
                    necessária análise individual.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary>O que acontece se eu não aderir até 29/05/2026?</summary>
                <div className="faq-answer">
                  <p>
                    Após o prazo, os débitos voltam à cobrança normal, sem os descontos oferecidos
                    pelo edital. A PGFN pode retomar ações de execução fiscal, incluindo penhora de
                    bens.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary>Como são calculados os honorários da Resultado Contábil?</summary>
                <div className="faq-answer">
                  <p>
                    Nossos honorários são baseados no resultado obtido — ou seja, calculados sobre
                    o valor do desconto efetivamente conseguido na negociação. Se não houver desconto,
                    não há cobrança pelo serviço de transação.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section section--navy">
          <div className="container container--narrow" style={{ textAlign: 'center' }}>
            <h2>Não perca o prazo. Regularize sua empresa agora.</h2>
            <p>
              Nossa equipe está pronta para analisar sua situação e identificar o melhor caminho
              para regularização. Atendimento rápido, sem burocracia.
            </p>
            <Link
              href="https://wa.me/555193274218?text=Quero%20analisar%20minha%20dívida%20na%20PGFN"
              target="_blank"
              className="btn btn--whatsapp btn--lg"
            >
              Solicitar Análise Gratuita →
            </Link>
            <p style={{ marginTop: '1rem', opacity: 0.7, fontSize: '0.85rem' }}>
              Prazo encerra em <strong>29/05/2026</strong>
            </p>
          </div>
        </section>

        {/* Links internos relacionados */}
        <section className="section section--white">
          <div className="container">
            <h2>Serviços relacionados</h2>
            <div className="related-links">
              <Link href="/consultoria-tributaria" className="related-card">
                <h3>Consultoria Tributária</h3>
                <p>Diagnóstico completo da situação fiscal da sua empresa.</p>
              </Link>
              <Link href="/recuperacao-tributaria" className="related-card">
                <h3>Recuperação Tributária</h3>
                <p>Identificação e recuperação de créditos tributários pagos a maior.</p>
              </Link>
              <Link href="/planejamento-tributario" className="related-card">
                <h3>Planejamento Tributário</h3>
                <p>Redução legal da carga tributária da sua empresa.</p>
              </Link>
              <Link href="/blog/pgfn/como-negociar-divida-pgfn" className="related-card">
                <h3>Como negociar dívida na PGFN?</h3>
                <p>Leia nosso guia completo sobre o processo de negociação.</p>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
