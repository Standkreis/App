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
      body: ['__Vollkorn_8ff8c3'],
    },

    extend: {},
  },
  variants: {},
  plugins: [],
}
export default config
