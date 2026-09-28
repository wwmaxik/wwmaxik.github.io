/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: [
          '"SF Mono"',
          'ui-monospace',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      colors: {
        apple: {
          blue: '#0071E3',
          'blue-hover': '#0077ED',
          'blue-dark': '#2997FF',
          'blue-dark-hover': '#47A7FF',
          subtle: '#F5F5F7',
          'subtle-dark': '#1C1C1E',
          card: '#FFFFFF',
          'card-dark': '#1C1C1E',
          border: 'rgba(0, 0, 0, 0.08)',
          'border-dark': 'rgba(255, 255, 255, 0.12)',
        },
      },
      boxShadow: {
        'apple-sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'apple-card': '0 4px 20px rgba(0, 0, 0, 0.04)',
        'apple-card-hover': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'apple-dark': '0 8px 30px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

