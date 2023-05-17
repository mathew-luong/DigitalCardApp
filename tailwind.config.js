/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
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
                // gradientBg:
                //     "linear-gradient(to right, rgb(251, 113, 133), rgb(217, 70, 239), rgb(99, 102, 241))",
                brownBg: "#6B6868",
                lightBg: "#F7F2F2",
                blueBg: "#98D0FF",
                pinkText: "#DB30C0",
                gray: "#AEAEAE",
                grayText: "#686868",
            },
        },
    },
    plugins: [],
};
