import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import styled from 'react-emotion';

import '../prism-nightowl.css';

import LayoutPost from '../components/layouts/post';
import { rhythm, scale } from '../utils/typography';
import Pagination from './blog-pagination';
import Related from './blog-related';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = post.excerpt;
    console.log(this.props);
    return (
      <LayoutPost>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[
            { name: 'description', content: siteDescription },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:creator', content: '@deldreth' },
            { name: 'og:title', content: siteTitle },
            { name: 'og:description', content: post.excerpt },
            {
              name: 'og:image',
              content: post.frontmatter.thumbnail
                ? `${this.props.data.site.siteMetadata.siteUrl}${
                    post.frontmatter.thumbnail.publicURL
                  }`
                : require('../assets/walter.png'),
            },
          ]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <h1>{post.frontmatter.title}</h1>
        <Date>{post.frontmatter.date}</Date>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <Related edges={this.props.data.allMarkdownRemark.edges} />

        <Pagination pageContext={this.props.pageContext} />
      </LayoutPost>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $tags: [String!]!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM D YYYY")
        thumbnail {
          publicURL
        }
      }
    }
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: $tags } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

const Date = styled('div')`
  color: #68d7c3;
  ${scale(-1 / 9)};
  margin: 0 0 ${rhythm(1 / 4)};
`;
