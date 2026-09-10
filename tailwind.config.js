/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#18202b',
        'bg': '#e7e8e4',
        'border': '#b1b2ae',
        'accent': '#93a4c1',
        'accent-bg': '#d3dff2',
      },
      fontFamily: {
        'sans': ['Fredoka', 'Segoe UI', 'Roboto', 'sans-serif'],
        'serif': ['"DM Serif Text"', 'serif'],
      },
      backgroundColor: {
        'primary': '#d6def1',
        'glass': 'rgba(255, 255, 255, 0.8)',
        'nav-glass': 'rgba(255, 255, 255, 0.72)',
      },
      borderColor: {
        'glass': 'rgba(255,255,255,0.55)',
      },
      boxShadow: {
        'custom': '0 12px 35px rgba(24, 32, 43, 0.08)',
        'hero': '0 20px 50px rgba(6, 12, 20, 0.08)',
      },
    },
  },
  plugins: [],
}
