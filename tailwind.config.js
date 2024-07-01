/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", 'sans-serif'],
        heading: ["Ubuntu", 'sans-serif'],
        subHeading: ["Nunito", 'sans-serif'],
        dancing: ["Dancing Script", 'cursive'],
        'league-gothic': ['"League Gothic"', 'sans-serif'],
      }, 
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        bg_primary: "#F1F6F9",
        text_main: "#212A3E",
        bg_btn: "#394867",
        text_btn: "#9BA4B5",
        blue: "#0064D2",
        yellow: "#F2B000",
        green: "#86B816",
        grey: "#455A64",
        grey__light: "#F7F7F7",
        red: "#E6303A"
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'], 
  },
  plugins: [],
  mode: 'jit',
};
