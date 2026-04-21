import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: "#0F172A",
                    surface: "#1E293B",
                    text: "#F8FAFC",
                    muted: "#94A3B8",
                },
                accent: {
                    DEFAULT: "#55D9DE",
                    dark: "#0BAFB4",
                    light: "#76F5FA",
                },
            },
            fontFamily: {
                sans: ["var(--font-tajawal)", "sans-serif"],
                headline: ["var(--font-tajawal)", "sans-serif"],
                body: ["var(--font-manrope)", "sans-serif"],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
