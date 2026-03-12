/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#08111d',
          surface: '#0f172a',
          elevated: '#162033',
          card: '#1d2a40',
        },
        text: {
          primary: '#f5f7fb',
          secondary: '#b6c2d2',
          muted: '#8696aa',
        },
        brand: {
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
        },
        border: {
          subtle: '#2a3a55',
        },
        state: {
          success: '#22c55e',
          highlight: '#93c5fd',
          warning: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: [
          'clamp(2.45rem, 7vw, 5.1rem)',
          { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '700' },
        ],
        h1: [
          'clamp(1.95rem, 5vw, 3.35rem)',
          { lineHeight: '1.06', letterSpacing: '-0.03em', fontWeight: '700' },
        ],
        h2: [
          'clamp(1.55rem, 4vw, 2.5rem)',
          { lineHeight: '1.12', letterSpacing: '-0.025em', fontWeight: '700' },
        ],
        h3: [
          'clamp(1.08rem, 2.2vw, 1.45rem)',
          { lineHeight: '1.28', letterSpacing: '-0.01em', fontWeight: '700' },
        ],
        'body-lg': ['clamp(1rem, 2vw, 1.125rem)', { lineHeight: '1.72' }],
        body: ['1rem', { lineHeight: '1.7' }],
        caption: ['0.875rem', { lineHeight: '1.55' }],
      },
      borderRadius: {
        card: '1.6rem',
        button: '1rem',
      },
      boxShadow: {
        soft: '0 30px 80px -48px rgba(8, 17, 29, 0.88)',
        brand: '0 24px 60px -30px rgba(37, 99, 235, 0.46)',
        glow: '0 0 0 1px rgba(147, 197, 253, 0.14), 0 24px 60px -32px rgba(37, 99, 235, 0.34)',
      },
      maxWidth: {
        content: '76rem',
      },
    },
  },
  plugins: [],
};
