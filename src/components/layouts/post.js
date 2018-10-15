import React, { Fragment } from 'react';

import styled from 'react-emotion';
import { rhythm, scale } from '../../utils/typography';
import Header from '../header';

export default function Post(props) {
  return (
    <Fragment>
      <Header />

      <Container>{props.children}</Container>
    </Fragment>
  );
}

const Container = styled('div')`
  margin-left: auto;
  margin-right: auto;
  max-width: 768px;
  padding: 48px 16px;
`;
