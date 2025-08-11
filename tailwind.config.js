/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "own-primary": "#7A71EB",
        "border": "#E6E6EE",
      },
    },
  },
  plugins: [],
};
