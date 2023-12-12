import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: "#EEF1FF",
        primary: "#AAC4FF",
        secondary: "#D2DAFF",
        accent: "#B1B2FF",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
export default config;
