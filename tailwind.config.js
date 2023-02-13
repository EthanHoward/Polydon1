/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "PDI": "url('/PDI.svg')",
      },
      colors: {
        "PDIRED": "#E91920",
        "PDIBLUE": "#2500FF",
        "DARKPDIBLUE": "#0D0099",
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
}
