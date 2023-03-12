/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azulEscuro: '#006ec7',
        vermelho: '#dc2626',
        preto: '#171717',
        azulMedio: '#0033ab'
        
      }
    },
  },
  plugins: [],
}
