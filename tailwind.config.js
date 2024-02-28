/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {}
  },
  corePlugins: {
    preflight: false
  },
  plugins: [require('tailwindcss-debug-screens')]
  // variants: {
  //   lineClamp: ['responsive', 'hover']
  // }
}
