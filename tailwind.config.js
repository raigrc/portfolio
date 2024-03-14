/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Times-New-Roman"],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
  daisyui: {
    themes: [
      {
        myDark: {
          primary: "#194A8A",
          secondary: "#061222",
          accent: "#256FD0",
          neutral: "#EEF4FC",
          "base-100": "#061322",
        },
        myLight: {
          primary: "#194A8A",
          secondary: "#CADDF6",
          accent: "#0E2A4E",
          neutral: "#061322",
          "base-100": "#EEF4FC",
        },
      },
    ],
  },
};
