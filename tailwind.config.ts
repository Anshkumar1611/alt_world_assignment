import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors:{
      background:"#f1f5f9",
      primary:'#e2e8f0',
      secondary:'#14b8a6',
      white:"#ffffff",
      black:"#000000",
      gray:"#6c7278",
      green:"#1d8f1f",
      golden:"#f7b812",
      orange:"#e93d17",
      link:"#1779e9",
     }
    },
  },
  plugins: [],
};
export default config;
