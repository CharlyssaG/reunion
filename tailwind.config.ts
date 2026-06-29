import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Comic Sans MS"', '"Chalkboard SE"', 'cursive'],
        mono: ['"Courier New"', 'Courier', 'monospace'],
        body: ['"Trebuchet MS"', 'Arial', 'sans-serif'],
      },
      colors: {
        lake:    '#1B4965',
        pine:    '#2D5016',
        dune:    '#C9A96E',
        glacier: '#1A3A4A',
        aurora:  '#2E7D5E',
        ocean:   '#0B4F6C',
        coral:   '#C45C3A',
        sand:    '#E8C98A',
        turq:    '#1B8A8A',
        neon:    { yellow: '#FFFF00', cyan: '#00FFFF', pink: '#FF69B4', green: '#00FF00' },
        win95:   { gray: '#C0C0C0', blue: '#000080', teal: '#008080' },
      },
      backgroundImage: {
        'stars': "radial-gradient(ellipse at top, #0a0a2e 0%, #000010 100%)",
        'checker': "repeating-conic-gradient(#1a1a3e 0% 25%, #0a0a1e 0% 50%)",
      },
      animation: {
        'marquee': 'marquee 18s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(100%)' }, '100%': { transform: 'translateX(-100%)' } },
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
        scanline: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(100vh)' } },
      },
    },
  },
  plugins: [],
}
export default config
