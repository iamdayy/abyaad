/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'ui-serif', 'Georgia', 'serif']
      },
      colors: {
        'abyaad-blue': '#82C9F9',
        'abyaad-navy': '#1A2F4B',
        'abyaad-ivory': '#E5D9C3',
        'abyaad-mocca': '#A38F75',
        'abyaad-stone': '#708090',
        'abyaad-ink': '#0F1723',
        'abyaad-mist': '#F2F4F7',
        'abyaad-line': '#D7DFE8'
      },
      boxShadow: {
        panel: '0 24px 50px -38px rgba(15, 23, 35, 0.45)'
      }
    }
  },
  plugins: []
};
