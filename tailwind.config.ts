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
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        cream: "var(--color-muted-bg)",
        sand: "var(--color-accent-sand)",
        sage: "var(--color-accent-sage)",
        subtle: "var(--color-border)",
      },
      fontFamily: {
        serif: ["beaufort-pro", "Georgia", "serif"],
        sans: ["gravesend-sans", "system-ui", "-apple-system", "sans-serif"],
        body: ["var(--font-mulish)", "system-ui", "-apple-system", "sans-serif"],
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
