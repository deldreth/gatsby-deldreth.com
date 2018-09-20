import '../styles.css';

const layout = {
  sm: '768',
  md: '1024',
  lg: '1366',
  xl: '1920',
  xxl: '2560',
};

const media = {
  sm: `(min-width: ${layout.sm}px)`,
  md: `(min-width: ${layout.md}px)`,
  lg: `(min-width: ${layout.lg}px)`,
  xl: `(min-width: ${layout.xl}px)`,
  xxl: `(min-width: ${layout.xxl}px)`,
};

export default {
  media,
  color: {
    border: '#122D42',
    nearblack: '#011627',
    darkblue: '#0B2942',
    gray: '#5E7D96',
    blue: '#82AAFF',
    teal: '#68D7C3',
    green: '#ADDB67',
    yellow: '#ECC48D',
    orange: '#F78C6C',
    red: '#D3423E',
    purple: '#C792EA',
    lightgray: '#D6DEEB',
    white: '#F7F7F7',
  },
};
