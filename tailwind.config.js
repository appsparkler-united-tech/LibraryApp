module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#38b2a0", // Teal
          "secondary": "#4a5568", // Adjust as needed
          "accent": "#f6e05e", // Adjust as needed
          "neutral": "#3d4451", // Adjust as needed
          "base-100": "#ffffff", // Adjust as needed
          "info": "#3abff8", // Adjust as needed
          "success": "#2ed8a5", // Adjust as needed
          "warning": "#fbbf24", // Adjust as needed
          "error": "#fc8181", // Adjust as needed
        },
      },
      // other themes can go here
    ],
  }, 
}
