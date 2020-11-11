import React from 'react'
import BlogNav from '../components/blogPostComps/BlogNav'
import Footer from '../components/Footer'
// locals
import SEO from '../components/SEO'

// eslint-disable-next-line react/prop-types
export default function NotFoundPage({ location }) {
  return (
    <>
      <BlogNav location={location} />
      <SEO title="404: Not Found">
        <style type="text/css">{`
            :root {
              background: #d0dddb;
            }
          `}</style>
      </SEO>
      <main
        id="error__page"
        className="container"
        style={{ marginTop: '30px', padding: '4rem 0px' }}
      >
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... try again later?</p>
      </main>
      <Footer />
    </>
  )
}
