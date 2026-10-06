import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ebene: "#15100D",
        "ebene-doux": "#221A15",
        or: "#C6A15B",
        "or-clair": "#E3C98C",
        bordeaux: "#5E1A22",
        "bordeaux-vif": "#7A2630",
        sable: "#EFE4CF",
        ivoire: "#FAF5EB",
        encre: "#2A211C",
        whatsapp: "#1FA855",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      maxWidth: { lecture: "68ch" },
    },
  },
  plugins: [],
};
export default config;
