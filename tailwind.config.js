/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0a0a0f',
          card: '#12121a',
          border: '#1a1a2e',
          green: '#00ff88',
          blue: '#0066ff',
          gray: '#8a8a9a',
        }
      }
    },
  },
  plugins: [],
}
