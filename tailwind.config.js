/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
             colors: {
         primary: {
           50: '#fefefe',
           100: '#fafafa',
           200: '#f5f5f5',
           300: '#e5e5e5',
           400: '#d4d4d4',
           500: '#a3a3a3',
           600: '#737373',
           700: '#525252',
           800: '#404040',
           900: '#000000',
         },
         secondary: {
           50: '#fefefe',
           100: '#fafafa',
           200: '#f5f5f5',
           300: '#e5e5e5',
           400: '#d4d4d4',
           500: '#a3a3a3',
           600: '#737373',
           700: '#525252',
           800: '#404040',
           900: '#000000',
         },
         accent: {
           50: '#fefefe',
           100: '#fafafa',
           200: '#f5f5f5',
           300: '#e5e5e5',
           400: '#d4d4d4',
           500: '#d69c7b',
           600: '#c18a6a',
           700: '#a67559',
           800: '#8a6148',
           900: '#6f4e3a',
         },
         neutral: {
           50: '#fefefe',
           100: '#fafafa',
           200: '#f5f5f5',
           300: '#e5e5e5',
           400: '#d4d4d4',
           500: '#a3a3a3',
           600: '#737373',
           700: '#525252',
           800: '#404040',
           900: '#000000',
         }
       },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        'island-moments': ['Island Moments', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
