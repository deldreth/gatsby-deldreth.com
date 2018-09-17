import React from 'react';
import styled, { css } from 'react-emotion';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Header() {
  return (
    <Container>
      <Link to="/">@deldreth</Link>
      <Icons>
        <a href="https://github.com/deldreth" target="_blank">
          <FaGithub size={24} />
        </a>

        <a href="https://twitter.com/deldreth" target="_blank">
          <FaTwitter size={24} />
        </a>

        <a href="https://www.linkedin.com/in/deldreth" target="_blank">
          <FaLinkedin size={24} />
        </a>
      </Icons>
    </Container>
  );
}

const Container = styled('div')`
  display: flex;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: auto;
  background-color: #01121f;
  color: #c792ea;
  font-size: ${rhythm(1.5)};
  padding: ${rhythm(1)};
  border-bottom: 1px solid #122d42;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  @media ${props => props.theme.media.sm} {
    justify-content: center;
  }
`;

const Icons = styled('div')`
  position: absolute;
  right: ${rhythm(1)};

  a {
    margin: 0 0 0 ${rhythm(1)};
  }
`;
