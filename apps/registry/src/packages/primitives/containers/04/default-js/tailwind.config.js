const config = {
  content: [],
  theme: {
    extend: {
      animation: {
        // For @/packages/primitives/containers/04
        "border-spin-clockwise": "border-spin-clockwise 7s linear infinite",
        "border-spin-anticlockwise":
          "border-spin-anticlockwise 7s linear infinite",
      },
      keyframes: {
        // For @/packages/primitives/containers/04
        "border-spin-clockwise": {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "border-spin-anticlockwise": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
