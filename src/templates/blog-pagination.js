import React from 'react';

import { Link } from 'gatsby';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styled from 'react-emotion';

import { rhythm, scale } from '../utils/typography';

export default function Pagination(props) {
  const { previous, next } = props.pageContext;

  return (
    <Wrapper>
      {previous && (
        <StyledLink style={{ justifyContent: 'flex-start' }}>
          <FaChevronLeft />
          <Link to={previous.fields.slug} rel="prev">
            {previous.frontmatter.title}
          </Link>
        </StyledLink>
      )}

      {next && (
        <StyledLink style={{ justifyContent: 'flex-end' }}>
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title}
          </Link>
          <FaChevronRight />
        </StyledLink>
      )}
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  display: grid;
  grid-gap: ${rhythm(1)};
  grid-template-columns: 1fr 1fr;
`;

const StyledLink = styled('div')`
  min-width: 0;
  padding: ${rhythm(0.1)} ${rhythm(0.5)};

  display: flex;
  align-items: center;

  background-color: #5e7d96;
  border-radius: 100px;
  color: #011627;

  a {
    color: #011627;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  svg {
    min-width: ${rhythm(0.5)};
    min-height: ${rhythm(0.5)};
  }

  a:last-child,
  svg:first-child {
    margin: 0 ${rhythm(0.5)} 0 0;
  }

  a:first-child,
  svg:last-child {
    margin: 0 0 0 ${rhythm(0.5)};
  }
`;
