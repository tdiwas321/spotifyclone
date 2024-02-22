/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#1db954",
        darkGrey: "	#212121",
        black: "	#121212",
        grey: "	#535353",
        lightGrey: "#b3b3b3",
      },
    },
  },
  plugins: [],
};
