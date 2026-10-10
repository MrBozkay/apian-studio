import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#000000",
        bone: {
          DEFAULT: "#ffffff",
          white: "#ffffff",
        },
        ash: {
          DEFAULT: "#9a9a9a",
          gray: "#9a9a9a",
        },
        mist: {
          DEFAULT: "#bdbdbd",
          silver: "#bdbdbd",
        },
        iris: {
          DEFAULT: "#8052ff",
          electric: "#8052ff",
        },
        saffron: {
          DEFAULT: "#ffb829",
          spark: "#ffb829",
        },
        verdant: {
          DEFAULT: "#15846e",
          deep: "#15846e",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        caption: ["12px", { lineHeight: "1.5", fontWeight: "400" }],
        "nav-label": ["14px", { lineHeight: "1.2", letterSpacing: "0.35px", fontWeight: "600" }],
        body: ["18px", { lineHeight: "1.5", letterSpacing: "0px", fontWeight: "200" }],
        "heading-2xs": ["24px", { lineHeight: "1.25", letterSpacing: "-0.48px", fontWeight: "400" }],
        "heading-xs": ["27px", { lineHeight: "1", letterSpacing: "0px", fontWeight: "400" }],
        subheading: ["36px", { lineHeight: "1.2", letterSpacing: "0px", fontWeight: "400" }],
        "heading-sm": ["42px", { lineHeight: "1.2", letterSpacing: "-1.68px", fontWeight: "400" }],
        heading: ["48px", { lineHeight: "1.1", letterSpacing: "-1.68px", fontWeight: "400" }],
        "heading-lg": ["78px", { lineHeight: "1.1", letterSpacing: "-3.12px", fontWeight: "400" }],
        display: ["113px", { lineHeight: "1.1", letterSpacing: "-4.52px", fontWeight: "400" }],
      },
      maxWidth: {
        dala: "1280px",
      },
      spacing: {
        "30": "30px",
        "60": "60px",
        "96": "96px",
        "120": "120px",
      },
      borderRadius: {
        nav: "24px",
        tags: "9999px",
        cards: "24px",
        buttons: "24px",
      },
    },
  },
  plugins: [],
} satisfies Config;
