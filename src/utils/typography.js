import Typography from 'typography';

const typography = new Typography({
  bodyColor: '#F7F7F7',
  headerColor: '#82AAFF',
  // headerFontFamily: ['FiraSans', 'sans-serif'],
  bodyFontFamily: ['Fira Sans', 'sans-serif'],
  headerFontFamily: ['Source Serif Pro', 'sans-serif'],
  // bodyFontFamily: ['Source Serif Pro', 'sans-serif'],
  googleFonts: [
    {
      name: 'Source Serif Pro',
      styles: [
        '400',
        '400i',
        '500',
        '600'
      ],
    },
    {
      name: 'Fira Sans',
      styles: [
        '100',
        '300',
        '300i',
        '400',
        '400i',
        '500',
        '600',
        '700'
      ],
    },
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1, h3': {
      margin: `0 0 ${rhythm(3/4)} 0`,
      fontWeight: 500,
    },
    h2: {
      margin: `0 0 ${rhythm(2/3)} 0`,
    }
  })
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
