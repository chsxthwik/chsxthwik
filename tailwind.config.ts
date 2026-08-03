import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "hsl(var(--ink))", surface: "hsl(var(--surface))", line: "hsl(var(--line))", acid: "hsl(var(--acid))", cyan: "hsl(var(--cyan))", hot: "hsl(var(--hot))" },
      fontFamily: { sans: ["var(--font-geist)", "ui-sans-serif"], mono: ["var(--font-mono)", "ui-monospace"] },
      boxShadow: { acid: "0 0 42px hsl(var(--acid) / .16)", cyan: "0 0 42px hsl(var(--cyan) / .15)" }
    }
  },
  plugins: []
};

export default config;
