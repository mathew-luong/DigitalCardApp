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
                fluid: "repeat(auto-fit,minmax(3rem,1fr))",
            },
            ringWidth: {
                6: "6px",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                // gradientBg: "linear-gradient(250deg, #7b2ff7, #f107a3);",
                gradientBg: "linear-gradient(250deg, #ec4899, #6366f1);",
            },
            colors: {
                brownBg: "#6B6868",
                lightBg: "#F7F2F2",
                grayBg: "#F0F0F0",
                blueBg: "#98D0FF",
                pinkText: "#DB30C0",
                pinkDark: "#AD2798",
                gray: "#AEAEAE",
                grayText: "#686868",
            },
            screens: {
                "3xl": "2000px",
            },
        },
    },
    plugins: [],
};
