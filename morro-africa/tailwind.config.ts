import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'grande': '1000px',
      'md': '640px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      colors: {
        'preto': '#322828',
        'verde-header': '#264318',
        'branco': '#F5F5F5'
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
