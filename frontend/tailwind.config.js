/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: '#4a4a4a',  
        accentColor: '#87ceeb',  
        secondaryColor: '#708090',
        highlightColor: '#b22222',      
        textColor: '#2c2c2c',
      },
      boxShadow: {
        'custom-light': '0px 4px 12px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

