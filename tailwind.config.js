/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
        barlow: ['Barlow', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
        colors: {
          primary: '#007bff', // Adjust to match your design
        },
        spacing: {
          '30': '120px', // Adjust if needed
        },
      },
    },
  },
  plugins: [],
};
