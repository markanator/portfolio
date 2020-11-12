import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

// eslint-disable-next-line react/prop-types
export default function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang="en" />
      <title>{title}</title>
      {/* favicons */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
      />

      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      {/* meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta
        name="description"
        content={
          site.siteMetadata.description ||
          'Fullstack Web Developer and Army veteran. Come see some of my current skills and a small collection of past works.'
        }
      />
      {/* OPEN GRAPH */}
      {/* eslint-disable-next-line react/prop-types */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:title" content={title} key="oftitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:image" content={image || '/og_site.jpg'} />
      {/* twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image || '/og_site.jpg'} />
      <meta name="twitter:creator" content="_mark_ambro" />
      {children}
    </Helmet>
  )
}
