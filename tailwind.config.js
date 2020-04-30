const defaultTheme = require('tailwindcss/defaultTheme');
const alpha = { 100: 'FF', 90: 'E6', 80: 'CC', 70: 'B3', 60: '99', 50: '80', 40: '66', 30: '4D', 20: '33', 10: '1A' };

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F0F2FD',
          200: '#D9DFFA',
          300: '#C2CBF7',
          400: '#94A5F0',
          500: '#667EEA',
          600: '#5C71D3',
          700: '#3D4C8C',
          800: '#2E3969',
          900: '#1F2646'
        },
        secondary: {
          100: '#EBF7F7',
          200: '#CDECEA',
          300: '#AFE0DE',
          400: '#74C9C5',
          500: '#38B2AC',
          600: '#32A09B',
          700: '#226B67',
          800: '#19504D',
          900: '#113534'
        },          
        brands: {
          facebook: '#3b5998',
          twitter: '#55acee',
          instagram: '#3f729b',
          linkedin: '#0976b4',
          youtube: '#e52d27',
          vimeo: '#1ab7ea',
          pinterest: '#cc2127'
        }
      },
      fontSize: {
        'xs': ['0.75rem', '1.2'],    // 12
        'sm': ['0.875rem', '1.2'],   // 14
        'base': ['1rem', '1.2'],     // 16
        'md': ['1.125rem', '1.2'],   // 18
        'lg': ['1.25rem', '1.2'],    // 20
        'xl': ['1.5rem', '1.2'],     // 24
        '2xl': ['1.875rem', '1.2'],  // 30
        '3xl': ['2.25rem', '1.2'],   // 36
        '4xl': ['3rem', '1.2'],      // 48
        '5xl': ['4rem', '1.2'],      // 64
        '6xl': ['4.5rem', '1.2']     // 72
      },
      fontFamily: {
        'sans-primary': [
          ...defaultTheme.fontFamily.sans
        ],
        'serif-primary': [
          ...defaultTheme.fontFamily.serif
        ],
        'mono-primary': [
          ...defaultTheme.fontFamily.mono
        ],
      },
      boxShadow: theme => ({
        'outline': '0 0 0 3px ' + theme('colors.primary.500') + alpha[20],
        'focus': '0 0 0 3px ' + theme('colors.primary.500') + alpha[20]
      }),
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem'
        }
      },
      height: {
        'screen-fix': 'calc(var(--vh, 1vh) * 100);'
      },
      inset: {
        '0': 0,
        '1/2': '50%'
      },
      // Plugins
      aspectRatio: {
        'square': [1, 1],
        '16/9': [16, 9],
        '4/3': [4, 3]
      }
    },
    screens: {
      ...defaultTheme.screens,
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'group-hover'],
    translate: ['responsive', 'hover', 'group-hover'],
    scale: ['responsive', 'hover', 'group-hover']
  },
  plugins: [
    require('tailwindcss-typography')(),
    require('tailwindcss-aspect-ratio')()
  ],
  purge: []
}
