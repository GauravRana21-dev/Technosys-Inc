/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this matches your file structure
  ],
  safelist: ["animate-marquee", "animate-marquee-reverse"],
  theme: {
    extend: {
      colors : {
        "primary-background-color" : "#f6f5f1"
      },
      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
        "marquee-reverse":
          "marquee-reverse var(--duration, 30s) linear infinite",
        gradient: "gradientRotate 6s ease infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          to: { transform: "translateX(50%)" },
        },
        gradientRotate: {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
    },
  }, };