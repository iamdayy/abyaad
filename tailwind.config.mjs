/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'abyaad-blue': '#82C9F9',
        'abyaad-navy': '#1A2F4B',
        'abyaad-ivory': '#E5D9C3',
        'abyaad-mocca': '#A38F75',
        'abyaad-stone': '#708090'
      }
    }
  },
  plugins: []
};
