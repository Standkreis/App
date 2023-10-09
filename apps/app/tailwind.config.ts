import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      display: ['__Berkshire_Swash_721f85'],
      body: ['__Inter_2eaf22'],
    },
    extend: {
      colors: {
        gray: {
          50: '#F5F5F5',
          100: '#E6EDED',
          200: '#C6D8DA',
          300: '#A6C5CA',
          400: '#73AAB2',
          500: '#4D8C95',
          600: '#2B646C',
          700: '#1F4247',
          800: '#0D2225',
          900: '#0A1A1D',
          950: '#081416',
        },
        primary: {
          darker: '#008F76',
          dark: '#00B292',
          main: '#00CDA8',
          light: '#00EAC0',
          lighter: '#00FFD1',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
export default config
