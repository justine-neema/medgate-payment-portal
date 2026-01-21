import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/ui/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'medgate-light-orange': 'var(--medgate-light-orange)',
        'medgate-orange': 'var(--medgate-orange)',
        'medgate-grey': 'var(--medgate-grey)',
        'medgate-grey-text': 'var(--medgate-grey-text)',
        'medgate-main-grey': 'var(--medgate-main-grey)',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [animate, typography],
};

export default config;
