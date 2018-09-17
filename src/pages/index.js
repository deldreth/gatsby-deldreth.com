import React from 'react'

import kebabCase from 'lodash/kebabCase'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'emotion-theming'
import styled from 'react-emotion'

import Layout, { Grid } from '../components/layouts'
import theme from '../utils/theme'
import Post from '../components/post'

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

          <Grid>
            {posts.map(({ node }) => {
              return <Post key={node.fields.slug} post={node} />
            })}
          </Grid>
        </Layout>
      </ThemeProvider>
    )
  }
}

export default BlogIndex

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
            tags
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
