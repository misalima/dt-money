import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        mono: ['var(--font-poppins)'],
      },
      colors: {
        "title": "var(--title)",
        "income": "var(--income)",
        "outcome": "var(--outcome)",
        "header": "var(--header)",
        "table-header": "var(--table-header)",
        "button": "var(--button)",
        "background": "var(--background)",
      },
    },
  },
  plugins: [],
};
export default config;
