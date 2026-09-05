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
        navy: {
          950: '#030C19',
          900: '#07162C',
          850: '#0B192C',
          800: '#1E2E45',
          700: '#2A3F5F',
        },
        corporate: {
          blue: '#0066CC',
          lightBlue: '#0284C7',
          sky: '#38BDF8',
          accent: '#2563EB',
        },
        slateSurface: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace']
      },
    },
  },
  plugins: [],
}
