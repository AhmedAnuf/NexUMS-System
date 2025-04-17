import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nexBlue: "#213555",
        nexLightBlue: "#3E5879",
        nexBeige: "#D8C4B6",
        nexLightBeige: "#F5EFE7",
        nexSky: "#C3EBFA",
        nexLightSky: "#EDF9FD",
        nexLightGrey: "#D3D3D3",
        nexLightPurple: "#F1F0FF",
        nexYellow: "#FAE27C",
        nexLightYellow: "#FEFCE8",
        nexLightRed: "#FF6961",
        nexBlack: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
