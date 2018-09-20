import React from 'react';

import { ThemeProvider } from 'emotion-theming';

import theme from './src/utils/theme';

export default ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
