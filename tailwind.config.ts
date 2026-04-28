import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm copper / rose-gold palette pulled from the Lash Bar logo
        copper: {
          50: "#FBF6EE",
          100: "#F4EBDC",
          200: "#E8D5B7",
          300: "#D9B98C",
          400: "#C89968",
          500: "#B8895B",
          600: "#9F7148",
          700: "#7E5836",
          800: "#5C3F26",
          900: "#3D2917",
        },
        cream: "#FBF6EE",
        cream2: "#F4EBDC",
        ink: "#2A1F15",
        muted: "#7A6856",
        rule: "#E5D9C5",
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
