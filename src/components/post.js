import React from 'react';

import kebabCase from 'lodash/kebabCase';
import { Link, push } from 'gatsby';
import styled from 'react-emotion';
import Img from 'gatsby-image';

import { rhythm, scale } from '../utils/typography';

export default function Post(props) {
  return (
    <Container
      key={props.post.fields.slug}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {props.post.frontmatter.thumbnail && (
        <Link to={props.post.fields.slug}>
          <Thumbnail
            backgroundColor={props.post.frontmatter.thumbnailBg}
            sizes={props.post.frontmatter.thumbnail.childImageSharp.sizes}
          />
        </Link>
      )}

      <h3
        style={{
          marginBottom: rhythm(0.5),
        }}
      >
        <Link to={props.post.fields.slug}>{props.post.frontmatter.title}</Link>
      </h3>
      <Date onClick={() => push(props.post.fields.slug)}>
        {props.post.frontmatter.date}
      </Date>

      <Excerpt
        onClick={() => push(props.post.fields.slug)}
        dangerouslySetInnerHTML={{ __html: props.post.excerpt }}
      />

      {props.post.frontmatter.tags.length && (
        <Tags>
          {props.post.frontmatter.tags.map(tag => (
            <Tag to={`/tags/${kebabCase(tag)}`} key={tag}>
              {tag}
            </Tag>
          ))}
        </Tags>
      )}
    </Container>
  );
}

const Container = styled('div')`
  border-bottom: 1px solid #122d42;

  @media ${props => props.theme.media.sm} {
    border-bottom: none;
  }
`;

const Excerpt = styled('p')`
  &:hover {
    cursor: pointer;
  }
`;

export const Date = styled('div')`
  color: #68d7c3;
  ${scale(-1 / 9)};
  margin: 0 0 ${rhythm(1 / 4)} 0;

  &:hover {
    cursor: pointer;
  }
`;

const Tags = styled('div')`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin: 0 0 ${rhythm(2)} 0;

  @media ${props => props.theme.media.sm} {
    margin: 0;
  }
`;

const Tag = styled(Link)`
  font-size: ${rhythm(1 / 2)};
  font-weight: 400;
  color: #011627;
  background-color: #ecc48d;
  border-radius: 100px;
  margin: 4px 4px 0px 0px;
  padding: 1px 8px;
`;

const Thumbnail = styled(Img)`
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : '#d6deeb'};
  margin: 0 0 ${rhythm(1)} 0;
  border-radius: ${rhythm(1 / 4)};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  max-height: ${rhythm(7)};
`;
