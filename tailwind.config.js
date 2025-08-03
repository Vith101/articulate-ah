// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Safelist added here:
  safelist: [
    'perspective-1000',
    'transform-style-preserve-3d',
    'hover:rotate-y-180',
  ],
};