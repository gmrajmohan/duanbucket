/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"
module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        catamaran: ['Catamaran', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
