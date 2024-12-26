module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: ['cupcake'], // Set the Emerald theme globally
  }, 
}
