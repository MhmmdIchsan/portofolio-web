/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["var(--font-poppins)", "sans-serif"],
        },
        colors: {
          dark: "#0D1B1E",
          highlight: "#00FFB2",
          soft: "#C1FCEA",
          softBg: "#E6FFF9",
        },
      },
    },
    plugins: [],
  };
  