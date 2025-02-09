import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  content: [
    "./src/about/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  plugins: [
    heroui({
      addCommonColors: true,
      prefix: "heroui",
      themes: {
        light: {
          colors: {
            background: "#ffffff",
            foreground: "#11181C",
            primary: {
              foreground: "#ffffff",
              DEFAULT: "#000000"
            }
          },
        },
        dark: {
          colors: {
            background: "#000000",
            foreground: "#ECEDEE",
            primary: {
              foreground: "#11181C",
              DEFAULT: "#ffffff"
            }

          },
        },
      },
    }),
  ],
} as Config;
