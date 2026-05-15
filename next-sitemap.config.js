/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://resultadocontabil.com',
  generateRobotsTxt: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/admin/*'],
}
