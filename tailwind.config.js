/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#38a6f7',
          500: '#0e87eb',
          600: '#026bc9',
          700: '#0355a3',
          800: '#074986',
          900: '#0c3e6f',
          950: '#082749',
        },
        electric: {
          cyan: '#06b6d4',
          blue: '#2563eb',
          sky: '#0284c7',
          indigo: '#4f46e5',
          navy: '#0b132b',
        },
        corporate: {
          blue: '#2563eb',
          cyan: '#06b6d4',
          indigo: '#4f46e5',
          teal: '#0d9488',
          emerald: '#059669',
          accent: '#1d4ed8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marqueeReverse 28s linear infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.85', filter: 'blur(32px)' },
        },
      },
      boxShadow: {
        'soft-glow': '0 20px 40px -15px rgba(37, 99, 235, 0.12)',
        'blue-glow': '0 20px 50px -10px rgba(6, 182, 212, 0.25)',
        'card-elevated': '0 10px 30px -5px rgba(15, 23, 42, 0.05), 0 0 0 1px rgba(226, 232, 240, 0.8)',
        'card-hover': '0 20px 40px -10px rgba(37, 99, 235, 0.12), 0 0 0 1px rgba(147, 197, 253, 0.5)',
      }
    },
  },
  plugins: [],
}
