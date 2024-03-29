/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'DarkViolet': 'hsl(256, 26%, 20%)',
        'GrayishBlue': 'hsl(216, 30%, 68%)',
        'VeryDarkViolet': 'hsl(270, 9%, 17%)',
        'DarkGrayishViolet': 'hsl(273, 4%, 51%)',
        'VeryLiGray': 'hsl(0, 0%, 98%)'
      },
      backgroundImage:{
        // header
        "bg-headerRight-Desktop": "url('/images/bg-pattern-intro-right-desktop.svg')",
        "bg-headerRight-mobile": "url('/images/bg-pattern-intro-right-mobile.svg')",

        "bg-headerLeft-desktop": "url('/images/bg-pattern-intro-left-desktop.svg')",
        "bg-headerLeft-mobile": "url('/images/bg-pattern-intro-left-mobile.svg')",

        // body
        "bg-bodydesktop": "url('/images/bg-pattern-how-we-work-desktop.svg')",
        "bg-bodymobile": "url('/images/bg-pattern-how-we-work-mobile.svg')",
        // footer
        "bg-footerdesktop": "url('/images/bg-pattern-footer-desktop.svg')",
        "bg-footermobile": "url('/images/bg-pattern-footer-mobile.svg')",

        "bg-moblie-nav": "url('/images/bg-pattern-mobile-nav.svg')"
      }
    },
  },
  plugins: [],
}