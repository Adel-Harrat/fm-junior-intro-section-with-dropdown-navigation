/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tw-white": "hsl(0, 0%, 98%)",
        "tw-gray": "hsl(0, 0%, 41%)",
        "tw-black": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        primary: ["'Epilogue'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
