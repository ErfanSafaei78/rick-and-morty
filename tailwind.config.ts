import type { Config } from 'tailwindcss'
import { colorPalette } from './app/design-system/tokens'

export default {
  theme: {
    extend: {
      colors: colorPalette,
      fontFamily: {
        sans: ['Rubik', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'hero-title': ['2rem', { lineHeight: 'normal' }],
      },
      gradientColorStopPositions: {
        'header-start': '0.764%',
      },
    },
  },
} satisfies Config
