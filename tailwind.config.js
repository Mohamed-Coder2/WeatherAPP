/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'robinWave': "url('/public/01.png')",
        'robinMouthOpen': "url('/public/02.png')",
        'robinMouthClosed': "url('/public/03.png')",
        'robinThinking': "url('/public/04.png')",
        'robinTalking': "url('/public/05.png')",
        'punk1': "url('/public/12.png')",
        'punk2': "url('/public/13.png')",
        'punk3': "url('/public/14.png')",
        'punk4': "url('/public/15.png')"
      }
    },
  },
  plugins: [],
}

