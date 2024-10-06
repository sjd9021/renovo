/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0077BE',
          light: '#00A3E0',
          dark: '#005B8E',
        },
        secondary: {
          DEFAULT: '#8A2BE2',
          light: '#9B4EE6',
          dark: '#6A1CB7',
        },
        accent: '#00FFFF',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}