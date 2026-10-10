/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#010101",
        charcoal: {
          DEFAULT: "#1f1f23",
          control: "#1f1f23",
        },
        porcelain: "#e0e0e0",
        machine: {
          DEFAULT: "#16191b",
          well: "#16191b",
        },
        hairline: {
          DEFAULT: "#252525",
          ash: "#252525",
        },
        muted: {
          DEFAULT: "#828b8d",
          steel: "#828b8d",
        },
        dormant: {
          DEFAULT: "#444444",
          graphite: "#444444",
        },
        faint: {
          DEFAULT: "#646e71",
          steel: "#646e71",
        },
        translucent: "rgba(54, 61, 67, 0.4)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        body: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "micro-label": ["10px", { lineHeight: "1.4", letterSpacing: "2.4px", fontWeight: "600" }],
        "utility-nav": ["13px", { lineHeight: "1.4", letterSpacing: "1.04px", fontWeight: "300" }],
        "utility-nav-tight": ["13px", { lineHeight: "1.3", letterSpacing: "1.04px", fontWeight: "300" }],
        body: ["16px", { lineHeight: "1.4", letterSpacing: "0px", fontWeight: "400" }],
        "body-large": ["18px", { lineHeight: "1.4", letterSpacing: "0px", fontWeight: "400" }],
        "module-heading": ["26px", { lineHeight: "1.2", letterSpacing: "-0.52px", fontWeight: "600" }],
        "feature-heading": ["32px", { lineHeight: "1.2", letterSpacing: "-0.64px", fontWeight: "600" }],
        display: ["100px", { lineHeight: "1", letterSpacing: "-3px", fontWeight: "400" }],
        "display-monumental": ["200px", { lineHeight: "0.8", letterSpacing: "-6px", fontWeight: "400" }],
      },
      maxWidth: {
        awe: "940px",
      },
      spacing: {
        "60": "60px",
        "96": "96px",
        "120": "120px",
        "192": "192px",
        "224": "224px",
      },
      borderRadius: {
        cards: "16px",
        pills: "100px",
        badges: "100px",
        images: "80px",
        inputs: "0px",
        buttons: "100px",
        "compact-cards": "8px",
      },
    },
  },
  plugins: [],
};