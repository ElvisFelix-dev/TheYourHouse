module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/imgBg.jpg')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
