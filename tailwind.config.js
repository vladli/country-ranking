import {heroui} from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        {
            pattern: /(bg|ring)-/,
        },
    ],
    darkMode: "class",
    plugins: [heroui()],
};
