module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orchid: "#c183e0;",
      },
      fontFamily: {
        nunito: ["Nunito", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
