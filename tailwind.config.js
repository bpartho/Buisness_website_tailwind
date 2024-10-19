/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
 
    theme: {
      extend: {
        animation: {
          'infinite-scroll': 'infinite-scroll 25s linear infinite',
          'move': ' 3s linear infinite',
        },
        keyframes: {
          'move': {
          '0%': {
            transform: translateX(0)
          },
          '25%': {
            transform: translateX('400px')
          },
          '50%': {
            transform: translateX(0)
          },
          '75%': {
            transform: translateX('-400px')
          },
          '100%': {
            transform: translateX(0)
          }

          },
          'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
          }
       
        } 
          

      },
    },
  
  plugins: [],
}

