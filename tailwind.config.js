/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    minWidth: {
      inputBox: "210px",
    },
    fontSize: {
      header: "2rem",
      earnings: "2.5rem",
    },
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      "lv-green": "#178830",
      "lv-grey": "#3D3D3D",
      "lv-light-grey": "#212529",
      "neutral-400": "#A3A3A3",
      "lv-blue": "#04589B",
      "lvcta-blue": "#006CF4",
      "lv-slate-blue": "#46626F",
      "lv-pistachio": "#C7D432",
    },
    extend: {},
  },
  plugins: [],
};

