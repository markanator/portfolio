module.exports = {
  siteMetadata: {
    title: `Mark Ambrocio`,
    description:
      'Fullstack Web Developer and Army veteran. Come see some of my current skills and a small collection of past works.',
    siteUrl: `https://markambrocio.com`,
    author: {
      name: 'Mark Ambrocio',
      summary: 'Lives and works in Chicago, IL helping businesses grow.',
    },
    social: {
      twitter: '_mark_ambro',
    },
  },
  plugins: [
    'gatsby-plugin-simple-analytics',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/articles`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
      },
    },
  ],
}
