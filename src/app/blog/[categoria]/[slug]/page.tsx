import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/seo/Breadcrumb'
import { JsonLd } from '@/components/seo/JsonLd'

// Mapeamento de categorias para labels
const categoryLabels: Record<string, string> = {
  'reforma-tributaria': 'Reforma Tributária',
  'tributario': 'Tributário',
  'trabalhista': 'Trabalhista',
  'contabilidade': 'Contabilidade',
  'pgfn': 'PGFN',
  'simples-nacional': 'Simples Nacional',
}

// Tipos
interface BlogPost {
  slug: string
  category: string
  title: string
  description: string
  h1: string
  publishedAt: string
  updatedAt: string
  author: string
  readingTime: number
  content: string
  faq?: { q: string; a: string }[]
  relatedPosts?: { href: string; title: string; category: string }[]
}

// Simulated posts database (em produção, ler de arquivos MDX)
const posts: Record<string, Record<string, BlogPost>> = {
  pgfn: {
    'como-negociar-divida-pgfn': {
      slug: 'como-negociar-divida-pgfn',
      category: 'pgfn',
      title: 'Como negociar dívida tributária na PGFN em 2025/2026 — Guia Completo',
      description:
        'Passo a passo para negociar débitos inscritos em Dívida Ativa da União via Edital PGFN 11/2025. Descontos de até 100% em multas e juros. Prazo: 29/05/2026.',
      h1: 'Como negociar dívida tributária na PGFN: guia completo para 2025/2026',
      publishedAt: '2026-05-01',
      updatedAt: '2026-05-14',
      author: 'Equipe Resultado Contábil',
      readingTime: 8,
      content: `
A negociação de dívidas tributárias junto à Procuradoria-Geral da Fazenda Nacional (PGFN) é uma das formas mais eficazes de regularizar a situação fiscal da sua empresa e retomar o crescimento sem o peso das dívidas.

## O que é a Dívida Ativa da União?

A Dívida Ativa da União é o conjunto de créditos do governo federal que não foram pagos no prazo e foram inscritos em um cadastro específico para cobrança. Isso inclui tributos como IRPJ, CSLL, PIS, COFINS, IPI e contribuições previdenciárias.

Quando uma empresa está inscrita na Dívida Ativa, ela:
- Não consegue emitir Certidão Negativa de Débitos (CND)
- Fica impedida de participar de licitações
- Pode ter bens penhorados por execução fiscal
- Paga multa de 20% sobre o valor da dívida além dos juros Selic

## O Edital PGFN nº 11/2025: a oportunidade atual

O Edital PGFN nº 11/2025 é um programa especial que permite às empresas regularizar suas dívidas com condições excepcionais:

- **Descontos de até 100%** em multas e juros
- **Parcelamento em até 133 meses**
- **Entrada reduzida** (mínimo de 1% da dívida consolidada)
- **Prazo de adesão: 29/05/2026**

### Quem pode aderir?

Podem aderir ao Edital 11/2025 empresas de qualquer porte que possuam débitos inscritos em Dívida Ativa da União, incluindo empresas do Simples Nacional, Lucro Presumido e Lucro Real.

## Passo a passo para negociar

### 1. Levantamento dos débitos

O primeiro passo é verificar sua situação junto à PGFN. Acesse o portal [Regularize](https://regularize.pgfn.gov.br) com certificado digital e consulte todos os débitos inscritos.

### 2. Análise das modalidades disponíveis

O Edital 11/2025 oferece diferentes modalidades, com descontos variando conforme o perfil do devedor:
- Empresas em recuperação judicial: até 100% de desconto
- Empresas com baixa capacidade de pagamento: até 70% de desconto
- Demais casos: descontos calculados individualmente

### 3. Simulação e proposta

Com os dados em mãos, é possível simular o valor da dívida após os descontos e o valor das parcelas. Nossa equipe realiza essa simulação de forma detalhada.

### 4. Adesão formal

A adesão é feita pelo portal Regularize, com certificado digital. Após a formalização, a empresa recebe o protocolo de adesão e as primeiras guias para pagamento.

### 5. Manutenção do acordo

Após a adesão, é fundamental manter o pagamento das parcelas em dia e continuar cumprindo as obrigações fiscais correntes para não perder os benefícios do acordo.

## Quanto custa contratar um especialista?

Na Resultado Contábil, nossos honorários para o processo de transação PGFN são calculados sobre o desconto obtido — ou seja, você só paga se houver resultado. Essa modalidade garante que trabalhamos no interesse do cliente.
      `,
      faq: [
        {
          q: 'Posso aderir ao Edital PGFN 11/2025 sem contador?',
          a: 'Tecnicamente sim, mas é altamente recomendável contar com assessoria especializada. A análise das modalidades, os cálculos de desconto e a negociação requerem conhecimento técnico que pode fazer a diferença no valor final pago.',
        },
        {
          q: 'O que acontece se eu perder uma parcela da transação PGFN?',
          a: 'O descumprimento do acordo pode resultar na rescisão da transação e retorno da cobrança integral da dívida, sem os descontos obtidos. Por isso, é fundamental manter o pagamento em dia.',
        },
        {
          q: 'A empresa fica com o CNPJ ativo durante a negociação?',
          a: 'Sim. Após a formalização da adesão, a empresa pode obter uma certidão positiva com efeito de negativa (CPEN), que tem os mesmos efeitos da CND para a maioria das finalidades.',
        },
      ],
      relatedPosts: [
        { href: '/transacao-pgfn', title: 'Transação PGFN — página de serviço', category: 'Serviço' },
        { href: '/blog/tributario/como-recuperar-creditos-tributarios', title: 'Como recuperar créditos tributários', category: 'Tributário' },
        { href: '/blog/simples-nacional/empresa-excluida-o-que-fazer', title: 'Empresa excluída do Simples: o que fazer', category: 'Simples Nacional' },
      ],
    },
  },
}

