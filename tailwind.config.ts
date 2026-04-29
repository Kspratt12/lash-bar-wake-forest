import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm Dermato-inspired palette pulled from the Lash Bar logo
        copper: {
          50: "#F8EFE0",
          100: "#F0E2CE",
          200: "#EAD7BD",
          300: "#DCC09A",
          400: "#C8A574",
          500: "#B08856",
          600: "#8B6840",
          700: "#6B4F32",
          800: "#4A3624",
          900: "#2D2014",
        },
        cream: "#F5EDE2",
        cream2: "#EFE4D2",
        cardtan: "#EAD7BD",
        cardcream: "#F0E2CE",
        ink: "#2D2014",
        "ink-soft": "#6B4F32",
        muted: "#8A7560",
        rule: "#DCC9AC",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        script: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightx: "-0.01em",
        tightxx: "-0.02em",
        widex: "0.18em",
      },
      keyframes: {
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        floatSoft: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        riseIn: "riseIn 0.7s cubic-bezier(0.2,0.7,0.2,1) both",
        fadeIn: "fadeIn 1s ease-out both",
        floatSoft: "floatSoft 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
