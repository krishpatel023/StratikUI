import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/packages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
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

        blur: {
          DEFAULT: "var(--blur)",
          secondary: "var(--blur-secondary)",
          foreground: "var(--blur-foreground)",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        // For @/packages/primitives/buttons/02/
        circleGrow: "circleGrow 0.5s ease-in-out",
      },
      keyframes: {
        // For @/packages/primitives/buttons/02/
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
    containers: {
      sm: "420px",
      md: "720px",
      lg: "900px",
    },
  },
  plugins: [require("tailwindcss-react-aria-components")],
};
export default config;
