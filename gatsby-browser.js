import React from 'react';

import { ThemeProvider } from 'emotion-theming';
import { injectGlobal } from 'react-emotion';

import theme from './src/utils/theme';

injectGlobal`
  body {
    background-color: ${theme.color.nearblack};
  }

  h1 a,
  h2 a,
  h3 a,
  h4 a,
  h5 a {
    color: ${theme.color.blue};
  }

  a {
    color: ${theme.color.green};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
