/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f8f7f3",
        paper: "#fdfcfa",
        parch: "#eef0e8",
        forest: "#1d2c1a",
        pine: "#2c412a",
        moss: "#3e5237",
        sage: "#8b9c83",
        sagebg: "#e3e7db",
        ink: "#182415",
        soft: "#3e4a3c",
        faint: "#5a6658",
        linen: "#d9d5cb",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.42em",
      },
    },
  },
  plugins: [],
};
