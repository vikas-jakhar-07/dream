/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': "'Playfair Display', serif"
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1280px",
          '2xl': "1340px",
        },
      },
      colors: {
        'off-black': "#331B3B",
        'off-yellow': "#FDC221",
        'off-blue': "#ECF7FF",
        'off-cream': "#FFDED4",
        'light-cream': "#FFEED4",
        'light-sky': "#D4F0FF",
        'medium-cream': "#FFD4D4",
        'deep-gray': "#343434",
      },
      fontSize: {
        'custom-xl': "15px",
        'custom-2xl': "17px",
        'custom-3xl': "40px",
        'custom-4xl': "87px",
      },
      lineHeight: {
        'custom-xl': "21.79px",
        'custom-2xl': "25.50px",
        'custom-3xl': "51.2px",
        'custom-4xl': "86.83px",
      },
      dropShadow: {
        '3xl': "0px 0px 2px #FDC221",
      },
      boxShadow: {
        '3xl': "0px 0px 9px 2px #0000000D",
        '4xl': "0px 0px 0px 2px #331B3B, 2px 2px 0px 2px #FFFFFF, 4px 4px 0px 2px #FDC221",
        '5xl': "0px 0px 7px 1px #00000014",
      },
      letterSpacing: {
        'xl': "0.01em",
        '2xl': "0.02em",
      }
    },
  },
  plugins: [],
}