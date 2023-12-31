import { url } from 'inspector'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'White': {
        900: '#ffffff',
        800: '#FAFCFF'
      },
      'grey': 'rgba(56, 56, 56, 1)',
      'transparent':'transparent',
  
       'myGradient': 'rgba(255, 0, 85, 0.07)',
      'Pink': {
        900: '#F05',
        700: 'rgba(255, 0, 85, 0.07)',
        200: '#FF005540'
      },
      'blue': {
        100: '#2266E112'
      },
      'black': {
        100: '#01020A',
        700: '#040404' ,
        900: 'rgba(34, 102, 225, 0.07)'
      },
      'gray' : {
        100: '#d9d9d9'
      },
      
      "bgGradient1":"rgba(255, 0, 85, 0.07) ",
      "bgGradient2":" rgba(255, 255, 255, 0.00)"
      
      

    },
 
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        
      },
    },
  },
  plugins: [],
}
export default config
