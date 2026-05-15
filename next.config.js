/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimização de imagens
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compressão
  compress: true,

  // Trailing slash consistente
  trailingSlash: false,

  // Power by header removido
  poweredByHeader: false,

  // Headers de segurança e cache
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self' https://www.google-analytics.com",
              "frame-src https://www.google.com/maps/",
            ].join('; '),
          },
        ],
      },
      // Cache longo para assets estáticos
      {
        source: '/fonts/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
    ]
  },

  // Redirecionamentos 301
  async redirects() {
    return [
      // www → sem www
      {
        source: '/(.*)',
        has: [{ type: 'host', value: 'www.resultadocontabil.com' }],
        destination: 'https://resultadocontabil.com/:path*',
        permanent: true,
      },
      // URLs antigas com slug (ex: se existirem)
      // Âncoras não podem ser redirecionadas no servidor —
      // são tratadas via script client-side na home
    ]
  },
}

module.exports = nextConfig
