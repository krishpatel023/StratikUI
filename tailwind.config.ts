import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
    },
    containers: {
      sm: "420px",
      md: "720px",
      lg: "800px",
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
