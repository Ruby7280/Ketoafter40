/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#4A7C7E',
        'brand-teal-dark': '#3A6365',
        'brand-teal-light': '#E8F2F2',
        'warm-cream': '#F9F8F7',
        'soft-sage': '#6B9F7F',
        'muted-terracotta': '#D4954E',
        'charcoal': '#333333',
        'text-secondary': '#999999',
        'border-light': '#E8E8E6',
      },
      fontFamily: {
        'serif-display': ['Playfair Display', 'Georgia', 'serif'],
        'sans-body': ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'hero-lg': ['56px', { lineHeight: '1.2' }],
        'hero-sm': ['40px', { lineHeight: '1.2' }],
        'heading-lg': ['36px', { lineHeight: '1.3' }],
        'heading-md': ['28px', { lineHeight: '1.4' }],
        'heading-sm': ['24px', { lineHeight: '1.4' }],
      },
    },
  },
  plugins: [],
}