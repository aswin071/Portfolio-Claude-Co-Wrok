/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1E3A8A',
          'blue-surf': '#3B5B8A',
          orange: '#F97316',
          sunkissed: '#F28B30',
          yellow: '#FBBF24',
          green: '#10B981',
          red: '#EF4444',
          dark: '#1A1A1A',
          light: '#FAFAFA',
          gray: '#6B7280',
          muted: '#F3F4F6',
        },
      },
      fontFamily: {
        sans: ['"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        heading: ['Lucidity', 'Anton', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
}
