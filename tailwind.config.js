
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#39105E",
        "primary-light": "#8C01FA",
        secondary: "#37CCF7",
        "text-primary": "#ffffff",
         "graytext-primary": "#C4C4C4CC",
          "garylight-primary": "#94A3B8",
        "text-dark": "#03030380",
         "text-gray400": "#C4C4C4", 
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #8C01FA, #000000)",
        "gradient-border-dark":
          "linear-gradient(135deg, #440178, #8C01FA)",
        "gradient-border-light":
          "linear-gradient(135deg, #BA9CFF, #300056)",
        "gradient-text-primary":
          "linear-gradient(135deg, #19FB9B, #8C01FA)",
        "gradient-text-primary-light":
          "linear-gradient(135deg, #00FFBD, #025B8C)",
         "gradient-text-main-heading": "linear-gradient(to right, #00FFF3, #AB5EFF)",
        "gradient-text-secondary":
          "linear-gradient(135deg, #0047FF, #00BCD4)",
        "gradient-heading":
          "linear-gradient(180deg, #714DFF, #9C83FF, #E151FF)",
          "gradient-icon":
          "linear-gradient(to bottom right, #7058EE, #C94DB5, #D8A557)",
  "gradient-heading-large":
          "linear-gradient(to bottom right, #714DFF, #9C83FF, #E151FF)",
 'gradient-text': 'linear-gradient(to bottom, #37CCF7, #39105E)',   
      },
    },
     maxWidth: {
    'custom': '92rem',
  },
  },
  plugins: [],
};


