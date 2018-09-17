import '../styles.css'

const layout = {
  sm: '768',
  md: '1024',
  lg: '1366',
  xl: '1920',
  xxl: '2560',
}

const media = {
  sm: `(min-width: ${layout.sm}px)`,
  md: `(min-width: ${layout.md}px)`,
  lg: `(min-width: ${layout.lg}px)`,
  xl: `(min-width: ${layout.xl}px)`,
  xxl: `(min-width: ${layout.xxl}px)`,
}

export default {
  media,
}
