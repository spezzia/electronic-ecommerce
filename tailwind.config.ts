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
        montserrat: ['Montserrat', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif']
      },
      boxShadow: {
        productImage: '4px 4px 24px -1px #00000014',
        providers: '0px 4px 24px -1px #00000014'
      },
      borderRadius: {
        productImage: '15px'
      }
    },
  },
  plugins: [],
};
export default config;
