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
                    bg: "#1F3C64",
                    surface: "#2A4B7C",
                    text: "#E7F7F8",
                    muted: "#94A3B8",
                },
                brand: {
                    primary: "#1F3C64",
                    secondary: "#E7F7F8",
                    accent: "#0BAFB4",
                },
                accent: {
                    DEFAULT: "#0BAFB4",
                    dark: "#1F3C64",
                    light: "#E7F7F8",
                },
            },
            fontFamily: {
                sans: ["var(--font-tajawal)", "sans-serif"],
                headline: ["var(--font-tajawal)", "sans-serif"],
                body: ["var(--font-manrope)", "sans-serif"],
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 60s linear infinite',
                'marquee': 'marquee 40s linear infinite',
                'marquee-reverse': 'marquee-reverse 40s linear infinite',
                'logo-wave': 'logo-wave 2.4s ease-in-out infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
                'marquee': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
                'marquee-reverse': {
                    from: { transform: 'translateX(-50%)' },
                    to: { transform: 'translateX(0)' },
                },
                'logo-wave': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-18px)' },
                },
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
