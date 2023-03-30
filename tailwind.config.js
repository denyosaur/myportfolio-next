/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#1C1C1C',
        blue: '#161B33',
        darkBlue: '#0D0C1D',
        error: '#D9534F',
        gray: '#666',
        lightBlue: '#474973',
        lightPeach: '#F1DAC4',
        peach: '#A69CAC',
        primaryBackground: '#0D0C1D',
        primaryFont: '#F1DAC4',
        red: '#DB4437',
        success: '#5CB85C',
        warning: '#F0AD4E',
        white: '#FFFFFF',
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}

