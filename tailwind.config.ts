import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/packages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        //Website
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        accentLight: "var(--accent-light)",
        primary: "var(--primary)",
        primaryLight: "var(--primary-foreground)",
        secondary: "var(--secondary)",

        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textComplementary: "var(--text-complementary)",

        error: "var(--error)",
        alert: "var(--alert)",
        success: "var(--success)",

        border: "var(--border)",

        //Components
        s_background: "var(--s_background)",
        s_foreground: "var(--s_foreground)",
        s_accent: "var(--s_accent)",
        s_accentLight: "var(--s_accent-light)",
        s_primary: "var(--s_primary)",
        s_primaryLight: "var(--s_primary-foreground)",
        s_secondary: "var(--s_secondary)",

        s_textPrimary: "var(--s_text-primary)",
        s_textSecondary: "var(--s_text-secondary)",
        s_textComplementary: "var(--s_text-complementary)",

        s_error: "var(--s_error)",
        s_alert: "var(--s_alert)",
        s_success: "var(--s_success)",

        s_border: "var(--s_border)",
      },
      animation: {
        // For @/packages/components/logo-carousel/Carousel_1.tsx
        "infinite-scroll-left": "infinite-scroll-left 50s linear infinite",
        "infinite-scroll-right": "infinite-scroll-right 50s linear infinite",
        // For @/packages/components/containers/Container_4.tsx
        "border-spin-clockwise": "border-spin-clockwise 7s linear infinite",
        "border-spin-anticlockwise":
          "border-spin-anticlockwise 7s linear infinite",
        // For @/packages/primitive/toast/Toast_1.tsx
        toastEntryRight: "toastEntryRight 0.2s linear",
        toastEntryLeft: "toastEntryLeft 0.2s linear",
      },
      keyframes: {
        // For @/packages/components/logo-carousel/Carousel_1.tsx
        "infinite-scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
        // For @/packages/components/containers/Container_4.tsx
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
        // For @/packages/primitive/toast/Toast_1.tsx
        toastEntryRight: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        toastEntryLeft: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
    },
    containers: {
      sm: "420px",
      md: "720px",
      lg: "900px",
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
