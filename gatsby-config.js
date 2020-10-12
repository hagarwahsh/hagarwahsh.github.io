/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config();

module.exports = {
  pathPrefix: "/hagarwahsh.github.io",
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`,{
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `DoZen`,
      short_name: `DoZen`,
      start_url: `/`,
      background_color: `#6b37bf`,
      theme_color: `#6b37bf`,
      // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
      // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
      display: `standalone`,
      icon: `src/images/favicon.png`, // This path is relative to the root of the site.
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `8flzqukpq1ef`,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  }
  ,`gatsby-plugin-offline`,
  `@contentful/gatsby-transformer-contentful-richtext`]
}
