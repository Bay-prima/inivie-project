/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          'poppins-semibold': ['Poppins-SemiBold'],
          'poppins-medium': ['Poppins-Medium'],
          'inter-regular': ['Inter-Regular'],
      },
      colors: {
        orange: {
          100: '#FF8432'
        },
        blue: {
          50: '#1C2434'
        },
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
      },
    },
  },
  plugins: [
    
  ],
}

