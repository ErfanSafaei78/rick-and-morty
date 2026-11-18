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
      width: {
        'hero-mobile': '180px',
        'hero-desktop': '240px',
        'hero-glow': '520px',
      },
      maxWidth: {
        content: '1608px',
      },
      height: {
        'detail-card': '100px',
        'hero-glow': '472px',
      },
      inset: {
        'hero-glow-mobile': '-40px',
        'hero-glow-desktop': '294px',
        'detail-glow-mobile': '181px',
        'detail-glow-desktop': '113px',
      },
      gradientColorStopPositions: {
        'header-start': '0.764%',
      },
    },
  },
} satisfies Config
