/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/daisyui/dist/**/*.js",
  ],
  safelist: [
    {
      pattern: /(bg|ring)-/,
    },
  ],

  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    logs: false,
    base: false,
    themes: [
      "dark",
      {
        mytheme: {
          primary: "#0F172A", //bg-slate-900
          secondary: "#ef4444",
          accent: "#1dcdbc",
          neutral: "#2b3440",
          "base-100": "#fff",
          "base-200": "#2D3B4F",
          "bg-base-200": "#000",
          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",
          error: "#f87272",
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
};
