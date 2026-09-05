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
        graphite: {
          950: '#0B0F17',
          900: '#0F172A',
          850: '#162032',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
        },
        brandRed: {
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
          light: '#EF4444',
          accent: '#E11D48',
          hover: '#991B1B',
        },
        slateSurface: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
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
