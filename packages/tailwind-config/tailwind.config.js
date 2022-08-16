module.exports = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx}',
    // './components/**/*.{js,ts,jsx,tsx}',
    // './index.html',
    // Add your paths here where you use tailwind classes
    './../../packages/**/app.tsx',
    './../../packages/ui/src/**/*.{vue,js,ts,jsx,tsx}',
    './../../packages/calendar/src/**/*.{vue,js,ts,jsx,tsx}',
    './../../apps/web/pages/**/*.{vue,js,ts,jsx,tsx}',
    // './../../apps/ext/contents/**/*.{vue,js,ts,jsx,tsx}',
    './../../apps/outlook/src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  media: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
