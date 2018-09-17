import React, { Fragment } from "react";
import { Link, graphql } from 'gatsby';
import { ThemeProvider } from 'emotion-theming';
import styled from 'react-emotion';
import Header from '../components/header';

import Grid from '../components/layouts/grid';
import { rhythm } from '../utils/typography';
import theme from '../utils/theme';
import Post from '../components/post';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Header/>

        <TagHeader>{tagHeader}</TagHeader>

        <Grid>
          {edges.map(({ node }) => {
            return <Post key={node.fields.slug} post={node}/>
          })}
        </Grid>
      </Fragment>
    </ThemeProvider>
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
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
          }
        }
      }
    }
  }
`;