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
        midnight: {
          950: '#06090E',
          900: '#0B0F17',
          850: '#0D111A',
          800: '#131A26',
          700: '#1E293B',
        },
        cyber: {
          cyan: '#00F2FE',
          blue: '#4FACFE',
        },
        sapphire: {
          900: '#0A2540',
          800: '#1B365D',
        },
        neon: {
          emerald: '#00E676',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace']
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%)',
        'sapphire-gradient': 'linear-gradient(135deg, #0A2540 0%, #1B365D 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #00E676 0%, #00B0FF 100%)',
        'glass-radial': 'radial-gradient(circle at 50% 0%, rgba(0, 242, 254, 0.15) 0%, rgba(11, 15, 23, 0) 70%)',
      }
    },
  },
  plugins: [],
}
