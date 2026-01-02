// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bm-gold': '#B8860B',      // Darker gold for text/borders
        'bm-gold-light': '#F4C430', // Bright gold for highlights
        'bm-royal': '#001F3F',     // Deep Navy Blue
        'bm-beige': '#FFF8DC',     // Cornsilk/Paper background
        'bm-paper': '#FDF5E6',     // Old Lace
      },
      boxShadow: {
        'paper': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 0 20px rgba(0,0,0,0.05)',
        'gold': '0 0 15px rgba(212, 175, 55, 0.3)',
      }
    },
  },
  plugins: [],
};
export default config;