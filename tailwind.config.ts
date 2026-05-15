import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
      },
      colors: {
        navy: '#1B2A5E',
        'navy-dark': '#0F1C40',
        cyan: '#00B4D8',
        'cyan-dark': '#0090B0',
        'cyan-light': '#E0F7FD',
        wa: '#25D366',
      },
    },
  },
  plugins: [],
}

export default config
