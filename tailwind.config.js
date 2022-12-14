/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app_old/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app_old` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "very-dark-gray": "hsl(0 0% 17%)",
        "dark-gray": "hsl(0 0% 59%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        "pattern-bg": "url('/pattern-bg.png')",
      },
    },
  },
  plugins: [],
};
