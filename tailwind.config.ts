import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'pink': '#F05',
      'pink-700': 'rgba(255, 0, 85, 0.07)',
      'grey': 'rgba(56, 56, 56, 1)',
      'transparent':'transparent',
      // 'myGradient': 'linear-gradient(180deg, rgba(255, 0, 85, 0.07) 0%, rgba(255, 255, 255, 0.00) 100%)',
       'myGradient': 'rgba(255, 0, 85, 0.07)',

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
