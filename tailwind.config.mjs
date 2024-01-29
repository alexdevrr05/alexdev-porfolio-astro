/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // colors pallet inspiration: https://visme.co/blog/website-color-schemes
      colors: {
        primary: '#66FCF1', // turquoise
        secondary: '#45A29E', // dark turquoise
        customGray: '#C5C6C7', // gray
        darkGray: '#1f2833',
      },
    },
  },
  plugins: [],
};
