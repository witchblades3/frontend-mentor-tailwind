/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          softOrange: 'hsl(35, 77%, 62%)',
          softRed: 'hsl(5, 85%, 63%)',
        },
        secondary: {
          offWhite: 'hsl(36, 100%, 99%)',
          grayishBlue: 'hsl(233, 8%, 79%)',
          darkGrayishBlue: 'hsl(236, 13%, 42%)',
          veryDarkBlue: 'hsl(240, 100%, 5%)',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        content: '15px', // Puedes usar 'base' o 'paragraph' para una referencia más clara
      },
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".3em",
    },
  },
  plugins: [],
};
