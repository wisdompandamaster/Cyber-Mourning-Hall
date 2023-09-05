import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        knock: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        add: {
          "0%": { opacity: "1" },
          "100% ": { transform: "translate(-50%, -20px)", opacity: "0" },
        },
        flow: {
          "0%": { right: "0%", transform: "translateX(100%)" },
          "100%": { right: "100%", transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
