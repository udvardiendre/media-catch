import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        sourceSansPro: ['Source Sans Pro','sans-serif']
      },
      colors: {
        'primary-orange': '#F07330',
        'primary-blue': '#213144',
        'secondary-blue': "#336699",
        'tertiary-blue': "#6C8FB1",
        'primary-green': "#6EBC14",
        'primary-grey': "#EEEEEE",
        'secondary-grey': "#838383",
        'tertiary-grey': "#676767",
        'quaternary-grey': '#494745',
        'primary-red': '#DE1B00',
        'primary-bg': '#E9E9E9',
        'secondary-bg': '#FFFFFF',
      }
    },
  },
  plugins: [],
}
export default config
