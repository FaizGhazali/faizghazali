/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        'light': 'var(--text-color-light)',
        'dark': 'var(--text-color-dark)',
      },
    },
  },
  variants:{
    extend:{},
  },
  plugins: [],
}
