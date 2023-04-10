/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto"],
    },
  },

  plugins: [require("flowbite/plugin")],
};
