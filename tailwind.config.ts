import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#FF0000', // Custom red color
        },
        orange: {
          DEFAULT: '#FFA500', // Custom orange color
        },
        white: {
          DEFAULT: '#FFFFFF', // Custom white color
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});