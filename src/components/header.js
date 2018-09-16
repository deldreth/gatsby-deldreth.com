import React from 'react';
import styled, { css } from 'react-emotion';

import { rhythm } from '../utils/typography';

export default function Header () {
  return (
    <Container>
      @deldreth
    </Container>
  );
}

const Container = styled('div')`
  display: flex;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;
  background-color: #01121F;
  color: #82AAFF;
  font-size: ${rhythm(1.5)};
  padding: ${rhythm(1)};
  border-bottom: 1px solid #122D42;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;
