import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'emotion-theming';
import styled from 'react-emotion';

import Layout from '../components/layouts';
import { rhythm, scale } from '../utils/typography';
import theme from '../utils/theme';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <ThemeProvider theme={theme}>
        <Layout location={this.props.location}>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: siteDescription }]}
            title={siteTitle}
          />

          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 2),
                  }}
                >
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <Date>{node.frontmatter.date}</Date>

                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}

          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 2),
                  }}
                >
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <Date>{node.frontmatter.date}</Date>

                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}

          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 2),
                  }}
                >
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <Date>{node.frontmatter.date}</Date>

                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}

          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 2),
                  }}
                >
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <Date>{node.frontmatter.date}</Date>

                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
        </Layout>
      </ThemeProvider>
    )
  }
}

export default BlogIndex

const Date = styled('div')`
  color: #68D7C3;
  ${scale(-1/9)};
  margin: 0 0 ${rhythm(1/3)} 0;
`;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D YYYY")
            title
          }
        }
      }
    }
  }
`
