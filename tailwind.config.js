module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["poppins", "sans-serif"],
      },
      colors: {
        primary: {
          "cyan": "hsl(180, 66%, 49%)",
          "dark-violet": "hsl(257, 27%, 26%)",
        },
        secondary: {
          "red": "hsl(0, 87%, 67%)",
        },
        neutral: {
          "gray": "hsl(0, 0%, 75%)",
          "grayish-violet": "hsl(257, 7%, 63%)",
          "very-dark-blue": "hsl(255, 11%, 22%)",
          "very-dark-violet": "hsl(260, 8%, 14%)",
        }
      }
    },
  },
  plugins: [],
}
