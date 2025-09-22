/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        'orange': {
          400: '#ff6b35',
          500: '#ff6b35',
        },
        'pink': {
          400: '#ff4081',
          500: '#ff4081',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 30px rgba(255, 107, 53, 0.1)'
          },
          '50%': {
            boxShadow: '0 0 60px rgba(255, 107, 53, 0.3)'
          },
        },
      },
    },
  },
  plugins: [],
}