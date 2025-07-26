/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/*.{css,scss}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontSize: {
        "2xs": "0.5625rem",
      },
      colors: {
        primary: {
          50: "var(--blue-primary-0)",
          100: "var(--blue-primary-1)",
          150: "var(--blue-primary-2)",
          200: "var(--blue-primary-3)",
          300: "var(--blue-primary-4)",
          400: "var(--blue-primary-5)",
          500: "var(--blue-primary-6)",
          600: "var(--blue-primary-7)",
          700: "var(--blue-primary-8)",
          800: "var(--blue-primary-9)",
          850: "var(--blue-primary-10)",
          900: "var(--blue-primary-11)",
          950: "var(--blue-primary-12)",
        },
        secondary: {
          0: "var(--green-primary-0)",
          50: "var(--green-primary-1)",
          100: "var(--green-primary-2)",
          150: "var(--green-primary-3)",
          200: "var(--green-primary-4)",
          300: "var(--green-primary-5)",
          400: "var(--green-primary-6)",
          500: "var(--green-primary-7)",
          600: "var(--green-primary-8)",
          700: "var(--green-primary-9)",
          800: "var(--green-primary-10)",
          850: "var(--green-primary-11)",
          900: "var(--green-primary-12)",
          950: "var(--green-primary-13)",
        },
        tertiary: {
          50: "var(--red-primary-0)",
          100: "var(--red-primary-1)",
          150: "var(--red-primary-2)",
          200: "var(--red-primary-3)",
          300: "var(--red-primary-4)",
          400: "var(--red-primary-5)",
          500: "var(--red-primary-6)",
          600: "var(--red-primary-7)",
          700: "var(--red-primary-8)",
          800: "var(--red-primary-9)",
          850: "var(--red-primary-10)",
          900: "var(--red-primary-11)",
          950: "var(--red-primary-12)",
        },
        neutral: {
          Pure_White: "var(--neutral-white)",
          0: "var(--neutral-0)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          900: "var(--netutral-900)",
        },
        danger: {
          100: "var(--danger-primary-0)",
          150: "var(--danger-primary-1)",
          200: "var(--danger-primary-2)",
          300: "var(--danger-primary-3)",
          400: "var(--danger-primary-4)",
          500: "var(--danger-primary-5)",
        },
      },
      fontFamily: {
        sans: ["var(--font-iransans)", ...fontFamily.sans],
      },
      boxShadow: {
        "primary-1": "0px 2px 16px 0px rgba(33, 33, 33, 0.08)",
        "primary-2": "0px 2px 12px 0px rgba(33, 33, 33, 0.04)",
      },
      borderRadius: {
        "primary-1": "20px",
        "primary-2": "16px",
        "primary-3": "12px",
      },
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.1)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.1)" },
          "70%": { transform: "scale(1)" },
        },
      },
      animation: {
        heartbeat: "heartbeat 1.5s infinite ease-in-out",
      },
    },
  },

  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
