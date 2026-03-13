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
        pink: {
          lgw: "#ff5086",
        },
        yellow: {
          lgw: "#ffe048",
        },
        teal: {
          lgw: "#79d3d1",
        },
        dark: {
          lgw: "#161616",
          "lgw-2": "#1a1a1a",
        },
      },
      fontFamily: {
        sans: ["Matter", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
