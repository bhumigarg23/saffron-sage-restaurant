/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E4C76B',
          dark: '#A07730',
          50: '#FDF8EC',
          100: '#F9EDCA',
          200: '#F0D48A',
          300: '#E4C76B',
          400: '#D9B559',
          500: '#C9A84C',
          600: '#A07730',
          700: '#7A5520',
          800: '#5A3C14',
          900: '#3C270B',
        },
        obsidian: '#0A0A0A',
        charcoal: '#1A1A1A',
        ivory: {
          DEFAULT: '#FAF7F0',
          dark: '#F0EBE0',
          100: '#FAF7F0',
          200: '#F0EBE0',
          300: '#E5DDD0',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.3em',
        ultrawide: '0.5em',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
};
