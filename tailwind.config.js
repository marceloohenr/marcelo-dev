/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#060b16',
          surface: '#0c1426',
          elevated: '#101b31',
          card: '#13213d',
        },
        text: {
          primary: '#f5f9ff',
          secondary: '#b7c7e5',
          muted: '#7c90b5',
        },
        brand: {
          300: '#72c8ff',
          400: '#3ea8ff',
          500: '#1683ff',
          600: '#0a63d8',
          700: '#0849a6',
        },
        state: {
          success: '#35d07f',
          highlight: '#8bd8ff',
          warning: '#ffb84d',
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
        soft: '0 30px 80px -42px rgba(2, 10, 26, 0.92)',
        brand: '0 30px 70px -32px rgba(22, 131, 255, 0.55)',
        glow: '0 0 0 1px rgba(114, 200, 255, 0.12), 0 24px 80px -34px rgba(12, 80, 160, 0.6)',
      },
      maxWidth: {
        content: '76rem',
      },
    },
  },
  plugins: [],
};
