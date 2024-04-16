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
        blue: "#0064D2",
        yellow: "#F2B000",
        green: "#86B816",
        grey: "#455A64",
        grey__light: "#F7F7F7",
        red: "#E6303A"
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'], 
  },
  plugins: [],
};
