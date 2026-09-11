import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-main-bg)",
        foreground: "var(--color-primary-text)",
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
        },
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        "main-bg": "var(--color-main-bg)",
        "secondary-bg": "var(--color-secondary-bg)",
        "primary-text": "var(--color-primary-text)",
        "muted-text": "var(--color-muted-text)",
        border: "var(--color-border)",
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        "site": "1800px",
        "content": "1360px",
        "readable": "820px",
      },
      letterSpacing: {
        widest: "0.2em",
        wider: "0.1em",
        normal: "0em",
        tight: "-0.015em",
      },
      spacing: {
        "gutter": "5vw",
      },
    },
  },
  plugins: [],
};

export default config;
