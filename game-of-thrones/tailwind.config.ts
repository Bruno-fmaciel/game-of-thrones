import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'color-primary': ' #1A1A1D',
        'color-secondary': ' #8B0000',
        'color-accent': ' #C4A000',
        'color-text': ' #D3D3D3'
      },
    },
  },
  plugins: [],
} satisfies Config;
