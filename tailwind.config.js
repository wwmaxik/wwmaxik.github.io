/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#030303',
          800: '#0a0a0a',
          700: '#121212',
          600: '#1a1a1a',
        },
        neon: {
          purple: '#a855f7',
          purpleHover: '#9333ea',
          green: '#22c55e',
          greenHover: '#16a34a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'radial-hero': 'radial-gradient(circle at center, #1a1a2e 0%, #030303 70%)',
      },
      animation: {
        'glow-purple': 'glow-purple 2s ease-in-out infinite alternate',
        'glow-green': 'glow-green 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'glow-purple': {
          '0%': { boxShadow: '0 0 5px #a855f7, 0 0 10px #a855f7' },
          '100%': { boxShadow: '0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #a855f7' },
        },
        'glow-green': {
          '0%': { boxShadow: '0 0 5px #22c55e, 0 0 10px #22c55e' },
          '100%': { boxShadow: '0 0 10px #22c55e, 0 0 20px #22c55e, 0 0 30px #22c55e' },
        },
      }
    },
  },
  plugins: [],
}
