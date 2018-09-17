import React from 'react'

import kebabCase from 'lodash/kebabCase'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import Img from 'gatsby-image'

import { rhythm, scale } from '../utils/typography'

export default function Post(props) {
  return (
    <div
      key={props.post.fields.slug}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {props.post.frontmatter.thumbnail && (
        <Thumbnail
          sizes={props.post.frontmatter.thumbnail.childImageSharp.sizes}
        />
      )}

      <h3
        style={{
          marginBottom: rhythm(1 / 2),
        }}
      >
        <Link to={props.post.fields.slug}>{props.post.frontmatter.title}</Link>
      </h3>
      <Date>{props.post.frontmatter.date}</Date>

      <p
        style={{ flex: 1 }}
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
    </div>
  )
}

export const Date = styled('div')`
  color: #68d7c3;
  ${scale(-1 / 9)};
  margin: 0 0 ${rhythm(1 / 3)} 0;
`

const Tags = styled('div')`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`

const Tag = styled(Link)`
  font-size: ${rhythm(1 / 2)};
  font-family: 'Fira Sans';
  color: #011627;
  /* background-color: #ADDB67; */
  background-color: #ecc48d;
  border-radius: 100px;
  margin: 4px 4px 0px 0px;
  padding: 1px 8px;
`

const Thumbnail = styled(Img)`
  background-color: #d6deeb;
  margin: 0 0 ${rhythm(1)} 0;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  max-height: ${rhythm(10)};
`
