import React, { Fragment } from 'react';

import styled from 'react-emotion';
import { rhythm, scale } from '../../utils/typography';
import Header from '../header';

export default function Base(props) {
  return (
    <Fragment>
      <Header />

      {props.children}
    </Fragment>
  );
}

export const Grid = styled('div')`
  display: grid;
  grid-gap: 72px 2%;

  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: 48px 16px 16px 16px;

  @media ${props => props.theme.media.sm} {
    grid-template-columns: repeat(2, 48%);
  }

  @media ${props => props.theme.media.md} {
    grid-template-columns: repeat(3, 31%);
  }

  @media ${props => props.theme.media.lg} {
    grid-template-columns: repeat(4, 23%);
  }
`;
