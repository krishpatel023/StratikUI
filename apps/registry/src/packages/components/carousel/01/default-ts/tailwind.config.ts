import type { Config } from "tailwindcss";

const config: Config = {
  content: [],
  theme: {
    extend: {
      animation: {
        "infinite-scroll-left": "infinite-scroll-left 50s linear infinite",
        "infinite-scroll-right": "infinite-scroll-right 50s linear infinite",
      },
      keyframes: {
        "infinite-scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
