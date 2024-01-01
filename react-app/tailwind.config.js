/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#1A88F7",
        "main-text": "#252a2b",
        "first-text": "#808089",
        "error": "#FF0000",
        "box-none-focut": "#F3F3F3",
        "second-text": "#D2D1D1 ",
        "sellerbg": "#EEF1FC",
        "cart-color": "#EEF1FC",
        "favorite": "#FF1037",
      },
    },
  },
  plugins: [],
};
