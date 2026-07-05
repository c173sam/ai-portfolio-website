/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Aptos", "Segoe UI", "system-ui", "sans-serif"],
        display: ["Arial", "Aptos", "system-ui", "sans-serif"]
      },
      colors: {
        background: "oklch(var(--background) / <alpha-value>)",
        surface: "oklch(var(--surface) / <alpha-value>)",
        ink: "oklch(var(--ink) / <alpha-value>)",
        muted: "oklch(var(--muted) / <alpha-value>)",
        primary: "oklch(var(--primary) / <alpha-value>)",
        accent: "oklch(var(--accent) / <alpha-value>)",
        line: "oklch(var(--line) / <alpha-value>)"
      },
      boxShadow: {
        glow: "0 0 46px oklch(var(--primary) / 0.18)",
        panel: "0 18px 60px oklch(0 0 0 / 0.32)"
      },
      backgroundImage: {
        "radial-soft":
          "radial-gradient(circle at 20% 20%, oklch(var(--primary) / 0.22), transparent 34%), radial-gradient(circle at 80% 0%, oklch(var(--accent) / 0.16), transparent 30%)"
      }
    }
  },
  plugins: []
};
