import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-opensans)', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        primary: '#FF4500',
        secondary: '#006400',
        neutral: {
          dark: '#333333',
          light: '#F5F5F5',
        },
        accent: '#FFD700',
      },
    },
  },
  plugins: [],
}

export default config
