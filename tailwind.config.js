/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./pages/**/*.{html,js,jsx}",
    "./layouts/**/*.{html,js,jsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      blue: "#2592F6",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [],
};
