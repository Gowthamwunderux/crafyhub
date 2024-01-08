import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'White': '#ffffff',
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
