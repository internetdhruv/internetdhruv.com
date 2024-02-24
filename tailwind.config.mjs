/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      sans: ['IBM Plex Mono', 'monospace'],
    },
    extend: {
      colors: {
        gray: '#1d1f21',
        blue: '#2176ff',
        mint: '#2bbc8a',
        pink: '#d480aa',
        red: '#e05263',
        silver: '#c9cacc',
      },
    },
  },
  plugins: [],
};
