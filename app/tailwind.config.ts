import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#EB455F',
        'blue': '#2B3467',
        'white': '#ffffff',
        'black': '#232323',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
    },
    },
  },
  plugins: [],
} satisfies Config;
