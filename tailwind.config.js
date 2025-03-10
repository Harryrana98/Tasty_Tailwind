/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'rotate-move': {
          '0%': { transform: 'translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateX(50px) rotate(180deg)' },
          '100%': { transform: 'translateX(0) rotate(360deg)' },
        },
      },
      animation: {
        'rotate-move': 'rotate-move 3s linear infinite',
      },
    },
  },
  plugins: [],
}

