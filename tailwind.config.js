/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arvo: ['Arvo', 'serif'],
        'dancing-script': ['Dancing Script', 'cursive'],
      },
      colors: {
        purple: {
          700: '#674ea7',
        },
        red: {
          500: '#e25c67',
        },
      },
    },
  },
  plugins: [],
}