type Params = { categoria: string; slug: string }

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = posts[params.categoria]?.[params.slug]
  if (!post) return { title: 'Artigo não encontrado' }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://resultadocontabil.com/blog/${post.category}/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      url: `https://resultadocontabil.com/blog/${post.category}/${post.slug}`,
    },
  }
}

export default function BlogArticlePage({ params }: { params: Params }) {
  const post = posts[params.categoria]?.[params.slug]
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.h1,
    description: post.description,
    author: { '@type': 'Organization', name: post.author, url: 'https://resultadocontabil.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Resultado Contábil',
      url: 'https://resultadocontabil.com',
      logo: { '@type': 'ImageObject', url: 'https://resultadocontabil.com/logo.svg' },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    url: `https://resultadocontabil.com/blog/${post.category}/${post.slug}`,
    inLanguage: 'pt-BR',
    about: { '@type': 'Thing', name: categoryLabels[post.category] },
  }

  const faqSchema = post.faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      }
    : null

  return (
    <>
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <div className="container">
        <Breadcrumb
          items={[
            { label: 'Blog', href: '/blog' },
            { label: categoryLabels[post.category], href: `/blog/${post.category}` },
            { label: post.h1 },
          ]}
        />
      </div>

      <article className="article-layout">
        <div className="container container--narrow">
          {/* Header */}
          <header className="article-header">
            <Link href={`/blog/${post.category}`} className="article-category-badge">
              {categoryLabels[post.category]}
            </Link>
            <h1>{post.h1}</h1>
            <div className="article-meta">
              <span>Por <strong>{post.author}</strong></span>
              <span>·</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
              </time>
              <span>·</span>
              <span>⏱ {post.readingTime} min de leitura</span>
            </div>
            {post.publishedAt !== post.updatedAt && (
              <p className="article-updated">
                Atualizado em{' '}
                <time dateTime={post.updatedAt}>
                  {new Date(post.updatedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                </time>
              </p>
            )}
          </header>

          {/* Conteúdo */}
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
          />

          {/* FAQ */}
          {post.faq && (
            <section className="article-faq" aria-labelledby="faq-artigo">
              <h2 id="faq-artigo">Perguntas frequentes</h2>
              <div className="faq-list">
                {post.faq.map(({ q, a }, i) => (
                  <details key={i} className="faq-item">
                    <summary>{q}</summary>
                    <div className="faq-answer"><p>{a}</p></div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="article-cta">
            <h3>Precisa de ajuda especializada?</h3>
            <p>Nossa equipe está pronta para analisar sua situação e oferecer a melhor solução.</p>
            <Link
              href="https://wa.me/555193274218"
              target="_blank"
              className="btn btn--whatsapp"
            >
              Falar com especialista →
            </Link>
          </div>

          {/* Posts relacionados */}
          {post.relatedPosts && (
            <section className="related-posts">
              <h2>Leia também</h2>
              <div className="related-grid">
                {post.relatedPosts.map((related) => (
                  <Link key={related.href} href={related.href} className="related-card">
                    <span className="related-card__category">{related.category}</span>
                    <h3>{related.title}</h3>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  )
}
