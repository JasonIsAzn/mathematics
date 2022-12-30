/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        bg0: "var(--bg0)",
        bg1: "var(--bg1)",
        bg2: "var(--bg2)",
        bg3: "var(--bg3)",
        fg0: "var(--fg0)",
        "green-color0": "var(--green-color0)",
        "green-color1": "var(--green-color1)",
        "red-color0": "var(--red-color0)",
        "purple-color0": "var(--purple-color0)",
      },
    },
  },
  plugins: [],
};
