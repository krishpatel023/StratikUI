import type { Config } from "tailwindcss";

const config: Config = {
  content: [],
  theme: {
    extend: {
      animation: {
        circleGrow: "circleGrow 0.5s ease-in-out",
      },
      keyframes: {
        circleGrow: {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
