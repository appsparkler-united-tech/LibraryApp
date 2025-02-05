const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust paths as necessary
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    plugin(function ({ addBase, config }) {
      addBase({
        ":root": config("theme"),
      });
    }),
  ],
  daisyui: {
    themes: ["cupcake"], // Use your custom theme name
  },
};
