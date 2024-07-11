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
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },

        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },

        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
          secondary: {
            DEFAULT: "var(--accent-secondary)",
            foreground: "var(--accent-secondary-foreground)",
          },
        },

        outline: {
          DEFAULT: "var(--outline)",
          secondary: "var(--outline-secondary)",
          foreground: "var(--outline-foreground)",
        },

        success: {
          DEFAULT: "var(--success)",
          secondary: "var(--success-secondary)",
          foreground: "var(--success-foreground)",
        },

        alert: {
          DEFAULT: "var(--alert)",
          secondary: "var(--alert-secondary)",
          foreground: "var(--alert-foreground)",
        },

        error: {
          DEFAULT: "var(--error)",
          secondary: "var(--error-secondary)",
          foreground: "var(--error-foreground)",
        },

        muted: {
          DEFAULT: "var(--muted)",
          secondary: "var(--muted-secondary)",
          foreground: "var(--muted-foreground)",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
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
        toastExit: "toastExit 0.5s forwards",
        // For @/packages/primitive/button/Button_6.tsx
        buttonGrow: "buttonGrow 0.4s linear forwards",

        // For @/packages/primitive/stepper/Stepper_1.tsx
        stepperGrow: "stepperGrow 0.4s linear",
        stepperGrowVertical: "stepperGrowVertical 0.4s linear",

        // For @/packages/primitive/modals/Modal_1.tsx
        "modal-fade-in": "modal-fade 0.3s ease-in",
        "modal-fade-out": "modal-fade 0.3s reverse ease-in",
        "modal-zoom": "modal-zoom 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
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
        toastExit: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },

        // For @/packages/primitive/button/Button_6.tsx
        buttonGrow: {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(0.5)",
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "0",
          },
        },
        // For @/packages/primitive/stepper/Stepper_1.tsx
        stepperGrow: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        stepperGrowVertical: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        // For @/packages/primitive/modals/Modal_1.tsx
        "modal-fade": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "modal-zoom": {
          "0%": {
            transform: "scale(0.8)",
          },
          "100%": {
            transform: "scale(1)",
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
  plugins: [
    require("@tailwindcss/container-queries"),
    require("tailwindcss-react-aria-components"),
  ],
};
export default config;
