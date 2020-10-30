module.exports = {
  siteMetadata: {
    title: `Mark Ambrocio`,
    siteUrl: `https://markambrocio.com`,
    description:
      'Mark Ambrocio - a Fullstack web developer, Army veteran, father and husband. This is his playground.',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
  ],
}
