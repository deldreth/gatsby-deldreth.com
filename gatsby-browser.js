import React from 'react';

import { injectGlobal } from 'react-emotion';

import theme from './src/utils/theme';
import WrapProvider from './wrap-provider';
import { rhythm } from './src/utils/typography';

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
    line-height: 1.45;
  }

  a {
    color: ${theme.color.green};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  blockquote {
    color: ${theme.color.orange};
    border-left: ${rhythm(1 / 9)} solid ${theme.color.orange};
    padding-left: ${rhythm(1 / 2)};
    margin: 0 ${rhythm(1)} ${rhythm(1)} ${rhythm(1)};
  }
`;

export const wrapRootElement = WrapProvider;
