import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./sections/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#1B1B3A", paper: "#FFFBF2", sand: "#FFF1D6", mist: "#5A5E7D", line: "#E7DAB8", volt: "#3A4DFF", sun: "#FFD23F", blush: "#FFB3CC", mint: "#A8EBCB", snow: "#FFFFFF" },
      fontFamily: { display: ["var(--font-display)", "sans-serif"], body: ["var(--font-body)", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
