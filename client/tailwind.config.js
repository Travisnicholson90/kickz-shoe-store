/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: 'rgba(229, 231, 235, 0.3)',
      },
    },
  },
  plugins: [],
}
