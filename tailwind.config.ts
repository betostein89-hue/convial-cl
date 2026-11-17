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
        convial: {
          navy: {
            DEFAULT: "#10243A",
            dark: "#0B1827",
            light: "#1C3B5E",
            surface: "#142D48",
          },
          turquoise: {
            DEFAULT: "#13A6A0",
            dark: "#0E817C",
            light: "#E6F7F6",
            hover: "#10928D",
          },
          gray: {
            DEFAULT: "#F3F6F8",
            light: "#F8FAFC",
            border: "#E2E8F0",
            muted: "#64748B",
          },
          amber: {
            DEFAULT: "#F0A43A",
            dark: "#C68222",
            light: "#FEF7ED",
          },
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
