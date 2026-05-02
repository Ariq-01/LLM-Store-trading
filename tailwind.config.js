/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        ios: {
          bg: "#000000",
          surface: "#1c1c1e",
          card: "#2c2c2e",
          border: "#3a3a3c",
          blue: "#0a84ff",
          green: "#30d158",
          gray: "#8e8e93",
          label: "#ffffff",
          sublabel: "#ebebf5",
        },
      },
      borderRadius: {
        ios: "12px",
        "ios-lg": "20px",
      },
      backdropBlur: {
        ios: "20px",
      },
    },
  },
  plugins: [],
}
