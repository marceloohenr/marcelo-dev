/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#020617',
          surface: '#0b1220',
          elevated: '#121c2f',
        },
        text: {
          primary: '#e2e8f0',
          secondary: '#cbd5e1',
          muted: '#94a3b8',
        },
        brand: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        state: {
          success: '#22c55e',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: [
          'clamp(2.4rem, 6vw, 4.8rem)',
          { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' },
        ],
        h1: [
          'clamp(2rem, 4.2vw, 3.4rem)',
          { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '800' },
        ],
        h2: [
          'clamp(1.65rem, 2.8vw, 2.45rem)',
          { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        h3: [
          'clamp(1.25rem, 1.8vw, 1.6rem)',
          { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' },
        ],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        body: ['1rem', { lineHeight: '1.7' }],
        caption: ['0.875rem', { lineHeight: '1.55' }],
      },
      borderRadius: {
        card: '1rem',
        button: '0.875rem',
      },
      boxShadow: {
        soft: '0 16px 34px -20px rgba(2, 6, 23, 0.85)',
        brand: '0 20px 45px -18px rgba(37, 99, 235, 0.5)',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
