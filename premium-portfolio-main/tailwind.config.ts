import type { Config } from "tailwindcss";

// Design tokens for the portfolio. Colors are plain hex so they are easy to tweak.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f2f3ef", // page background, a cool vellum
        card: "#fbfbf8", // pinned paper
        ink: "#15181a", // primary text
        graphite: "#596066", // secondary text (AA on paper)
        rule: "#d4d7d1", // hairlines and tag borders
        ballpoint: {
          DEFAULT: "#2b47c9", // accent, links and focus
          deep: "#1f3499",
        },
        highlighter: "#ffe566", // used once, for the status marker
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Newsreader Variable", "Georgia", "serif"],
      },
      maxWidth: {
        page: "1040px",
        prose: "640px",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
