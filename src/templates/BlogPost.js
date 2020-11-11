/* eslint-disable react/prop-types */
import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../components/SEO'
import BlogNav from '../components/blogPostComps/BlogNav'
import Footer from '../components/Footer'

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <>
      <BlogNav location={location} />
      <main id="Blog" className="container">
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        >
          <style type="text/css">{`
            :root {
              background: #d0dddb;
            }
          `}</style>
        </SEO>
        <article
          className="blog__post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <hr style={{ margin: '2rem 0px' }} />
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <hr />
          <footer>{/* <Bio /> */}</footer>
        </article>
        <section className="blog__post--nav">
          <ul className="bottom__nav">
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </section>
      </main>
      <Footer location={location} />
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
