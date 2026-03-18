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
        // LGW Sub-brand ring colors (use per sub-brand only)
        red: {
          lgw: "#FF3B30",   // Let's Go Win ring
        },
        gold: {
          lgw: "#FFD700",   // Win From Within ring
        },
        aqua: {
          lgw: "#00B9C9",   // Let's Go Give ring
        },
        // Site structural colors
        dark: {
          lgw: "#191919",
          "lgw-2": "#212121",
          teal: "#0F4951",
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
