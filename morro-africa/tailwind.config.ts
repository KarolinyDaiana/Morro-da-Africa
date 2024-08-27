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
        'preto': '#322828',
        'verde-header': '#264318',
        'branco': '#F5F5F5',
        'verde-hover': '#062C05'
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'titulo': ['Staatliches']
      },
    },
  },
  plugins: [],
};
export default config;
