import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // animation: {
      //   'spin-slow': 'slideUp 1s ease-in-out',
      // },
      // keyframes: {
      //   wiggle: {
      //     '0%': {
      //       opacity: '0.6',
      //       transform: 'translateY(30px)'
      //     },
      //     '100%': {
      //       opacity: '0.6',
      //       transform: 'translateY(0)'
      //     },
      //   }
      // }
    },
  },
  plugins: [],
}
export default config
