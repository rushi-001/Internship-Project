/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'notification': '#f9deb3',
        'notification-btn': '#ea9aa3',
        'notification-btn-hover': '#ffa8ab',
        'notification-timer': '#fbe8c8',
        'notification-title': '#f5c67d',
      },
    },
  },
  plugins: [],
}