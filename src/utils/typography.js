import Typography from 'typography';

const typography = new Typography({
  bodyColor: '#D6DEEB',
  headerColor: '#82AAFF',
  headerFontFamily: ['Source Serif Pro', 'serif'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  bodyWeight: 300,
  headerWeight: 500,
  boldWeight: 600,
  googleFonts: [
    {
      name: 'Source Serif Pro',
      styles: ['500'],
    },
    {
      name: 'Source Sans Pro',
      styles: ['300', '400', '400i', '600'],
    },
    {
      name: 'Fira Mono',
      styles: ['400'],
    },
  ],
  overrideStyles: ({ rhythm }, options, styles) => ({
    'pre[class*="language-"]': {
      marginBottom: rhythm(1),
    },
    ':not(pre) > code[class*="language-"], pre[class*="language-"]': {
      padding: rhythm(0.5),
    },
  }),
});

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
