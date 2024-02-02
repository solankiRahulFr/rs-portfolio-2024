/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: { 'xs': { 'max': '640px' },
      's-688': { 'max': '689px'},
      'xxs': { 'max': '321px' },
      'mxs': { 'max': '370px' } },
    },
  },
  plugins: [],
}

