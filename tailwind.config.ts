import { createThemes } from 'tw-colors';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  
  plugins: [
    createThemes(
      {
        light: {
          'bg_main': '#FFFFFF',
          'text_main': '#000000',
        },
        dark: {
          'bg_main': '#292929',
          'text_main': '#F5F5F5',
        }
      }
    ),
  ],
}