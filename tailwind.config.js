/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'd-red': '#C61D22',
        'd-red-light': '#E8282E',
        'd-red-dark': '#9A1519',
        'd-red-muted': '#C61D2220',
        'd-black': '#0A0A0A',
        'd-dark': '#111111',
        'd-gray': '#1E1E1E',
        'd-gray-mid': '#2C2C2C',
        'd-light': '#F2F2F2',
        'd-white': '#FFFFFF',
      },
      fontFamily: {
        'display': ['"Bebas Neue"', '"Anton"', 'sans-serif'],
        'body': ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'shimmer': 'shimmer 2.5s infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}
