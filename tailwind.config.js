// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        borderDraw: {
          '0%': {
            'clip-path': 'inset(0 100% 100% 0)',
          },
          '25%': {
            'clip-path': 'inset(0 0 100% 0)',
          },
          '50%': {
            'clip-path': 'inset(0 0 0 0)',
          },
          '100%': {
            'clip-path': 'inset(0 0 0 0)',
          },
        },
      },
      animation: {
        borderDraw: 'borderDraw 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
