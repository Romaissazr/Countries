/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // This enables class-based dark mode (using the 'dark' class on the <body> or root element)

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        VeryLightGray: "hsl(0, 0%, 98%)",
        DarkGray: "hsl(0, 0%, 52%)",
        VeryDarkBlue: "hsl(200, 15%, 8%)",
        DarkBlueBg: "hsl(207, 26%, 17%)", 
        DarkBlueEl: "hsl(209, 23%, 22%)"
      },
      fontFamily: {
        Nunito: ['Nunito Sans', 'sans-serif']
      },
      fontSize: {
        HomePage: "14px",
        DetailPage: "16px"
      },
      boxShadow: {
        customlight: '0 1px 4px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
