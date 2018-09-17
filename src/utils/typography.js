import Typography from 'typography';

const typography = new Typography({
  bodyColor: '#D6DEEB',
  headerColor: '#82AAFF',
  headerFontFamily: ['Source Serif Pro', 'serif'],
  bodyFontFamily: ['Source Serif Pro', 'serif'],
  bodyWeight: 300,
  headerWeight: 500,
  googleFonts: [
    {
      name: 'Source Serif Pro',
      styles: ['500'],
    },
    {
      name: 'Fira Sans',
      styles: ['400', '400i'],
    },
    {
      name: 'Fira Mono',
      styles: ['400'],
    },
  ],
});

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
