/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#0f172a',
          surface: '#111827',
          elevated: '#172033',
          card: '#1e293b',
        },
        text: {
          primary: '#f1f5f9',
          secondary: '#94a3b8',
          muted: '#64748b',
        },
        brand: {
          300: '#60a5fa',
          400: '#3b82f6',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
        },
        state: {
          success: '#22c55e',
          highlight: '#3b82f6',
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
        soft: '0 24px 60px -32px rgba(15, 23, 42, 0.85)',
        brand: '0 26px 64px -28px rgba(37, 99, 235, 0.5)',
        glow: '0 0 0 1px rgba(59, 130, 246, 0.14), 0 20px 56px -28px rgba(37, 99, 235, 0.38)',
      },
      maxWidth: {
        content: '76rem',
      },
    },
  },
  plugins: [],
};
