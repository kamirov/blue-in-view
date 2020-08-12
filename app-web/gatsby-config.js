"use strict";

module.exports = {
    siteMetadata: {
        title: "Blue in View",
        description: "Watching the watchmen",
        keywords: "police",
        siteUrl: "https://blueinview.com"
    },
    plugins: [
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: "blueinview.com"
            }
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Poppins`,
                        variants: [`400`, `700`]
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: true
                }
            }
        },
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/assets/data`
            }
        },
        `gatsby-transformer-json`,
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "content",
                path: `./src/assets/content`
            }
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-responsive-iframe",
                        options: {
                            wrapperStyle: "margin-bottom: 1rem"
                        }
                    },
                    "gatsby-remark-prismjs",
                    "gatsby-remark-copy-linked-files",
                    "gatsby-remark-smartypants",
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 1140,
                            quality: 90,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        },
        "gatsby-plugin-emotion",
        "gatsby-plugin-typescript",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet"
    ]
};
