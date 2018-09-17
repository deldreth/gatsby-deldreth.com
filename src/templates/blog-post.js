import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { ThemeProvider } from 'emotion-theming'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { css } from 'react-emotion'

import '../prism-nightowl.css'

import Layout from '../components/layouts/post'
import { rhythm, scale } from '../utils/typography'
import theme from '../utils/theme'
import styled from 'react-emotion'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt

    return (
      <ThemeProvider theme={theme}>
        <Layout location={this.props.location}>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: siteDescription }]}
            title={`${post.frontmatter.title} | ${siteTitle}`}
          />
          <h1>{post.frontmatter.title}</h1>
          <Date>{post.frontmatter.date}</Date>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <Pagination pageContext={this.props.pageContext} />
        </Layout>
      </ThemeProvider>
    )
  }
}

function Pagination(props) {
  const { previous, next } = props.pageContext

  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      {previous && (
        <StyledLink to={previous.fields.slug} rel="prev">
          <FaChevronLeft /> {previous.frontmatter.title}
        </StyledLink>
      )}

      {next && (
        <StyledLink to={next.fields.slug} rel="next">
          {next.frontmatter.title} <FaChevronRight />
        </StyledLink>
      )}
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM D YYYY")
      }
    }
  }
`

const Date = styled('div')`
  color: #68d7c3;
  ${scale(-1 / 9)};
  margin: 0 0 ${rhythm(1 / 4)};
`

const StyledLink = styled(Link)`
  color: #011627;
  display: flex;
  align-items: center;
  background-color: #5e7d96;
  border-radius: 100px;
  padding: 4px 16px;
`
