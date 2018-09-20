import React from 'react';

import { injectGlobal } from 'react-emotion';

import theme from './src/utils/theme';
import WrapProvider from './wrap-provider';

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

export const wrapRootElement = WrapProvider;
