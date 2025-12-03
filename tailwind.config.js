/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: {
               DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
               light: 'rgb(var(--color-primary-light) / <alpha-value>)',
               dark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
            },
            secondary: {
               DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
               light: 'rgb(var(--color-secondary-light) / <alpha-value>)',
               dark: 'rgb(var(--color-secondary-dark) / <alpha-value>)',
            },
            earth: {
               DEFAULT: 'rgb(var(--color-earth) / <alpha-value>)',
               light: 'rgb(var(--color-earth-light) / <alpha-value>)',
               dark: 'rgb(var(--color-earth-dark) / <alpha-value>)',
            },
            background: {
               DEFAULT: 'rgb(var(--color-background) / <alpha-value>)',
               paper: 'rgb(var(--color-background-paper) / <alpha-value>)',
            }
         },
         fontFamily: {
            sans: ['Inter', 'sans-serif'],
            display: ['Playfair Display', 'serif'],
         },
         animation: {
            'float': 'float 6s ease-in-out infinite',
            'fade-in': 'fadeIn 1s ease-out forwards',
            'slide-up': 'slideUp 0.8s ease-out forwards',
         },
         keyframes: {
            float: {
               '0%, 100%': { transform: 'translateY(0)' },
               '50%': { transform: 'translateY(-20px)' },
            },
            fadeIn: {
               '0%': { opacity: '0' },
               '100%': { opacity: '1' },
            },
            slideUp: {
               '0%': { opacity: '0', transform: 'translateY(20px)' },
               '100%': { opacity: '1', transform: 'translateY(0)' },
            }
         }
      },
   },
   plugins: [],
}
