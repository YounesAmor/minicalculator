/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      "3xl": "0 0 50px",
    },
    screens: {
      sm: "375px",
      lg: "1000px",
    },
    extend: {
      backgroundImage: {
        heroDesktop: "url('/src/assets/images/bg-main-desktop.png')",
        heroMobile: "url('/src/assets/images/mobile/image-hero.jpg')",
      },
      colors: {
        darkCyan: "hsl(183, 100%, 15%)",
        veryGrayishCyan: "hsl(186, 14%, 43%)",
        grayishCyan: "hsl(184, 14%, 56%)",
        lightGrayishCyan: "hsl(185, 41%, 84%)",
        veryLightGrayishCyan: "hsl(189, 41%, 97%)",
        strongCyan: "hsl(172, 67%, 45%)",
      },
      fontFamily: {
        spaceMono: ["Space Mono", "monospace"],
      },
    },
  },
  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    html: "HTML",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
  plugins: [],
};
