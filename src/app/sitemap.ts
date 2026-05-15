import { MetadataRoute } from 'next'

const BASE_URL = 'https://resultadocontabil.com'

// Páginas estáticas com prioridades
const staticPages: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] }[] = [
  { url: '/', priority: 1.0, changeFrequency: 'weekly' },
  { url: '/servicos', priority: 0.9, changeFrequency: 'monthly' },
  { url: '/planos', priority: 0.9, changeFrequency: 'monthly' },
  { url: '/sobre', priority: 0.7, changeFrequency: 'monthly' },
  { url: '/contato', priority: 0.8, changeFrequency: 'monthly' },
  // Tributário
  { url: '/consultoria-tributaria', priority: 0.9, changeFrequency: 'monthly' },
  { url: '/recuperacao-tributaria', priority: 0.9, changeFrequency: 'monthly' },
  { url: '/planejamento-tributario', priority: 0.9, changeFrequency: 'monthly' },
  { url: '/defesa-fiscal', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/transacao-pgfn', priority: 1.0, changeFrequency: 'weekly' },
  { url: '/parcelamento-tributario', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/simples-nacional', priority: 0.9, changeFrequency: 'monthly' },
  { url: '/exclusao-do-simples-nacional', priority: 0.8, changeFrequency: 'monthly' },
  // Trabalhista
  { url: '/trabalhista', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/calculos-trabalhistas', priority: 0.8, changeFrequency: 'monthly' },
  // Contabilidade
  { url: '/contabilidade-empresarial', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/contabilidade-domestica', priority: 0.8, changeFrequency: 'monthly' },
  // Reforma Tributária
  { url: '/reforma-tributaria', priority: 0.95, changeFrequency: 'weekly' },
  { url: '/reforma-tributaria/empresas', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/reforma-tributaria/simples-nacional', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/reforma-tributaria/ibs-cbs', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/reforma-tributaria/split-payment', priority: 0.85, changeFrequency: 'weekly' },
  { url: '/reforma-tributaria/imposto-seletivo', priority: 0.85, changeFrequency: 'monthly' },
  { url: '/reforma-tributaria/impactos-no-varejo', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/reforma-tributaria/impactos-na-industria', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/reforma-tributaria/impactos-nos-servicos', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/reforma-tributaria/planejamento-tributario', priority: 0.85, changeFrequency: 'monthly' },
  { url: '/reforma-tributaria/consultoria', priority: 0.85, changeFrequency: 'monthly' },
  // Blog — categorias
  { url: '/blog', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/blog/reforma-tributaria', priority: 0.75, changeFrequency: 'weekly' },
  { url: '/blog/tributario', priority: 0.75, changeFrequency: 'weekly' },
  { url: '/blog/trabalhista', priority: 0.75, changeFrequency: 'weekly' },
  { url: '/blog/contabilidade', priority: 0.75, changeFrequency: 'weekly' },
  { url: '/blog/pgfn', priority: 0.75, changeFrequency: 'weekly' },
  { url: '/blog/simples-nacional', priority: 0.75, changeFrequency: 'weekly' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString()

  // Páginas estáticas
  const staticEntries: MetadataRoute.Sitemap = staticPages.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))

  // Aqui você pode adicionar artigos dinâmicos do blog:
  // const posts = await getAllPosts()
  // const blogEntries = posts.map(post => ({ url: `${BASE_URL}/blog/${post.category}/${post.slug}`, ... }))

  return [...staticEntries]
}
