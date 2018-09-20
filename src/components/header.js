import React from 'react';
import styled, { css } from 'react-emotion';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { rhythm, scale } from '../utils/typography';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Header() {
  return (
    <Container>
      <H1>
        <Link to="/">@deldreth</Link>
      </H1>

      <Icons>
        <a href="/melon">
          <img src={require('../assets/walter.png')} height={32} />
        </a>

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

  background-color: ${props => props.theme.color.nearblack};
  font-size: ${rhythm(1.5)};
  padding: ${rhythm(1)};
  border-bottom: 1px solid ${props => props.theme.color.border};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  @media ${props => props.theme.media.sm} {
    justify-content: center;
  }
`;

const H1 = styled('h1')`
  ${scale(1)} margin: 0;

  a {
    color: ${props => props.theme.color.purple};
  }
`;

const Icons = styled('div')`
  position: absolute;
  right: ${rhythm(1)};

  a {
    color: ${props => props.theme.color.purple};
    margin: 0 0 0 ${rhythm(1)};

    img {
      margin: 0;
    }
  }
`;
