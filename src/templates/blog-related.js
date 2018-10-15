import React from 'react';

import { Link } from 'gatsby';
import styled from 'react-emotion';
import { rhythm } from '../utils/typography';

export default function Related(props) {
  return (
    <React.Fragment>
      <h2>Related posts</h2>
      <Wrapper>
        {props.edges.map(related => {
          return (
            <Tag to={related.node.fields.slug}>
              {related.node.frontmatter.title}
            </Tag>
          );
        })}
      </Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled('div')`
  display: grid;
  grid-gap: ${rhythm(1)};
  margin: 0 0 ${rhythm(1)} 0;

  @media ${props => props.theme.media.sm} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${props => props.theme.media.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Tag = styled(Link)`
  flex: 1;
  font-weight: 400;
  color: #011627;
  background-color: #ecc48d;
  border-radius: 100px;
  padding: ${rhythm(0.1)} ${rhythm(0.5)};

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
