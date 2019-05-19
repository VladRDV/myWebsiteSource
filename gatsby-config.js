module.exports = {
    siteMetadata: {
    title: `Vladimir Radovanovich`,
    siteUrl: `http://www.vradov.space`,
    description: `This is the place where Vlad hides from... Them...0_0`
    },
    plugins: [
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
        name: `Vladimir Radovanovich`,
        short_name: `vradov`,
        start_url: `/`,
        background_color: `#00070b`,
        theme_color: `#00070b`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: true // Include favicon
        }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-aphrodite`,
    `gatsby-plugin-sharp`,
    {
        resolve: `gatsby-transformer-json`,
        options: {
        typeName: "Json"
        }
    },
    {
        resolve: "gatsby-transformer-remark",
        options: {
        plugins: [
            {
            resolve: `gatsby-remark-images`,
            options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                maxWidth: '740px',
                // linkImagesToOriginal: true,
                // showCaptions: true,
                // sizeByPixelDensity: true,
                backgroundColor: "#000"
            }
            }
        ]
        }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
        name: `consts`,
        path: `./src/data_storage/data`
        }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
        name: `blogposts`,
        path: `./src/data_storage/blogposts`
        }
    }
    ]
};