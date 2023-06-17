/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                // Each column gets the same amt of space
                fluid: "repeat(auto-fit,minmax(4rem,1fr))",
            },
            ringWidth: {
                6: "6px",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                gradientBg: "linear-gradient(45deg, #0088ff, #a033ff,#ff5c87);",
            },
            colors: {
                brownBg: "#6B6868",
                lightBg: "#F7F2F2",
                grayBg: "#F0F0F0",
                blueBg: "#98D0FF",
                pinkText: "#ff5c87",
                pinkDark: "#AD2798",
                gray: "#E0E1E8",
                grayText: "#686868",
            },
            screens: {
                "3xl": "2000px",
            },
        },
    },
    plugins: [],
};
