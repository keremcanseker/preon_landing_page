/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#fafafa",
          200: "#949494",
          300: "#132742",
        },
        darkorange: "#ff7b29",
        black: "#000",
        whitesmoke: "#f3f3f3",
        deepskyblue: "#00b3ff",
        white: "#fff",
        cornflowerblue: {
          100: "#0099e6",
          200: "rgba(0, 153, 230, 0.09)",
        },
        lightgray: {
          100: "#d5d5d5",
          200: "#d1d1d1",
        },
        chocolate: "#cc4700",
        darkslateblue: "#263fa3",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        "12xs": "1px",
        "3xs": "10px",
        "4xs": "9px",
        "11xl": "30px",
        "25xl": "44px",
        xl: "20px",
        mid: "17px",
      },
    },
    fontSize: {
      xs: "12px",
      lg: "18px",
      base: "16px",
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      "27xl": "46px",
      "18xl": "37px",
      "9xl": "28px",
      "20xl": "39px",
      "12xl": "31px",
      "4xl": "23px",
      "35xl": "54px",
      "24xl": "43px",
      "13xl": "32px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      mid: "17px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
};
