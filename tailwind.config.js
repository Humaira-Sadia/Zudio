/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", 'sans-serif'],
        heading: ["Ubuntu", 'sans-serif'],
        subHeading: ["Nunito", 'sans-serif']
      }, 
      colors: {
        bg_primary: "#3F51B5",
        blue: "#303F9F",
        yellow: "#FFC107",
        grey: "#455A64",
        grey__light: "#F7F7F7",
        red: "#8C0001"
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'], 
  },
  plugins: [],
};
