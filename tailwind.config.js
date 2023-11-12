/** @type {import('tailwindcss').Config} */
const newLocal = (module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {},
    screens: {
      xl: { max: "1200px" },
      lg: { max: "991px" },
      md: { max: "767px" },
      sm: { max: "550px" },
      xsm: { max: "375px" },
    },
  },
  plugins: [],
});
