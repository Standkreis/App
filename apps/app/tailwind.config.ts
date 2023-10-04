import type { Config } from 'tailwindcss'
import { ThemeConfig } from 'tailwindcss/types/config'

const config: Config = {
  darkMode: 'class',
  purge: ['./src/**/*.tsx'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      display: ['__Berkshire_Swash_721f85'],
      body: ['__Vollkorn_8ff8c3'],
    },
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
export default config
