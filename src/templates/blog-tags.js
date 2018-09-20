import React, { Fragment } from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'react-emotion';
import Header from '../components/header';

import Grid from '../components/layouts/grid';
import { rhythm } from '../utils/typography';
import Post from '../components/post';

const Tags = ({ pageContext, data }) => {
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${pageContext.tag}"`;

  return (
    <Fragment>
      <Header />

      <TagHeader>{tagHeader}</TagHeader>

      <Grid>
        {edges.map(({ node }) => {
          return <Post key={node.fields.slug} post={node} />;
        })}
      </Grid>
    </Fragment>
  );
};

const TagHeader = styled('h1')`
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  margin-top: ${rhythm(2)};
`;

export default Tags;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] }, published: { ne: false } }
      }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D YYYY")
            title
            tags
            published
          }
        }
      }
    }
  }
`;
