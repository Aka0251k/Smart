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
        // SmartGrid brand palette
        brand: {
          navy:     "#0D1F3C",   // sidebar background
          blue:     "#1565C0",   // primary action blue
          blueMid:  "#1976D2",   // hover state
          blueLight:"#E8F0FE",   // blue tint bg
          teal:     "#0D9488",   // secondary accent
          green:    "#16A34A",   // status: normal/good
          amber:    "#D97706",   // status: warning
          red:      "#DC2626",   // status: overload/error
        },
        surface: {
          page:     "#F8FAFC",   // page background
          card:     "#FFFFFF",   // card background
          border:   "#E2E8F0",   // card / divider border
          muted:    "#F1F5F9",   // muted bg tint
        },
        text: {
          primary:  "#0F172A",
          secondary:"#475569",
          muted:    "#94A3B8",
          inverse:  "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        card:  "0 1px 3px 0 rgba(0,0,0,.08), 0 1px 2px -1px rgba(0,0,0,.06)",
        panel: "0 4px 16px 0 rgba(0,0,0,.10)",
        lg:    "0 8px 32px 0 rgba(0,0,0,.12)",
      },
      borderRadius: {
        card: "12px",
        btn:  "8px",
      },
    },
  },
  plugins: [],
};
export default config;
