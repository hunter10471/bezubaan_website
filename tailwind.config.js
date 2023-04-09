/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'phone-mockup':"url('../public/assets/mockup_phone.png')"
      },
    },
    colors:{
      heading: '#127357',
      primary:'#40B37C',
      secondary:'#1ED96F',
      text: '#40B37C',
      subheading:'#010B40',
      white:'#fff',
      black:'#000',
      gray:'#535256',
      accent:'#DA6525',
    },
  },
  plugins: [],
}

